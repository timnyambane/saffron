<script setup>
import { Head } from "@inertiajs/vue3";
import DashCard from "../components/DashCard.vue";
</script>

<template>
    <Head title="Dashboard" />
    <div class="flex flex-col p-2">
        <div class="flex items-center gap-2 flex-col md:flex-row">
            <DashCard title="Total Students" :number="45" />
            <DashCard title="Total Teachers" :number="10" />
            <DashCard title="Total Classes" :number="15" />
            <DashCard title="Attendance Rate" :number="90" />
        </div>
    </div>
</template>
