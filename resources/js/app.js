import "./bootstrap";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import { Icon } from "@iconify/vue";

import Layout from "./layouts/Layout.vue";
import { ZiggyVue } from "ziggy-js";

// Define a custom preset for PrimeVue theme
const myPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bedbff",
            300: "#92c5fe",
            400: "#5fa6fb",
            500: "#4489f8",
            600: "#2363ed",
            700: "#1b4eda",
            800: "#1d40b0",
            900: "#1d3a8b",
            950: "#162555",
        },
    },
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.vue", { eager: true });
        let page = pages[`./pages/${name}.vue`];

        if (!page) {
            console.error(`Page ${name} not found in the Pages directory.`);
            return;
        }

        page.default.layout = page.default.layout ?? Layout;

        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: myPreset,
                    options: {
                        darkModeSelector: "none", // Default false was redundant
                    },
                },
            })
            .component("Icon", Icon)
            .mount(el);
    },
});
