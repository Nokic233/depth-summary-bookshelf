import React, { useState } from 'react';
import { BookOpen, Scale, Globe, Brain, AlertTriangle, CheckCircle, ChevronRight, BarChart3, Users, Anchor, Map, Flag } from 'lucide-react';
import type { Route } from "./+types/The art of possibility";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "可能性的艺术" },
  ];
}
const App = () => {
  const [activeTab, setActiveTab] = useState('essence');

  const tabs = [
    { id: 'essence', label: '第一性原理：核心拆解', icon: <Anchor size={18} /> },
    { id: 'perspectives', label: '多视角推演', icon: <Users size={18} /> },
    { id: 'cases', label: '全球案例图谱', icon: <Map size={18} /> },
    { id: 'concepts', label: '关键概念图谱', icon: <Brain size={18} /> },
    { id: 'critical', label: '批判性评估', icon: <Scale size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="text-blue-600" />
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              深度解读：《可能性的艺术》
            </h1>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            基于比较政治学视角 | 客观 • 逻辑 • 实证
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Intro Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">政治是可能性的艺术</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                刘瑜教授的《可能性的艺术：比较政治学30讲》并非传统意义上的政治灌输，而是一把**“破除中心主义”的手术刀**。
                它通过全球视野（特别是第三波民主化国家、失败国家等案例），试图回答：
                政治秩序是如何建立的？为何有的国家转型成功，有的陷入泥潭？
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md border border-blue-100">比较政治学</span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md border border-emerald-100">国家能力</span>
                <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-md border border-amber-100">民主衰退</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-md border border-purple-100">政治均衡</span>
              </div>
            </div>
            <div className="md:w-1/3 bg-slate-50 rounded-lg p-4 border border-slate-100 flex flex-col justify-center">
              <div className="text-sm font-semibold text-slate-700 mb-2">解读原则</div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span>事实先于立场：基于数据的实证分析</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span>多维坐标系：不仅看左右，更看上下（国家能力）</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span>概率思维：没有绝对的必然，只有条件的概率</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-4 gap-2 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Render */}
        <div className="min-h-[400px]">
          {activeTab === 'essence' && <EssenceSection />}
          {activeTab === 'perspectives' && <PerspectiveSection />}
          {activeTab === 'cases' && <CaseStudySection />}
          {activeTab === 'concepts' && <ConceptSection />}
          {activeTab === 'critical' && <CriticalSection />}
        </div>
      </main>
      
      <footer className="bg-slate-50 border-t border-slate-200 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>Generated by AI • Objective Analysis Reference</p>
        </div>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const EssenceSection = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Anchor className="text-blue-500" size={20} />
          第一性原理：什么是“可能性”？
        </h3>
        <p className="text-slate-600 text-sm leading-7 mb-4">
          本书的核心前提是反对<strong>“历史决定论”</strong>。政治不是物理学，没有绝对的公式。
          所谓的“可能性”，是指在一个给定的历史和文化约束下，人类通过<strong>制度设计</strong>和<strong>政治选择</strong>所能达到的最优解。
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="text-blue-800 font-semibold text-sm mb-2">拆解逻辑链：</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-900">
            <li><strong>参照系错位：</strong>我们常因只盯着“完美的西方”或“特殊的本土”，而忽略了全球广阔的政治样本。</li>
            <li><strong>比较的力量：</strong>只有通过比较（如韩国vs缅甸，智利vs委内瑞拉），才能剥离出影响政治结果的真实变量。</li>
            <li><strong>政治的均衡：</strong>政治是多重力量（国家、社会、经济）的动态平衡，而非单向的压制或解放。</li>
          </ol>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Globe className="text-indigo-500" size={20} />
          打破“中国中心主义”与“西方中心主义”
        </h3>
        <p className="text-slate-600 text-sm leading-7 mb-4">
          刘瑜在书中反复强调，要理解中国，必须通过理解世界。同样，理解民主的困境，不能只看美国，要看印度、南非、伊拉克。
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-100">
            <div className="mt-1 min-w-[4px] h-4 bg-red-400 rounded-full"></div>
            <div>
              <div className="text-xs font-bold text-slate-700">通常误区</div>
              <div className="text-xs text-slate-500">认为“民主”就能自动带来繁荣，或者“威权”一定带来高效。</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-100">
            <div className="mt-1 min-w-[4px] h-4 bg-emerald-400 rounded-full"></div>
            <div>
              <div className="text-xs font-bold text-slate-700">本书修正</div>
              <div className="text-xs text-slate-500">引入“国家能力”维度。没有国家能力的民主是混乱（如阿富汗），没有法治约束的国家能力是暴政。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-white shadow-lg">
      <h3 className="text-lg font-bold mb-2">核心结论提炼</h3>
      <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
        政治不是寻找天堂的钥匙，而是防止地狱的门闩。
        《可能性的艺术》告诉我们，政治文明的演进往往是在<strong>“糟糕”与“更糟糕”</strong>之间做选择，而非在“好”与“坏”之间做选择。
        成熟的政治观是承认<strong>复杂性</strong>，是在承认地理、文化、历史约束的前提下，依然相信人为改变的<strong>微小可能性</strong>。
      </p>
    </div>
  </div>
);

const PerspectiveSection = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">模拟专家视角推演</span>
    </div>
    
    {/* Political Scientist View */}
    <div className="bg-white border-l-4 border-blue-500 shadow-sm rounded-r-xl p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Users size={18} className="text-blue-500" />
          视角一：制度主义政治学者
        </h3>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">关注变量：制度设计</span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">
        <strong>推演核心：</strong>本书通过大量的跨国比较（Large-N comparison），论证了“制度”并非万能灵药，但却是最可控的变量。
        例如，在分析“民主衰退”时，不仅仅归咎于民粹主义，而是分析<strong>选举制度</strong>（比例代表制 vs 多数决）如何放大或缩小了极端声音。
      </p>
      <div className="bg-slate-50 p-3 rounded text-xs text-slate-500">
        <strong>共识点：</strong>政治转型是有条件的。不存在一套放之四海而皆准的制度说明书，必须通过试错来寻找“可行性边界”。
      </div>
    </div>

    {/* Historian View */}
    <div className="bg-white border-l-4 border-amber-500 shadow-sm rounded-r-xl p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Users size={18} className="text-amber-500" />
          视角二：宏观历史社会学家
        </h3>
        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">关注变量：路径依赖</span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">
        <strong>推演核心：</strong>本书不仅仅看切片，更看长时段历史。比如分析国家的贫富，不仅看当前的政策，更要看地理决定论和殖民历史留下的遗产。
        <strong>路径依赖</strong>解释了为什么某些国家（如拉丁美洲）陷入了长期的动荡循环——因为早期的资源分配模式锁定了后来的政治博弈结构。
      </p>
    </div>

    {/* Economist View */}
    <div className="bg-white border-l-4 border-emerald-500 shadow-sm rounded-r-xl p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Users size={18} className="text-emerald-500" />
          视角三：政治经济学家
        </h3>
        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">关注变量：激励机制与国家能力</span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">
        <strong>推演核心：</strong>重点关注<strong>“国家能力”</strong>（State Capacity）。
        民主不仅需要投票箱，更需要税收能力、官僚体系执行力。许多失败国家的问题不在于不够民主，而在于政府无法提供基本的公共品（安全、产权保护）。
        本书实际上在修正“小政府”迷思，强调有效政府的重要性。
      </p>
    </div>
  </div>
);

const CaseStudySection = () => {
  const cases = [
    {
      country: "委内瑞拉",
      flag: "🇻🇪",
      type: "警示案例",
      theme: "民粹主义与经济崩溃",
      desc: "查韦斯主义的教训：仅仅有“劫富济贫”的道德激情是不够的。当行政权力凌驾于法治和产权之上，石油富国也会迅速沦为失败国家。这是对“福利主义”失去制衡的极端推演。",
      color: "red"
    },
    {
      country: "南非",
      flag: "🇿🇦",
      type: "转型典范",
      theme: "妥协的艺术",
      desc: "曼德拉的伟大不仅在于抗争，更在于掌权后的克制。通过承诺保护白人私有产权，南非避免了津巴布韦式的资本外逃，实现了极度撕裂社会的“软着陆”。",
      color: "emerald"
    },
    {
      country: "印度",
      flag: "🇮🇳",
      type: "比较参照",
      theme: "有民主，无能力",
      desc: "打破“民主万能论”。印度拥有完善的选举，但缺乏高效的官僚执行体系（国家能力），导致基础设施和公共服务长期滞后。证明了“国家能力”是政治秩序的独立变量。",
      color: "amber"
    },
    {
      country: "美国",
      flag: "🇺🇸",
      type: "特殊样本",
      theme: "社会先于国家",
      desc: "理解美国政治极化和持枪权的关键。美国是先有强大的社会网络，后有联邦政府，这导致了其独特的“反国家主义”政治文化，与中国/法国的强国家传统截然不同。",
      color: "blue"
    },
    {
      country: "智利",
      flag: "🇨🇱",
      type: "成功路径",
      theme: "政策延续性",
      desc: "拉美转型的优等生。民主化后的左翼政府并没有全盘推翻皮诺切特时期的自由市场政策，这种“左右翼共识”维持了经济的长期繁荣。",
      color: "cyan"
    },
    {
      country: "阿富汗",
      flag: "🇦🇫",
      type: "失败移植",
      theme: "无根的民主",
      desc: "在缺乏基本秩序、部族认同高于国家认同的土地上，强行移植选举制度，只会导致政治暴力的合法化。次序很重要：先有秩序，后有自由。",
      color: "slate"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
        <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Globe className="text-blue-500" size={18} />
          大样本比较 (Large-N Comparison)
        </h3>
        <p className="text-xs text-slate-600">
          书中引用的国家案例旨在建立一个全光谱的政治坐标系。不要只看“好”的国家，更要看“坏”的国家是如何变坏的。
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {cases.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-all">
            <div className={`h-1 w-full bg-${item.color}-500`}></div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.flag}</span>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.country}</h4>
                    <span className={`text-[10px] uppercase tracking-wider font-bold text-${item.color}-600 bg-${item.color}-50 px-2 py-0.5 rounded-full`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-slate-500">核心议题：</span>
                <span className="text-xs font-bold text-slate-700">{item.theme}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConceptSection = () => {
  const concepts = [
    {
      title: "比较的视野",
      desc: "只懂一个国家的人，实际上谁也不懂。通过比较，我们才能分辨什么是‘特殊’，什么是‘普遍’。",
      color: "blue"
    },
    {
      title: "国家能力 (State Capacity)",
      desc: "政府贯彻其意志的能力。区别于政体类型。强大的国家能力是现代化的必要条件，但需警惕其无制约的扩张。",
      color: "indigo"
    },
    {
      title: "平庸的恶 vs 崇高的恶",
      desc: "政治灾难往往不是因为有人想作恶，而是因为有人想建立‘人间天堂’（崇高的恶），或者因为普通人放弃了思考（平庸的恶）。",
      color: "red"
    },
    {
      title: "民主的巩固",
      desc: "转型容易，巩固难。民主不仅仅是选举，更是全套的自由主义实践（法治、结社自由、言论空间）。",
      color: "emerald"
    },
    {
      title: "政治问责制",
      desc: "核心不在于谁在台上，而在于当他在台上表现糟糕时，民众是否有和平的手段将其换下。",
      color: "amber"
    },
    {
      title: "观念的水位",
      desc: "制度是冰山水面上的部分，文化和观念是水面下的部分。观念的水位决定了制度的浮力。",
      color: "cyan"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {concepts.map((item, idx) => (
        <div key={idx} className={`bg-white p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group`}>
          <div className={`absolute top-0 left-0 w-1 h-full bg-${item.color}-500`}></div>
          <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

const CriticalSection = () => (
  <div className="space-y-6">
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
      <AlertTriangle className="text-yellow-600 shrink-0 mt-1" size={20} />
      <div>
        <h4 className="text-yellow-800 font-bold text-sm">批判性评估说明</h4>
        <p className="text-yellow-700 text-xs mt-1">
          以下评估基于学术界对比较政治学通识读物的普遍标准及本书的具体内容。旨在提供客观的局限性分析，而非否定其价值。
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Advantages */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <CheckCircle className="text-green-600" size={20} />
          优势与贡献 (Pros)
        </h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold shrink-0">1</div>
            <div>
              <div className="text-sm font-semibold text-slate-800">极佳的实证主义入门</div>
              <p className="text-xs text-slate-600 mt-1">摆脱了枯燥的理论说教，用了大量鲜活的数据和案例（委内瑞拉、印度、美国等），让政治学回归“科学”。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold shrink-0">2</div>
            <div>
              <div className="text-sm font-semibold text-slate-800">温和而坚定的理性主义</div>
              <p className="text-xs text-slate-600 mt-1">在极化的舆论场中，本书提供了一种稀缺的温和视角，强调“常识”和“逻辑”，而非煽动情绪。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold shrink-0">3</div>
            <div>
              <div className="text-sm font-semibold text-slate-800">概念清晰度</div>
              <p className="text-xs text-slate-600 mt-1">厘清了许多被混淆的概念，如“法治”与“法制”，“国家能力”与“政府权力”。</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Disadvantages / Risks */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <BarChart3 className="text-red-500" size={20} />
          局限与风险 (Cons/Risks)
        </h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-700 text-xs font-bold shrink-0">1</div>
            <div>
              <div className="text-sm font-semibold text-slate-800">自由主义视角的幸存者偏差</div>
              <p className="text-xs text-slate-600 mt-1">
                虽然强调比较，但在选取案例时，仍有一定的主观倾向。对于西方民主制度内部深层危机（如不平等加剧导致的结构性问题）的批判力度相对较温和。
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-700 text-xs font-bold shrink-0">2</div>
            <div>
              <div className="text-sm font-semibold text-slate-800">对“文化”变量的处理</div>
              <p className="text-xs text-slate-600 mt-1">
                书中在解释某些政治现象时引入“政治文化”，这在学术上有陷入“文化本质主义”的风险（即：因为文化不行所以制度不行，这可能是一种循环论证）。
              </p>
            </div>
          </li>
           <li className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-700 text-xs font-bold shrink-0">3</div>
            <div>
              <div className="text-sm font-semibold text-slate-800">过于“精英主义”的叙事</div>
              <p className="text-xs text-slate-600 mt-1">
                较多关注制度设计者和精英层的博弈，对底层社会运动和技术变革（如AI、算法）对政治的颠覆性影响探讨较少。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="mt-8 bg-slate-100 rounded-lg p-5">
      <h3 className="text-sm font-bold text-slate-700 mb-2">综合评级 (置信度评估)</h3>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span>作为通识读物的价值</span>
            <span className="font-bold text-blue-600">极高 (Top 5%)</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span>理论的解释力范围</span>
            <span className="font-bold text-blue-600">中高 (解释工业时代政治模型有效，面对数字极权有待观察)</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;