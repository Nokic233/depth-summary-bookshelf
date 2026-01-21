import React, { useState } from 'react';
import { 
  BookOpen, 
  Globe, 
  Lock, 
  Server, 
  ShieldAlert, 
  ArrowRightLeft, 
  FileText, 
  Activity,
  Layers,
  Search,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info
} from 'lucide-react';
import type { Route } from "./+types/HTTP Explained with Diagrams";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "图解 HTTP" },
  ];
}
// --- 组件：导航栏 ---
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: '全书概览', icon: BookOpen },
    { id: 'protocol', label: '协议实验室', icon: Activity },
    { id: 'status', label: '状态码图谱', icon: FileText },
    { id: 'https', label: 'HTTPS 机制', icon: Lock },
    { id: 'headers', label: '首部字段详解', icon: Layers },
    { id: 'security', label: 'Web 攻击', icon: ShieldAlert },
    { id: 'critical', label: '批判性评估', icon: Search },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-100 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto border-r border-slate-700 shadow-xl z-10 hidden md:flex">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Globe className="text-blue-400" />
          图解 HTTP
        </h1>
        <p className="text-xs text-slate-400 mt-2">深度解读与交互演示</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTab === item.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            <item.icon size={18} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
        基于《图解HTTP》深度解析
      </div>
    </div>
  );
};

// --- 移动端导航 ---
const MobileNav = ({ activeTab, setActiveTab }) => {
    const menuItems = [
    { id: 'overview', label: '概览', icon: BookOpen },
    { id: 'protocol', label: '协议', icon: Activity },
    { id: 'https', label: 'HTTPS', icon: Lock },
    { id: 'critical', label: '评估', icon: Search },
  ];
  return (
    <div className="md:hidden fixed bottom-0 w-full bg-slate-900 text-slate-100 flex justify-around p-3 border-t border-slate-700 z-50">
        {menuItems.map((item) => (
            <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 ${activeTab === item.id ? 'text-blue-400' : 'text-slate-400'}`}
            >
                <item.icon size={20} />
                <span className="text-[10px]">{item.label}</span>
            </button>
        ))}
    </div>
  )
}

// --- 内容板块：概览 ---
const Overview = () => (
  <div className="space-y-8 animate-fadeIn">
    <header className="mb-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">第一性原理：HTTP 的本质</h2>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <p className="text-blue-800 text-lg">
          HTTP (HyperText Transfer Protocol) 的本质是一个<strong>无状态的、基于文本的请求/响应协议</strong>。
          它的核心任务是解决客户端（Web浏览器）与服务端之间如何从物理分离走向逻辑连接的问题。
        </p>
      </div>
    </header>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Globe className="text-indigo-500" /> Web 的基石
        </h3>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="font-bold text-slate-900">URI:</span> 统一定位符，解决“资源在哪里”的问题。
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-slate-900">HTML:</span> 超文本标记语言，解决“资源长什么样”的问题。
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-slate-900">HTTP:</span> 传输协议，解决“资源怎么拿”的问题。
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
          <ArrowRightLeft className="text-green-500" /> 简单的设计哲学
        </h3>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="bg-slate-100 px-2 py-0.5 rounded text-sm font-mono text-slate-700">Simple</span>
            不需复杂的握手（HTTP/1.0），格式清晰可读。
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-slate-100 px-2 py-0.5 rounded text-sm font-mono text-slate-700">Stateless</span>
            服务器不保存请求状态（为了可扩展性），但引入了 Cookie 来“打补丁”。
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-slate-800 text-slate-200 p-6 rounded-xl mt-6">
      <h3 className="text-lg font-bold mb-2">专家视角推演：为什么 HTTP 如此成功？</h3>
      <p className="text-sm opacity-90 leading-relaxed">
        从<strong>系统架构师</strong>的视角来看，HTTP 的成功不在于它有多高效（实际上 HTTP/1.1 的文本解析效率并不高），而在于它的<strong>通用性</strong>和<strong>低耦合</strong>。
        它将传输层（TCP）的复杂性屏蔽，提供了一套通用的语义（GET/POST），使得异构系统（Java后台、Python爬虫、Chrome浏览器）可以无障碍交流。
        《图解HTTP》这本书极好地抓住了这一点：通过漫画形式降低了理解这种“通用语义”的门槛。
      </p>
    </div>
  </div>
);

// --- 内容板块：协议实验室 ---
const ProtocolLab = () => {
  const [method, setMethod] = useState('GET');
  const [showResponse, setShowResponse] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setShowResponse(false);
    setTimeout(() => {
      setLoading(false);
      setShowResponse(true);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">协议实验室：可视化交互</h2>
        <p className="text-slate-500 mt-2">HTTP 报文是纯文本的。在这里模拟客户端构建请求，观察服务器的原始响应。</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Client Side */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-700 flex items-center gap-2">
              <Activity size={20} className="text-blue-500" /> 客户端请求 (Request)
            </h3>
            <div className="flex gap-2">
              {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    method === m ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto shadow-inner flex-grow relative">
            <div className="absolute top-2 right-2 text-xs text-slate-500">raw_request.txt</div>
            <p><span className="text-yellow-400">{method}</span> /index.html HTTP/1.1</p>
            <p><span className="text-blue-400">Host:</span> www.example.com</p>
            <p><span className="text-blue-400">Connection:</span> keep-alive</p>
            <p><span className="text-blue-400">User-Agent:</span> Mozilla/5.0 (Macintosh;...)</p>
            <p><span className="text-blue-400">Accept:</span> text/html,application/xhtml+xml</p>
            {method === 'POST' && (
              <>
                <p><span className="text-blue-400">Content-Type:</span> application/json</p>
                <p><span className="text-blue-400">Content-Length:</span> 24</p>
                <p className="text-slate-500 py-1">[CRLF 空行]</p>
                <p className="text-white">{`{ "user": "alice" }`}</p>
              </>
            )}
          </div>

          <button
            onClick={handleSend}
            disabled={loading}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? '发送中...' : '发送请求至服务器'} 
            {!loading && <ArrowRightLeft size={16} />}
          </button>
        </div>

        {/* Server Side */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex flex-col h-full relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-700 flex items-center gap-2">
              <Server size={20} className="text-purple-500" /> 服务器响应 (Response)
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full ${showResponse ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}>
              {showResponse ? '200 OK' : '等待请求...'}
            </span>
          </div>

          <div className={`bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-300 overflow-x-auto shadow-inner flex-grow transition-opacity duration-500 ${showResponse ? 'opacity-100' : 'opacity-30'}`}>
             {showResponse ? (
               <>
                <p>HTTP/1.1 <span className="text-green-400">200 OK</span></p>
                <p><span className="text-purple-400">Date:</span> {new Date().toUTCString()}</p>
                <p><span className="text-purple-400">Server:</span> Apache/2.4.41 (Unix)</p>
                <p><span className="text-purple-400">Content-Type:</span> text/html; charset=UTF-8</p>
                <p><span className="text-purple-400">Content-Length:</span> 138</p>
                <p className="text-slate-500 py-1">[CRLF 空行]</p>
                <p className="text-white">
                  &lt;html&gt;<br/>
                  &nbsp;&nbsp;&lt;body&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, World!&lt;/h1&gt;<br/>
                  &nbsp;&nbsp;&lt;/body&gt;<br/>
                  &lt;/html&gt;
                </p>
               </>
             ) : (
               <div className="h-full flex items-center justify-center text-slate-600">
                 等待数据包...
               </div>
             )}
          </div>
          
          {loading && (
             <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
             </div>
          )}
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm text-yellow-800">
        <strong>管线化 (Pipelining) 说明：</strong> HTTP/1.1 虽然允许在同一个 TCP 连接上发送多个请求（Keep-Alive），但处理必须是顺序的。如果前一个请求处理很慢，后一个就得等着，这就是著名的 <strong>Head-of-Line Blocking（队头阻塞）</strong>。这是 HTTP/1.1 最大的性能瓶颈。
      </div>
    </div>
  );
};

// --- 内容板块：状态码 ---
const StatusCodeGallery = () => {
  const categories = [
    { range: '2xx', title: '成功 (Success)', color: 'bg-green-100 text-green-800', border: 'border-green-200' },
    { range: '3xx', title: '重定向 (Redirection)', color: 'bg-blue-100 text-blue-800', border: 'border-blue-200' },
    { range: '4xx', title: '客户端错误 (Client Error)', color: 'bg-orange-100 text-orange-800', border: 'border-orange-200' },
    { range: '5xx', title: '服务器错误 (Server Error)', color: 'bg-red-100 text-red-800', border: 'border-red-200' },
  ];

  const codes = [
    { code: 200, title: 'OK', desc: '请求正常处理完毕。', cat: '2xx' },
    { code: 204, title: 'No Content', desc: '请求成功，但响应报文中不含实体的主体部分。', cat: '2xx' },
    { code: 206, title: 'Partial Content', desc: '客户端进行了范围请求，服务器成功执行。', cat: '2xx' },
    { code: 301, title: 'Moved Permanently', desc: '永久性重定向。资源已被分配了新的 URI。', cat: '3xx' },
    { code: 302, title: 'Found', desc: '临时性重定向。资源临时被分配了新的 URI。', cat: '3xx' },
    { code: 304, title: 'Not Modified', desc: '资源未修改。允许客户端使用缓存。', cat: '3xx' },
    { code: 400, title: 'Bad Request', desc: '请求报文中存在语法错误。', cat: '4xx' },
    { code: 401, title: 'Unauthorized', desc: '发送的请求需要有通过 HTTP 认证的认证信息。', cat: '4xx' },
    { code: 403, title: 'Forbidden', desc: '请求被服务器拒绝（权限问题）。', cat: '4xx' },
    { code: 404, title: 'Not Found', desc: '服务器上没有找到请求的资源。', cat: '4xx' },
    { code: 500, title: 'Internal Server Error', desc: '服务器端在执行请求时发生了错误。', cat: '5xx' },
    { code: 502, title: 'Bad Gateway', desc: '作为网关或代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。', cat: '5xx' },
    { code: 503, title: 'Service Unavailable', desc: '服务器暂时处于超负载或正在进行停机维护。', cat: '5xx' },
  ];

  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">状态码图谱</h2>
      <p className="text-slate-600">状态码是服务器向客户端“汇报情况”的语言。理解它们对于调试至关重要。</p>
      
      <div className="flex gap-2 flex-wrap">
        <button 
            onClick={() => setFilter('All')} 
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === 'All' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
        >
            全部
        </button>
        {categories.map(c => (
             <button 
                key={c.range}
                onClick={() => setFilter(c.range)} 
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === c.range ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
            >
                {c.range}
            </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {codes.filter(c => filter === 'All' || c.cat === filter).map((code) => {
            const catStyle = categories.find(cat => cat.range === code.cat);
            return (
                <div key={code.code} className={`p-5 rounded-xl border-l-4 shadow-sm bg-white ${catStyle.border}`}>
                    <div className="flex justify-between items-start mb-2">
                        <span className={`text-2xl font-black ${catStyle.color.split(' ')[1]}`}>{code.code}</span>
                        <span className={`text-xs px-2 py-1 rounded ${catStyle.color}`}>{code.cat}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 mb-1">{code.title}</h4>
                    <p className="text-sm text-slate-500">{code.desc}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
};

// --- 内容板块：HTTPS ---
const HttpsExplainer = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Client Hello", desc: "客户端发送支持的加密套件列表给服务器。", icon: ArrowRightLeft },
    { title: "Server Hello & Certificate", desc: "服务器选择加密套件，并发送包含公钥的数字证书。", icon: FileText },
    { title: "验证证书", desc: "客户端验证证书合法性（防止中间人攻击）。", icon: CheckCircle },
    { title: "Key Exchange", desc: "客户端使用服务器公钥加密“预主密钥”发送给服务器。", icon: Lock },
    { title: "Session Key 生成", desc: "双方利用预主密钥生成共同的“会话密钥”（对称密钥）。", icon: Layers },
    { title: "Secure Tunnel", desc: "之后的所有通信都使用“会话密钥”进行对称加密传输，速度快且安全。", icon: ShieldAlert },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="text-green-400" />
            HTTPS 混合加密机制
        </h2>
        <p className="opacity-90 max-w-2xl">
            HTTPS 并不是一个新的协议，而是 <strong>HTTP + SSL/TLS</strong>。
            它完美解决了 HTTP 的三大弱点：窃听风险（加密）、篡改风险（完整性校验）、冒充风险（证书认证）。
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
            <h3 className="font-bold text-slate-700">握手流程拆解</h3>
            <div className="space-y-2">
                {steps.map((s, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setStep(idx)}
                        className={`p-4 rounded-lg cursor-pointer transition-all border ${
                            step === idx 
                            ? 'bg-blue-50 border-blue-500 shadow-md transform scale-105' 
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === idx ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                                {idx + 1}
                            </div>
                            <span className={`text-sm font-medium ${step === idx ? 'text-blue-800' : 'text-slate-600'}`}>{s.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow border border-slate-200 p-8 flex flex-col items-center justify-center text-center">
             <div className="mb-6">
                {/* 修复：移除错误的 steps.id 调用，直接使用下方的 React.createElement */}
                {React.createElement(steps[step].icon, { size: 64, className: "text-blue-500 mb-4 mx-auto" })}
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{steps[step].title}</h3>
                <p className="text-slate-600 text-lg max-w-md mx-auto">{steps[step].desc}</p>
             </div>

             <div className="bg-slate-100 p-4 rounded-lg w-full text-left">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technical Insight</h4>
                {step < 2 && <p className="text-sm text-slate-700">这一阶段主要通过<strong>非对称加密</strong>（RSA/ECC）来交换信息，因为非对称加密计算量大，只用于握手阶段。</p>}
                {step === 2 && <p className="text-sm text-slate-700">这是防止中间人攻击（MITM）的关键。如果证书由不可信的 CA 签发，浏览器会弹出红色的警告页面。</p>}
                {step > 3 && <p className="text-sm text-slate-700">握手完成后，双方切换到<strong>对称加密</strong>（如 AES），因为其加解密速度比非对称加密快几个数量级，适合传输大量数据。</p>}
             </div>
        </div>
      </div>
    </div>
  );
};

// --- 内容板块：Header详解 ---
const HeaderDeepDive = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">首部字段：HTTP 的“控制面板”</h2>
            <p className="text-slate-600">Header 是 HTTP 最灵活的部分，分为四类。理解它们是前端性能优化和后端控制的关键。</p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-purple-600 mb-4 flex items-center gap-2">
                        <Layers size={18} /> 通用首部字段 (General)
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">请求和响应都会使用</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Cache-Control</span> <span className="text-slate-500">控制缓存行为（如 no-cache, max-age）。性能优化的核心。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Connection</span> <span className="text-slate-500">管理连接状态（Keep-Alive / Close）。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Date</span> <span className="text-slate-500">报文创建日期。</span></li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-blue-600 mb-4 flex items-center gap-2">
                        <ArrowRightLeft size={18} /> 请求首部字段 (Request)
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">客户端发给服务器的补充信息</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Accept</span> <span className="text-slate-500">告诉服务器我能处理什么媒体类型。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Host</span> <span className="text-slate-500">虚拟主机必须字段。告诉服务器你想访问哪个域名（一个IP可能对应多个域名）。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">User-Agent</span> <span className="text-slate-500">客户端信息，常用于统计或适配。</span></li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                        <Server size={18} /> 响应首部字段 (Response)
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">服务器发给客户端的补充信息</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">ETag</span> <span className="text-slate-500">资源的唯一标识。用于缓存验证（如果ETag没变，就返回304）。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Location</span> <span className="text-slate-500">令客户端重定向至指定URI。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Server</span> <span className="text-slate-500">服务器软件信息。</span></li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-orange-600 mb-4 flex items-center gap-2">
                        <FileText size={18} /> 实体首部字段 (Entity)
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">针对实体部分（Body）的描述</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Content-Type</span> <span className="text-slate-500">实体的媒体类型（如 application/json）。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Content-Length</span> <span className="text-slate-500">实体的大小（字节）。</span></li>
                        <li className="flex flex-col"><span className="font-mono font-bold text-slate-700">Last-Modified</span> <span className="text-slate-500">资源最后修改时间。</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// --- 内容板块：Web攻击 ---
const Security = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Web 的攻击技术</h2>
            <p className="text-slate-600">HTTP 协议本身不具备安全性，加上 Web 应用的复杂性，导致了多种攻击方式。《图解HTTP》重点介绍了以下几种。</p>

            <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle size={20}/> XSS (跨站脚本攻击)
                    </h3>
                    <p className="text-sm text-red-900 mb-2">
                        <strong>原理：</strong> 攻击者在网页中注入恶意脚本（通常是 JavaScript），当用户浏览该页面时，脚本执行，窃取 Cookie 或重定向用户。
                    </p>
                    <p className="text-xs text-red-700 bg-red-100 p-2 rounded">
                        <strong>防御：</strong> 对用户输入进行转义（Escape）；设置 Cookie 为 HttpOnly（禁止 JS 读取）。
                    </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center gap-2">
                        <XCircle size={20}/> SQL 注入
                    </h3>
                    <p className="text-sm text-orange-900 mb-2">
                        <strong>原理：</strong> 攻击者在表单输入中包含 SQL 命令，欺骗数据库服务器执行非授权的查询。
                    </p>
                    <p className="text-xs text-orange-700 bg-orange-100 p-2 rounded">
                        <strong>防御：</strong> 永远不要相信用户输入；使用预编译语句（PreparedStatement）或 ORM。
                    </p>
                </div>

                <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <ShieldAlert size={20}/> CSRF (跨站请求伪造)
                    </h3>
                    <p className="text-sm text-slate-900 mb-2">
                        <strong>原理：</strong> 攻击者诱导已登录用户点击链接，利用用户的 Cookie 身份向服务器发送恶意请求（如转账）。
                    </p>
                    <p className="text-xs text-slate-700 bg-slate-200 p-2 rounded">
                        <strong>防御：</strong> 使用 CSRF Token；检查 Referer 字段。
                    </p>
                </div>
            </div>
        </div>
    )
}

// --- 内容板块：批判性评估 ---
const CriticalReview = () => {
    return (
        <div className="space-y-8 pb-10">
            <header>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">批判性评估与置信度</h2>
                <p className="text-slate-600">《图解HTTP》是一本优秀的入门读物，但作为技术人员，我们需要客观评估其局限性。</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-green-700 mb-4 border-b pb-2 border-green-200">本书优势 (Pros)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                        <li><strong>可视化极强：</strong> 将看不见的网络请求通过漫画形式展现，非常适合初学者建立心智模型。</li>
                        <li><strong>结构清晰：</strong> 按照协议、状态码、Header、HTTPS、安全的逻辑递进，符合学习曲线。</li>
                        <li><strong>基础扎实：</strong> 对 HTTP/1.1 的核心概念（Keep-Alive, Cookie, 缓存）讲解非常透彻，这些知识点至今未过时。</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-red-700 mb-4 border-b pb-2 border-red-200">时效性与局限 (Cons)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                        <li><strong>版本滞后：</strong> 书中主要聚焦 HTTP/1.1。虽然提及了 SPDY（HTTP/2 的前身），但对 HTTP/2 的多路复用（Multiplexing）和头部压缩讲解不足。</li>
                        <li><strong>HTTP/3 缺失：</strong> 完全未涵盖基于 UDP (QUIC) 的 HTTP/3，这是现代网络优化的重要方向。</li>
                        <li><strong>WebSocket 篇幅少：</strong> 对实时通信技术的覆盖较浅。</li>
                    </ul>
                </div>
            </div>

            <div className="bg-slate-800 text-slate-200 p-6 rounded-xl">
                <h3 className="flex items-center gap-2 font-bold mb-4">
                    <Info className="text-blue-400" />
                    置信度评级与阅读建议
                </h3>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded">
                        <span>HTTP/1.1 基础概念</span>
                        <span className="text-green-400 font-mono font-bold">高 (High)</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded">
                        <span>HTTPS 原理</span>
                        <span className="text-green-400 font-mono font-bold">高 (High)</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded">
                        <span>现代网络性能优化</span>
                        <span className="text-yellow-400 font-mono font-bold">低 (Low)</span>
                    </div>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                    <strong>建议：</strong> 初学者可将其作为 HTTP 入门圣经。但在阅读后，<strong>必须</strong>通过查阅最新的 RFC 文档或 Google Developers 资料来补充 HTTP/2 和 HTTP/3 的知识，以修正对“网络性能瓶颈”的认知（例如：在 HTTP/2 中，雪碧图和域名分片技术已不再推荐）。
                </p>
            </div>
        </div>
    )
}

// --- 主应用 ---
const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'protocol': return <ProtocolLab />;
      case 'status': return <StatusCodeGallery />;
      case 'https': return <HttpsExplainer />;
      case 'headers': return <HeaderDeepDive />;
      case 'security': return <Security />;
      case 'critical': return <CriticalReview />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 md:ml-64 relative">
        <div className="max-w-4xl mx-auto p-4 md:p-10 pt-6 pb-20 md:pb-10">
          {renderContent()}
        </div>
      </main>

      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;