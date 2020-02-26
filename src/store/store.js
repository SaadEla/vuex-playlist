import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },

    /*
    *Just Functions
     */
    getters: {
        saleProducts: (state) => {
            /*On accede au store nichan b state.products 
            on est deja dans le context du store blach mn this.$store
            */
            var saleProducts = state.products.map( product => {
                return {
                    name:  '**' + product.name + '**',
                    price: product.price / 2,
                };
            });
            return saleProducts;
        }
    },
    /*
    *Mutations are functions to change the store
    *******On doit pas mettre du code asynchrone dans des mutations(definiha f action o t commit l mutation)
     */
    mutations: {
        //payload is the body or param that we took from a function

        reducePrice: (state, payload) => {
            state.products.forEach( product => {
                product.price -= payload
            });
        }
    },
    /*
    *A mutation should not be directly commited in the component, we should 
    *dispatch to an action, and inside that action we commit to the mutation
     */
    actions: {
        reducePrice: (context, payload) => {
            //payload is the body or param that we took from a function
            setTimeout(function(){ // reach out for data
                context.commit('reducePrice', payload);
            }, 2000);
        }
    }
});
