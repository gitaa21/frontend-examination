// import axios from "axios";
import pizzaData from '@/data/pizza-list.json';
import sizeData from '@/data/size-list.json';
import toppingData from '@/data/topping-list.json';

export default {
    namespaced: true,
    state() {
        return {
            pizzas: pizzaData.data || [],
            sizes: sizeData.data || [],
            toppings: toppingData.data || [],
            selectedPizza: null,
            selectedSize: null,
            selectedTopping: [],
        };
    },
    getters: {
        totalPrice(state) {
            let pizzaPrice = 0;
            if (state.selectedPizza) {
                pizzaPrice = state.selectedPizza.discount.is_active
                    ? state.selectedPizza.discount.final_price
                    : state.selectedPizza.price;
            }
            let sizePrice = state.selectedSize ? state.selectedSize.extra_price : 0;
            let toppingsPrice = state.selectedTopping.filter(topping => topping && topping.price).reduce((sum, topping) => sum + topping.price, 0);

            return pizzaPrice + sizePrice + toppingsPrice;
        }
    },

    mutations: {
        setSelectedPizza(state, payload) {
            state.selectedPizza = payload;
        },
        setSelectedSize(state, payload) {
            state.selectedSize = payload;
        },
        setSelectedTopping(state, topping) {
            if (Array.isArray(topping)) {
                state.selectedTopping = topping;
            } else {
                const toppingIndex = state.selectedTopping.findIndex(item => item.id === topping.id);
                if (toppingIndex === -1) {
                    state.selectedTopping.push(topping);
                } else {
                    state.selectedTopping.splice(toppingIndex, 1);
                }
            }
            console.log("Updated selectedTopping:", state.selectedTopping);
        },

        setResetOrder(state) {
            state.selectedPizza = null;
            state.selectedSize = null;
            state.selectedTopping = [];
        }
    },
    actions: {
        selectPizza({ commit }, pizza) {
            commit('setSelectedPizza', pizza);
        },
        selectSize({ commit }, size) {
            commit('setSelectedSize', size);
        },
        selectTopping({ commit }, topping) {
            commit('setSelectedTopping', topping);
        },

        resetOrder({commit}, order) {
            commit('setResetOrder', order)
        }
    }
};    