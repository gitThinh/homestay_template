import type { IBlogCardType } from "~/data/blog";

export interface Iblog {
    id: string,
    type: string,
    thumbnail: string,
    title: string,
    description?: string,
    content: string,
    date: string,
}

export interface IBlogCard {
    id: string,
    type: IBlogCardType,
    thumbnail: string,
    title: string,
    description?: string,
    date: string,
}