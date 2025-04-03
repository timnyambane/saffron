<script setup>
import { Head, useForm } from "@inertiajs/vue3";
import { grades, subjects } from "../../data";
import { ref } from "vue";

const selectedStream = ref(null);

const student = useForm({
    firstName: null,
    surname: null,
    lastName: null,
    gender: null,
    dob: null,
    address: null,
    enrollment: null,
    class: null,
    photo: null,
    religion: null,
    country: null,
    subjects: [],
    guardian: {
        relation: null,
        name: null,
        email: null,
        phone: null,
    },
});
</script>

<template>
    <Head title="Student Admission" />
    <div class="flex flex-col">
        <h1 class="text-2xl font-bold text-center mb-2">
            Student Admission Form
        </h1>
        <div class="flex lg:mx-8 gap-4">
            <Fieldset legend="Student's Details" class="w-full">
                <div class="flex flex-col gap-6">
                    <div class="flex items-center">
                        <img
                            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"
                            alt=""
                            class="size-24"
                        />
                        <InputText placeholder="ADM #" readonly class="h-fit" />
                    </div>
                    <div class="flex items-center gap-2">
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-user" />
                                <InputText
                                    id="firstName"
                                    fluid
                                    v-model="student.firstName"
                                />
                            </IconField>
                            <label for="firstName">First Name</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-user" />
                                <InputText
                                    id="surname"
                                    fluid
                                    v-model="student.surname"
                                />
                            </IconField>
                            <label for="surname"> Surname</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-user" />
                                <InputText
                                    id="lastName"
                                    fluid
                                    v-model="student.lastName"
                                />
                            </IconField>
                            <label for="lastName">Last Name</label>
                        </FloatLabel>
                    </div>
                    <div class="flex items-center gap-2">
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-calendar-days" />
                                <DatePicker
                                    name="date"
                                    id="dob"
                                    fluid
                                    v-model="student.dob"
                                    :manualInput="false"
                                />
                            </IconField>
                            <label for="dob">Date of birth</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="w-full">
                            <Select
                                v-model="student.country"
                                :options="countries"
                                optionLabel="name"
                                id="country"
                                fluid
                            />
                            <label for="country">Nationality</label>
                        </FloatLabel>

                        <div class="flex gap-4 px-2">
                            <div class="flex items-center gap-2">
                                <RadioButton
                                    v-model="student.gender"
                                    inputId="male"
                                    name="gender"
                                    value="male"
                                />
                                <label for="male">Male</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton
                                    v-model="student.gender"
                                    inputId="female"
                                    name="gender"
                                    value="female"
                                />
                                <label for="female">Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <FloatLabel variant="on" class="w-full">
                            <CascadeSelect
                                v-model="selectedStream"
                                fluid
                                :options="grades"
                                optionLabel="sname"
                                optionGroupLabel="name"
                                id="stream"
                                :optionGroupChildren="['streams']"
                            />
                            <label for="stream">Class/Grade</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-calendar-days" />
                                <DatePicker
                                    name="enrollment"
                                    id="enrollment"
                                    fluid
                                    v-model="student.enrollment"
                                    show-button-bar
                                    :manualInput="false"
                                />
                            </IconField>
                            <label for="enrollment">Enrollment date</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="w-full">
                            <MultiSelect
                                v-model="student.subjects"
                                :options="subjects"
                                optionLabel="name"
                                id="subjects"
                                display="chip"
                                filter
                                fluid
                                :maxSelectedLabels="0"
                            />
                            <label for="subjects">Select Subjects</label>
                        </FloatLabel>
                    </div>
                    <FloatLabel variant="on" class="w-full">
                        <Textarea
                            id="address"
                            type="text"
                            name="address"
                            v-model="student.address"
                            rows="5"
                            cols="30"
                        />
                        <label for="address">Address</label>
                    </FloatLabel>
                </div>
            </Fieldset>
            <Fieldset legend="Guardian's Details" class="w-full h-fit">
                <div class="flex flex-col gap-6">
                    <div class="flex items-center gap-2">
                        <FloatLabel variant="on" class="w-full">
                            <Select
                                v-model="student.guardian.relation"
                                :options="relations"
                                optionLabel="name"
                                id="relation"
                                fluid
                            />
                            <label for="relation">Relation</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-user" />
                                <InputText
                                    id="guardianName"
                                    fluid
                                    v-model="student.guardian.name"
                                />
                            </IconField>
                            <label for="guardianName">Guardian Name</label>
                        </FloatLabel>
                    </div>
                    <div class="flex items-center gap-2">
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-envelope" />
                                <InputText
                                    id="guardianEmail"
                                    fluid
                                    v-model="student.guardian.email"
                                    type="email"
                                />
                            </IconField>
                            <label for="guardianEmail">Guardian Email</label>
                        </FloatLabel>
                        <FloatLabel variant="on" class="w-full">
                            <IconField>
                                <InputIcon class="fa-solid fa-phone" />
                                <InputText
                                    id="guardianPhone"
                                    fluid
                                    v-model="student.guardian.phone"
                                    type="tel"
                                />
                            </IconField>
                            <label for="guardianPhone">Guardian Phone</label>
                        </FloatLabel>
                    </div>
                </div>
            </Fieldset>
        </div>
    </div>
</template>
