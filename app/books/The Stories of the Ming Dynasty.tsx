import React, { useState } from 'react';
import { BookOpen, Scroll, Users, Scale, Sword, Heart, Feather, AlertTriangle, CheckCircle, ChevronRight, Quote } from 'lucide-react';
import type { Route } from "./+types/The Stories of the Ming Dynasty";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "明朝那些事儿" },
  ];
}
// --- Types & Data ---

type Section = 'intro' | 'narrative' | 'philosophy' | 'politics' | 'critique' | 'ending';

interface Character {
  name: string;
  role: string;
  desc: string;
  quote: string;
}

const characters: Character[] = [
  {
    name: "朱元璋",
    role: "开局者",
    desc: "从乞丐到皇帝，他代表了生存意志的极致。书中并未将其神化，而是还原为一个冷酷、猜忌却勤政的复杂的“人”。",
    quote: "你的就是我的，我的还是我的。"
  },
  {
    name: "朱棣",
    role: "篡位者/开拓者",
    desc: "为了证明自己皇位的合法性，他通过五征漠北、郑和下西洋来构建千古功业。他是内心极度不安的强者。",
    quote: "我要向全天下证明，我比那个建文帝强一千倍，一万倍。"
  },
  {
    name: "于谦",
    role: "救时宰相",
    desc: "北京保卫战的灵魂。他代表了传统儒家士大夫的最高人格——“粉身碎骨浑不怕，要留清白在人间”。",
    quote: "社稷为重，君为轻。"
  },
  {
    name: "王阳明",
    role: "精神图腾",
    desc: "书中的真正主角。当年明月用极大的篇幅描写心学，因为这是明朝的精神脊梁：知行合一，致良知。",
    quote: "此心光明，亦复何言。"
  },
  {
    name: "张居正",
    role: "独裁改革家",
    desc: "为了救世，不惜化身为魔。他揭示了政治的残酷真相：要做事，往往需要比坏人更奸诈。",
    quote: "在这个世界上，好人是斗不过坏人的，除非你比坏人更坏。"
  }
];

const critiques = [
  {
    title: "叙事视角",
    pros: "打破了正史的枯燥，将“历史是人民写的”转化为“历史是由有血有肉的人构成的”。幽默与现代梗的运用极大地降低了历史门槛。",
    cons: "存在一定的“幸存者偏差”和过度戏剧化。为了叙事精彩，有时会强化个人意志对历史走向的决定性作用，忽略了经济基础和社会结构的深层制约。",
    confidence: "高"
  },
  {
    title: "史料取舍",
    pros: "主要依据《明史》及《明实录》，大框架严谨。对一些争议性事件（如建文帝下落、明末党争）给出了逻辑自洽的推演。",
    cons: "带有鲜明的个人主观好恶。例如对东林党的评价偏低，对某些皇帝（如朱厚照）的评价偏向宽容。这并非严格的学术中立。",
    confidence: "中"
  }
];

// --- Components ---

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center space-x-3 mb-6 border-b-2 border-red-800/20 pb-2">
    <Icon className="w-8 h-8 text-red-900" />
    <h2 className="text-2xl md:text-3xl font-bold text-stone-800">{title}</h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-stone-200 p-6 ${className}`}>
    {children}
  </div>
);

const QuoteBlock = ({ text, author }: { text: string; author?: string }) => (
  <div className="bg-stone-100 border-l-4 border-red-800 p-4 my-4 italic relative">
    <Quote className="w-6 h-6 text-stone-300 absolute top-2 right-2" />
    <p className="text-stone-700 font-serif text-lg leading-relaxed">"{text}"</p>
    {author && <p className="text-right text-stone-500 mt-2 text-sm">— {author}</p>}
  </div>
);

export default function MingDynastyDeepDive() {
  const [activeTab, setActiveTab] = useState<Section>('intro');

  const navItems: { id: Section; label: string; icon: any }[] = [
    { id: 'intro', label: '破题：何为明朝', icon: BookOpen },
    { id: 'narrative', label: '骨架：权力博弈', icon: Sword },
    { id: 'philosophy', label: '灵魂：心学崛起', icon: Heart },
    { id: 'politics', label: '群像：人性的光辉', icon: Users },
    { id: 'critique', label: '批判：客观评估', icon: Scale },
    { id: 'ending', label: '终章：成功的定义', icon: Feather },
  ];

  return (
    <div className="min-h-screen bg-[#Fdfbf7] font-sans text-stone-800">
      {/* Sidebar / Navigation (Mobile Top, Desktop Left) */}
      <div className="md:fixed md:w-64 md:h-screen bg-[#2c2420] text-stone-300 flex flex-col z-20">
        <div className="p-6 border-b border-stone-700">
          <h1 className="text-2xl font-bold text-white tracking-wider">明朝那些事儿</h1>
          <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest">Deep Interpretation</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-red-900 text-white shadow-lg'
                  : 'hover:bg-stone-800 text-stone-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 text-xs text-stone-500 border-t border-stone-700">
           基于第一性原理与多视角推演分析
        </div>
      </div>

      {/* Main Content Area */}
      <main className="md:ml-64 p-6 md:p-12 max-w-5xl mx-auto min-h-screen">
        
        {/* Intro Section */}
        {activeTab === 'intro' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center py-10">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">历史应该好看</h1>
              <p className="text-xl text-stone-600 font-serif">一场关于人性的长篇叙事</p>
            </div>
            
            <Card className="bg-stone-50">
              <SectionHeader title="第一性原理：解构本书" icon={BookOpen} />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-red-900">本质定义</h3>
                  <p className="text-stone-700 leading-relaxed">
                    《明朝那些事儿》本质上不是严肃的学术专著，而是一部**以史料为基础的“人物传记体”通俗文学**。当年明月（石悦）用现代的逻辑、职场的隐喻和心理学的分析，填补了《明实录》中缺失的“人性逻辑”。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-red-900">核心价值</h3>
                  <p className="text-stone-700 leading-relaxed">
                    它解决了传统史书“高门槛、冷冰冰”的痛点。它告诉读者：历史不是年代和名字的堆砌，而是**无数个人的选择、欲望、挣扎与妥协**。
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white border-l-4 border-blue-500 shadow-sm">
                <div className="font-bold text-stone-900">流行史学视角</div>
                <div className="text-sm text-stone-600 mt-2">现象级作品，开启了“新说史”时代，让历史回归大众。</div>
              </div>
              <div className="p-4 bg-white border-l-4 border-green-500 shadow-sm">
                <div className="font-bold text-stone-900">职场政治视角</div>
                <div className="text-sm text-stone-600 mt-2">一部详尽的“官场教科书”，剖析了权力结构下的生存法则。</div>
              </div>
              <div className="p-4 bg-white border-l-4 border-yellow-500 shadow-sm">
                <div className="font-bold text-stone-900">人本主义视角</div>
                <div className="text-sm text-stone-600 mt-2">强调“良知”与“气节”，对中国传统士大夫精神的深情挽歌。</div>
              </div>
            </div>
          </div>
        )}

        {/* Narrative / Power Section */}
        {activeTab === 'narrative' && (
          <div className="space-y-8 animate-fade-in">
             <SectionHeader title="骨架：权力的逻辑" icon={Sword} />
             
             <Card>
               <h3 className="text-xl font-bold mb-4">皇权与相权的零和博弈</h3>
               <p className="text-stone-700 mb-4 leading-relaxed">
                 明朝276年的历史，核心主线是**中央集权的极端化**。从朱元璋废除丞相制度开始，明朝就陷入了一个死循环：皇帝需要代理人管理国家，但又恐惧代理人坐大。
               </p>
               <div className="bg-stone-100 p-4 rounded-lg">
                 <ul className="space-y-3">
                   <li className="flex items-start">
                     <span className="bg-red-800 text-white text-xs px-2 py-1 rounded mt-1 mr-3">阶段一</span>
                     <span><strong>废相：</strong>朱元璋凭借超人的精力亲自管理六部，试图消灭中间商。</span>
                   </li>
                   <li className="flex items-start">
                     <span className="bg-red-800 text-white text-xs px-2 py-1 rounded mt-1 mr-3">阶段二</span>
                     <span><strong>内阁崛起：</strong>后世皇帝精力不足，内阁（秘书处）权力异化，票拟权成为实际的相权。</span>
                   </li>
                   <li className="flex items-start">
                     <span className="bg-red-800 text-white text-xs px-2 py-1 rounded mt-1 mr-3">阶段三</span>
                     <span><strong>司礼监制衡：</strong>为了制衡内阁，皇帝扶植太监（批红权），导致“特务政治”和“阉党”乱政。</span>
                   </li>
                 </ul>
               </div>
             </Card>

             <div className="grid md:grid-cols-2 gap-6">
               <Card>
                 <h4 className="font-bold text-lg mb-2">好人与坏人的辩证法</h4>
                 <p className="text-sm text-stone-600 leading-relaxed">
                   书中一个深刻的观点是：**在政治漩涡中，区分“能臣”与“奸臣”往往比区分“好人”与“坏人”更重要**。张居正之所以能改革成功，是因为他比奸臣更懂权谋。纯粹的道德洁癖在复杂的官场生态中往往一事无成（如建文帝时期的方孝孺）。
                 </p>
               </Card>
               <Card>
                 <h4 className="font-bold text-lg mb-2">制度的惯性</h4>
                 <p className="text-sm text-stone-600 leading-relaxed">
                   无论皇帝是勤政（崇祯）还是怠政（万历），大明王朝最终都走向灭亡。这是制度的内耗达到了临界点。当土地兼并无法抑制，财政体系崩溃，再强大的个人意志（如崇祯的努力）也无法对抗历史的洪流。
                 </p>
               </Card>
             </div>
          </div>
        )}

        {/* Philosophy Section */}
        {activeTab === 'philosophy' && (
          <div className="space-y-8 animate-fade-in">
            <SectionHeader title="灵魂：王阳明与心学" icon={Heart} />
            
            <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-stone-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-serif mb-4">知行合一</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                当年明月在书中花了极其夸张的篇幅来写王阳明。这不是凑字数，而是因为**心学是理解明朝中后期精神世界的钥匙**。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-red-900 mb-3">为什么是王阳明？</h4>
                <p className="text-stone-700 leading-relaxed mb-4">
                  在程朱理学僵化、“存天理灭人欲”成为吃人教条的时代，王阳明提出了“心即理”。他告诉世人：**权威不在书本里，而在你心里。**
                </p>
                <p className="text-stone-700 leading-relaxed">
                  这种思想解放造就了明朝中后期狂放、个性解放的社会风气，也造就了徐阶、张居正这样务实的政治家——不拘泥于形式，只求解决问题。
                </p>
              </div>
              <div className="bg-white border p-6 rounded shadow-sm">
                <h4 className="text-lg font-bold mb-3">心学四句教</h4>
                <ul className="space-y-2 font-serif text-stone-800">
                  <li className="border-b border-stone-100 pb-2">无善无恶心之体</li>
                  <li className="border-b border-stone-100 pb-2">有善有恶意之动</li>
                  <li className="border-b border-stone-100 pb-2">知善知恶是良知</li>
                  <li>为善去恶是格物</li>
                </ul>
                <div className="mt-4 text-xs text-stone-500">
                  解读：世界是客观的，但善恶是主观的判断。人生的修行，就是依从内心的良知去行动。
                </div>
              </div>
            </div>

            <QuoteBlock 
              text="破山中贼易，破心中贼难。"
              author="王阳明"
            />
          </div>
        )}

        {/* Politics / Characters Section */}
        {activeTab === 'politics' && (
          <div className="space-y-8 animate-fade-in">
            <SectionHeader title="群像：历史的推手" icon={Users} />
            
            <p className="text-stone-600 mb-6">
              《明朝那些事儿》最成功之处在于人物塑造。它剥离了史书中冰冷的封号，还原了他们作为“人”的欲望、恐惧与高尚。
            </p>

            <div className="grid gap-6">
              {characters.map((char, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-stone-800 hover:border-red-800 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 group-hover:text-red-900 transition-colors">{char.name}</h3>
                      <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">{char.role}</span>
                    </div>
                    <Users className="w-5 h-5 text-stone-300 group-hover:text-red-800" />
                  </div>
                  <p className="text-stone-700 mb-4 text-sm leading-relaxed">{char.desc}</p>
                  <div className="bg-stone-50 p-3 rounded text-sm italic text-stone-600 border border-stone-100">
                    "{char.quote}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Critique Section */}
        {activeTab === 'critique' && (
          <div className="space-y-8 animate-fade-in">
            <SectionHeader title="批判：客观评估" icon={Scale} />
            
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
              <div className="flex items-center space-x-2 mb-2 text-amber-800 font-bold">
                 <AlertTriangle className="w-5 h-5" />
                 <span>阅读提示</span>
              </div>
              <p className="text-sm text-amber-900">
                任何历史叙述都带有主观性。作为读者，应保持批判性思维，不将文学作品完全等同于严谨史实。
              </p>
            </div>

            <div className="space-y-6">
              {critiques.map((crit, idx) => (
                <Card key={idx}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-stone-900">{crit.title}</h3>
                    <span className="text-xs bg-stone-200 px-2 py-1 rounded text-stone-600">
                      置信度评级：{crit.confidence}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="flex items-center text-green-700 font-bold mb-2">
                        <CheckCircle className="w-4 h-4 mr-2" /> 优势 (Pros)
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed">{crit.pros}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center text-red-700 font-bold mb-2">
                        <AlertTriangle className="w-4 h-4 mr-2" /> 局限 (Cons)
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed">{crit.cons}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

             <Card className="mt-6 bg-stone-100 border-none">
                <h3 className="font-bold text-stone-800 mb-2">专家视角模拟</h3>
                <div className="space-y-4">
                   <div>
                      <span className="font-bold text-xs text-blue-800 uppercase">历史学家</span>
                      <p className="text-sm text-stone-600">“虽然细节考证并非无懈可击，且个人色彩浓厚，但它在普及明史、重构大众对明朝认知（不再是只有黑暗）方面的贡献是无可替代的。”</p>
                   </div>
                   <div>
                      <span className="font-bold text-xs text-purple-800 uppercase">文学评论家</span>
                      <p className="text-sm text-stone-600">“它创造了一种新的文体。将武侠小说的节奏、单口相声的幽默与历史传记结合，极大地增强了文本的‘粘性’。”</p>
                   </div>
                </div>
             </Card>
          </div>
        )}

        {/* Ending Section */}
        {activeTab === 'ending' && (
          <div className="space-y-8 animate-fade-in flex flex-col items-center justify-center min-h-[60vh]">
            <Feather className="w-16 h-16 text-stone-300 mb-6" />
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-8">终章：徐霞客的足迹</h2>
              
              <p className="text-lg text-stone-600 leading-loose mb-8">
                全书写了帝王将相、权谋杀伐、边疆战火、朝代兴衰。
                但最后大结局，当年明月没有写崇祯上吊的悲凉，也没有写清军入关的铁蹄。
                他写了一个人——**徐霞客**。
              </p>

              <div className="bg-white p-8 rounded-lg shadow-xl border border-stone-200 transform hover:scale-105 transition-transform duration-500">
                <p className="text-2xl font-serif text-red-900 font-bold mb-4">
                  "成功只有一种，那就是按照自己的方式，去度过人生。"
                </p>
                <div className="h-1 w-20 bg-stone-300 mx-auto"></div>
              </div>

              <div className="mt-12 text-left space-y-4 text-stone-700">
                <p>
                  <strong className="text-stone-900">深度解读：</strong> 这是一个极具哲学意味的结尾。它跳出了“成王败寇”的历史周期律。
                </p>
                <p>
                  朱元璋建立了帝国，但他未必快乐；朱棣拥有了天下，但终生不安。而在那个喧嚣的时代，有一个人不求功名，不求富贵，只为看一看这个世界，走遍了名山大川。
                </p>
                <p>
                  作者通过徐霞客告诉我们：在宏大的历史车轮和残酷的现实面前，个体的**自由意志**与**精神满足**，才是超越时代的终极价值。
                </p>
              </div>
            </div>
          </div>
        )}
        
      </main>
    </div>
  );
}