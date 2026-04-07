import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BellRing, Server, Activity, Lock, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden font-sans selection:bg-purple-900 selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[15%] w-[60%] h-[60%] rounded-full bg-fuchsia-900/20 blur-[150px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            ScropIDS
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl relative"
        >
          {/* Floating UI Elements for Uniqueness */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -left-20 top-20 flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /><span className="text-xs text-white">System Secure</span></div>
            <div className="w-32 h-1.5 bg-emerald-500/20 rounded-full"><div className="w-full h-full bg-emerald-500 rounded-full" /></div>
          </motion.div>
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [0, -3, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -right-10 top-40 flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <div className="flex items-center gap-2"><BellRing className="w-4 h-4 text-rose-400" /><span className="text-xs text-white">Critical Alert</span></div>
            <div className="w-full text-[10px] text-neutral-400">Unauthorized SSH attempt blocked.</div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse" />
            <span className="text-xs font-semibold text-indigo-300 tracking-wider uppercase">ScropIDS Active Protection v2.0</span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-8">
            Providing Unrivaled <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-300 via-purple-400 to-rose-400 drop-shadow-sm">
              Services to Your Servers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            ScropIDS is the absolute pinnacle of cloud-native intrusion detection. We connect directly to your core infrastructure, monitor health telemetry, and dispatch LLM-analyzed real-time alerts so you stay miles ahead of cyber threats.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/login"
              className="px-8 py-4 rounded-full border border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold tracking-wide hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center hover:scale-105"
            >
              Initialize Protection
              <Lock className="w-5 h-5" />
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md font-medium text-white transition-all w-full sm:w-auto justify-center text-center hover:scale-105"
            >
              See How It Works
            </a>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <div id="how-it-works" className="mt-40 w-full relative z-10 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-16 text-center">Threat Lifecycle Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { step: "01", title: "Collect & Aggregate", desc: "Our ultra-lightweight Go agents continuously stream OS logs, network telemetry, and auth events over encrypted channels." },
              { step: "02", title: "LLM Threat Triage", desc: "Data hits our Django pipeline and is immediately analyzed by advanced Language Models to instantly filter out false positives." },
              { step: "03", title: "Dispatch Alerts", desc: "When a true anomaly is detected, high-fidelity alerts are dispatched to your Slack, Email, or Telegram with mitigation steps." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                <div className="text-6xl font-black text-white/5 absolute -top-6 -right-2">{s.step}</div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div id="features" className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10">
          {[
            {
              icon: <Server className="w-8 h-8 text-indigo-400" />,
              title: "Provide Services to Servers",
              desc: "Deploy lightweight, low-footprint agents onto your servers. ScropIDS aggregates logs, traffic, and system state effortlessly.",
            },
            {
              icon: <BellRing className="w-8 h-8 text-fuchsia-400" />,
              title: "Send Advanced Alerts",
              desc: "Automated routing of critical anomaly alerts to Slack, Discord, Email, and SMS with full LLM triage context.",
            },
            {
              icon: <Activity className="w-8 h-8 text-rose-400" />,
              title: "Real-Time Telemetry",
              desc: "Dynamic live monitoring pipeline powered by Redis & Celery ensuring no event goes unnoticed.",
            },
            {
              icon: <Cpu className="w-8 h-8 text-blue-400" />,
              title: "AI-Powered Triage",
              desc: "Automated threat sorting using advanced local and cloud Large Language Models to reduce false positives.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
              title: "Multi-Tenant Architecture",
              desc: "Perfect for MSSPs and large organizations needing isolated data streams and siloed organizational policies.",
            },
            {
              icon: <Lock className="w-8 h-8 text-amber-400" />,
              title: "Zero-Trust Encryption",
              desc: "All events are securely encrypted over the wire utilizing Fernet keys and stringent local authorization policies.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-white/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-3xl rounded-2xl z-0" />
              <div className="relative z-10 p-8 h-full flex flex-col items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 group-hover:-translate-y-1 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white tracking-wide">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-neutral-500 text-sm relative z-10 bg-neutral-950/50 backdrop-blur-xl">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-bold">ScropIDS</span>
        </div>
        <p>© 2026 ScropIDS Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
