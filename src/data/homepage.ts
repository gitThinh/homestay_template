import type { IHomestayCard } from "~/types/homestay";

export const CATS_DATA = [
  {
    id: 1,
    name: "Kitchen",
    icon: "guidance:kitchen",
  },
  {
    id: 2,
    name: "Bar & Lounge",
    icon: "la:glass-martini",
  },
  {
    id: 3,
    name: "Projector",
    icon: "solar:projector-outline",
  },
  {
    id: 4,
    name: "Board game",
    icon: "fluent:board-games-20-regular",
  },
];

export const CARD_DATA: IHomestayCard[]  = [
  {
    id: "1",
    thumbnail: "https://hacsan.vn/wp-content/uploads/2023/10/Garden-homestay-Design-9-1024x617.jpg",
    address: "03 quang trung",
    name: "abc homestay",
    rating: {
      star: 5,
      count: 16,
    },
    price: [
      { value: 120, time: 2 },
      { value: 200, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: "2",
    thumbnail: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F6.png&w=640&q=75",
    address: "102 Lê Đình Lý, Hải Châu, Đà nẵng, Việt Nam",
    name: "hanigo homestay hanigo homestay hanigo homestay hanigo homestay",
    rating: {
      star: 4.6,
      count: 12,
    },
    price: [
      { value: 120, time: 2 },
      { value: 200, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: "3",
    thumbnail: "https://hacsan.vn/wp-content/uploads/2023/10/Garden-homestay-Design-9-1024x617.jpg",
    address: "03 Mai Đăng Chơn",
    name: "pi heaven homestay",
    rating: {
      star: 4.2,
      count: 8,
    },
    price: [
      { value: 120, time: 2 },
      { value: 200, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: "4",
    thumbnail: "https://hacsan.vn/wp-content/uploads/2023/10/Garden-homestay-Design-9-1024x617.jpg",
    address: "78 Hàm Nghi",
    name: "jkasdkalsj homestay",
    rating: {
      star: 4,
      count: 30,
    },
    price: [
      { value: 120, time: 2 },
      { value: 200, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: "2",
    thumbnail: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F6.png&w=640&q=75",
    address: "72 Nguyễn Trọng Nghĩa, Sơn Trà, Đà nẵng, Việt Nam",
    name: "mofiori homestay 2",
    rating: {
      star: 4.8,
      count: 30,
    },
    price: [
      { value: 169, time: 2 },
      { value: 299, time: 4 },
    ],
    isWishlist: false,
  },
];

export const TREND_DATA = [
  {
    id: 1,
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F1.jpg&w=640&q=75",
    title: "Cruises",
    desc: "100+ Tours"
  },
  {
    id: 2,
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F2.jpg&w=640&q=75",
    title: "Beach Tours",
    desc: "100+ Tours"
  },
  {
    id: 3,
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F3.jpg&w=640&q=75",
    title: "City Tours",
    desc: "100+ Tours"
  },
  {
    id: 4,
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F4.jpg&w=640&q=75",
    title: "Museum Tour",
    desc: "100+ Tours"
  },
  {
    id: 5,
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F5.jpg&w=640&q=75",
    title: "Food",
    desc: "100+ Tours"
  },
  {
    id: 6,
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F6.jpg&w=640&q=75",
    title: "Hiking",
    desc: "100+ Tours"
  },
]

export const CONTENT_IMG_DATA = [
  {
    id: 1,
    title: "Ultimate flexibility",
    desc: "You’re in control, with free cancellation and payment.",
    icon: "https://viatour-nextjs.vercel.app/img/icons/1/ticket.svg",
  },
  {
    id: 2,
    title: "Memorable experiences",
    desc: "Browse and book tours and activities so incredible.",
    icon: "https://viatour-nextjs.vercel.app/img/icons/1/hot-air-balloon.svg",
  },
  {
    id: 3,
    title: "Quality at our core",
    desc: "High quality standards. Millions of reviews.",
    icon: "https://viatour-nextjs.vercel.app/img/icons/1/diamond.svg",
  },
]

export const CHOOSE_US_DATA = [
  {
    id: 1,
    title: "932M",
    desc: "Total Donations",
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/1.svg",
  },
  {
    id: 2,
    title: "24M",
    desc: "Campaigns Closed",
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/2.svg",
  },
  {
    id: 3,
    title: "10M",
    desc: "Happy People",
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/3.svg",
  },
  {
    id: 4,
    title: "65M",
    desc: "Our Volunteers",
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/4.svg",
  },
]