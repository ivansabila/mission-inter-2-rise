export interface IUser {
    id: string;
    name: string;
    email: string;
    gender: string;
    phone: string;
    password: string;
    createdAt: string;
}

export const USERS: IUser[] = [
    {
        id: "1",
        name: "sabila",
        email: "ivanscond@gmail.com",
        gender: "male",
        phone: "+6282345465833",
        password: "password",
        createdAt: "1794652956179",
    },
];
