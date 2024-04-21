<template>
    <div class="pageContainer">

        <div class="nameContainer">
            <img class="logo" src="/streamed_logo.png" alt="">
            <p class="boldText">Streamed</p>
        </div>

        <div>
            <p class="boldText checkEmailText">Check your email for a code</p>
            <div class="infoText">We've sent a 6-character code to {{ login.email }} <br /> The code expires
                shortly, so
                please enter it soon.</div>
        </div>

        <form @submit.prevent="submitForm()">
            <div class="codeInputContainer">
                <input required id="num1" type="number" min="0" max="9" v-model="codeNumbers.num1" class="codeInput"
                    @update:model-value="checkCodeValues('1')">
                <input required id="num2" type="number" min="0" max="9" v-model="codeNumbers.num2" class="codeInput"
                    @update:model-value="checkCodeValues('2')">
                <input required id="num3" type="number" min="0" max="9" v-model="codeNumbers.num3" class="codeInput"
                    @update:model-value="checkCodeValues('3')">
                <input required id="num4" type="number" min="0" max="9" v-model="codeNumbers.num4" class="codeInput"
                    @update:model-value="checkCodeValues('4')">
                <input required id="num5" type="number" min="0" max="9" v-model="codeNumbers.num5" class="codeInput"
                    @update:model-value="checkCodeValues('5')">
            </div>

            <div class="submitBtnContainer">
                <button class="submitBtn" type="submit" :disabled="disableContinueBtn">Continue</button>
            </div>
        </form>

        <p class="codeInfo">Didn't get the code?
            <a href="" class="linkStyling">Send again
            </a>
        </p>
        <p class="codeInfo">Can't find your code? Check your spam folder!</p>

        <div class="termsContainer">
            <p class="termsService">
                By proceeding, you agree to the <a href="" class="linkStyling">Terms of Service and Privacy Policy</a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useLoginStore } from '../stores/login';
import { useRouter } from 'vue-router'

const login = useLoginStore();
const router = useRouter();

let disableContinueBtn = ref(true);

let codeNumbers = reactive({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
})

let formData = reactive({
    code: "",
});

const checkCodeValues = (data) => {
    if (codeNumbers.num1 !== '' && codeNumbers.num2 !== '' && codeNumbers.num3 !== '' && codeNumbers.num4 !== '' && codeNumbers.num5 !== '') {
        disableContinueBtn.value = false;
    } else {
        disableContinueBtn.value = true;

        // checking for empty inputs and moving to them
        if (codeNumbers[`num${data}`] !== "") {
            for (let i = 1; i <= 5; i++) {
                if (codeNumbers[`num${i}`] === '') {
                    document.getElementById(`num${i}`).focus();
                    break;
                }
            }
        }

    }
}

const submitForm = () => {
    // concatenating all code numbers into one string value
    formData.code = `${codeNumbers.num1}${codeNumbers.num2}${codeNumbers.num3}${codeNumbers.num4}${codeNumbers.num5}`
    login.accountLogin(formData);
    router.push({
        path: '/dashboard'
    });
}

onMounted(() => {
    document.getElementById('num1').focus();
})

</script>



<style scoped>
.pageContainer {
    margin: 2rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.nameContainer {
    display: flex;
    flex-direction: row;
    gap: 4px;
}

.boldText {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
}

.logo {
    width: 36px;
    margin-top: auto;
    height: 58px;
    margin-bottom: auto;
}

.infoText {
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.checkEmailText {
    margin-bottom: 7px;
    margin-top: 72px;
}

.codeInput {
    border: 1px solid #D4E1E4;
    border-radius: 4px;
    outline-color: #3CC553;
    width: 72px;
    height: 72px;
    font-family: 'Poppins', sans-serif;
    font-size: 45px;
    text-align: center;
}

.codeInputContainer {
    display: flex;
    gap: 9px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
}

.submitBtn:disabled {
    opacity: 50%;
    cursor: default;
}

.submitBtnContainer {
    width: 432px;
    margin-top: 25px;
    margin-bottom: 30px;
}

.submitBtn {
    width: 100%;
    outline: none;
    height: 56px;
    border-radius: 4px;
    border: 1px solid #3CC553;
    background: #3CC553;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-weight: 500;
    font-size: 17px;
    cursor: pointer;
}

.codeInfo {
    width: 406px;
    font-family: 'Poppins', sans-serif;
    color: #4F4F4F;
    margin-top: 0;
    padding: 12px;
    border-radius: 4px;
    text-align: center;
}

.linkStyling {
    text-decoration: none;
    color: #3CC553;
    cursor: pointer;
    font-weight: 500;
}

.termsService {
    font-family: 'Poppins', sans-serif;
    width: 432px;
    text-align: center;
    height: fit-content;
    margin-bottom: 0;
}

.termsContainer {
    height: 10rem;
    display: flex;
    align-items: end;
}

/* removing number input arrows (start) */

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

/* (end) */

@media screen and (max-width:500px) {
    .pageContainer {
        margin: 10px;
    }

    .logo {
        width: 2rem;
        height: 3rem;
    }

    .boldText {
        font-size: 27px;
        text-align: center;
    }

    form {
        width: 100%;
    }

    .submitBtnContainer {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    .submitBtn {
        padding: 0 38px;
    }

    .codeInfo,
    .termsService {
        width: fit-content;
        text-align: center;
    }

    .codeInput {
        width: 14vw;
        height: 14vw;
        font-size: 10vw;
    }
}
</style>