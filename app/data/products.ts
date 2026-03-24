export type Product = {
  id: string;
  title: string;
  image: string;
  link: string;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    id: "drain",
    title: "하수구 냄새 차단 스테인리스 덮개",
    image: "/products/9269900375/thumb.jpg",
    link: "https://link.coupang.com/a/eajfZ8",
    isNew: true,
  },
  {
    id: "vacuum",
    title: "비브르 V25000 무선 스틱 청소기",
    image: "/products/7706232248/thumb.png",
    link: "https://link.coupang.com/a/eajpnH",
    isNew: true,
  },
  {
    id: "scale",
    title: "앳플리 TX 인바디 체중계",
    image: "/products/6346844903/thumb.jpg",
    link: "https://link.coupang.com/a/eajq9P",
    isNew: true,
  },
];
