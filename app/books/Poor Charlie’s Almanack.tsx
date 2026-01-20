import React, { useState } from 'react';
import { BookOpen, Brain, TrendingUp, AlertTriangle, CheckCircle, XCircle, ChevronDown, ChevronUp, Scale, Lightbulb, User } from 'lucide-react';
import type { Route } from "./+types/Poor Charlie’s Almanack";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "穷查理宝典" },
  ];
}

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedBias, setExpandedBias] = useState(null);

  // 核心导航
  const tabs = [
    { id: 'overview', label: '全书概览', icon: BookOpen },
    { id: 'models', label: '多元思维模型', icon: Brain },
    { id: 'psychology', label: '误判心理学', icon: AlertTriangle },
    { id: 'investment', label: '投资与策略', icon: TrendingUp },
    { id: 'critical', label: '批判性评估', icon: Scale },
  ];

  // 误判心理学数据
  const biases = [
    {
      id: 1,
      title: "奖励/惩罚超级反应倾向 (Reward/Punishment Superresponse)",
      desc: "人们对激励机制的反应往往超出想象。如果你想说服别人，要诉诸利益，而非诉诸理性。",
      application: "在管理中设计正确的激励机制至关重要，错误的激励会引发道德风险（如联邦快递的计件付费案例）。"
    },
    {
      id: 2,
      title: "喜爱/热爱倾向 (Liking/Loving Tendency)",
      desc: "人类倾向于忽略自己喜爱对象的缺点，并为了爱而扭曲事实。",
      application: "投资时切忌爱上你的股票。保持客观，像评审员一样审视公司。"
    },
    {
      id: 3,
      title: "讨厌/憎恨倾向 (Disliking/Hating Tendency)",
      desc: "人类倾向于忽略自己讨厌对象的优点，并扭曲事实以支持自己的憎恨。",
      application: "政治极化和商业竞争中的非理性攻击往往源于此。不要让情绪蒙蔽了对手的真实实力。"
    },
    {
      id: 4,
      title: "避免不一致性倾向 (Inconsistency-Avoidance Tendency)",
      desc: "大脑倾向于不愿意改变之前的结论，因为重新编程太累了。这也是“第一结论偏见”的来源。",
      application: "在这个变化的世界，必须拥有“强观点，弱坚持”的能力。定期审视并清理旧有的观念。"
    },
    {
      id: 5,
      title: "社会认同倾向 (Social-Proof Tendency)",
      desc: "在面临不确定性时，人类会自动模仿周围人的行为。",
      application: "股市泡沫的根源。当别人贪婪时，通过独立思考来克服盲从。"
    }
  ];

  // 思维模型数据
  const models = [
    {
      discipline: "数学",
      concept: "复利原理 & 排列组合",
      insight: "理解指数增长的威力；用概率树（决策树）来计算期望值，而不是凭直觉赌博。"
    },
    {
      discipline: "物理学",
      concept: "临界质量 & 冗余备份",
      insight: "就像核裂变需要达到临界质量，商业成功也需要达到规模效应（Lollapalooza效应）。工程学的冗余备份则是安全边际的来源。"
    },
    {
      discipline: "生物学",
      concept: "自然选择 & 生态位",
      insight: "企业像物种一样竞争。如果你不能成为第一或第二，由于竞争毁灭性，你可能会消亡。找到你的细分生态位。"
    },
    {
      discipline: "心理学",
      concept: "认知偏差清单",
      insight: "如果不了解大脑是如何欺骗你的，你就像赤手空拳走进枪战。这是最重要的模型。"
    }
  ];

  // 批判性分析数据
  const critique = [
    {
      perspective: "执行难度",
      verdict: "极高",
      analysis: "芒格的方法要求掌握多学科核心知识，这需要极高的智商和反人性的纪律。对于大多数普通人，这可能导致'样样通，样样松'。",
      confidence: "高"
    },
    {
      perspective: "现代科技适用性",
      verdict: "中等",
      analysis: "芒格长期回避科技股（虽然晚年投资了阿里），他的模型偏向于传统的、可预测的商业护城河。在指数级颠覆式创新的今天，过分强调保守可能会错失时代红利。",
      confidence: "中"
    },
    {
      perspective: "普世价值",
      verdict: "极高",
      analysis: "关于诚实、守信、终身学习、逆向思维的建议，无论时代如何变迁，都是高置信度的人生最优解。",
      confidence: "极高"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="bg-slate-900 text-slate-100 py-8 px-4 border-b-4 border-amber-600 sticky top-0 z-50 shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">
              穷查理宝典 <span className="text-amber-500 text-lg md:text-2xl font-normal ml-2">深度解读</span>
            </h1>
            <p className="text-slate-400 mt-2 text-sm font-medium tracking-wide">
              THE WIT AND WISDOM OF CHARLES T. MUNGER
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-amber-600 text-white shadow-md transform scale-105'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 pb-20">
        
        {/* Content: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lightbulb className="text-amber-600" />
                第一性原理拆解
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                《穷查理宝典》并非一本单纯的投资指南，其本质是一套<strong>关于“如何思考”的操作系统</strong>。
                芒格的核心思想可以归纳为：通过极度的理性和多元学科的视角，去理解世界运行的底层逻辑，从而避免愚蠢的错误。
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-slate-900 mb-2">多元思维模型</h3>
                  <p className="text-sm text-slate-600">
                    手持锤子的人，看什么都是钉子。你必须拥有各种工具（来自物理、数学、心理学等）来解决复杂问题。
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-slate-900 mb-2">逆向思维</h3>
                  <p className="text-sm text-slate-600">
                    “我只想知道我会死在哪里，这样我就永远不去那个地方。” 解决问题的最好方式往往是反过来想。
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-slate-900 mb-2">Lollapalooza 效应</h3>
                  <p className="text-sm text-slate-600">
                    多种因素共同作用于同一个方向时，会产生爆炸性的非线性结果（好坏皆然）。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-200 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif text-amber-500 mb-4">查理·芒格语录选摘</h3>
              <blockquote className="italic text-xl leading-relaxed border-l-4 border-amber-500 pl-6 my-4">
                "如果我知道我会死在哪里，那我就永远不去那个地方。"
              </blockquote>
              <blockquote className="italic text-xl leading-relaxed border-l-4 border-amber-500 pl-6 my-4">
                "不需要非常聪明，只要日复一日地比别人稍微不那么愚蠢一点点，长此以往，你会得到惊人的回报。"
              </blockquote>
            </div>
          </div>
        )}

        {/* Content: Models */}
        {activeTab === 'models' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">思维格栅理论 (Mental Latticework)</h2>
              <p className="text-slate-600 mb-6">
                芒格认为，你需要将通过学习获得的这些模型，挂在头脑中的格栅上。如果只是死记硬背孤立的事实，它们在遇到实际问题时毫无用处。
              </p>
              
              <div className="grid gap-4">
                {models.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row bg-slate-50 hover:bg-slate-100 transition-colors p-5 rounded-lg border border-slate-200">
                    <div className="md:w-32 flex-shrink-0 font-bold text-slate-400 uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-0 md:pt-1">
                      {item.discipline}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{item.concept}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.insight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <CheckCircle size={18} />
                如何建立这种格栅？
              </h3>
              <ul className="list-disc list-inside text-amber-900/80 space-y-2 text-sm">
                <li>阅读传记：看伟大的人是如何思考和决策的。</li>
                <li>跨学科阅读：不要只读商业书，要读物理学导论、生物学进化论、心理学教材。</li>
                <li>核对清单：遇到问题时，强制自己过一遍“主要学科模型清单”。</li>
              </ul>
            </div>
          </div>
        )}

        {/* Content: Psychology */}
        {activeTab === 'psychology' && (
          <div className="space-y-6 animate-fade-in">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-100 text-red-600 rounded-full">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900">人类误判心理学</h2>
                  <p className="text-slate-600 mt-1">
                    这是芒格原创性最高的贡献。他总结了25种导致人类做出非理性决策的心理倾向。
                    <span className="font-medium text-slate-800"> 点击下方卡片查看详情与应用：</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {biases.map((bias) => (
                  <div key={bias.id} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedBias(expandedBias === bias.id ? null : bias.id)}
                      className="w-full flex justify-between items-center p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-700">{bias.id}. {bias.title}</span>
                      {expandedBias === bias.id ? <ChevronUp size={20} className="text-slate-400"/> : <ChevronDown size={20} className="text-slate-400"/>}
                    </button>
                    {expandedBias === bias.id && (
                      <div className="p-4 bg-white border-t border-slate-100">
                        <p className="text-slate-700 mb-3">{bias.desc}</p>
                        <div className="bg-blue-50 p-3 rounded text-sm text-blue-800 flex gap-2">
                          <Lightbulb size={16} className="flex-shrink-0 mt-0.5" />
                          <span><strong>现实应用：</strong> {bias.application}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-400 text-sm mt-6">注：此处仅列举了最核心的5条，全书共25条。</p>
            </div>
          </div>
        )}

        {/* Content: Investment */}
        {activeTab === 'investment' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-green-600" />
                  投资原则
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-bold text-slate-300 text-xl">01</span>
                    <div>
                      <h4 className="font-bold text-slate-800">能力圈 (Circle of Competence)</h4>
                      <p className="text-sm text-slate-600">知道自己不知道什么，比聪明更重要。如果不理解该业务，就归入“太难”一类，直接放弃。</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-slate-300 text-xl">02</span>
                    <div>
                      <h4 className="font-bold text-slate-800">护城河 (Moat)</h4>
                      <p className="text-sm text-slate-600">寻找拥有持久竞争优势的企业。这种优势可能来自品牌、专利、网络效应或低成本。</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-slate-300 text-xl">03</span>
                    <div>
                      <h4 className="font-bold text-slate-800">安全边际 (Margin of Safety)</h4>
                      <p className="text-sm text-slate-600">用4毛钱买1块钱的东西。即使你的估算有误，也不至于亏损。</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">关于“坐等”的艺术</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    芒格著名的观点是：<strong>不需要频繁操作</strong>。
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    "如果把我们最成功的10笔投资去掉，我们就是个笑话。"
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    这意味着你需要极度的耐心等待好机会，一旦机会出现（赔率极高），就要有勇气下重注。这与华尔街推崇的“分散投资”截然相反。
                  </p>
                </div>
                <div className="mt-6 p-4 bg-slate-100 rounded text-center text-sm font-mono text-slate-500">
                  <span className="block mb-1">Total Bets Needed in a Lifetime:</span>
                  <span className="text-3xl font-bold text-slate-900">20 PUNCHES</span>
                  <span className="block mt-1">打孔卡理论</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content: Critical Analysis */}
        {activeTab === 'critical' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="text-slate-700" size={28} />
                <h2 className="text-2xl font-serif font-bold text-slate-900">批判性评估报告</h2>
              </div>
              
              <p className="mb-6 text-slate-600">
                尽管《穷查理宝典》被奉为经典，但没有任何一种思想体系是完美的。基于当前环境与普通人的实际情况，我们对其理念进行客观审视。
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="py-3 px-4 text-sm font-bold text-slate-900 uppercase tracking-wide">评估维度</th>
                      <th className="py-3 px-4 text-sm font-bold text-slate-900 uppercase tracking-wide">评级</th>
                      <th className="py-3 px-4 text-sm font-bold text-slate-900 uppercase tracking-wide">深度解析</th>
                      <th className="py-3 px-4 text-sm font-bold text-slate-900 uppercase tracking-wide w-24">置信度</th>
                    </tr>
                  </thead>
                  <tbody>
                    {critique.map((item, index) => (
                      <tr key={index} className="border-b border-slate-200 hover:bg-white transition-colors">
                        <td className="py-4 px-4 font-medium text-slate-800">{item.perspective}</td>
                        <td className="py-4 px-4">
                           <span className={`px-2 py-1 rounded text-xs font-bold ${
                             item.verdict.includes('高') ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                           }`}>
                             {item.verdict}
                           </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-slate-600 leading-relaxed">{item.analysis}</td>
                        <td className="py-4 px-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-full h-1.5 rounded-full overflow-hidden bg-slate-200`}>
                              <div 
                                className={`h-full ${
                                  item.confidence === '极高' ? 'bg-green-500 w-full' : 
                                  item.confidence === '高' ? 'bg-green-500 w-3/4' : 
                                  'bg-yellow-500 w-1/2'
                                }`}
                              ></div>
                            </div>
                            <span className="text-xs text-slate-400 mt-1">{item.confidence}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <XCircle size={18} className="text-red-500" />
                潜在的幸存者偏差风险
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                我们必须承认，芒格的成功有其特定的历史背景（美国经济腾飞的黄金时期）。如果不加分辨地模仿其“集中持股”和“极度保守”的策略，在没有伯克希尔那样源源不断的保险浮存金支持下，普通投资者可能会面临灭顶之灾。他的智慧更多应应用于<strong>决策质量的提升</strong>，而非生搬硬套其具体的投资组合。
              </p>
            </div>
          </div>
        )}

      </main>

      <footer className="bg-slate-900 text-slate-400 py-10 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-serif italic text-lg mb-4 text-slate-300">
            "我没有什么要补充的了。" (I have nothing to add.)
          </p>
          <p className="text-sm opacity-60">
            —— 查理·芒格 (1924 - 2023)
          </p>
          <div className="mt-8 text-xs border-t border-slate-800 pt-4">
            <p>Generated by AI Assistant • Deep Analysis of "Poor Charlie's Almanack"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;