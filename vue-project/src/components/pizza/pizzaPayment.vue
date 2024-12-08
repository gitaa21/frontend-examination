<template>
    <div class="payment-summary">
        <h4 class="text-orange">Payment Summary</h4>
        <div class="d-flex justify-content-between">
            <div>
                <p class="mb-1" style="color: #888888;">{{ selectedPizza ? selectedPizza.name : '' }}</p>
                <p class="mb-1" style="color: #888888;">{{ selectedSize ? 'Size - ' + selectedSize.name : '' }}</p>
                <div v-for="topping in selectedTopping" :key="topping.id">
                    <p class="mb-1" style="color: #888888">{{ topping.name }}</p>
                </div>
            </div>
            <div class="text-end">
                <p class="mb-1">{{ selectedPizza ? (selectedPizza.discount?.is_active ? selectedPizza.discount.final_price + '$' : (selectedPizza?.price || 0) + '$') : ''}}</p>
                <p class="mb-1">{{ selectedSize ? selectedSize.extra_price + '$' : '' }}</p>
                <div v-for="topping in selectedTopping" :key="topping.id">
                    <p class="mb-1">{{ topping?.price ? topping.price + '$' : '' }}</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
            <p style="font-size: 20px;">Total Price</p>
            <p class="text-orange" style="font-size: 20px;">$ {{ totalPrice }}</p>
        </div>
        <button class="btn btn-order"  data-bs-toggle="modal" data-bs-target="#orderSuccess">Order Now</button>
    </div>

<!-- Modal -->
<div class="modal fade" id="orderSuccess" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 300px;">
    <div class="modal-content">
      <div class="modal-body text-center">
        <img src="../../assets/images/success.svg" alt="" width="40%">
        <h5>Order Success</h5>
        <p>Thank you, we have received your order successfully</p>
        <button type="button" class="btn btn-order" data-bs-dismiss="modal" @click="resetData">Close</button>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const selectedPizza = computed(() => store.state.pizza.selectedPizza);
console.log("Aaaaaaaaaaaaaa", selectedPizza)
const selectedSize = computed(() => store.state.pizza.selectedSize);
const selectedTopping = computed(() => store.state.pizza.selectedTopping);

const totalPrice = computed(() => store.getters['pizza/totalPrice'])
console.log("data diterima", selectedTopping)

const resetData = () => {
    store.dispatch("pizza/resetOrder");
}

</script>


<style scoped>
.payment-summary {
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-order {
    background-color: #E77E23; 
    color: white; 
    border-radius: 20px; 
    width: 100%;
}

.btn-order:hover {
    background-color: #C16515;
    transition: 0.2s;
}
</style>