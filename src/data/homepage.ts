import type { IHomestayCard, IUserComment } from "~/types/homestay";

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

export const USER_COMMENT: IUserComment[] = [
  {
    id: "1",
    name: "User 1",
    rating: 5,
    // type: "",
    // avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    isVerify: false,
  },
  {
    id: "2",
    name: "customer 2",
    rating: 5,
    isVerify: true,
    type: "Home owner",
    avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
  },
  {
    id: "3",
    name: "customer 3",
    rating: 5,
    isVerify: false,
    type: "marketing",
    // avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
  },
  {
    id: "4",
    name: "customer 4",
    rating: 5,
    isVerify: true,
    type: "Customer",
    avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
  },
  {
    id: "5",
    name: "customer 5",
    rating: 5,
    isVerify: true,
    type: "Manager",
    avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
  },
]