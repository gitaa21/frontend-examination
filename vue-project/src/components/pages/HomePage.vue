<template>
    <div>
        <div class="hero-card">
            <img src="../../assets/images/hero.png" alt="background" class="hero-img" />
            <div class="hero-card-body">
                <h1><b>Pizza Order</b></h1>
            </div>
        </div>
        <div class="row ms-5 me-5" style="margin-top: 70px;">
            <div class="col-8">
                <h2 class="text-orange mb-4">Choose your pizza</h2>
                <pizza-list></pizza-list>
                <div>
                    <h2 class="text-orange mb-4 mt-5">Custom Pizza</h2>
                    <pizza-size></pizza-size>
                    <pizza-topping></pizza-topping>
                </div>
            </div>
            
            <div class="col-4 float-end">
                <pizza-payment></pizza-payment>
            </div>
        </div>
    </div>
</template>

<script setup>
import PizzaList from "../pizza/pizzaList.vue";
import PizzaSize from "../pizza/pizzaSize.vue";
import pizzaTopping from "../pizza/pizzaTopping.vue";
import pizzaPayment from "../pizza/pizzaPayment.vue";
</script>

<style scoped>
.hero-card {
  position: relative;
  z-index: 1;
}

.hero-card img {
  width: 100%;
  object-fit: cover;
}

.hero-card-body {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.hero-card-body h1 {
  font-size: 60px;
  margin-bottom: 10px;
  color: #e77e23;
}
</style>