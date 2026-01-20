import React, { useState } from 'react';
import { BookOpen, Cpu, Network, TrendingUp, AlertTriangle, Brain, Target, Zap, ChevronRight, CheckCircle2, XCircle, History, Milestone } from 'lucide-react';
import type { Route } from "./+types/The Thinking Machine";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "黄仁勋：英伟达之芯" },
  ];
}

const NvidiaDeepDive = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-green-500 selection:text-black">
      {/* Header Section */}
      <header className="border-b border-green-900/30 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-black font-bold text-xl">
              N
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">深度解读：黄仁勋与英伟达之芯</h1>
              <p className="text-xs text-green-400 font-mono">JENSEN HUANG: THE CORE OF NVIDIA</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <span className="text-slate-400">第一性原理拆解</span>
            <span className="text-slate-400">批判性评估</span>
            <span className="text-green-400">置信度评级：高</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Intro / Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-900/20 text-green-400 px-3 py-1 rounded-full text-xs font-mono border border-green-800">
              <BookOpen size={14} />
              <span>书籍深度拆解</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              不仅是芯片，<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                而是计算方式的根本重构
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              本书不仅是黄仁勋的个人传记，更是一部关于“豪赌”与“坚持”的技术商业史。我们摒弃对个人英雄主义的盲目崇拜，透过现象看本质：英伟达是如何通过违背直觉的决策，从一家濒临破产的显卡公司，进化为AI时代的“军火商”。
            </p>
            <div className="flex space-x-4">
               <div className="flex flex-col border-l-2 border-green-500 pl-4">
                 <span className="text-2xl font-bold text-white">30+年</span>
                 <span className="text-xs text-slate-500 uppercase">专注加速计算</span>
               </div>
               <div className="flex flex-col border-l-2 border-slate-700 pl-4">
                 <span className="text-2xl font-bold text-white">CUDA</span>
                 <span className="text-xs text-slate-500 uppercase">万亿美元的护城河</span>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-green-800/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Target className="mr-2 text-green-400" size={20} />
              核心洞察概览
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mt-1 mr-3 shrink-0" size={18} />
                <span className="text-slate-300"><strong className="text-white">反共识生存：</strong> 在通用计算（CPU）统治的时代，押注专用计算（GPU）。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mt-1 mr-3 shrink-0" size={18} />
                <span className="text-slate-300"><strong className="text-white">软硬一体：</strong> CUDA 并非软件服务，而是将硬件潜能解锁的钥匙，构建了极高的迁移成本。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-500 mt-1 mr-3 shrink-0" size={18} />
                <span className="text-slate-300"><strong className="text-white">诚实文化：</strong> “离倒闭只有30天”的危机感与承认错误的智识诚实（Intellectual Honesty）。</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-slate-800 pb-1">
          {['philosophy', 'timeline', 'ecosystem', 'risks'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative ${
                activeTab === tab 
                  ? 'text-green-400' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab === 'philosophy' && '第一视角：管理哲学'}
              {tab === 'timeline' && '关键转折：豪赌时刻'}
              {tab === 'ecosystem' && '核心壁垒：CUDA生态'}
              {tab === 'risks' && '批判性评估：风险分析'}
              {activeTab === tab && (
                <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          
          {/* TAB 1: Philosophy */}
          {activeTab === 'philosophy' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="col-span-1 md:col-span-3 mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">黄仁勋的管理“芯片”</h3>
                <p className="text-slate-400">英伟达的组织架构是为了“速度”与“信息透明”而设计的，这在硅谷巨头中极不寻常。</p>
              </div>

              <Card 
                icon={<Brain />}
                title="智识诚实 (Intellectual Honesty)"
                content="书中多次提到 NV1 的失败。黄仁勋并未掩饰错误，而是直接向世嘉社长承认技术路线错误，并在此基础上请求资金以开发下一代产品。这种'承认错误'的能力被视为英伟达转型的核心动力。"
                highlight="关键案例：放弃移动端市场（Tegra）转向汽车与AI，承认手机市场已无胜算。"
              />
              
              <Card 
                icon={<Network />}
                title="扁平化与无层级"
                content="黄仁勋直接管理着 40-50 名高管。英伟达没有传统的'Status Report'会议，而是强调信息在组织内的高速流动。避免中间管理层对信息的过滤与扭曲。"
                highlight="目标：确保CEO直接接触市场一线信号，缩短决策OODA循环。"
              />

              <Card 
                icon={<Zap />}
                title="速度即生命 (Velocity)"
                content="不同于Intel传统的Tick-Tock节奏，英伟达推崇极速迭代。在AI时代，这种节奏从摩尔定律（18-24个月）加速到了黄氏定律（GPU算力每年翻倍以上）。"
                highlight="代价：这种高压文化导致了极高的员工工作强度。"
              />
            </div>
          )}

          {/* TAB 2: Timeline (NEW) */}
          {activeTab === 'timeline' && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 mb-6">
                <Milestone className="text-green-400" />
                <h3 className="text-2xl font-bold text-white">从濒临破产到万亿帝国的关键“赌注”</h3>
              </div>
              
              <div className="relative border-l border-slate-700 ml-4 md:ml-6 space-y-12">
                {/* 1993-1995 */}
                <TimelineItem 
                  year="1995"
                  title="生死攸关的诚实"
                  category="生存危机"
                  description="首款产品 NV1 选择了错误的四边形纹理技术，与 Windows 95 的主流标准（DirectX）不兼容。"
                  insight="黄仁勋做出了反直觉的举动：向合作伙伴世嘉（Sega）承认失败，但同时请求获得资金开发下一代芯片（RIVA 128）。这笔救命钱让英伟达活到了 GPU 时代。"
                />

                {/* 1999 */}
                <TimelineItem 
                  year="1999"
                  title="发明 GPU (GeForce 256)"
                  category="技术定义"
                  description="推出了世界上第一款 GPU，将几何处理从 CPU 转移到显卡。"
                  insight="重新定义了计算机图形学。这不只是性能提升，而是确立了'并行计算'相对于 CPU '串行计算'的差异化路线，为后来的 AI 埋下伏笔。"
                />

                {/* 2006 */}
                <TimelineItem 
                  year="2006"
                  title="CUDA 的孤独豪赌"
                  category="生态构建"
                  description="决定在每一颗出货的 GPU 中集成 CUDA 核心，尽管当时没有应用场景，导致成本激增，利润暴跌。"
                  insight="华尔街当时认为这是'错误的慈善'。但这是英伟达将显卡从'玩具'转变为'超级计算机'的关键一步。没有 CUDA，就没有后来的深度学习爆发。"
                />

                {/* 2012 */}
                <TimelineItem 
                  year="2012"
                  title="AlexNet 时刻"
                  category="AI 觉醒"
                  description="Alex Krizhevsky 使用两块 GTX 580 训练神经网络，横扫 ImageNet 竞赛。"
                  insight="英伟达敏锐地捕捉到了这个信号。黄仁勋迅速转向，派遣团队全力支持 AI 研究人员，不仅是卖硬件，而是开始构建深度学习软件栈 (cuDNN)。"
                />

                {/* 2016 */}
                <TimelineItem 
                  year="2016"
                  title="交付第一台 DGX-1"
                  category="算力军火商"
                  description="黄仁勋亲自将第一台 AI 超级计算机 DGX-1 送给 OpenAI。"
                  insight="标志着英伟达正式成为 AI 时代的'军火商'。不仅卖芯片，更开始卖系统（System Level）解决方案，进一步提高了竞争门槛。"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Ecosystem */}
          {activeTab === 'ecosystem' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-4">第一性原理：为什么是CUDA？</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      很多人认为 CUDA 只是一个软件工具包。但从第一性原理分析，CUDA 是<strong>“算力平权”的协议</strong>。
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="bg-slate-800 p-1 rounded text-green-400 text-xs font-mono h-fit mt-1">PROBLEM</span>
                        <span className="text-slate-400 text-sm">早期GPU仅能处理图形，通用计算（GPGPU）编程极度困难，需要伪装成像素着色器。</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-green-900/30 p-1 rounded text-green-400 text-xs font-mono h-fit mt-1">SOLUTION</span>
                        <span className="text-slate-400 text-sm">2006年，黄仁勋决定在每一颗GPU中加入CUDA核心，即使当时没有应用场景，导致成本剧增、股价暴跌。</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="bg-emerald-900/30 p-1 rounded text-emerald-400 text-xs font-mono h-fit mt-1">RESULT</span>
                        <span className="text-slate-400 text-sm">当 AI 研究人员（如 Alex Krizhevsky）需要廉价算力时，只有 Nvidia 准备好了。这是一种<strong>“预埋算力”</strong>的战略。</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-black/40 rounded-lg p-6 flex flex-col justify-center items-center border border-slate-800 relative">
                     <div className="absolute top-2 left-2 text-xs text-slate-500">生态飞轮效应</div>
                     <div className="w-full max-w-sm space-y-2">
                        <div className="flex justify-between text-xs text-slate-400"><span>开发者数量</span> <span>400万+</span></div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full w-[95%]"></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-4"><span>AI框架兼容性</span> <span>99.9%</span></div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full w-[100%]"></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-4"><span>竞争对手追赶难度</span> <span>极高 (High)</span></div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full w-[85%]"></div>
                        </div>
                     </div>
                     <p className="mt-6 text-xs text-center text-slate-500">
                       CUDA 代码库已成为 AI 界的“英语”，重写底层代码的成本构成了最高的壁垒。
                     </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Risks (Critical Assessment) */}
          {activeTab === 'risks' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="text-yellow-500" />
                <h3 className="text-2xl font-bold text-white">批判性评估：盛世之下的隐忧</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Risk 1 */}
                <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">客户即对手</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    <strong>分析：</strong> 英伟达最大的客户（Microsoft, Amazon, Google, Meta）都在自研 AI 芯片。
                  </p>
                  <div className="text-xs bg-slate-800 p-2 rounded text-slate-300">
                    <span className="font-bold text-yellow-500">推演：</span> 短期内无法替代 NV，但长期来看，推理（Inference）负载可能会转移到自研芯片以降低成本。
                  </div>
                </div>

                {/* Risk 2 */}
                <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">地缘政治与供应链</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    <strong>分析：</strong> 对台积电（TSMC）产能的绝对依赖，以及中国市场（曾经的20-25%营收）的受限。
                  </p>
                  <div className="text-xs bg-slate-800 p-2 rounded text-slate-300">
                    <span className="font-bold text-red-500">推演：</span> “特供版”芯片策略面临不断收紧的出口管制，这不仅是收入损失，更是将中国市场拱手让给华为昇腾等竞争对手。
                  </div>
                </div>

                {/* Risk 3 */}
                <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">反垄断达摩克利斯之剑</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    <strong>分析：</strong> 随着市值突破3万亿，各国监管机构开始关注 CUDA 锁定的封闭生态。
                  </p>
                  <div className="text-xs bg-slate-800 p-2 rounded text-slate-300">
                    <span className="font-bold text-blue-400">推演：</span> 类似于当年的 Intel 和 Microsoft，若是被强制开放互操作性，护城河可能会被 PyTorch 等框架层消解。
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                 <h4 className="text-white font-bold mb-4">置信度分析 (Confidence Level)</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded">
                      <span className="text-slate-400">AI 算力需求持续增长 (3-5年)</span>
                      <span className="text-green-400 font-mono">高 (90%)</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded">
                      <span className="text-slate-400">CUDA 生态壁垒持续有效</span>
                      <span className="text-green-400 font-mono">中高 (75%)</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded">
                      <span className="text-slate-400">英伟达维持 70%+ 毛利率</span>
                      <span className="text-yellow-400 font-mono">中 (50%)</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded">
                      <span className="text-slate-400">竞争对手（AMD/Intel）形成实质威胁</span>
                      <span className="text-yellow-400 font-mono">中低 (30%)</span>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer / Conclusion */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">结论</h2>
              <p className="text-slate-400 mt-2 max-w-xl">
                《黄仁勋：英伟达之芯》展示的不是一个顺风顺水的故事，而是一个在<strong>“极度恐惧”</strong>驱动下的生存样本。
                英伟达的成功在于：在其他人通过后视镜看世界时，黄仁勋在用望远镜寻找下一个十年的计算范式。
                但所有的帝国都面临熵增，英伟达目前最大的敌人已不再是 AMD，而是物理定律（能耗瓶颈）与地缘政治。
              </p>
            </div>
            <a href="#" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
              <span>重新开始推演</span>
              <ChevronRight size={16} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
            © 2024 AI Analysis. 基于公开资料与第一性原理生成的深度解读。
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-component for Timeline Item
const TimelineItem = ({ year, title, category, description, insight }) => (
  <div className="relative pl-8 md:pl-12 group">
    {/* Dot */}
    <div className="absolute -left-[5px] md:-left-[9px] top-0 w-3 h-3 md:w-5 md:h-5 bg-slate-900 border-2 border-green-500 rounded-full group-hover:bg-green-500 transition-colors duration-300"></div>
    
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <div className="md:w-1/4">
        <span className="text-2xl font-bold text-green-400 font-mono block">{year}</span>
        <span className="text-xs font-semibold bg-slate-800 px-2 py-1 rounded text-slate-300 mt-2 inline-block">
          {category}
        </span>
      </div>
      <div className="md:w-3/4 bg-slate-900/50 p-5 rounded-lg border border-slate-800 hover:border-green-900 transition-colors">
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="bg-slate-950/50 p-3 rounded border-l-2 border-green-600">
          <p className="text-xs text-slate-300 italic">
            <span className="text-green-500 font-bold not-italic mr-1">洞察:</span> 
            {insight}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Sub-component for Cards
const Card = ({ icon, title, content, highlight }) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-slate-700">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed mb-4">
      {content}
    </p>
    {highlight && (
      <div className="bg-green-900/10 border-l-2 border-green-500 pl-3 py-2">
        <p className="text-xs text-green-300 italic">{highlight}</p>
      </div>
    )}
  </div>
);

export default NvidiaDeepDive;