export interface ICourse {
    id: string;
    image: string;
    title: string;
    description: string;
    instructor: {
        avatar: string;
        name: string;
        role: string;
        organization: string;
    };
    rating: number;
    review: number;
    price: number;
    createdAt: string;
}

export const COURSES: ICourse[] = [
    {
        id: "1",
        image: "/images/card-image-1.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-1.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 30000,
        createdAt: "1794652956179",
    },
    {
        id: "2",
        image: "/images/card-image-2.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-2.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
    {
        id: "3",
        image: "/images/card-image-3.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-3.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
    {
        id: "4",
        image: "/images/card-image-4.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-4.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
    {
        id: "5",
        image: "/images/card-image-5.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-5.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
    {
        id: "6",
        image: "/images/card-image-6.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-6.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
    {
        id: "7",
        image: "/images/card-image-7.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-7.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
    {
        id: "8",
        image: "/images/card-image-8.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-8.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
    {
        id: "9",
        image: "/images/card-image-9.jpg",
        title: "Big 4 Auditor Financial Analyst",
        description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        instructor: {
            avatar: "/images/card-profile-9.png",
            name: "Jenna Ortega",
            role: "Senior Accountant",
            organization: "Gojek",
        },
        rating: 3.5,
        review: 86,
        price: 300000,
        createdAt: "1794652956179",
    },
];
