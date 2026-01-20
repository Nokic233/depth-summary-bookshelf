export interface Book {
    id: string;
    title: string;
    author: string;
}

export const books: Book[] = [
    {
        id: 'think-and-grow-rich',
        title: '思考致富',
        author: '拿破仑·希尔',
    },
    {
        id: 'Poor Charlie’s Almanack',
        title: '穷查理宝典',
        author: '查理·芒格',
    },
    {
        id: 'Elon Musk',
        title: '埃隆·马斯克',
        author: '沃尔特·艾萨克森',
    },
    {
        id: 'The Merchant of China',
        title: '货殖列传',
        author: '司马迁',
    },
    {
        id: 'The Thinking Machine',
        title: '黄仁勋：英伟达之芯',
        author: '斯蒂芬·威特',
    },
];
