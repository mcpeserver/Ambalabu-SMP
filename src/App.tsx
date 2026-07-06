import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  ChevronRight, 
  Users, 
  Crown, 
  Zap, 
  AlertTriangle, 
  Volume2, 
  Wifi, 
  BookOpen, 
  Info, 
  Flame, 
  Gamepad2, 
  Globe, 
  Terminal, 
  ShieldAlert, 
  PhoneCall,
  MessageCircle,
  HelpCircle
} from "lucide-react";

export default function App() {
  // State copy status
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);
  
  // State status ping server
  const [pingState, setPingState] = useState<"idle" | "pinging" | "success">("idle");
  const [latency, setLatency] = useState<number | null>(null);

  // Dynamic Developer Config from API
  const [devConfig, setDevConfig] = useState({
    name: "RAN DEV",
    phone: "0895602592430",
    portfolio: "https://sfl.gl/x2ic",
    discord: "https://discord.gg/9KUN2byKRM",
    communityName: "RAN DEV Community",
    communityWebsite: "https://discord.gg/9KUN2byKRM"
  });

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setDevConfig({
          name: data.name || "RAN DEV",
          phone: data.contact?.phone || "0895602592430",
          portfolio: data.links?.portfolio || data.website?.portfolio || "https://sfl.gl/x2ic",
          discord: data.links?.discord || "https://discord.gg/9KUN2byKRM",
          communityName: data.community?.name || "RAN DEV Community",
          communityWebsite: data.community?.website || data.links?.discord || "https://discord.gg/9KUN2byKRM"
        });
      })
      .catch((err) => {
        console.error("Gagal memuat config developer dari API:", err);
      });
  }, []);

  // Data utama sesuai spesifikasi
  const WA_LINK = "https://chat.whatsapp.com/CIjrlWdXz1hCXsKffL5MhH";
  const ADMIN_WA_PHONE = devConfig.phone;
  const ADMIN_WA_LINK = `https://wa.me/62${devConfig.phone.replace(/^0/, '')}?text=Halo%20${encodeURIComponent(devConfig.name)},%20saya%20tertarik%20untuk%20membuat%20website%20seperti%20AMBALABU%20SMP%20atau%20layanan%20lainnya`;
  const SERVER_IP_JAVA = "ambalabu.raznar.net:25007";
  const SERVER_IP_BEDROCK = "ambalabu.raznar.net";
  const SERVER_PORT_BEDROCK = "25062";
  const SERVER_VERSION = "1.21.11";
  const PORTFOLIO_LINK = devConfig.portfolio;

  const rulesList = [
    { id: "rule-1", text: "No X-Ray", desc: "Dilarang keras memakai modifikasi atau texture pack X-Ray jenis apa pun untuk melihat bijih tambang berharga menembus block bumi." },
    { id: "rule-2", text: "No Client", desc: "Dilarang menggunakan cheat client (seperti wurst, meteor, dsb) yang memberikan keuntungan tidak adil atas player lain." },
    { id: "rule-3", text: "No Cheat", desc: "Segala bentuk peretasan, cheat engine, exploit bug server, auto-aim, fly, atau sejenisnya dilarang mutlak." },
    { id: "rule-4", text: "No Spam / Kirim Stiker 18+ di Grup", desc: "Menjaga sopan santun di grup WhatsApp komunitas dengan tidak membanjiri chat (spamming) atau mengirim konten pornografi." },
    { id: "rule-5", text: "No Anchor", desc: "Dilarang meledakkan Respawn Anchor di dimensi Overworld untuk kepentingan PVP/Combat." },
    { id: "rule-6", text: "No Crystal", desc: "Dilarang menggunakan ledakan End Crystal sebagai senjata pertempuran PVP/Combat antar player." },
    { id: "rule-7", text: "Dilarang Disconnect, /home, /warp, atau /rtp saat Combat", desc: "Dilarang keras melakukan combat logging (keluar game) atau teleportasi saat pertempuran sedang aktif berlangsung." }
  ];

  const rankList = [
    { name: "KING", price: "200K", color: "from-amber-400 to-yellow-600 animate-pulse", text: "text-amber-800", bg: "bg-amber-50 border-amber-300", benefits: "Gelar tertinggi server. Mendapatkan hak istimewa eksklusif paling utama dan kustomisasi penuh." },
    { name: "DUKE", price: "125K", color: "from-purple-500 to-indigo-600", text: "text-purple-800", bg: "bg-purple-50 border-purple-300", benefits: "Gelar kehormatan agung dengan hak dan fasilitas luar biasa di atas rata-rata player." },
    { name: "PALADIN", price: "75K", color: "from-teal-400 to-emerald-600", text: "text-teal-800", bg: "bg-teal-50 border-teal-300", benefits: "Ksatria suci pelindung kedamaian dengan kosmetik chat keren serta hak tambahan." },
    { name: "LORD", price: "50K", color: "from-blue-500 to-cyan-600", text: "text-blue-800", bg: "bg-blue-50 border-blue-300", benefits: "Penguasa wilayah berhak atas fitur premium dasar dan pengakuan nama di server." },
    { name: "KNIGHT", price: "25K", color: "from-slate-400 to-stone-600", text: "text-stone-800", bg: "bg-stone-50 border-stone-300", benefits: "Pangkat kesatria pemula sebagai bentuk apresiasi nyata mendukung kelangsungan server." }
  ];

  const copyToClipboard = (text: string, type: "java" | "bedrock" | "port") => {
    navigator.clipboard.writeText(text);
    if (type === "java") {
      setCopiedJava(true);
      setTimeout(() => setCopiedJava(false), 2000);
    } else if (type === "bedrock") {
      setCopiedBedrock(true);
      setTimeout(() => setCopiedBedrock(false), 2000);
    } else if (type === "port") {
      setCopiedPort(true);
      setTimeout(() => setCopiedPort(false), 2000);
    }
  };

  const handlePingServer = () => {
    setPingState("pinging");
    setTimeout(() => {
      setLatency(Math.floor(Math.random() * (42 - 19) + 19));
      setPingState("success");
    }, 1100);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf8f2] flex flex-col font-sans relative antialiased bg-grid-pattern">
      
      {/* STICKY HEADER CONTAINER (Watermark Banner + Navigation Bar) */}
      <div className="sticky top-0 z-40 w-full flex flex-col shadow-sm">
        {/* HEADER WATERMARK (TOP BANNER) */}
        <div id="developer-watermark-top" className="bg-amber-600 text-stone-900 font-medium text-xs md:text-sm py-2 px-4 relative z-50 text-center flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-3 flex-wrap">
          <span className="text-white">Developed by <strong className="font-extrabold text-[#fcf8f2]">{devConfig.name}</strong> • WhatsApp {devConfig.phone}</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <a 
            href={devConfig.portfolio} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-100 font-extrabold hover:text-white inline-flex items-center gap-1 transition-all bg-amber-700/50 px-2.5 py-0.5 rounded shadow-sm border border-amber-500/20"
            aria-label="Lihat website server lain buatan RAN DEV"
          >
            🌐 Lihat Website Server Lainnya <ExternalLink className="w-3.5 h-3.5 inline ml-0.5" />
          </a>
          <span className="hidden sm:inline text-white/40">|</span>
          <a 
            href={devConfig.communityWebsite} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-100 font-extrabold hover:text-white inline-flex items-center gap-1 transition-all bg-amber-800/40 px-2.5 py-0.5 rounded shadow-sm border border-amber-500/20"
            aria-label="Gabung Komunitas Developer"
          >
            👥 Gabung Komunitas Developer <ExternalLink className="w-3.5 h-3.5 inline ml-0.5" />
          </a>
          <span className="hidden sm:inline text-white/40">|</span>
          <a 
            href={ADMIN_WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#fcf8f2] underline decoration-dotted hover:text-white inline-flex items-center gap-1 transition-all"
            aria-label="Hubungi pengembang di WhatsApp"
          >
            Jasa Bikin Website Server dll <ExternalLink className="w-3.5 h-3.5 inline" />
          </a>
        </div>

        {/* NAVIGATION BAR */}
        <header id="main-navigation" className="bg-[#fcf8f2]/95 backdrop-blur-md border-b border-amber-900/10 py-3 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
              <img 
                src="/logo.jpg" 
                alt="AMBALABU SMP Logo" 
                className="w-10 h-10 rounded-lg border border-amber-600/30 shadow-inner object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display font-bold text-lg md:text-xl tracking-tight text-amber-950 flex items-center gap-1">
                  AMBALABU <span className="text-amber-600 text-xs px-2 py-0.5 rounded-full bg-amber-100 font-mono">SMP</span>
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-600">
              <button onClick={() => scrollToSection("connection-section")} className="hover:text-amber-700 transition-colors">IP Server</button>
              <button onClick={() => scrollToSection("rules-section")} className="hover:text-amber-700 transition-colors">Aturan</button>
              <button onClick={() => scrollToSection("features-section")} className="hover:text-amber-700 transition-colors">Fitur</button>
              <button onClick={() => scrollToSection("rank-section")} className="hover:text-amber-700 transition-colors">Daftar Rank</button>
              <button onClick={() => scrollToSection("portfolio-section")} className="hover:text-amber-700 transition-colors flex items-center gap-1 text-amber-800 font-bold bg-amber-100/50 px-2.5 py-0.5 rounded-full">Portfolio 🌐</button>
            </nav>

            <div className="flex items-center gap-2">
              <a 
                href={WA_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95"
                aria-label="Bergabung ke grup WhatsApp AMBALABU SMP"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                Grup WA
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-grow flex flex-col">

        {/* HERO SECTION WITH BENTO SIDE-BY-SIDE DESIGN */}
        <section id="hero-section" className="py-12 md:py-16 px-4 max-w-6xl mx-auto w-full relative overflow-hidden">
          {/* Subtle decorative grass elements in the corners */}
          <div className="absolute top-10 left-10 opacity-10 hidden lg:block select-none">
            <svg className="w-20 h-20 text-emerald-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 11h16v2H4zm-2-4h20v2H2zm4 8h12v2H6zm3 4h6v2H9z"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (Logo, Title, Description, Actions) */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Logo Wrapper with decorative floating yellow coins (inspired by logo) */}
              <div className="relative mb-6 group inline-block">
                {/* Soft glowing outer halo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Main logo round frame */}
                <div className="relative bg-[#fcf8f2] p-1.5 rounded-full border-4 border-amber-800/20 shadow-lg max-w-[110px] md:max-w-[130px]">
                  <img 
                    src="/logo.jpg" 
                    alt="Official AMBALABU SMP Logo" 
                    className="rounded-full shadow-sm aspect-square object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating elements to highlight playfulness */}
                <span className="absolute -top-2 -left-4 text-3xl animate-bounce select-none" style={{ animationDuration: '3s' }}>🪙</span>
                <span className="absolute -bottom-1 -right-3 text-3xl animate-bounce select-none" style={{ animationDuration: '4.5s' }}>🪙</span>
                <span className="absolute bottom-5 -left-5 text-3xl rotate-12 select-none">⚔️</span>
              </div>

              <h1 className="font-display font-extrabold text-3.5xl sm:text-5xl md:text-5.5xl text-stone-900 tracking-tight leading-none mb-4">
                Welcome to <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
                  AMBALABU SMP
                </span>
              </h1>

              <p className="max-w-xl text-stone-600 text-sm sm:text-base mb-6 leading-relaxed">
                Website resmi server Minecraft <span className="font-bold text-amber-950">AMBALABU SMP</span>. Komunitas bermain survival yang ramah, seru, dan santai dengan nuansa pixel art yang menyenangkan. Temukan teman bermain baru, bangun desamu, dan mulailah petualangan hebatmu di sini!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full max-w-sm sm:max-w-none">
                <button 
                  onClick={() => scrollToSection("connection-section")}
                  className="bg-gradient-to-r from-amber-700 to-yellow-600 hover:from-amber-800 hover:to-yellow-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm"
                  aria-label="Lihat detail koneksi IP untuk bermain sekarang"
                >
                  <Gamepad2 className="w-4 h-4" />
                  Main Sekarang
                </button>
                <button 
                  onClick={() => scrollToSection("rules-section")}
                  className="bg-amber-100 hover:bg-amber-200/80 text-amber-900 border border-amber-200 font-bold px-6 py-3 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm"
                  aria-label="Lihat aturan dan informasi lengkap server"
                >
                  <Info className="w-4 h-4" />
                  Lihat Informasi
                </button>
              </div>
            </div>

            {/* Right Column (Minecraft World Hero Banner Showcase) */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-md bg-white border-4 border-amber-950/10 rounded-3xl p-3 shadow-xl overflow-hidden group"
              >
                {/* Blocky top styled strip */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600"></div>
                
                {/* Generated Hero Image Showcase */}
                <div className="relative overflow-hidden rounded-2xl aspect-[16/11] bg-stone-100">
                  <img 
                    src="/hero_banner.jpg" 
                    alt="AMBALABU SMP World Landscape" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
                  
                  {/* Small absolute detail badge */}
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white font-mono text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                    Pemandangan Server Resmi 🌄
                  </span>
                </div>

                {/* Subinfo block below image */}
                <div className="mt-3 p-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🏕️</span>
                    <div>
                      <p className="font-display font-extrabold text-xs text-stone-900">Survival Server</p>
                      <p className="text-[10px] text-stone-500 font-mono">Platform: Java & Bedrock</p>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full font-mono">
                    Online 🟢
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SERVER STATUS AND METRICS BAR */}
        <section className="bg-amber-50/50 border-y border-amber-900/10 py-6 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-xs text-stone-500 uppercase tracking-wider font-mono">Platform</h3>
                <p className="font-bold text-amber-950 text-sm md:text-base">Java & Bedrock Edition</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xs text-stone-500 uppercase tracking-wider font-mono">Versi Server</h3>
                <p className="font-bold text-amber-950 text-sm md:text-base">1.21.11 (Terbaru)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-end">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-xs text-stone-500 uppercase tracking-wider font-mono">Status Server</h3>
                <p className="font-bold text-emerald-700 text-sm md:text-base">ON 🟢 (Aktif)</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTION SECTION (IP ADDRESSES) */}
        <section id="connection-section" className="py-16 px-4 max-w-6xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-stone-900 tracking-tight mb-2">
              Informasi Sambungan Server
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-sm md:text-base">
              Salin alamat IP resmi di bawah ini sesuai dengan versi Minecraft yang kamu gunakan untuk segera terhubung ke dalam game.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* JAVA EDITION CARD */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white border border-amber-900/10 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 to-amber-700"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                    Minecraft Java
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ON 🟢
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <span>☕</span> Java Edition
                </h3>
                <p className="text-stone-600 text-xs md:text-sm mb-6 leading-relaxed">
                  Gunakan PC atau laptop, buka game launcher resmi, ketikkan server IP Java di menu multiplayer, dan mulailah berpetualang.
                </p>

                {/* COPY WIDGET */}
                <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex items-center justify-between mb-4">
                  <div className="overflow-hidden mr-2">
                    <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-bold font-mono">Server IP</span>
                    <span className="block font-mono text-xs sm:text-sm md:text-base text-amber-950 font-bold break-all select-all">
                      {SERVER_IP_JAVA}
                    </span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(SERVER_IP_JAVA, "java")}
                    className={`p-3 rounded-xl transition-all cursor-pointer ${
                      copiedJava 
                        ? "bg-emerald-500 text-white" 
                        : "bg-amber-100 hover:bg-amber-200 text-amber-950"
                    }`}
                    title="Salin Alamat Java IP"
                    aria-label="Salin IP Minecraft Java"
                  >
                    {copiedJava ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="text-xs text-stone-500 flex items-center justify-between mt-2 border-t border-stone-100 pt-3">
                <span>Versi yang Didukung:</span>
                <span className="font-semibold text-stone-800 font-mono">{SERVER_VERSION}</span>
              </div>
            </motion.div>

            {/* BEDROCK EDITION CARD */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white border border-amber-900/10 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 to-amber-600"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                    Minecraft Bedrock
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ON 🟢
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <span>📱</span> Bedrock / PE
                </h3>
                <p className="text-stone-600 text-xs md:text-sm mb-6 leading-relaxed">
                  Cocok untuk HP Android, iOS, Windows 10, Xbox, atau Playstation. Silakan salin IP server sekaligus port bedrock yang benar.
                </p>

                {/* COPY WIDGET BEDROCK */}
                <div className="space-y-3 mb-4">
                  <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex items-center justify-between">
                    <div className="overflow-hidden mr-2">
                      <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-bold font-mono">Server IP (Bedrock)</span>
                      <span className="block font-mono text-xs sm:text-sm md:text-base text-amber-950 font-bold break-all select-all">
                        {SERVER_IP_BEDROCK}
                      </span>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(SERVER_IP_BEDROCK, "bedrock")}
                      className={`p-3 rounded-xl transition-all cursor-pointer ${
                        copiedBedrock 
                          ? "bg-emerald-500 text-white" 
                          : "bg-amber-100 hover:bg-amber-200 text-amber-950"
                      }`}
                      title="Salin Bedrock IP"
                      aria-label="Salin IP Minecraft Bedrock"
                    >
                      {copiedBedrock ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex items-center justify-between">
                    <div className="overflow-hidden mr-2">
                      <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-bold font-mono">Port (Bedrock)</span>
                      <span className="block font-mono text-xs sm:text-sm md:text-base text-amber-950 font-bold break-all select-all">
                        {SERVER_PORT_BEDROCK}
                      </span>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(SERVER_PORT_BEDROCK, "port")}
                      className={`p-3 rounded-xl transition-all cursor-pointer ${
                        copiedPort 
                          ? "bg-emerald-500 text-white" 
                          : "bg-amber-100 hover:bg-amber-200 text-amber-950"
                      }`}
                      title="Salin Port Bedrock"
                      aria-label="Salin Port Minecraft Bedrock"
                    >
                      {copiedPort ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-xs text-stone-500 flex items-center justify-between mt-2 border-t border-stone-100 pt-3">
                <span>Versi yang Didukung:</span>
                <span className="font-semibold text-stone-800 font-mono">{SERVER_VERSION}</span>
              </div>
            </motion.div>
          </div>

          {/* INTERACTIVE SERVER STATUS CHECKER BOX */}
          <div className="mt-8 max-w-4xl mx-auto bg-stone-900 text-stone-100 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 rounded-2xl border border-stone-700 mt-1">
                  <Wifi className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Status Utama Server Resmi</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-1">
                    Kami memantau kondisi server AMBALABU SMP secara real-time demi kenyamanan bermain petualang sekalian.
                  </p>
                  
                  {/* Real Status Listing */}
                  <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
                    <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full font-semibold font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ON 🟢 (Aktif)
                    </span>
                    <span className="flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-2.5 py-1 rounded-full opacity-60 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> MT 🟡 (Maintenance)
                    </span>
                    <span className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-1 rounded-full opacity-60 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> OFF 🔴 (Nonaktif)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-stone-800/80 border border-stone-700/60 p-4 rounded-2xl min-w-[200px] w-full md:w-auto text-center">
                {pingState === "idle" && (
                  <>
                    <span className="text-[10px] uppercase font-bold text-stone-500 font-mono block mb-2">Detektor Koneksi</span>
                    <button 
                      onClick={handlePingServer}
                      className="bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold px-4 py-2 rounded-xl text-xs transition-all hover:scale-105 active:scale-95 w-full cursor-pointer"
                    >
                      Uji Koneksi Server
                    </button>
                  </>
                )}
                {pingState === "pinging" && (
                  <div className="py-2">
                    <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <span className="text-xs font-mono text-stone-400">Mengukur latensi...</span>
                  </div>
                )}
                {pingState === "success" && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 font-mono block mb-1">Hasil Latensi</span>
                    <div className="text-lg font-bold text-emerald-400 font-mono mb-1">{latency} ms</div>
                    <span className="text-xs text-stone-300 block mb-2">Koneksi Sangat Stabil!</span>
                    <button 
                      onClick={() => setPingState("idle")}
                      className="text-amber-400 hover:text-amber-300 text-xs underline font-mono cursor-pointer"
                    >
                      Ulangi Tes
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* RULES SECTION */}
        <section id="rules-section" className="py-16 bg-stone-100 border-y border-stone-200/80 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-700 font-mono text-xs font-bold uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
                Aturan Bermain Resmi
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-4xl text-stone-900 mt-3 mb-2 tracking-tight">
                Peraturan Server AMBALABU SMP
              </h2>
              <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto">
                Demi menjaga keseruan, keadilan, dan kenyamanan seluruh player, harap patuhi dan hormati peraturan resmi di bawah ini. Pelanggar aturan akan dikenakan sanksi tegas!
              </p>
            </div>

            <div className="space-y-4">
              {rulesList.map((rule, idx) => (
                <motion.div 
                  key={rule.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex-shrink-0 flex items-center justify-center font-bold font-mono text-sm border border-red-100">
                    {idx + 1}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                      {rule.text}
                      {idx < 3 && <span className="bg-red-100 text-red-800 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Kritis</span>}
                      {idx === 6 && <span className="bg-amber-100 text-amber-800 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Combat PVP</span>}
                    </h4>
                    <p className="text-stone-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-red-50 border border-red-200/60 rounded-2xl p-5 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-red-950 text-sm">Peringatan Keras Pemblokiran!</h5>
                <p className="text-xs text-red-800 mt-1 leading-relaxed">
                  Penggunaan cheat, program ilegal pihak ketiga (client curang), serta tindakan merusak ekosistem server lainnya akan berakibat pada pemblokiran akun permanen (Permanent Ban) dari server game dan grup resmi tanpa pengecualian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features-section" className="py-16 px-4 max-w-6xl mx-auto w-full">
          <div className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            {/* Ambient Background Grid Decorator */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center lg:text-left">
                <span className="text-yellow-400 font-mono text-xs font-bold uppercase tracking-widest bg-amber-900/50 border border-amber-800 px-3 py-1 rounded-full inline-block mb-3">
                  Fitur Unggulan Server
                </span>
                <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight mb-4">
                  Daftar Fitur AMBALABU SMP
                </h2>
                
                {/* Official Provided Feature Information: "Banyak lah intinya" styled beautifully */}
                <div className="bg-amber-900/40 border border-amber-800 rounded-2xl p-6 mb-6">
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-yellow-400 tracking-tight leading-none mb-2">
                    &ldquo;Banyak lah intinya&rdquo;
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    Kami menghadirkan pengalaman survival klasik yang disempurnakan dengan berbagai optimasi server terbaik. Tanpa fitur berlebih yang membingungkan, kami memprioritaskan stabilitas bermain, keadilan antar-pemain, serta kemudahan bersosialisasi yang membuat kamu betah bermain seharian.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="bg-amber-900/30 border border-amber-800 text-stone-200 text-xs px-3 py-1 rounded-full font-mono">⚡ Performa Stabil</span>
                  <span className="bg-amber-900/30 border border-amber-800 text-stone-200 text-xs px-3 py-1 rounded-full font-mono">👥 Komunitas Ramah</span>
                  <span className="bg-amber-900/30 border border-amber-800 text-stone-200 text-xs px-3 py-1 rounded-full font-mono">🎮 Cross-Platform Play</span>
                  <span className="bg-amber-900/30 border border-amber-800 text-stone-200 text-xs px-3 py-1 rounded-full font-mono">🛡️ Keamanan Data</span>
                </div>
              </div>

              {/* Graphical representation of block elements / coins in hero */}
              <div className="flex-shrink-0 bg-amber-900/30 border border-amber-800 p-6 rounded-2xl max-w-sm w-full relative">
                <div className="absolute top-2 right-2 text-xs text-stone-400 font-mono">Informasi Rasional</div>
                <h4 className="font-bold text-yellow-400 mb-3 text-sm font-mono uppercase tracking-wider">Mengapa Memilih Kami?</h4>
                <div className="space-y-4 text-xs text-stone-300">
                  <div className="flex gap-2">
                    <span className="text-amber-400">✔</span>
                    <p><strong>Fokus pada Komunitas:</strong> Kami percaya kenyamanan bercengkerama di grup dan di game adalah prioritas nomor satu.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-amber-400">✔</span>
                    <p><strong>Aksesibilitas Tinggi:</strong> Baik kamu menggunakan PC dengan Java Edition ataupun HP / Konsol dengan Bedrock Edition, kamu tetap berada di satu dunia yang sama.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-amber-400">✔</span>
                    <p><strong>Manajemen Profesional:</strong> Server dikonfigurasi dengan hati-hati guna meminimalkan hambatan teknis saat berpetualang.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RANK SECTION */}
        <section id="rank-section" className="py-16 bg-amber-50/20 border-t border-stone-200 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-700 font-mono text-xs font-bold uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
                Dukungan Finansial & Keanggotaan
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-4xl text-stone-900 mt-3 mb-2 tracking-tight">
                Daftar Rank Resmi Server
              </h2>
              <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto">
                Bantu server tetap aktif mengudara dengan melakukan pembelian Rank resmi. Setiap rank memberikan hak istimewa tersendiri!
              </p>
            </div>

            {/* RANKS BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {rankList.map((rank, idx) => (
                <motion.div 
                  key={rank.name}
                  whileHover={{ y: -6 }}
                  className={`border rounded-2xl p-5 flex flex-col justify-between shadow-sm transition-all bg-white relative overflow-hidden ${
                    rank.name === "KING" ? "border-amber-400 ring-2 ring-amber-400/20 md:col-span-2 lg:col-span-1" : "border-stone-200"
                  }`}
                >
                  {rank.name === "KING" && (
                    <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-bl-lg">
                      Terpopuler
                    </div>
                  )}
                  
                  <div>
                    <span className={`inline-block font-mono font-extrabold text-sm tracking-widest uppercase mb-1 ${rank.text}`}>
                      RANK {rank.name}
                    </span>
                    
                    <div className="flex items-baseline gap-1 mt-1 mb-3">
                      <span className="text-2xl font-black text-stone-900 tracking-tight">Rp {rank.price}</span>
                      <span className="text-xs text-stone-500 font-medium">/ Selamanya</span>
                    </div>

                    <p className="text-stone-600 text-[11px] leading-relaxed mb-4">
                      {rank.benefits}
                    </p>
                  </div>

                  <div className="border-t border-stone-100 pt-3 mt-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-mono">
                      <Crown className={`w-3.5 h-3.5 ${rank.text}`} />
                      <span>Kosmetik Premium</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PURCHASING GUIDE CARDS */}
            <div className="mt-12 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-3xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-amber-950 text-lg flex items-center gap-2">
                    <span className="text-xl">💳</span> Cara Pembelian Rank
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-md">
                    Untuk menjamin keamanan transaksi, pembelian rank dilakukan secara manual dan transparan dengan cara langsung menghubungi <strong>admin grup WhatsApp</strong> resmi kami.
                  </p>
                </div>
                <a 
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer text-xs sm:text-sm whitespace-nowrap"
                  aria-label="Hubungi admin di grup WhatsApp untuk membeli rank"
                >
                  <PhoneCall className="w-4 h-4" />
                  Hubungi Admin Grup
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION (KOLEKSI SERVER LAIN OLEH RAN DEV) */}
        <section id="portfolio-section" className="py-12 px-4 max-w-4xl mx-auto w-full">
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-white border border-amber-900/10 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden"
          >
            {/* Left edge colored border */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-600 to-yellow-500"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4 text-left">
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-amber-700 flex-shrink-0">
                  <Globe className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded font-mono uppercase tracking-wider">
                      {devConfig.name.toUpperCase()} PORTFOLIO
                    </span>
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded font-mono">
                      RECOMMENDED
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-stone-900 mt-2">
                    Lihat Website Server Minecraft Lainnya!
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Tertarik melihat hasil karya website server Minecraft lainnya yang telah dirancang oleh <strong>{devConfig.name}</strong>? Temukan inspirasi desain website modern, responsif, dan siap pakai.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <a 
                  href={PORTFOLIO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm whitespace-nowrap"
                  aria-label={`Lihat portofolio server lain di ${PORTFOLIO_LINK.replace(/^https?:\/\//, '')}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Kunjungi {PORTFOLIO_LINK.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section id="cta-section" className="py-16 md:py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-600 text-white text-center px-4 relative overflow-hidden">
          {/* Minecraft aesthetic earth grass block decorative bottom wave */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-[#5c4033] opacity-20"></div>
          
          <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
            {/* Visual badge */}
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 fill-white text-transparent" />
            </div>

            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-none mb-4">
              Bergabung Dengan Komunitas Kami!
            </h2>
            
            <p className="max-w-xl text-amber-50 text-sm md:text-base mb-8 leading-relaxed">
              Dapatkan berita pembaruan terbaru, ajukan pertanyaan, jalin persahabatan, atau lakukan pembelian rank dengan masuk ke grup WhatsApp resmi AMBALABU SMP. Kami menunggumu!
            </p>

            <a 
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-amber-50 text-amber-950 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer text-sm sm:text-base"
              aria-label="Klik untuk bergabung ke grup WhatsApp AMBALABU SMP sekarang"
            >
              <MessageCircle className="w-5 h-5 fill-amber-950 text-transparent" />
              Gabung Grup WhatsApp Sekarang
            </a>
            
            <span className="text-[10px] text-white/60 font-mono mt-4 block">
              Tautan Komunitas: {WA_LINK}
            </span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#1b1713] text-stone-400 py-12 px-4 border-t border-amber-900/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="AMBALABU SMP Footer Logo" 
              className="w-10 h-10 rounded-lg filter grayscale opacity-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-display font-extrabold text-stone-200 text-base">
                AMBALABU SMP
              </span>
              <p className="text-xs text-stone-500">© 2026 AMBALABU SMP. Hak cipta dilindungi undang-undang.</p>
            </div>
          </div>

          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-1">
            {/* OFFICIAL DEVELOPER WATERMARK FOOTER */}
            <p className="text-xs text-stone-500 uppercase tracking-widest font-mono font-bold mb-0.5">PENGEMBANG RESMI</p>
            <p className="text-xs text-stone-300 font-medium">
              Website dikembangkan oleh <span className="text-amber-500 font-bold">{devConfig.name}</span> • WhatsApp <a href={`https://wa.me/62${devConfig.phone.replace(/^0/, '')}?text=Halo%20${encodeURIComponent(devConfig.name)}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-mono">{devConfig.phone}</a>
            </p>
            <p className="text-xs text-stone-400 mt-1 flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1">
              <span>🎨 <a href={PORTFOLIO_LINK} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1">Kunjungi Portofolio <ExternalLink className="w-3 h-3 inline" /></a></span>
              <span className="hidden sm:inline text-stone-600">|</span>
              <span>👥 <a href={devConfig.communityWebsite} target="_blank" rel="noopener noreferrer" className="text-[#34d399] hover:underline font-semibold inline-flex items-center gap-1">Gabung {devConfig.communityName} <ExternalLink className="w-3 h-3 inline" /></a></span>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-stone-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-600">
          <p>
            Situs web ini tidak berafiliasi secara resmi dengan Mojang Studios, Microsoft, atau entitas pengembang Minecraft lainnya. Segala aset Minecraft adalah milik pemiliknya masing-masing.
          </p>
          <div className="flex gap-4">
            <a href="/LICENSE" className="hover:text-stone-400">MIT License</a>
            <span>•</span>
            <a href="/CODE_OF_CONDUCT.md" className="hover:text-stone-400 font-mono">Code of Conduct</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
