export const formatPrice = (price: number): string => {
    if (price === 0) return "Free";
    if (price >= 1000) {
        const priceInThousands = Math.floor(price / 1000);
        return `Rp ${priceInThousands}K`;
    }
    return `Rp ${price}`;
};

export default formatPrice;

export const formatFullPrice = (price: number): string => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(price);
};
