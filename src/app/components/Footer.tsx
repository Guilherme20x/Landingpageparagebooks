import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2">
              GEbooks
            </h3>
            <p className="text-slate-400 text-sm">
              &copy; 2026 GEbooks. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            Transforme sua vida através do conhecimento digital
          </p>
        </div>
      </div>
    </footer>
  );
}
