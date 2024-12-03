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
  }
];
