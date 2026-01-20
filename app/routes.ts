import { type RouteConfig, index, route } from '@react-router/dev/routes';
import { books } from './data/books';

// 自动根据 books 数据生成路由
const bookRoutes = books.map(book =>
    route(`books/${book.id}`, `books/${book.id}.tsx`),
);

export default [index('routes/home.tsx'), ...bookRoutes] satisfies RouteConfig;
