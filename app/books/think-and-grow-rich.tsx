import React, { useState } from 'react';
import { BookOpen, Brain, Target, Users, Zap, AlertTriangle, CheckCircle, XCircle, ArrowRight, BarChart, Eye, Activity } from 'lucide-react';
import type { Route } from "./+types/think-and-grow-rich";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "思考致富" },
  ];
}
// Color palette constants
const COLORS = {
  primary: "text-amber-600",
  bgPrimary: "bg-amber-600",
  bgPrimaryLight: "bg-amber-50",
  bgDark: "bg-slate-900",
  textDark: "text-slate-800",
  textLight: "text-slate-600",
  border: "border-slate-200"
};

const Section = ({ title, icon: Icon, children, className = "" }) => (
  <section className={`mb-16 ${className}`}>
    <div className="flex items-center gap-3 mb-6 border-b pb-4 border-slate-200">
      <Icon className={`w-8 h-8 ${COLORS.primary}`} />
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
    </div>
    {children}
  </section>
);

const PrincipleCard = ({ number, title, original, modern, actionable }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-slate-800">
        <span className="text-amber-600 mr-2">#{number}</span>
        {title}
      </h3>
    </div>
    <div className="space-y-4">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">原书核心 (Original Concept)</p>
        <p className="text-slate-700 italic">"{original}"</p>
      </div>
      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
        <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">第一性原理/科学视角</p>
        <p className="text-sm text-slate-600">{modern}</p>
      </div>
      <div>
        <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">行动指南</p>
        <p className="text-sm text-slate-700">{actionable}</p>
      </div>
    </div>
  </div>
);

const CritiquePoint = ({ type, title, content }) => (
  <div className={`p-4 rounded-lg border-l-4 ${type === 'pro' ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50'}`}>
    <div className="flex items-center gap-2 mb-2">
      {type === 'pro' ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <AlertTriangle className="w-5 h-5 text-red-600" />}
      <h4 className={`font-bold ${type === 'pro' ? 'text-emerald-800' : 'text-red-800'}`}>{title}</h4>
    </div>
    <p className={`text-sm ${type === 'pro' ? 'text-emerald-700' : 'text-red-700'}`}>{content}</p>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('framework');
  const [checklist, setChecklist] = useState({});

  const toggleCheck = (id) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateScore = () => {
    const total = 13;
    const checked = Object.values(checklist).filter(Boolean).length;
    return Math.round((checked / total) * 100);
  };

  const principles = [
    {
      id: 1,
      title: "欲望 (Desire)",
      original: "想要致富的起跑点，不是希望或愿望，而是一种让一切退路的极度渴望。",
      modern: "多巴胺驱动的奖励预测误差机制。明确的目标会激活网状激活系统（RAS），使大脑过滤掉无关信息，专注于机会。",
      actionable: "写下具体的目标金额、截止日期和为此愿意付出的代价。不要说'我想有钱'，要说'我要在2026年12月31日前通过销售软件赚取100万元'。"
    },
    {
      id: 2,
      title: "信心 (Faith)",
      original: "视觉化并相信愿望必将实现。信心是思想的化学家。",
      modern: "自我效能感（Self-Efficacy）。心理学研究表明，相信自己能完成任务是预测成功的关键指标。这是一种积极的心理暗示机制。",
      actionable: "每天进行'心理演练'，想象成功后的具体场景和感受，以此欺骗杏仁核降低对失败的恐惧。"
    },
    {
      id: 3,
      title: "自我暗示 (Auto-suggestion)",
      original: "通过反复的肯定或指令触达潜意识。",
      modern: "神经可塑性（Neuroplasticity）与认知重构。重复的思维模式会加强神经元连接（赫布理论：一同激发的神经元连在一起）。",
      actionable: "早晚朗读你的目标声明。必须带有强烈的情绪，机械式的朗读对大脑刺激不足。"
    },
    {
      id: 4,
      title: "专业知识 (Specialized Knowledge)",
      original: "知识本身不是力量，只有组织起来指向特定目标时才是力量。",
      modern: "区分'信息'与'洞察'。在信息过载时代，特定领域的深度知识（T型人才）比通识更具变现价值。",
      actionable: "停止盲目学习。根据你的目标，列出最急需填补的技能缺口，通过付费咨询或针对性课程快速获取。"
    },
    {
      id: 5,
      title: "想象力 (Imagination)",
      original: "综合型想象力重组旧概念，创造型想象力接收新灵感。",
      modern: "发散性思维与模式识别。创新往往是现有元素的重新组合（组合进化）。",
      actionable: "每周进行一次'假如...会怎样'的思维练习。尝试将你所在行业的痛点与其他行业的解决方案结合。"
    },
    {
      id: 6,
      title: "精心策划 (Organized Planning)",
      original: "欲望结晶为行动的过程。如果没有计划，你只是在做梦。",
      modern: "执行功能（Executive Function）。将宏大目标拆解为最小可行性步骤（MVP）和关键结果（OKRs）。",
      actionable: "组建你的智囊团来审核你的计划。如果第一个计划失败了，立刻换第二个，不要更换目标。"
    },
    {
      id: 7,
      title: "决心 (Decision)",
      original: "拖延是决心的死敌。成功者决策迅速，改变缓慢。",
      modern: "决策疲劳与机会成本。快速决策减少了认知资源的消耗，并能更快获得市场反馈（精益创业逻辑）。",
      actionable: "对于非关键决策（如吃什么、穿什么），要在30秒内决定。对于关键决策，设定死线，信息收集到70%即刻拍板。"
    },
    {
      id: 8,
      title: "毅力 (Persistence)",
      original: "意志力与欲望结合的产物。大多数人在第一次挫折时就放弃了。",
      modern: "成长型思维（Growth Mindset）与GRIT（坚毅）。将失败重新定义为'数据反馈'而非'个人能力缺陷'。",
      actionable: "当你想放弃时，记录下触发该情绪的'触发器'。通常是因为疲劳或暂时的混乱，而非任务不可行。"
    },
    {
      id: 9,
      title: "智囊团 (Power of the Master Mind)",
      original: "协调两个或更多人的知识和努力，以和谐的精神为特定目标努力。",
      modern: "分布式认知与网络效应。群体的智慧（在特定条件下）优于个体，且能提供情感支持和社会监督。",
      actionable: "寻找3-5个与你互补（性格、技能）且价值观一致的人，每周固定时间复盘进度。必须是'和谐'的，避免内耗。"
    },
    {
      id: 10,
      title: "性冲动转化 (Sex Transmutation)",
      original: "性欲是人类最强烈的驱动力，将其转化为创造性活动。",
      modern: "升华作用（Sublimation）。弗洛伊德心理学概念。将高唤醒度的生理能量导向社会认可的创造性工作。",
      actionable: "当你感到精力旺盛或躁动时，不要单纯发泄，尝试立即投入到高强度的创造性工作中，利用这种'驱动力'。"
    },
    {
      id: 11,
      title: "潜意识 (The Subconscious Mind)",
      original: "连接有限思维与无限智慧的桥梁。",
      modern: "内隐记忆与系统1思维（快思考）。大脑95%的运作在意识之下，训练直觉以辅助决策。",
      actionable: "在睡前给潜意识下达指令（提出一个未解的问题），利用睡眠时的记忆整合机制寻找答案。"
    },
    {
      id: 12,
      title: "大脑 (The Brain)",
      original: "思想的广播站和接收站。",
      modern: "镜像神经元与社会脑假说。我们需要通过观察和模拟他人来学习和调整状态。",
      actionable: "主动置身于高能量、高认知的环境中。环境对大脑的'广播'影响大于你的意志力。"
    },
    {
      id: 13,
      title: "第六感 (The Sixth Sense)",
      original: "创造性想象力的顶点，灵感闪现。",
      modern: "专家直觉。基于大量经验积累后的快速模式匹配（Pattern Matching）。",
      actionable: "在精通前12条原则之前，不要迷信第六感。这是量变到质变的结果，不是玄学。"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-amber-200">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-3 py-1 bg-amber-900/50 border border-amber-600/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
            拿破仑·希尔 (Napoleon Hill) · 1937
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            深度解读 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">《思考致富》</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            超越“成功学”的喧嚣，用<span className="text-white font-semibold">第一性原理</span>与<span className="text-white font-semibold">现代心理学</span>重构这一经典致富框架。
          </p>
        </div>
      </header>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-8 min-w-max">
            {['framework', 'critique', 'assessment'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab === 'framework' && '核心框架 (The 13 Steps)'}
                {tab === 'critique' && '批判性评估 (Critical Review)'}
                {tab === 'assessment' && '行动自测 (Assessment)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Tab Content: Framework */}
        {activeTab === 'framework' && (
          <div className="animate-fade-in">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-lg">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                第一性原理拆解
              </h3>
              <p className="text-amber-800 leading-relaxed">
                本书的底层逻辑并非“魔法”，而是一套<strong>“心理编程算法”</strong>：
                <br />
                <span className="font-mono text-sm bg-amber-100 px-2 py-1 rounded mt-2 inline-block">
                  强烈的情绪化目标 (输入) + 重复暗示 (重写代码) + 专业计划与行动 (输出) = 现实结果
                </span>
              </p>
            </div>

            <Section title="思维重构 (Mindset)" icon={Brain}>
              <div className="grid gap-6">
                {principles.slice(0, 3).map(p => <PrincipleCard key={p.id} number={p.id} {...p} />)}
              </div>
            </Section>

            <Section title="知识与策略 (Strategy)" icon={Target}>
              <div className="grid gap-6">
                {principles.slice(3, 7).map(p => <PrincipleCard key={p.id} number={p.id} {...p} />)}
              </div>
            </Section>

            <Section title="持久化与动力 (Sustainability)" icon={Zap}>
              <div className="grid gap-6">
                {principles.slice(7, 10).map(p => <PrincipleCard key={p.id} number={p.id} {...p} />)}
              </div>
            </Section>
             <Section title="潜意识机制 (Mechanism)" icon={Eye}>
              <div className="grid gap-6">
                {principles.slice(10, 13).map(p => <PrincipleCard key={p.id} number={p.id} {...p} />)}
              </div>
            </Section>
          </div>
        )}

        {/* Tab Content: Critique */}
        {activeTab === 'critique' && (
          <div className="animate-fade-in space-y-8">
            <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Activity className="mr-3 text-amber-500" />
                客观性审查报告
              </h2>
              <p className="mb-4">
                《思考致富》出版于1937年，尽管被誉为“成功学鼻祖”，但必须在现代语境下进行剥离清洗。我们不应全盘接受，而应取其精华，去其糟粕。
              </p>
              <div className="flex items-center gap-4 text-sm font-mono">
                <span className="bg-slate-800 px-3 py-1 rounded">置信度评级: 中高 (心理层面)</span>
                <span className="bg-slate-800 px-3 py-1 rounded">置信度评级: 低 (玄学层面)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800 border-b pb-2">优势与共识 (Pros)</h3>
                <CritiquePoint 
                  type="pro" 
                  title="心理学上的自我效能感" 
                  content="书中强调的'信心'与现代心理学的'自我效能感'高度一致。相信自己能成功，确实能显著提高任务完成率和抗挫折能力。" 
                />
                <CritiquePoint 
                  type="pro" 
                  title="网状激活系统 (RAS) 的应用" 
                  content="虽然希尔没有使用这个术语，但他描述的'明确主要目标'实际上是在编程大脑的RAS，帮助我们在混乱信息中识别机会。" 
                />
                <CritiquePoint 
                  type="pro" 
                  title="智囊团 (Mastermind) 概念" 
                  content="这是现代董事会、互助小组和创业孵化器的雏形。强调环境和同伴对个人成长的决定性作用，已被广泛验证。" 
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800 border-b pb-2">劣势与风险 (Cons)</h3>
                <CritiquePoint 
                  type="con" 
                  title="幸存者偏差 (Survivorship Bias)" 
                  content="希尔研究了500位成功人士，但他没有研究那5000位同样拥有'强烈欲望'和'信心'却失败了的人。成功的必要条件不等于充分条件。" 
                />
                <CritiquePoint 
                  type="con" 
                  title="受害者有罪论的逻辑陷阱" 
                  content="书中的逻辑推演到极致会变成：'你之所以贫穷/生病，是因为你的意念不够强或潜意识有问题'。这忽视了宏观经济、运气和系统性不公的影响。" 
                />
                <CritiquePoint 
                  type="con" 
                  title="伪科学与夸大" 
                  content="关于'思想振动'、'心灵感应'以及希尔本人关于其采访安德鲁·卡内基真实性的争议，需要读者保持警惕。不要迷信书中的玄学部分。" 
                />
              </div>
            </div>

            <div className="mt-8 bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-2">多视角专家推演结论</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>历史学家视角：</strong> 这是一本大萧条时期的"心灵鸡汤"，旨在重建美国人的信心，具有时代局限性。<br/><br/>
                <strong>神经科学家视角：</strong> 去掉"宇宙震动"的外衣，它实际上是一本早期的认知行为疗法（CBT）手册，教你如何管理注意力及重构认知。<br/><br/>
                <strong>企业家视角：</strong> 不要把它当成"许愿书"，要把它当成"项目管理书"。将"欲望"视为愿景(Vision)，"精心策划"视为执行(Execution)，"智囊团"视为团队(Team)。
              </p>
            </div>
          </div>
        )}

        {/* Tab Content: Assessment */}
        {activeTab === 'assessment' && (
          <div className="animate-fade-in">
             <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center mb-8">
               <div className="text-5xl font-bold text-amber-600 mb-2">{calculateScore()}%</div>
               <p className="text-slate-500">你的《思考致富》践行指数</p>
               <div className="w-full bg-slate-100 rounded-full h-2.5 mt-4 overflow-hidden">
                  <div className="bg-amber-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${calculateScore()}%` }}></div>
               </div>
             </div>

             <div className="space-y-2">
                {principles.map((p) => (
                  <label key={p.id} className="flex items-start p-4 bg-white border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex items-center h-5 mt-1">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                        checked={!!checklist[p.id]}
                        onChange={() => toggleCheck(p.id)}
                      />
                    </div>
                    <div className="ml-4">
                      <span className="block text-sm font-medium text-slate-900">{p.title}</span>
                      <span className="block text-xs text-slate-500 mt-1">{p.actionable}</span>
                    </div>
                  </label>
                ))}
             </div>
             
             <div className="mt-8 p-6 bg-slate-100 rounded-lg text-center">
                <p className="text-slate-600 text-sm">
                  <AlertTriangle className="w-4 h-4 inline mr-1 text-amber-500" />
                  注意：得高分并不保证致富。这只是衡量你是否建立了一套系统的目标达成框架。真正的结果取决于在现实世界的持续行动。
                </p>
             </div>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4 text-sm">
            基于 Napoleon Hill 《Think and Grow Rich》整理
          </p>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            免责声明：本页面旨在从心理学和管理学角度解读经典著作，不构成任何投资或财务建议。致富存在风险，成功不可复制。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;