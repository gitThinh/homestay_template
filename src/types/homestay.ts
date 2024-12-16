export interface IHomestayCard {
    id: string,
    thumbnail: string,
    address: string,
    name: string,
    rating: {
        star: number,
        count: number,
    },
    price: {
        value: number,
        time: number,
    }[],
    isWishlist: boolean,
}

export interface IUserComment {
    id: string,
    name: string,
    type?: string,
    comment?: string,
    avatar?: string,
    rating: number,
    isVerify: boolean,
}
