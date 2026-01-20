import React, { useState } from 'react';
import { BookOpen, Globe, TrendingUp, AlertTriangle, Users, Anchor, ChevronRight, Map, Brain, BarChart3, Quote, Landmark, ArrowRight } from 'lucide-react';
import type { Route } from "./+types/Elon Musk";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "李光耀观天下" },
  ];
}
// --- Data & Content ---

const BOOK_SUMMARY = {
  title: "李光耀观天下",
  subtitle: "One Man's View of the World",
  intro: "本书是李光耀生前最后一部著作（2013年出版）。不同于普通回忆录，这是一份冷峻的地缘政治遗嘱。李光耀以其极其实用主义（Pragmatism）的视角，解剖了世界主要大国和地区的未来命运。核心逻辑基于：人口结构、文化基因与历史惯性。",
  core_methodology: [
    {
      title: "人口即命运",
      desc: "李光耀笃信人口结构决定国家兴衰。老龄化和低生育率是他判定日本和欧洲衰落的核心依据。",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: "文化决定论",
      desc: "他不相信西方民主制度的普适性，认为各国的历史文化基因（如中国的中央集权传统、印度的种姓制度）是难以逾越的结构性约束。",
      icon: <Anchor className="w-6 h-6 text-purple-500" />
    },
    {
      title: "冷酷的现实主义",
      desc: "摒弃意识形态幻想，只看硬实力（经济、军事、科技）。他眼中的国际关系本质是丛林法则下的力量平衡。",
      icon: <Brain className="w-6 h-6 text-red-500" />
    }
  ]
};

const SINGAPORE_MODEL = [
  {
    era: "1965 - 1970s",
    title: "意外的建国：求存 (Survival)",
    context: "被马来西亚'踢出'，没有任何自然资源，甚至没有水。面临印尼对抗和马共威胁。",
    strategy: "既然没有腹地，就把全世界当作腹地。",
    actions: [
      "跨越邻国，直接招揽欧美跨国公司 (MNCs) 设厂。",
      "建立强大的国防军 (毒虾理论)。",
      "以英语为工作语言，连接全球市场，尽管这牺牲了部分华文传统。"
    ],
    color: "bg-stone-50 border-stone-200"
  },
  {
    era: "1980s - 1990s",
    title: "从第三世界到第一世界：效率 (Efficiency)",
    context: "除了廉价劳动力，新加坡需要新的护城河。必须建立比周边国家更高效、更廉洁的制度。",
    strategy: "精英治国与儒家价值观的混合。",
    actions: [
      "高薪养廉，确保政府最高效运转。",
      "居者有其屋 (HDB)，将公民利益与国家存亡绑定。",
      "樟宜机场与港口扩建，成为东南亚绝对的枢纽。"
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    era: "2000s - 2010s",
    title: "全球城市：重塑 (Reinvention)",
    context: "中国崛起，低端制造流失。新加坡若不改变，就会变成一个普通的港口城市。",
    strategy: "不仅要宜业，还要宜居和有趣。",
    actions: [
      "力排众议开设综合度假胜地 (IRs/赌场) 以提振旅游业。",
      "大力发展生物医药与金融科技。",
      "大举引进移民以补充劳动力，尽管引发了国内社会的剧烈反弹。"
    ],
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    era: "Future Outlook",
    title: "脆弱的平衡：身份 (Identity)",
    context: "李光耀警告：新加坡不是一个普通国家，它的存在本身就是反常的。",
    strategy: "在这两头大象(中美)打架时，不仅要避免被踩死，还要为双方提供服务。",
    actions: [
      "维持地缘政治中立，但不放弃美国的安全保障。",
      "在这个日益分裂的世界中，如何保持多种族社会的凝聚力是最大挑战。"
    ],
    color: "bg-red-50 border-red-200"
  }
];

const REGIONAL_ANALYSIS = [
  {
    id: "china",
    region: "中国",
    theme: "强大的中央",
    prediction: "中国将寻求与美国平起平坐，但不会寻求取代美国在西半球的地位。中国面临的最大挑战是法治缺失与制度僵化，但其文化基因决定了它需要一个强大的中央政府，不可能实行西式民主。",
    validity: "高",
    validity_note: "中国崛起路径基本符合预测，但中美脱钩的剧烈程度略超其2013年的预期。",
    key_points: [
      "习是典型的'红二代'，意志坚定，将带领中国复兴。",
      "中国不会成为自由民主国家，这与5000年历史相悖。",
      "只要维持稳定和精英治国，中国将继续增长，但必须解决贫富差距和腐败。"
    ],
    color: "bg-red-50 border-red-200"
  },
  {
    id: "usa",
    region: "美国",
    theme: "陷入困境但依旧活力",
    prediction: "尽管面临债务和政治极化，美国不仅不会衰落，反而因其创新能力和吸引移民的能力保持领先。美国是唯一能不断自我更新的大国。",
    validity: "中",
    validity_note: "美国科技（AI）依旧领先，但内部政治撕裂程度已超出李光耀预警的'困境'范畴。",
    key_points: [
      "美国的创造力源于其包容的移民文化。",
      "美元霸权和军事优势在未来20-30年内难以被撼动。",
      "主要风险是财政纪律涣散和两党恶斗导致的政府瘫痪。"
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    id: "europe",
    region: "欧洲",
    theme: "走向博物馆化",
    prediction: "极度悲观。认为欧元是错误的产物（有货币联盟无财政联盟），福利制度由于工会力量过大而变得不可持续。欧洲将逐渐失去活力，变成世界的一个'大型博物馆'。",
    validity: "高",
    validity_note: "欧洲经济增长长期停滞，科技掉队，俄乌冲突进一步暴露其地缘脆弱性。",
    key_points: [
      "福利主义正在吞噬欧洲的竞争力。",
      "人口萎缩且抗拒高素质移民，导致未来黯淡。",
      "欧元区的结构性缺陷迟早会导致重大危机。"
    ],
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    id: "japan",
    region: "日本",
    theme: "平庸的漫步",
    prediction: "日本的未来由人口决定。由于拒绝移民且生育率极低，日本将不可避免地走向衰落。它将成为一个生活舒适但无足轻重的国家。",
    validity: "极高",
    validity_note: "日本至今未能解决人口危机，经济长期横盘。",
    key_points: [
      "即使是女性进入职场也无法挽救生育率。",
      "日本民族单一性是其骄傲，也是其衰落的墓志铭。",
      "将逐渐沦为美国的附庸，以求安全保护。"
    ],
    color: "bg-gray-50 border-gray-200"
  },
  {
    id: "india",
    region: "印度",
    theme: "未实现的潜能",
    prediction: "印度不是一个国家，而是32个民族的集合体。种姓制度、官僚主义和基础设施落后限制了其成为像中国那样的制造业大国。",
    validity: "中",
    validity_note: "莫迪政府推动了部分基建和改革，但结构性阻力依然巨大，制造业崛起尚需时日。",
    key_points: [
      "种姓制度是印度现代化的最大绊脚石。",
      "不要指望印度能像中国那样高效行动。",
      "由于英语优势和民主制度，它会是美国制衡中国的盟友，但不会成为西方盟友。"
    ],
    color: "bg-orange-50 border-orange-200"
  }
];

const CRITICAL_REVIEW = {
  strengths: [
    "极度诚实：不说外交辞令，直指各国痛点（如直言日本将消亡）。",
    "全球视野：将历史纵深与现实地缘政治完美结合。",
    "准确的预判：对美中博弈、欧洲衰退、日本人口危机的判断极其精准。"
  ],
  weaknesses: [
    "生物/基因决定论：过分强调种族和基因对智力、文化的影响，带有旧时代精英主义色彩，不仅政治不正确，在科学上也存在争议。",
    "对民主的过度悲观：虽然西方民主有弊端，但李光耀似乎低估了专制体制在权力交接和信息纠错上的系统性风险。",
    "忽视技术奇点：成书于2013年，主要关注传统地缘政治，未充分预见到AI、新能源对国家实力的颠覆性重构。"
  ],
  consensus: "《李光耀观天下》不是一本真理之书，而是一本思维之书。它的价值不在于每一个预测是否精准，而在于它展示了一位顶级政治家如何剥离情感，用最冷酷的逻辑去计算国家利益。对于理解当下'逆全球化'的世界，此书提供了极佳的底色。"
};

// --- Components ---

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
    <div className="p-2 bg-slate-800 rounded-lg text-white">
      {icon}
    </div>
    <div>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
  </div>
);

const InsightCard = ({ title, desc, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="mt-1 bg-slate-50 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const RegionCard = ({ data, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl mb-3 transition-all duration-300 border ${
      isActive 
        ? 'bg-slate-800 text-white border-slate-800 shadow-lg transform scale-102' 
        : 'bg-white text-slate-600 border-gray-200 hover:border-slate-300 hover:bg-slate-50'
    }`}
  >
    <div className="flex justify-between items-center">
      <span className="font-bold text-lg">{data.region}</span>
      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90' : ''}`} />
    </div>
    <div className={`text-sm mt-1 ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
      {data.theme}
    </div>
  </button>
);

const RegionDetail = ({ data }) => {
  if (!data) return null;
  return (
    <div className={`h-full p-6 rounded-2xl border-l-4 ${data.color.replace('bg-', 'border-').replace('border-', 'border-l-')} bg-white shadow-sm animate-fade-in`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-bold text-slate-900">{data.region}</h3>
          <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold tracking-wider uppercase rounded-full">
            核心判词：{data.theme}
          </span>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">置信度评级</div>
          <div className={`font-mono font-bold text-lg ${
            data.validity === '极高' ? 'text-green-600' : 
            data.validity === '高' ? 'text-emerald-600' : 
            data.validity === '中' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {data.validity}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
          <Globe className="w-4 h-4" /> 战略预测
        </h4>
        <p className="text-slate-700 leading-relaxed text-justify">
          {data.prediction}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
          <TrendingUp className="w-4 h-4" /> 关键支撑点
        </h4>
        <ul className="space-y-3">
          {data.key_points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
        <h4 className="flex items-center gap-2 font-bold text-slate-700 text-xs uppercase mb-2">
          <AlertTriangle className="w-3 h-3" /> 2025视角的验证 (Retro-Validation)
        </h4>
        <p className="text-sm text-slate-600 italic">
          "{data.validity_note}"
        </p>
      </div>
    </div>
  );
};

const SingaporeHistoryCard = ({ item, index }) => (
  <div className={`relative pl-8 pb-10 border-l-2 ${index === SINGAPORE_MODEL.length - 1 ? 'border-transparent' : 'border-slate-200'} last:pb-0`}>
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-4 border-slate-100" />
    <div className={`p-6 rounded-xl border ${item.color} hover:shadow-md transition-all`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
        <span className="px-3 py-1 bg-white/60 text-slate-600 text-xs font-mono font-bold rounded-full border border-slate-200 w-fit">
          {item.era}
        </span>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">背景 (Context)</h4>
        <p className="text-slate-700 text-sm">{item.context}</p>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">核心策略 (Strategy)</h4>
        <p className="text-slate-800 font-medium italic text-sm">"{item.strategy}"</p>
      </div>

      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">残酷对策 (Actions)</h4>
        <ul className="space-y-2">
          {item.actions.map((action, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <ArrowRight className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [activeTab, setActiveTab] = useState('analysis'); // methodology, analysis, singapore, critical
  const [selectedRegionId, setSelectedRegionId] = useState('china');

  const selectedRegionData = REGIONAL_ANALYSIS.find(r => r.id === selectedRegionId);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Hero Header */}
      <header className="bg-slate-900 text-white pt-12 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Globe size={400} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4 text-slate-400 text-sm font-medium uppercase tracking-widest">
            <BookOpen size={16} /> 深度解读
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {BOOK_SUMMARY.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-8 italic">
            {BOOK_SUMMARY.subtitle}
          </h2>
          <p className="max-w-2xl text-slate-300 text-lg leading-relaxed border-l-4 border-blue-500 pl-6">
            {BOOK_SUMMARY.intro}
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-t-xl shadow-sm border-b border-gray-100 flex overflow-x-auto no-scrollbar">
          {[
            { id: 'methodology', icon: <Brain size={18} />, label: '底层逻辑' },
            { id: 'analysis', icon: <Map size={18} />, label: '地缘推演' },
            { id: 'singapore', icon: <Landmark size={18} />, label: '新加坡模式' },
            { id: 'critical', icon: <BarChart3 size={18} />, label: '批判评估' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[120px] py-4 px-6 flex items-center justify-center gap-2 font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white shadow-xl rounded-b-xl min-h-[600px] border border-gray-100">
          
          {/* TAB 1: METHODOLOGY */}
          {activeTab === 'methodology' && (
            <div className="p-8 md:p-12 animate-fade-in">
              <SectionHeader 
                icon={<Anchor className="text-blue-200" />} 
                title="李光耀的分析透镜" 
                subtitle="理解本书必须先理解其观察世界的三个坐标轴"
              />
              <div className="grid md:grid-cols-3 gap-6">
                {BOOK_SUMMARY.core_methodology.map((item, index) => (
                  <InsightCard key={index} {...item} />
                ))}
              </div>
              <div className="mt-12 bg-slate-900 text-slate-300 p-8 rounded-xl relative overflow-hidden">
                <Quote className="absolute top-4 right-4 text-slate-800 w-16 h-16" />
                <p className="text-xl font-serif italic relative z-10 leading-relaxed text-white">
                  "人性本恶。如果不加约束，人类就会互相残杀。因此，我们必须建立制度和秩序。但在国际关系中，没有最高的权威来维持秩序，因此力量就是一切。"
                </p>
                <div className="mt-4 text-sm font-bold text-blue-400 uppercase tracking-wide">
                  —— 核心世界观
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: REGIONAL ANALYSIS */}
          {activeTab === 'analysis' && (
            <div className="flex flex-col md:flex-row h-full animate-fade-in">
              {/* Sidebar List */}
              <div className="md:w-1/3 border-r border-gray-100 p-4 bg-slate-50/50 rounded-bl-xl">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">选择区域</h3>
                {REGIONAL_ANALYSIS.map(region => (
                  <RegionCard 
                    key={region.id} 
                    data={region} 
                    isActive={selectedRegionId === region.id}
                    onClick={() => setSelectedRegionId(region.id)}
                  />
                ))}
              </div>
              
              {/* Detail View */}
              <div className="md:w-2/3 p-6 md:p-8 bg-white rounded-br-xl">
                <RegionDetail data={selectedRegionData} />
              </div>
            </div>
          )}

          {/* TAB 3: SINGAPORE HISTORY */}
          {activeTab === 'singapore' && (
            <div className="p-8 md:p-12 animate-fade-in">
              <SectionHeader 
                icon={<Landmark className="text-blue-200" />} 
                title="新加坡模式：脆弱的奇迹" 
                subtitle="从“意外的国家”到“全球城市”的生存逻辑演变"
              />
              <div className="max-w-3xl mx-auto mt-8">
                {SINGAPORE_MODEL.map((item, index) => (
                  <SingaporeHistoryCard key={index} item={item} index={index} />
                ))}
              </div>
              <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-sm">
                <strong>💡 核心启示：</strong> 新加坡的成功并非因为它是“民主灯塔”，而是因为它是一个极致的“效率机器”。每一项政策（英语教育、高薪养廉、公积金）都直接服务于唯一的目的：在这个对小国不友好的世界中生存下去。
              </div>
            </div>
          )}

          {/* TAB 4: CRITICAL REVIEW */}
          {activeTab === 'critical' && (
            <div className="p-8 md:p-12 animate-fade-in">
              <SectionHeader 
                icon={<AlertTriangle className="text-blue-200" />} 
                title="批判性评估" 
                subtitle="摒弃盲从：客观审视本书的时代局限与价值"
              />
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Strengths */}
                <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                  <h3 className="flex items-center gap-2 font-bold text-emerald-800 text-lg mb-4">
                    <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                    优势 (Strengths)
                  </h3>
                  <ul className="space-y-4">
                    {CRITICAL_REVIEW.strengths.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-emerald-900/80 text-sm leading-relaxed">
                        <span className="mt-1 w-4 h-4 rounded-full border border-emerald-300 flex items-center justify-center text-[10px] flex-shrink-0 text-emerald-600 font-bold">{i+1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                  <h3 className="flex items-center gap-2 font-bold text-red-800 text-lg mb-4">
                    <span className="w-2 h-6 bg-red-500 rounded-full"></span>
                    劣势与风险 (Risks)
                  </h3>
                  <ul className="space-y-4">
                    {CRITICAL_REVIEW.weaknesses.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-red-900/80 text-sm leading-relaxed">
                        <span className="mt-1 w-4 h-4 rounded-full border border-red-300 flex items-center justify-center text-[10px] flex-shrink-0 text-red-600 font-bold">{i+1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">总结与共识</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {CRITICAL_REVIEW.consensus}
                </p>
              </div>
            </div>
          )}

        </div>
        
        {/* Footer Info */}
        <div className="text-center mt-12 text-slate-400 text-sm">
          <p>© LKY Global Lens Analysis • Created for Deep Reading</p>
        </div>
      </main>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;