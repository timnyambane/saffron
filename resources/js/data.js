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
