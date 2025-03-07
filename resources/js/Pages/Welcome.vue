<script setup>
import { ref } from "vue";

const value = ref("");
const date = ref();

function showApply() {
    console.log(date.value);
}
</script>

<template>
    <div class="flex gap-4 items-center p-4">
        <h1 class="text-lg">Hello World!</h1>
        <span class="text-3xl font-black">Welcome</span>
        <InputText type="text" v-model="value" placeholder="Enter name" />
        <Button label="Submit" @click="showApply" />
        <DatePicker name="date" fluid placeholder="Date" v-model="date" />
    </div>
</template>
