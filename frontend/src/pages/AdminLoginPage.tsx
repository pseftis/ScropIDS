import { useState, type FormEvent } from "react";
import { Eye, EyeOff, ShieldAlert, Key } from "lucide-react";
import { toast } from "sonner";

import { useAuth } from "@/hooks/useAuth";
import { errorMessage } from "@/lib/api";

export function AdminLoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      await login(username, password);
      toast.success("Admin Authorization Granted.");
      // Native redirect to Django Admin portal
      window.location.href = "/admin/";
    } catch (error) {
      toast.error(errorMessage(error));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden font-mono text-emerald-500">
      {/* Intense red/green hacker-style glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* Floating particles (CSS-only approximation) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-md p-8 border border-red-900/50 bg-black/80 backdrop-blur-md shadow-[0_0_50px_rgba(220,38,38,0.15)] rounded-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-red-950/30 rounded-full border border-red-900 shadow-[0_0_20px_rgba(220,38,38,0.4)] mb-4">
            <ShieldAlert className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold tracking-widest text-red-500 uppercase">System Override</h1>
          <p className="mt-2 text-xs text-red-400/70 uppercase tracking-widest text-center">
            Restricted Core Access Portal. Unauthorized attempts are logged.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Operator ID</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-red-950/20 border border-red-900/50 rounded-lg p-3 text-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-mono"
              placeholder="_"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Security Key</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-red-950/20 border border-red-900/50 rounded-lg p-3 text-red-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-mono"
                placeholder="***"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-red-500 hover:text-red-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 flex items-center justify-center gap-2 w-full bg-red-900/50 hover:bg-red-800 text-red-100 font-bold tracking-widest uppercase py-4 rounded-lg transition-all border border-red-700/50 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] disabled:opacity-50"
          >
            {submitting ? "Authenticating..." : "Initialize Access"}
            <Key className="w-4 h-4 ml-2" />
          </button>
        </form>

        <div className="mt-8 text-center text-[10px] text-red-600/50 uppercase tracking-widest">
          Node: Alpha-7 • Level: Core • Encryption: Zero-Trust
        </div>
      </div>
    </div>
  );
}
