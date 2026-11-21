import { LogOut } from "lucide-react";

export const GENDER_OPTIONS = [
    {
        label: "Pria",
        value: "male",
    },
    {
        label: "Wanita",
        value: "female",
    },
];

export const COUNTRY_CODE_OPTIONS = [
    {
        label: "+60",
        value: "MY",
        icon: "https://flags.restcountries.com/v5/w640/my-4x3.png",
    },
    {
        label: "+61",
        value: "AU",
        icon: "https://flags.restcountries.com/v5/w640/au-4x3.png",
    },
    {
        label: "+62",
        value: "ID",
        icon: "https://flags.restcountries.com/v5/w640/id-4x3.png",
    },
    {
        label: "+63",
        value: "PH",
        icon: "https://flags.restcountries.com/v5/w640/ph-4x3.png",
    },
    {
        label: "+64",
        value: "NZ",
        icon: "https://flags.restcountries.com/v5/w640/nz-4x3.png",
    },
    {
        label: "+65",
        value: "SG",
        icon: "https://flags.restcountries.com/v5/w640/sg-4x3.png",
    },
];

export const NAVBAR_DROPDOWN_MENU = [
    {
        label: "Kategori",
        path: "#",
    },
    {
        label: "Profil Saya",
        path: "#",
    },
    {
        label: "Kelas Saya",
        path: "#",
    },
    {
        label: "Pesanan Saya",
        path: "#",
    },
    {
        label: "Keluar",
        path: "#",
        icon: LogOut,
        isDanger: true,
    },
];

export const COURSE_CATEGORY_OPTIONS = [
    {
        label: "Semua Kelas",
        value: "all",
    },
    {
        label: "Pemasaran",
        value: "marketing",
    },
    {
        label: "Desain",
        value: "design",
    },
    {
        label: "Pengembangan Diri",
        value: "self-development",
    },
    {
        label: "Bisnis",
        value: "business",
    },
];

// export const COURSES = [
//     {
//         id: 1,
//         image: "/images/card-image-1.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-1.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 30000,
//     },
//     {
//         id: 2,
//         image: "/images/card-image-2.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-2.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
//     {
//         id: 3,
//         image: "/images/card-image-3.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-3.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
//     {
//         id: 4,
//         image: "/images/card-image-4.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-4.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
//     {
//         id: 5,
//         image: "/images/card-image-5.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-5.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
//     {
//         id: 6,
//         image: "/images/card-image-6.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-6.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
//     {
//         id: 7,
//         image: "/images/card-image-7.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-7.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
//     {
//         id: 8,
//         image: "/images/card-image-8.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-8.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
//     {
//         id: 9,
//         image: "/images/card-image-9.jpg",
//         title: "Big 4 Auditor Financial Analyst",
//         description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
//         category: "marketing",
//         instructor: {
//             avatar: "/images/card-profile-9.png",
//             name: "Jenna Ortega",
//             role: "Senior Accountant",
//             organization: "Gojek",
//         },
//         rating: 3.5,
//         review: 86,
//         price: 300000,
//     },
// ];

export const FOOTER_NAVIGATION = [
    {
        title: "Kategori",
        links: [
            {
                label: "Digital & Teknologi",
                path: "#",
            },
            {
                label: "Pemasaran",
                path: "#",
            },
            {
                label: "Manajemen Bisnis",
                path: "#",
            },
            {
                label: "Pengembangan Diri",
                path: "#",
            },
            {
                label: "Desain",
                path: "#",
            },
        ],
    },
    {
        title: "Perusahaan",
        links: [
            {
                label: "Tentang Kami",
                path: "#",
            },
            {
                label: "FAQ",
                path: "#",
            },
            {
                label: "Kebijakan Privasi",
                path: "#",
            },
            {
                label: "Ketentuan Layanan",
                path: "#",
            },
            {
                label: "Bantuan",
                path: "#",
            },
        ],
    },
    {
        title: "Komunitas",
        links: [
            {
                label: "Tips Sukses",
                path: "#",
            },
            {
                label: "Blog",
                path: "#",
            },
        ],
    },
];

export const SOCIAL_LINKS = [
    {
        name: "instagram",
        path: "#",
        icon: "/icons/instagram.svg",
    },
    {
        name: "facebook",
        path: "#",
        icon: "/icons/facebook.svg",
    },
    {
        name: "linkedIn",
        path: "#",
        icon: "/icons/linkedIn.svg",
    },
    {
        name: "threads",
        path: "#",
        icon: "/icons/threads.svg",
    },
];
