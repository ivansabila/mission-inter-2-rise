import { extendTailwindMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": [
                {
                    text: ["heading-1", "heading-2", "heading-3", "heading-4", "heading-5", "heading-6", "body-large", "body-medium", "body-small", "body-xsmall"],
                },
            ],
        },
    },
});

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default cn;
