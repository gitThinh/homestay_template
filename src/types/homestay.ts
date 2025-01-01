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
    userId: string,
    name: string,
    type?: string,
    comment?: string,
    avatar?: string,
    rating: number,
    isVerify: boolean,
    images?: string[],
    date: string,
}

export interface IDetailHomeStay {
    id: string,
    thumbnail: string,
    images: string[],
    address: string,
    name: string,
    rating: {
        star: number,
        count: number,
        overall: {
            [key: string]: number,
        }
    },
    price: {
        value: number,
        time: number,
    }[],
    isWishlist: boolean,
    contact: {
        type: string,
        value: string,
    }[],
    description: string,
    categories: {
        icon: string,
        name: string,
    }[],
    review: IUserComment[],
    utilities: {
        icon: string,
        name: string,
    }[],
    rule: string[],
    type: string,
    openState?: {
        isOpen: boolean,
        type: string,
    }
}
