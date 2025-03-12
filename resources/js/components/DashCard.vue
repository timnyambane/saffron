<script setup>
defineProps({
    title: String,
    number: Number,
});
</script>

<template>
    <div
        class="flex flex-col bg-white rounded-2xl p-4 shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
    >
        <div class="flex items-center justify-between">
            <h2 class="font-semibold text-gray-700">{{ title }}</h2>
            <i class="fa-solid fa-ellipsis text-gray-500 cursor-pointer"></i>
        </div>
        <div class="flex mt-4 items-center justify-between">
            <span class="text-3xl font-bold text-primary-900">{{
                number
            }}</span>
            <div
                class="p-1.5 bg-green-100 text-green-600 rounded-full text-xs font-semibold flex items-center gap-1"
            >
                <Icon icon="lucide:arrow-up" />
                5%
            </div>
        </div>
        <div class="mt-4 text-gray-500 text-sm">Compared to last term</div>
    </div>
</template>
