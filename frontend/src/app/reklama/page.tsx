import React from 'react';
import { Zap, Rocket, Globe } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swiatnews dla reklamodawców',
  description: 'Chcesz mieć u nas swoją reklamę'
}

const Advertisement: React.FC = () => {
  return (
    <div className=" mx-auto w-full h-full">
      <div className="bg-gray-50 dark:bg-slate-800 rounded-xl shadow-lg lg:p-36 sm: py-12 space-y-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-6">
          Reklama w NewsWorld
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <Zap className="mx-auto mb-4 text-slate-600 dark:text-white" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Zasięg
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Docieramy do młodej, świadomej grupy odbiorców zainteresowanych aktualnymi trendami.
            </p>
          </div>
          
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <Rocket className="mx-auto mb-4 text-slate-600 dark:text-white" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Efektywność
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Nowoczesne formaty reklamowe dopasowane do preferencji użytkowników.
            </p>
          </div>
          
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <Globe className="mx-auto mb-4 text-slate-600 dark:text-white" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Targeting
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Precyzyjne dotarcie do wybranych grup docelowych w różnych kategoriach tematycznych.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 space-y-4">
          <p className="text-xl text-slate-700 dark:text-slate-300 italic">
          &quot;Twoja reklama w centrum uwagi&quot;
          </p>
          <Link 
            href="/kontakt" 
            className="inline-block px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
      </div>
  );
};

export default Advertisement;