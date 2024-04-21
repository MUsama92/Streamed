import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {

    state: () => ({
        email: "",
    }),

    actions: {
        sendCode(payload) {
            console.log(payload);
        },
        accountLogin(payload) {
            console.log(payload);
        }
    }

});