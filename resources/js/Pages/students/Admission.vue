<script setup>
import { useForm } from "@inertiajs/vue3";

const student = useForm({
    firstName: null,
    surname: null,
    lastName: null,
    gender: null,
    dob: null,
    address: null,
    class: null,
    photo: null,
    guardian: {
        relation: null,
        name: null,
        email: null,
        phone: null,
    },
});
</script>

<template>
    <!-- <div class="p-4 bg-white shadow rounded-xl w-full mx-auto">
        <h2 class="text-lg font-semibold text-center">
            Student Admission Form
        </h2>
        <div class="flex justify-center gap-4">
            <Fieldset class="flex-2">
                <template #legend>
                    <div class="flex items-center pl-2">
                        <span class="font-bold p-2">Student's Details</span>
                    </div>
                </template>
                <div class="flex flex-col">
                    <div class="flex justify-between gap-4">
                        <IconField class="flex-1">
                            <InputIcon class="fa-solid fa-user" />
                            <InputText
                                id="firstName"
                                fluid
                                v-model="student.firstName"
                                placeholder="First Name"
                                autocomplete="off"
                            />
                        </IconField>
                        <IconField class="flex-1">
                            <InputIcon class="fa-solid fa-user" />
                            <InputText
                                id="lastName"
                                fluid
                                v-model="student.lastName"
                                autocomplete="off"
                                placeholder="Last Name"
                            />
                        </IconField>
                    </div>
                </div>
            </Fieldset>
            <Fieldset class="flex-1">
                <template #legend>
                    <div class="flex items-center pl-2">
                        <span class="font-bold p-2">Guardian's Details</span>
                    </div>
                </template>
                <div class="flex flex-col">
                    <IconField class="flex-1">
                        <InputIcon class="fa-solid fa-user" />
                        <InputText
                            id="firstName"
                            fluid
                            v-model="student.firstName"
                            placeholder="First Name"
                            autocomplete="off"
                        />
                    </IconField>
                </div>
            </Fieldset>
            <Fieldset class="flex-1">
                <template #legend>
                    <div class="flex items-center pl-2">
                        <span class="font-bold p-2">Miscleneous Details</span>
                    </div>
                </template>
                <div class="flex flex-col">
                    <IconField>
                        <InputIcon class="fa-solid fa-user" />
                        <InputText
                            id="firstName"
                            fluid
                            v-model="student.firstName"
                            autocomplete="off"
                            placeholder="Former School"
                        />
                    </IconField>
                </div>
            </Fieldset>
        </div>
    </div> -->
    <div>Admission</div>
</template>
