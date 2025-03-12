<script setup>
import { ref, computed, watch } from "vue";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { modules } from "../data";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const openModules = ref(new Set());
const op = ref();
const currentRoute = computed(() => usePage().url);
const sidebarOpen = ref(false);

const updateOpenModules = () => {
    openModules.value.clear();
    modules.forEach((module, index) => {
        if (
            module.subModules?.some((sub) => sub.route === currentRoute.value)
        ) {
            openModules.value.add(index);
        }
    });
};

watch(
    currentRoute,
    () => {
        updateOpenModules();
        sidebarOpen.value = false;
    },
    { immediate: true }
);

const toggleDropdown = (index) => {
    if (openModules.value.has(index)) {
        openModules.value.delete(index);
    } else {
        openModules.value.add(index);
    }
};

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};
</script>

<template>
    <Head title="Home" />
    <div class="min-h-screen min-w-screen bg-gray-100 flex flex-col relative">
        <!-- Navigation Bar -->
        <nav
            class="p-2 w-full shadow bg-white flex items-center justify-between"
        >
            <div class="flex items-center gap-2">
                <Icon
                    icon="lucide:menu"
                    class="text-2xl cursor-pointer lg:hidden"
                    @click="toggleSidebar"
                />
                <h1 class="font-bold text-xl">{{ appName }}</h1>
            </div>
            <div class="flex items-center">
                <Avatar
                    label="P"
                    class="mr-2 cursor-pointer"
                    shape="circle"
                    @click="op.toggle()"
                />
                <Popover ref="op" class="p-2 bg-white shadow rounded-lg">
                    <div class="flex flex-col gap-4">Pop over menu</div>
                </Popover>
            </div>
        </nav>

        <!-- Page Layout -->
        <div class="flex gap-2.5 p-4 flex-grow h-0 relative">
            <!-- Sidebar -->
            <aside
                :class="[
                    'bg-white p-4 rounded-xl shadow md:w-80 lg:w-64 overflow-y-auto flex flex-col fixed inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition-transform duration-300 z-50',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full',
                ]"
            >
                <Icon
                    icon="lucide:x"
                    class="text-xl absolute top-4 right-4 lg:hidden"
                    @click="toggleSidebar"
                />
                <nav class="space-y-2 mt-10 lg:mt-0">
                    <template
                        v-for="(module, index) in modules"
                        :key="module.module"
                    >
                        <div>
                            <template v-if="module.subModules">
                                <button
                                    @click="toggleDropdown(index)"
                                    class="flex items-center justify-between w-full p-2 rounded-lg transition"
                                    :class="{
                                        'bg-gray-100': openModules.has(index),
                                        'hover:bg-gray-200':
                                            !openModules.has(index),
                                    }"
                                >
                                    <div class="flex items-center gap-2">
                                        <Icon :icon="module.icon" />
                                        <span>{{ module.module }}</span>
                                    </div>
                                    <Icon
                                        class="transition-transform duration-300"
                                        :class="{
                                            'rotate-90': openModules.has(index),
                                        }"
                                        icon="lucide:chevron-right"
                                    />
                                </button>
                                <div
                                    class="overflow-hidden transition-all duration-300 ease-in-out"
                                    :style="{
                                        maxHeight: openModules.has(index)
                                            ? module.subModules.length * 40 +
                                              'px'
                                            : '0px',
                                    }"
                                >
                                    <ul class="mt-1 space-y-1">
                                        <Link
                                            v-for="sub in module.subModules"
                                            :key="sub.name"
                                            :href="sub.route"
                                            class="block p-1.5 rounded-lg pl-8 transition"
                                            :class="{
                                                'bg-primary-800 text-white':
                                                    currentRoute === sub.route,
                                                'hover:bg-gray-200':
                                                    currentRoute !== sub.route,
                                            }"
                                        >
                                            <span>{{ sub.name }}</span>
                                        </Link>
                                    </ul>
                                </div>
                            </template>
                            <template v-else>
                                <Link
                                    :href="module.route"
                                    class="flex items-center gap-2 w-full p-2 rounded-lg transition"
                                    :class="{
                                        'bg-primary-800 text-white':
                                            currentRoute === module.route,
                                        'hover:bg-gray-200':
                                            currentRoute !== module.route,
                                    }"
                                >
                                    <Icon :icon="module.icon" />
                                    <span>{{ module.module }}</span>
                                </Link>
                            </template>
                        </div>
                    </template>
                </nav>
            </aside>

            <!-- Main Content -->
            <main class="flex flex-col flex-grow gap-4 rounded-xl">
                <div class="flex-grow overflow-y-auto flex flex-col">
                    <slot />
                    <footer
                        class="p-4 mt-auto bg-white rounded-lg flex flex-col md:flex-row items-center justify-between text-sm text-gray-600"
                    >
                        <span
                            >&copy; {{ new Date().getFullYear() }}
                            {{ appName }}, All rights reserved.</span
                        >
                        <div class="flex gap-4 mt-2 md:mt-0">
                            <Link href="#" class="hover:underline"
                                >Privacy Policy</Link
                            >
                            <Link href="#" class="hover:underline"
                                >Terms of Service</Link
                            >
                            <Link href="#" class="hover:underline"
                                >Support</Link
                            >
                        </div>
                    </footer>
                </div>
            </main>
        </div>
        <!-- Shadow Overlay -->
        <div
            v-if="sidebarOpen"
            class="fixed inset-0 bg-black opacity-25 transition-opacity duration-300 lg:hidden"
            @click="sidebarOpen = false"
        ></div>
    </div>
</template>
