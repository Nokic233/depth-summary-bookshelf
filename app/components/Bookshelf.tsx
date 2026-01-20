import { Link } from "react-router";
import { books, type Book } from "../data/books";
import { BookOpen, Sparkles } from "lucide-react";

const BookCard = ({ book }: { book: Book }) => (
  <Link
    to={`books/${book.id}`}
    className="group relative block perspective-1000"
  >
    {/* 书籍容器 */}
    <div className="relative w-44 h-64 transform-gpu transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-y-2">
      {/* 书脊阴影效果 */}
      <div className="absolute -left-1 top-2 bottom-2 w-2 bg-gradient-to-r from-amber-900/60 to-transparent rounded-l-sm" />
      
      {/* 书籍封面 */}
      <div className="relative w-full h-full rounded-sm overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-amber-500/20 transition-shadow duration-500">
        {/* 封面图片 */}
        <img
          src={`${import.meta.env.BASE_URL}images/${book.id}.jpg`}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* 书籍信息 */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold leading-tight mb-1 drop-shadow-lg">
            {book.title}
          </h3>
          <p className="text-sm text-amber-200/90 font-medium drop-shadow">
            {book.author}
          </p>
        </div>
        
        {/* 悬浮时的高亮边框 */}
        <div className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/60 rounded-sm transition-colors duration-300" />
        
        {/* 光泽效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* 书页效果 */}
      <div className="absolute right-0 top-1 bottom-1 w-1 bg-gradient-to-r from-amber-50 to-amber-100 shadow-inner" />
    </div>
  </Link>
);

export default function Bookshelf() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      {/* 头部 */}
      <header className="relative pt-16 pb-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>深度阅读，智慧成长</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            我的书架
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          精选书籍的深度解读与第一性原理分析
        </p>
      </header>

      {/* 书架区域 */}
      <main className="relative max-w-6xl mx-auto px-6 pb-20">
        {/* 书架木板效果 */}
        <div className="relative">
          {/* 书籍网格 */}
          <div className="flex flex-wrap justify-center gap-8 py-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
            
            {/* 空书位占位符 */}
            {books.length < 8 && (
              <div className="w-44 h-64 rounded-sm border-2 border-dashed border-slate-600/50 flex flex-col items-center justify-center text-slate-500 opacity-50">
                <BookOpen className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium">敬请期待</span>
              </div>
            )}
          </div>

          {/* 书架木板 */}
          <div className="relative h-4 bg-gradient-to-r from-amber-900/80 via-amber-800/90 to-amber-900/80 rounded-sm shadow-lg mt-4">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-sm" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-950/50" />
          </div>
          
          {/* 书架支架 */}
          <div className="flex justify-between px-8 mt-1">
            <div className="w-4 h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-sm shadow-md" />
            <div className="w-4 h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-sm shadow-md" />
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
            <div className="flex items-center gap-2 text-slate-400">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span className="font-semibold text-white">{books.length}</span>
              <span>本书籍</span>
            </div>
          </div>
        </div>
      </main>

      {/* 底部 */}
      <footer className="relative py-8 text-center text-slate-500 text-sm border-t border-slate-800/50">
        <p>📚 阅读是最好的投资</p>
      </footer>
    </div>
  );
}
