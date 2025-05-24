<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { ref } from "vue";

defineOptions({ layout: false });

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const loginDetails = ref({
    email: "",
    password: "",
    remember: false,
});
</script>

<template>
    <Head title="Login" />
    <div
        class="min-h-screen min-w-screen items-center justify-center flex p-1 bg-slate-100 gap-2.5"
    >
        <form
            action=""
            class="flex flex-col p-6 gap-4 items-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg shadow-lg w-md"
        >
            <img src="@/assets/saffron.svg" alt="Logo here" class="h-18" />
            <div class="text-center">
                <h1 class="text-xl font-bold">Welcome back to {{ appName }}</h1>
                <span class="text-sm"
                    >Please enter your details to sign in your account</span
                >
            </div>
            <IconField class="w-full">
                <InputIcon class="fa-solid fa-envelope" />
                <InputText
                    placeholder="E-mail"
                    fluid
                    v-model="loginDetails.email"
                    type="email"
                />
            </IconField>
            <IconField class="w-full">
                <InputIcon class="fa-solid fa-lock" />
                <Password
                    v-model="loginDetails.password"
                    placeholder="Password"
                    :feedback="false"
                    toggle-mask
                    fluid
                />
            </IconField>
            <div class="flex items-center w-full gap-2">
                <Checkbox
                    binary
                    v-model="loginDetails.remember"
                    inputId="remember"
                />
                <label for="remember"> Remember Me </label>
            </div>
            <Button
                label="Login"
                fluid
                class="bg-white/20 text-white hover:bg-white/30 border border-white/30"
            />
            <Link href="" class="text-gray-50">Forgot Password? </Link>
        </form>
    </div>
</template>
