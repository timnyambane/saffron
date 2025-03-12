<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineOptions({
    layout: false,
});
</script>
<template>
    <Head title="Welcome" />
    <div class="">
        Welcome! <Link :href="route('dashboard')">Dashboard</Link>
    </div>
</template>
