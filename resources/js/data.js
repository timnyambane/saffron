export const modules = [
    {
        module: "Dashboard",
        icon: "lucide:layout-dashboard",
        route: "/dashboard",
    },
    {
        module: "User Management",
        icon: "lucide:users",
        subModules: [
            { name: "Admins", route: "/users/admins" },
            { name: "Teachers", route: "/users/teachers" },
            { name: "Students", route: "/users/students" },
            { name: "Parents", route: "/users/parents" },
        ],
    },
    {
        module: "Student Information",
        icon: "heroicons:identification",
        subModules: [
            { name: "Admissions", route: "/students/admission" },
            { name: "Student Profiles", route: "/students/profiles" },
            { name: "Attendance", route: "/students/attendance" },
        ],
    },
    {
        module: "Class & Courses",
        icon: "lucide:school",
        subModules: [
            { name: "Classes", route: "/classes" },
            { name: "Subjects", route: "/subjects" },
            { name: "Timetable", route: "/timetable" },
        ],
    },
    {
        module: "Exam & Grading",
        icon: "heroicons:clipboard-document-check",
        subModules: [
            { name: "Exams", route: "/exams" },
            { name: "Grades", route: "/grades" },
            { name: "Report Cards", route: "/report-cards" },
        ],
    },
    {
        module: "Fee & Accounting",
        icon: "lucide:wallet",
        subModules: [
            { name: "Fee Structure", route: "/fees/structure" },
            { name: "Payments", route: "/fees/payments" },
            { name: "Reports", route: "/fees/reports" },
        ],
    },
    {
        module: "Library",
        icon: "heroicons:book-open",
        subModules: [
            { name: "Books", route: "/library/books" },
            { name: "Issue & Return", route: "/library/transactions" },
        ],
    },
    {
        module: "Transport",
        icon: "lucide:bus",
        subModules: [
            { name: "Routes", route: "/transport/routes" },
            { name: "Vehicles", route: "/transport/vehicles" },
            { name: "Student Assignments", route: "/transport/assignments" },
        ],
    },
    {
        module: "Hostel",
        icon: "heroicons:building-office",
        subModules: [
            { name: "Rooms", route: "/hostel/rooms" },
            { name: "Students", route: "/hostel/students" },
        ],
    },
    {
        module: "Communication",
        icon: "lucide:message-circle",
        subModules: [
            { name: "Notifications", route: "/communication/notifications" },
            { name: "Messages", route: "/communication/messages" },
        ],
    },
    {
        module: "Events",
        icon: "heroicons:calendar-days",
        subModules: [
            { name: "School Calendar", route: "/events/calendar" },
            { name: "Activities", route: "/events/activities" },
        ],
    },
    {
        module: "Settings",
        icon: "lucide:settings",
        route: "/settings",
    },
];

export const religions = [
    { name: "Christian", code: "CH" },
    { name: "Muslim", code: "MU" },
    { name: "Hindi", code: "HI" },
];

export const grades = [
    {
        name: "Grade 1",
        code: "G1",
        streams: [
            { sname: "East", code: "G1-E" },
            { sname: "West", code: "G1-W" },
        ],
    },
    {
        name: "Grade 4",
        code: "G4",
        streams: [
            { sname: "North", code: "G4-N" },
            { sname: "South", code: "G4-S" },
        ],
    },
    {
        name: "Grade 6",
        code: "G6",
        streams: [
            { sname: "Stream A", code: "G6-A" },
            { sname: "Stream B", code: "G6-B" },
        ],
    },
    {
        name: "Junior Secondary (Grade 8)",
        code: "G8",
        streams: [
            { sname: "Science & Tech", code: "G8-ST" },
            { sname: "Arts & Languages", code: "G8-AL" },
        ],
    },
    {
        name: "Senior Secondary (Grade 12)",
        code: "G12",
        streams: [
            { sname: "STEM", code: "G12-STEM" },
            { sname: "Humanities", code: "G12-HUM" },
            { sname: "Business Studies", code: "G12-BUS" },
        ],
    },
];

export const subjects = [
    { name: "Mathematics", code: "MATH" },
    { name: "English", code: "ENG" },
    { name: "Kiswahili", code: "KIS" },
    { name: "Science & Technology", code: "SCI-TECH" },
    { name: "Social Studies", code: "SOC" },
    { name: "Religious Education", code: "RE" },
    { name: "Agriculture", code: "AGRI" },
    { name: "Creative Arts & Music", code: "ART" },
    { name: "Physical & Health Education", code: "PHE" },
    { name: "ICT & Computer Studies", code: "ICT" },
];
