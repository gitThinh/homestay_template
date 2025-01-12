import type { IHomestayCard, IUserComment } from "~/types/homestay";

export const CARD_DATA: IHomestayCard[]  = [
  {
    id: generateIds("cardData_"),
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
    id: generateIds("cardData_"),
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
    id: generateIds("cardData_"),
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
    id: generateIds("cardData_"),
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
    id: generateIds("cardData_"),
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
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/price-4.jpg",
    address: "123 Main St",
    name: "Sunset Homestay",
    rating: {
      star: 4.5,
      count: 20,
    },
    price: [
      { value: 150, time: 2 },
      { value: 250, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/price-1.jpg",
    address: "456 Elm St",
    name: "Mountain View Homestay",
    rating: {
      star: 4.7,
      count: 18,
    },
    price: [
      { value: 130, time: 2 },
      { value: 220, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/price-5.jpg",
    address: "789 Oak St",
    name: "Beachside Homestay",
    rating: {
      star: 4.9,
      count: 25,
    },
    price: [
      { value: 170, time: 2 },
      { value: 300, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/gallery-1.jpg",
    address: "101 Pine St",
    name: "City Center Homestay",
    rating: {
      star: 4.3,
      count: 15,
    },
    price: [
      { value: 140, time: 2 },
      { value: 240, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/gallery-4.jpg",
    address: "202 Maple St",
    name: "Countryside Homestay",
    rating: {
      star: 4.6,
      count: 22,
    },
    price: [
      { value: 160, time: 2 },
      { value: 260, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/gallery-2.jpg",
    address: "303 Birch St",
    name: "Lakeside Homestay",
    rating: {
      star: 4.8,
      count: 19,
    },
    price: [
      { value: 180, time: 2 },
      { value: 280, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/price-3.jpg",
    address: "404 Cedar St",
    name: "Forest Homestay",
    rating: {
      star: 4.4,
      count: 17,
    },
    price: [
      { value: 145, time: 2 },
      { value: 235, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/price-2.jpg",
    address: "505 Walnut St",
    name: "Desert Homestay",
    rating: {
      star: 4.2,
      count: 14,
    },
    price: [
      { value: 135, time: 2 },
      { value: 225, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/gallery-5.jpg",
    address: "606 Cherry St",
    name: "Island Homestay",
    rating: {
      star: 4.9,
      count: 28,
    },
    price: [
      { value: 190, time: 2 },
      { value: 310, time: 4 },
    ],
    isWishlist: false,
  },
  {
    id: generateIds("cardData_"),
    thumbnail: "/images/gallery-1.jpg",
    address: "707 Willow St",
    name: "Historic Homestay",
    rating: {
      star: 4.1,
      count: 12,
    },
    price: [
      { value: 125, time: 2 },
      { value: 215, time: 4 },
    ],
    isWishlist: false,
  }
];

export const TREND_DATA = [
  {
    id: generateIds("trendData_"),
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F1.jpg&w=640&q=75",
    title: "Cruises",
    desc: "100+ Tours"
  },
  {
    id: generateIds("trendData_"),
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F2.jpg&w=640&q=75",
    title: "Beach Tours",
    desc: "100+ Tours"
  },
  {
    id: generateIds("trendData_"),
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F3.jpg&w=640&q=75",
    title: "City Tours",
    desc: "100+ Tours"
  },
  {
    id: generateIds("trendData_"),
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F4.jpg&w=640&q=75",
    title: "Museum Tour",
    desc: "100+ Tours"
  },
  {
    id: generateIds("trendData_"),
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F5.jpg&w=640&q=75",
    title: "Food",
    desc: "100+ Tours"
  },
  {
    id: generateIds("trendData_"),
    image: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Ffeatures%2F2%2F6.jpg&w=640&q=75",
    title: "Hiking",
    desc: "100+ Tours"
  },
]

export const USER_COMMENT: IUserComment[] = [
  {
    userId: generateIds("feedback_"),
    name: "User 1",
    rating: 5,
    // type: "",
    // avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    isVerify: false,
    date: ""
  },
  {
    userId: generateIds("feedback_"),
    name: "customer 2",
    rating: 5,
    isVerify: true,
    type: "Home owner",
    avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    date: ""
  },
  {
    userId: generateIds("feedback_"),
    name: "customer 3",
    rating: 5,
    isVerify: false,
    type: "marketing",
    // avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    date: ""
  },
  {
    userId: generateIds("feedback_"),
    name: "customer 4",
    rating: 5,
    isVerify: true,
    type: "Customer",
    avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    date: ""
  },
  {
    userId: generateIds("feedback_"),
    name: "customer 5",
    rating: 5,
    isVerify: true,
    type: "Manager",
    avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
    comment: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    date: ""
  },
]