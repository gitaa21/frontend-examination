<template>
    <div class="pizza-list row">
        <div v-for="(pizza, index) in pizzas" :key="pizza.id" class="col-sm-12 col-md-6 col-lg-4 mb-4">
            <label :for="pizza.name" class="card"
                :class="{ 'active-card': selectedPizza?.id === pizza.id, 'disabled-hover': selectedPizza?.id === pizza.id }">
                <div v-if="pizza.discount.is_active" class="offer">
                    <img src="../../assets/images/ribbon.svg" alt="Discount Ribbon">
                </div>
                <div class="d-flex position-relative">
                    <input type="radio" :id="pizza.name" name="pizza" :selected="selectedPizza?.id === pizza.id"
                        :value="pizza.id" class="pizza-radio" @click="selectionPizza(pizza)" />

                    <div class="pizza-label">
                        <img :src="imagePizza[index]" alt="Pizza Image" class="pizza-img" />
                    </div>
                    <div class="ms-1 mt-3">
                        <p class="mb-0"><b>{{ pizza.name }}</b></p>
                        <p v-if="pizza.discount.is_active">
                            <div class="d-flex">
                            <span>${{ pizza.discount.final_price.toFixed(2) }}</span>
                            <span class="text-muted" style="text-decoration: line-through; margin-left: 7px;">
                                ${{ pizza.price.toFixed(2) }}
                            </span>
                        </div>
                        </p>
                        <p v-else>${{ pizza.price.toFixed(2) }}</p>
                    </div>
                </div>
            </label>
        </div>
    </div>
</template>


<script setup>
import { computed} from "vue";
import { useStore } from "vuex";
import CheesePizza from "../../assets/images/Cheese Pizza.png";
import VegiePizza from "../../assets/images/Veggie Pizza.png";
import ClassicalPizza from "../../assets/images/Classical Pizza.png";

const store = useStore();
const imagePizza = [CheesePizza, VegiePizza, ClassicalPizza];
const sizes = computed(() => store.state.pizza.sizes)
const pizzas = computed(() => store.state.pizza.pizzas)
const selectedPizza = computed(() => store.state.pizza.selectedPizza)

console.log({ selectedPizza: selectedPizza.value })

const selectionPizza = (pizza) => {
    const defaultSize = sizes.value?.find(size => size.name.toLowerCase() === 'small');

    store.dispatch('pizza/selectPizza', pizza);
    store.dispatch("pizza/selectSize", defaultSize);
    store.dispatch("pizza/selectTopping", []);
    console.log("Pizza yang dipilih:", pizza);
};
</script>

<style scoped>
.offer {
    position: absolute;
    top: 0;
    right: 0;
}

.offer img {
    width: 80px;
}

.card {
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: #F8F8F6;
    padding: 20px 10px;
}

.card:hover {
    background-color: #f5620073;
}

.pizza-radio {
    display: none;
}

.pizza-label {
    display: block;
    overflow: hidden;
}

.pizza-img {
    width: 90px;
    transition: transform 0.5s ease;
}

.card:hover .pizza-img {
    transform: rotate(30deg);
}

.active-card {
    background-color: #F57C00;
    color: white;
    box-shadow: 0 4px 10px rgba(255, 165, 0, 0.5);
}

.disabled-hover {
    pointer-events: none;
}
</style>