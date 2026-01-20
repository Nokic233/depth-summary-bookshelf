import React, { useState } from 'react';
import { BookOpen, Rocket, Zap, Brain, AlertTriangle, Cpu, Globe, Anchor, ChevronRight, Scale, Terminal, Factory, Code, DollarSign, X } from 'lucide-react';

// 核心数据结构：章节与深度解读
const contentData = {
  principles: [
    {
      step: 1,
      title: "质疑每一项要求",
      desc: "无论要求来自谁（即使是马斯克本人），都要质疑。聪明的工程师最容易被错误的要求误导，因为他们只会优化，不会质疑源头。",
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />
    },
    {
      step: 2,
      title: "删除部件与流程",
      desc: "如果最后你不把10%删掉的东西加回来，说明你删得还不够多。宁可误删后补救，也不要为了保险而保留累赘。",
      icon: <Zap className="w-6 h-6 text-red-400" />
    },
    {
      step: 3,
      title: "简化与优化",
      desc: "只有在删除了不必要的部分后，才能开始优化。很多错误在于优化原本就不该存在的东西。",
      icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
      step: 4,
      title: "加快迭代周期",
      desc: "只有在前三步完成后才能加速。不要加速挖掘你坟墓的过程。",
      icon: <Rocket className="w-6 h-6 text-purple-400" />
    },
    {
      step: 5,
      title: "自动化",
      desc: "最后一步才是自动化。在流程稳定之前就自动化，只会放大混乱。",
      icon: <Terminal className="w-6 h-6 text-green-400" />
    }
  ],
  psyche: [
    {
      title: "恶魔模式 (Demon Mode)",
      content: "这是一种缺乏同理心、极度专注且带有破坏性的心理状态。在这种状态下，马斯克能做出极度理性的残酷决策（如推特大裁员、SpaceX危机时刻），但也伴随着对他人的羞辱和混乱。艾萨克森认为，这种黑暗面与他的驱动力密不可分。",
      type: "risk"
    },
    {
      title: "痛苦成瘾",
      content: "童年在南非遭受的霸凌和父亲埃罗尔·马斯克的影响，使他将“戏剧性”和“危机”视为常态。如果生活太安逸，他会潜意识地制造危机（例如在特斯拉最顺利时收购推特）。平静让他感到不安。",
      type: "origin"
    },
    {
      title: "甚至不错误的愿景",
      content: "他对“人类多行星化”和“可持续能源”的追求并非作秀，而是一种近乎宗教般的生存焦虑。这种宏大叙事使他能吸引顶尖人才忍受他的苛刻，但也让他经常忽视具体的个体痛苦。",
      type: "vision"
    }
  ],
  timeline: [
    {
      year: "1995-1999",
      title: "硬核编码与第一桶金",
      company: "Zip2 & X.com (PayPal)",
      desc: "睡在办公室，并在半夜重写员工的代码。在蜜月期被PayPal董事会罢免CEO职位，但他选择保留股份并冷静离场，这笔钱成为了日后火星梦的燃料。",
      icon: <Code className="w-5 h-5" />,
      color: "border-gray-500"
    },
    {
      year: "2002",
      title: "俄罗斯的羞辱与SpaceX诞生",
      company: "SpaceX",
      desc: "去俄罗斯买洲际导弹被羞辱后，他在回程飞机上用电子表格计算出火箭原材料成本，得出结论：只能自己造。不仅要造，还要能回收。",
      icon: <Rocket className="w-5 h-5" />,
      color: "border-blue-500"
    },
    {
      year: "2008",
      title: "至暗时刻",
      company: "SpaceX & Tesla",
      desc: "SpaceX前三次发射全部爆炸，Tesla资金链断裂。他在圣诞节前夕几近崩溃，最终赌上最后身家。第四次发射成功拯救了一切。",
      icon: <DollarSign className="w-5 h-5" />,
      color: "border-red-500"
    },
    {
      year: "2018",
      title: "量产地狱 (Production Hell)",
      company: "Tesla Model 3",
      desc: "为了解决自动化失败带来的产能瓶颈，他搬进工厂睡在桌子底下。他在停车场的帐篷里搭建了一条临时生产线，也就是在这时，“恶魔模式”全面开启。",
      icon: <Factory className="w-5 h-5" />,
      color: "border-red-600"
    },
    {
      year: "2022",
      title: "冲动收购与意识形态之战",
      company: "Twitter (X)",
      desc: "出于对“觉醒病毒”导致文明衰落的恐惧，以及由于生活过于平静而产生的躁动，他冲动收购了推特。随后进行了极其残酷的裁员和硬核文化重塑。",
      icon: <X className="w-5 h-5" />,
      color: "border-white"
    }
  ]
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 border-l-4 border-white pl-4">
    <h2 className="text-3xl font-bold tracking-tighter text-white uppercase">{title}</h2>
    <p className="text-gray-400 mt-1 font-mono text-sm">{subtitle}</p>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-neutral-900 border border-neutral-800 p-6 rounded-lg shadow-xl hover:border-neutral-600 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const TimelineItem = ({ data, isLast }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full bg-neutral-800 border-2 ${data.color} flex items-center justify-center text-white shrink-0 z-10`}>
        {data.icon}
      </div>
      {!isLast && <div className="w-0.5 h-full bg-neutral-800 my-2"></div>}
    </div>
    <div className="pb-12">
      <div className="flex flex-wrap items-baseline gap-2 mb-1">
        <span className="text-2xl font-bold text-white font-mono">{data.year}</span>
        <span className={`text-sm font-bold px-2 py-0.5 rounded bg-neutral-800 ${data.color.replace('border', 'text')}`}>
          {data.company}
        </span>
      </div>
      <h4 className="text-xl font-bold text-gray-200 mb-2">{data.title}</h4>
      <p className="text-gray-400 leading-relaxed max-w-2xl text-sm md:text-base">
        {data.desc}
      </p>
    </div>
  </div>
);

export default function MuskBiographyAnalysis() {
  const [activeTab, setActiveTab] = useState('algorithm');

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-white selection:text-black">
      
      {/* Hero Section */}
      <header className="relative h-screen max-h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4 z-10">
          ELON MUSK
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl z-10 font-light">
          《马斯克传》深度解读：<br/>
          <span className="text-white font-medium">天才、疯子与那个被称为“算法”的魔鬼</span>
        </p>
        <div className="mt-8 flex gap-4 z-10">
          <button 
            onClick={() => document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <BookOpen size={18} /> 开始解码
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main id="analysis" className="max-w-6xl mx-auto px-4 py-16 space-y-24">

        {/* Introduction Context */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="传记背景" subtitle="CONTEXT & ORIGIN" />
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                沃尔特·艾萨克森（Walter Isaacson）历时两年贴身跟访，见证了SpaceX的星舰发射、特斯拉的量产地狱以及推特收购案的混乱现场。
              </p>
              <div className="bg-neutral-900 p-4 border-l-2 border-blue-500">
                <p className="italic text-gray-400">
                  “他不仅是一个想要拯救世界的人，也是一个需要不断通过制造危机来填补内心空洞的人。”
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="flex flex-col items-center justify-center text-center p-8">
                <Brain className="w-12 h-12 mb-4 text-white" />
                <h3 className="font-bold text-white">第一性原理</h3>
                <p className="text-sm text-gray-500 mt-2">物理学思维 vs 类比思维</p>
              </Card>
              <Card className="flex flex-col items-center justify-center text-center p-8">
                <Scale className="w-12 h-12 mb-4 text-white" />
                <h3 className="font-bold text-white">道德困境</h3>
                <p className="text-sm text-gray-500 mt-2">宏大愿景 vs 个人冷酷</p>
              </Card>
            </div>
          </div>
        </section>

        {/* The Algorithm Section */}
        <section>
          <SectionHeader title="五步工作法：算法" subtitle="THE ALGORITHM" />
          <p className="mb-8 text-gray-400 max-w-3xl">
            这是马斯克在特斯拉和SpaceX工厂中反复念叨的“圣经”。他在推特收购后也强行植入了这套逻辑。这是一套极度硬核的工程管理哲学。
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contentData.principles.map((p) => (
              <div key={p.step} className="group relative bg-neutral-900 border border-neutral-800 p-6 rounded hover:bg-neutral-800 transition-colors">
                <div className="absolute top-4 right-4 opacity-50">{p.icon}</div>
                <span className="text-5xl font-black text-neutral-800 group-hover:text-neutral-700 transition-colors select-none">
                  0{p.step}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section (New) */}
        <section>
           <SectionHeader title="痛苦构建的帝国流水线" subtitle="THE EMPIRE PIPELINE" />
           <div className="pl-2">
             {contentData.timeline.map((item, index) => (
               <TimelineItem 
                key={index} 
                data={item} 
                isLast={index === contentData.timeline.length - 1} 
               />
             ))}
           </div>
        </section>

        {/* Psychology Analysis */}
        <section>
          <SectionHeader title="心理侧写：恶魔模式" subtitle="PSYCHOLOGICAL PROFILE" />
          <div className="grid md:grid-cols-3 gap-6">
            {contentData.psyche.map((item, idx) => (
              <Card key={idx} className={`border-t-4 ${
                item.type === 'risk' ? 'border-t-red-600' : 
                item.type === 'origin' ? 'border-t-blue-600' : 'border-t-green-600'
              }`}>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                  {item.content}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Critical Assessment Table */}
        <section className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
          <SectionHeader title="批判性评估" subtitle="CRITICAL ASSESSMENT" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="flex items-center gap-2 text-green-400 font-bold mb-6 text-xl">
                <ChevronRight /> 核心优势 (Strengths)
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1 h-full bg-green-500/50 rounded"></div>
                  <div>
                    <strong className="text-white block">极高的风险承受力</strong>
                    <span className="text-sm text-gray-400">愿意押注全部身家（SpaceX前三次发射失败），打破了传统企业规避风险的惯性。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 h-full bg-green-500/50 rounded"></div>
                  <div>
                    <strong className="text-white block">打破物理停滞</strong>
                    <span className="text-sm text-gray-400">在航天和电动车领域，通过“第一性原理”将成本降低了一个数量级，推动了行业革命。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 h-full bg-green-500/50 rounded"></div>
                  <div>
                    <strong className="text-white block">超强的执行聚焦</strong>
                    <span className="text-sm text-gray-400">对细节的病态关注（亲自睡在工厂地板），确保了不可能的任务得以完成。</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-red-400 font-bold mb-6 text-xl">
                <AlertTriangle className="w-5 h-5" /> 劣势与风险 (Risks)
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1 h-full bg-red-500/50 rounded"></div>
                  <div>
                    <strong className="text-white block">不可持续的人力消耗</strong>
                    <span className="text-sm text-gray-400">置信度：高。这种“硬核”模式难以规模化复制，且依赖于燃烧员工的热情，容易导致人才流失和倦怠。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 h-full bg-red-500/50 rounded"></div>
                  <div>
                    <strong className="text-white block">地缘政治与权力的不可控</strong>
                    <span className="text-sm text-gray-400">星链（Starlink）在乌克兰战争中的角色显示，单一商业个体拥有了甚至超越国家的权力，缺乏监管制衡。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 h-full bg-red-500/50 rounded"></div>
                  <div>
                    <strong className="text-white block">冲动型决策</strong>
                    <span className="text-sm text-gray-400">推特收购案显示出情绪化决策的巨大破坏力，经常因为个人好恶破坏精心建立的品牌或规则。</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center py-12 border-t border-neutral-800">
          <h2 className="text-2xl font-bold text-white mb-4">终极判断：概率与共识</h2>
          <div className="max-w-2xl mx-auto text-gray-400 space-y-4">
            <p>
              综合艾萨克森的记述，我们无法将马斯克简单归类为“英雄”或“反派”。
            </p>
            <p className="text-lg text-gray-200 font-medium">
              他是一个为了让人类这個物种生存下去（Mars），而不惜牺牲任何具体人类个体（Employees/Critics）的实用主义狂热者。
            </p>
            <div className="mt-8 flex justify-center gap-4 text-xs font-mono uppercase tracking-widest text-gray-600">
              <span>Logic: First Principles</span>
              <span>•</span>
              <span>Emotion: Suppressed</span>
              <span>•</span>
              <span>Mission: Existential</span>
            </div>
          </div>
        </section>

      </main>
      
      <footer className="bg-neutral-900 border-t border-neutral-800 py-8 text-center text-gray-600 text-sm">
        <p>© 2026 Deep Dive Series. 基于 Walter Isaacson 原著客观分析。</p>
        <p className="mt-2 text-xs">生成时间：{new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}