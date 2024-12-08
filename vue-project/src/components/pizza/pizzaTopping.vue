<template>
    <p class="mt-3"><b>Toppings</b></p>
    <div class="topping-list row" :key="selectedPizza">
        <div v-for="topping in toppings" :key="topping.id" class="col-sm-6 col-md-3 col-lg-2">
            <input class="topping-checkbox" type="checkbox" :id="'topping' + topping.id"
                :checked="selectedTopping.includes(topping.id)" @click="selectionTopping(topping)"
                :disabled="!toppingAvailable(topping.id)" />
            <label :for="'topping' + topping.id" :class="{ 'disabled-hover': !toppingAvailable(topping.id) }">
                <p style="margin: 0;">
                    <b>{{ topping.name }}</b>
                </p>
            </label>
        </div>
    </div>

</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const toppings = store.state.pizza.toppings;
const selectedPizza = computed(() => store.state.pizza.selectedPizza);
const selectedTopping = computed(() => store.state.pizza.selectedTopping);

const toppingAvailable = (id) => {
    return selectedPizza.value && selectedPizza.value.toppings.includes(id);
};

const selectionTopping = (topping) => {
    store.dispatch("pizza/selectTopping", topping);
    console.log("data topping:", topping);
};

</script>

<style scoped>
.topping-checkbox {
    display: none;
}

input[type=checkbox][disabled]+label {
    background-color: rgb(233, 233, 233);
    color: #888888;
}

input[type=checkbox]:checked+label {
    background-color: #F57C00;
    border: 1px solid #F57C00;
    color: white;
}

label {
    border: 1px solid black;
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 5px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

label:hover {
    border: 1px solid #F57C00;
    color: #F57C00;
    transition: 0.3s;
}

.disabled-hover {
    background-color: #d3d3d3;
    color: #888888;
    pointer-events: none;
}

.topping-checkbox:disabled+p {
    background-color: #d3d3d3;
    color: #888888;
}
</style>
