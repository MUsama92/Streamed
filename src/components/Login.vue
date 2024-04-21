<template>
    <div class="pageContainer">

        <div class="nameContainer">
            <img class="logo" src="/streamed_logo.png" alt="">
            <p class="boldText">Streamed</p>
        </div>

        <div>
            <p class="boldText welcomeText">Hi, Welcome Back to Streamed!</p>
            <div class="infoText">We suggest using the email address that you use at work.</div>
        </div>

        <div class="socialButtons">
            <button class="continueBtn googleBtn">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo">
                Continue with Google
            </button>

            <button class="continueBtn appleBtn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo">
                Continue with Apple
            </button>
        </div>

        <div class="orContainer">
            <div class="horizontalLine"></div>
            <div class="orText">OR</div>
            <div class="horizontalLine"></div>
        </div>

        <form @submit.prevent="submitForm()">
            <div class="inputFieldContainer">
                <label>Your Email</label>
                <input required class="email" v-model="formData.email" type="email" name="" id=""
                    placeholder="e.g. john_brown@company.com">
            </div>

            <div class="submitBtnContainer">
                <button class="submitBtn" type="submit" :disabled="formData.email == ''">Continue</button>
            </div>
        </form>

        <p class="codeInfo">We'll email you a magic code for a password-free sign-in. Or you can
            <a href="" class="linkStyling">sign in
                manually
                instead
            </a>.
        </p>

        <div class="termsContainer">
            <p class="termsService">
                By proceeding, you agree to the <a href="" class="linkStyling">Terms of Service and Privacy Policy</a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useLoginStore } from '../stores/login';
import { useRouter } from 'vue-router'

const login = useLoginStore();
const router = useRouter();

let formData = reactive({
    email: "",
});

const submitForm = () => {
    login.email = formData.email;
    login.sendCode(formData);
    router.push({
        path: 'login/verify'
    });
}
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

.welcomeText {
    margin-bottom: 7px;
    margin-top: 72px;
}

/* social buttons (start) */

.continueBtn {
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 432px;
    height: 56px;
    background: #fff;
    border: 1px solid #D4E1E4;
    margin-bottom: 17px;
    font-family: 'Poppins', sans-serif;
}

.continueBtn:hover {
    background-color: rgba(60, 197, 83, 0.8);
    color: #fff;
    border: 1px solid #0007;
    font-weight: 500;
    letter-spacing: 1px;
}

.continueBtn img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

/* (end) */

.socialButtons {
    margin-top: 3.3rem;
}

/* or word (start) */
.orContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
}

.horizontalLine {
    height: 1px;
    background-color: #D4E1E4;
    width: 194px;
}

.orText {
    margin: 0 10px;
    font-size: 16px;
    color: #4F4F4F;
    font-family: 'Lato', sans-serif;
}

/* (end) */

label {
    font-family: 'Poppins', sans-serif;
    color: #4F4F4F;
}

.inputFieldContainer {
    display: flex;
    flex-direction: column;
    width: 432px;
    margin-top: 18px;
}

.email {
    outline-color: #3CC553;
    width: 406px;
    height: 51px;
    background: #fff;
    border: 1px solid #D4E1E4;
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    padding: 0 12px;
    font-size: 17px;
    color: #4F4F4F;
}

.email::placeholder {
    color: #D4E1E4;
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
    background: #F4F8F9;
    padding: 12px;
    border-radius: 4px;
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

    .continueBtn,
    .email,
    .socialButtons,
    form {
        width: 100%;
    }

    .horizontalLine {
        width: 49px;
    }

    .inputFieldContainer {
        width: 94%;
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

}
</style>