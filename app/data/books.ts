export interface Book {
    id: string;
    title: string;
    author: string;
    cover: string;
}

export const books: Book[] = [
    {
        id: 'think-and-grow-rich',
        title: '思考致富',
        author: '拿破仑·希尔',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
    },
    {
        id: 'Poor Charlie’s Almanack',
        title: '穷查理宝典',
        author: '查理·芒格',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
    },
    {
        id: 'Elon Musk',
        title: '埃隆·马斯克',
        author: '沃尔特·艾萨克森',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
    },
    {
        id: 'The Merchant of China',
        title: '货殖列传',
        author: '司马迁',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
    },
];
