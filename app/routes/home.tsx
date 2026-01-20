import type { Route } from "./+types/home";
import Bookshelf from "../components/Bookshelf";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "深度书架 | 书籍深度解读" },
    { name: "description", content: "精选书籍的深度解读与第一性原理分析" },
  ];
}

export default function Home() {
  return <Bookshelf />;
}
