<template>
    <nav class="d-flex justify-content-between mt-3">
        <div>
            <img src="../../assets/images/logo.svg" width="180px" alt="Logo">
        </div>
        <navigation-bar></navigation-bar>
        <div>
            <login-menu></login-menu>
            <signup-menu></signup-menu>
        </div>
    </nav>
</template>

<script setup>
import LoginMenu from './LoginMenu.vue';
import SignupMenu from './SignupMenu.vue';
import NavigationBar from './NavigationBar.vue';
</script>


<style>
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 10px 70px;
  background-color: white;
  background: rgba(0, 0, 0, 0);
}

.btn-orange {
  background-color: #e77e23;
  color: white;
  border-radius: 20px;
}

.btn-orange:hover {
    background-color: #C16515;
    transition: 0.2s;
    color: white;
}
</style>