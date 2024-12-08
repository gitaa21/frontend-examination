<template>
    <div>
        <p><b>Size</b></p>
        <div class="sizes-container">
            <div v-for="size in sizes" :key="size.id" class="size-option">
                <input type="radio" :id="size.id" :value="size" :checked="selectedSize?.id === size.id"
                    :disabled="!selectedPizza" @click="selectionSize(size)" class="radio-button" />
                <label :for="size.id" :class="{ 'disabled-label': !selectedSize }">
                    {{ size.name }} <span v-if="size.extra_price > 0" style="color: grey;">(+{{
                        size.extra_price }}$)</span></label>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const sizes = store.state.pizza.sizes;
const selectedPizza = computed(() => store.state.pizza.selectedPizza);
const selectedSize = computed(() => store.state.pizza.selectedSize)

console.log(store.state.pizza.sizes)

const selectionSize = (size) => {
    store.dispatch("pizza/selectSize", size);
    console.log("data size", size)
}

</script>

<style scoped>
.sizes-container {
    display: flex;
    gap: 15px;
}

.size-option {
    display: flex;
    align-items: center;
}

.size-option label {
    margin-left: 5px;
}

.radio-button {
    width: 20px;
    height: 20px;
}

input[type="radio"]:checked {
    accent-color: #F57C00;
}

.disabled-label {
    color: #d3d3d3;

}
</style>