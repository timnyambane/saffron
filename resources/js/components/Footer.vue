<script setup>
const appName = import.meta.env.VITE_APP_NAME || "Laravel";
</script>
<template>
    <footer
        class="p-4 mt-auto bg-white rounded-b-lg flex flex-col md:flex-row items-center justify-between text-sm text-gray-600"
    >
        <span
            >&copy; {{ new Date().getFullYear() }} {{ appName }}, All rights
            reserved.</span
        >
    </footer>
</template>
