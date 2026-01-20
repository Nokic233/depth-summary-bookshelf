import React, { useState } from 'react';
import { BookOpen, TrendingUp, Users, Scale, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

const HuozhiDashboard = () => {
  const [activeTab, setActiveTab] = useState('origin');

  // Color palette: 
  // Background: #fdfbf7 (Rice Paper)
  // Text: #2c2c2c (Ink)
  // Accent: #b93a3a (Cinnabar)
  // Secondary: #6b7280 (Stone)

  const tabs = [
    { id: 'origin', label: '第一性原理：原点', icon: BookOpen },
    { id: 'mechanism', label: '市场机制：循环', icon: TrendingUp },
    { id: 'governance', label: '治理哲学：层级', icon: Scale },
    { id: 'hierarchy', label: '社会结构：阶梯', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 font-sans selection:bg-[#b93a3a] selection:text-white pb-10">
      {/* Header */}
      <header className="bg-[#2c2c2c] text-[#fdfbf7] p-6 shadow-lg border-b-4 border-[#b93a3a]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold font-serif tracking-widest mb-2">史记 · 货殖列传</h1>
          <p className="text-gray-400 text-sm">中国古代自由市场经济学说的结构化图解</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-[#fdfbf7]/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1 sm:space-x-4 py-4 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#b93a3a] text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-4 mt-6">
        
        {/* VIEW 1: ORIGIN */}
        {activeTab === 'origin' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#b93a3a] mb-6 flex items-center">
                <span className="bg-[#b93a3a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">壹</span>
                人性论基石
              </h2>
              
              <div className="text-center py-10">
                <p className="text-4xl font-serif text-gray-800 mb-6 leading-relaxed">
                  "天下熙熙，皆为<span className="text-[#b93a3a] font-bold">利</span>来；<br/>
                  天下攘攘，皆为<span className="text-[#b93a3a] font-bold">利</span>往。"
                </p>
                <div className="w-16 h-1 bg-[#b93a3a] mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  司马迁认为追求富裕是人的天性（Nature），不需要教化，也不需要强制。
                  这是整个《货殖列传》经济逻辑的起点。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <h3 className="font-bold text-gray-700">耳目之欲</h3>
                  <p className="text-sm text-gray-500 mt-1">人天生喜欢好听的声音、好看的颜色。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <h3 className="font-bold text-gray-700">口腹之欲</h3>
                  <p className="text-sm text-gray-500 mt-1">人天生喜欢品尝美味的食物。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#b93a3a]">
                  <h3 className="font-bold text-[#b93a3a]">无需政令</h3>
                  <p className="text-sm text-gray-500 mt-1">"不召而自来，不求而民出之"。</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: MECHANISM */}
        {activeTab === 'mechanism' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
               <h2 className="text-2xl font-serif font-bold text-[#b93a3a] mb-6 flex items-center">
                <span className="bg-[#b93a3a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">贰</span>
                价格与周期：看不见的手
              </h2>

              <div className="flex flex-col items-center justify-center py-8">
                {/* Cyclic Diagram */}
                <div className="relative w-80 h-80">
                  {/* Top Node */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-50 border-2 border-red-200 p-4 rounded-xl text-center w-48 z-10">
                    <div className="font-bold text-red-800">价格上涨 (贵)</div>
                    <div className="text-xs text-red-600">生产者蜂拥而上</div>
                  </div>

                  {/* Right Arrow */}
                  <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                     <ArrowDown className="text-gray-400 w-8 h-8 animate-bounce" />
                  </div>

                  {/* Bottom Node */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-50 border-2 border-green-200 p-4 rounded-xl text-center w-48 z-10">
                    <div className="font-bold text-green-800">价格下跌 (贱)</div>
                    <div className="text-xs text-green-600">生产者减少生产</div>
                  </div>

                  {/* Left Arrow */}
                  <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                     <ArrowUp className="text-gray-400 w-8 h-8 animate-bounce" />
                  </div>
                  
                  {/* Center Logic */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="font-serif font-bold text-2xl text-gray-800">供需<br/>法则</div>
                    <div className="text-xs text-gray-500 mt-2">物贱之征贵<br/>贵之征贱</div>
                  </div>

                  {/* Connecting Circle (Abstract) */}
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">商业智慧：逆周期操作</h3>
                <p className="text-blue-800 italic">"旱则资舟，水则资车"</p>
                <p className="text-sm text-blue-600 mt-2">
                  天旱时船便宜，就买船（因为未来会下雨）；发水时车便宜，就买车。在别人恐惧时贪婪，在别人贪婪时恐惧。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: GOVERNANCE */}
        {activeTab === 'governance' && (
          <div className="space-y-8 animate-fade-in">
             <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#b93a3a] mb-6 flex items-center">
                <span className="bg-[#b93a3a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">叁</span>
                治理层级：善者因之
              </h2>
              
              <p className="mb-6 text-gray-600">
                司马迁提出的经济治理五层级，层级越低，对经济的破坏力越大。
              </p>

              <div className="space-y-3">
                {/* Level 1: Best */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-full flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold z-10">上</div>
                    <div className="h-full w-0.5 bg-gray-200 group-last:hidden"></div>
                  </div>
                  <div className="bg-green-50 flex-grow p-4 rounded-lg mb-4 border border-green-100 transition-all hover:shadow-md hover:translate-x-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-green-900 text-lg">善者因之</h3>
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">自由放任</span>
                    </div>
                    <p className="text-sm text-green-700">顺应市场规律，无为而治。这是最高明的政策。</p>
                  </div>
                </div>

                {/* Level 2 */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-full flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold z-10">次</div>
                    <div className="h-full w-0.5 bg-gray-200"></div>
                  </div>
                  <div className="bg-white flex-grow p-4 rounded-lg mb-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-gray-800">其次利之</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">经济激励</span>
                    </div>
                    <p className="text-sm text-gray-600">通过利益引导（如减税、补贴）来调动积极性。</p>
                  </div>
                </div>

                {/* Level 3 */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-full flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold z-10">次</div>
                    <div className="h-full w-0.5 bg-gray-200"></div>
                  </div>
                  <div className="bg-white flex-grow p-4 rounded-lg mb-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-gray-800">其次教之</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">道德教化</span>
                    </div>
                    <p className="text-sm text-gray-600">试图用道德说教来改变经济行为，效果开始递减。</p>
                  </div>
                </div>

                {/* Level 4 */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-full flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold z-10">次</div>
                    <div className="h-full w-0.5 bg-gray-200"></div>
                  </div>
                  <div className="bg-white flex-grow p-4 rounded-lg mb-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-gray-800">其次整之</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">法律管制</span>
                    </div>
                    <p className="text-sm text-gray-600">用严刑峻法来规范市场，容易导致僵化。</p>
                  </div>
                </div>

                {/* Level 5: Worst */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-full flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#b93a3a] text-white flex items-center justify-center font-bold z-10">下</div>
                  </div>
                  <div className="bg-red-50 flex-grow p-4 rounded-lg mb-4 border border-red-100">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-[#b93a3a]">最下者与之争</h3>
                      <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">国家垄断</span>
                    </div>
                    <p className="text-sm text-red-700">政府亲自下场做生意，与民争利（如汉武帝盐铁官营）。这是最糟糕的。</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: HIERARCHY */}
        {activeTab === 'hierarchy' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#b93a3a] mb-6 flex items-center">
                <span className="bg-[#b93a3a] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">肆</span>
                社会结构：财富决定地位
              </h2>
              
              <div className="text-center mb-8">
                <p className="text-xl font-serif italic text-gray-700">"千金之子，不死于市"</p>
                <p className="text-sm text-gray-500 mt-2">经济基础决定了你在社会关系中的地位。</p>
              </div>

              <div className="flex flex-col space-y-2 mt-8">
                {/* 10x */}
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4 text-sm text-gray-500 font-mono">10x 财富</div>
                  <div className="flex-grow h-12 bg-gray-100 rounded-r-lg flex items-center px-4 transition-all hover:bg-gray-200">
                    <span className="text-gray-700 font-bold mr-2">下之</span>
                    <span className="text-xs text-gray-500">(卑下他)</span>
                  </div>
                </div>

                {/* 100x */}
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4 text-sm text-gray-500 font-mono">100x 财富</div>
                  <div className="flex-grow h-12 bg-gray-200 rounded-r-lg flex items-center px-4 w-10/12 transition-all hover:bg-gray-300">
                    <span className="text-gray-800 font-bold mr-2">畏之</span>
                    <span className="text-xs text-gray-600">(害怕他)</span>
                  </div>
                </div>

                {/* 1000x */}
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4 text-sm text-gray-500 font-mono">1,000x 财富</div>
                  <div className="flex-grow h-12 bg-gray-300 rounded-r-lg flex items-center px-4 w-11/12 transition-all hover:bg-gray-400">
                    <span className="text-gray-900 font-bold mr-2">役之</span>
                    <span className="text-xs text-gray-700">(听他差遣)</span>
                  </div>
                </div>

                 {/* 10000x */}
                 <div className="flex items-center">
                  <div className="w-24 text-right pr-4 text-sm text-gray-500 font-mono">10,000x 财富</div>
                  <div className="flex-grow h-14 bg-[#2c2c2c] rounded-r-lg flex items-center px-4 w-full shadow-lg transition-all transform hover:scale-[1.01]">
                    <span className="text-white font-bold mr-2">仆之</span>
                    <span className="text-xs text-gray-300">(做他的仆人)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>解析：</strong> 司马迁打破了“官本位”的幻象，赤裸裸地揭示了民间社会的权力实际上是由资本（财富）量级决定的。
              </div>

            </div>
          </div>
        )}

      </main>

      <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-400 text-sm pb-8">
        <p>基于《史记·货殖列传》内容生成 | 第一性原理分析</p>
      </footer>
    </div>
  );
};

export default HuozhiDashboard;