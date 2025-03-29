import React from 'react';
import { Briefcase, Target, BookOpen, Network } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'kariera w swiatnews',
  description: 'Dołącz do nas już dziś'
}

const Career: React.FC = () => {
  const careerOpportunities = [
    {
      icon: Briefcase,
      title: 'Dziennikarz',
      description: 'Poszukujemy pasjonatów dziennikarstwa z zamiłowaniem do aktualnych trendów i głęboką wiedzą.'
    },
    {
      icon: Target,
      title: 'Analityk Treści',
      description: 'Specjalista odpowiedzialny za weryfikację i pogłębianie informacji z różnych dziedzin.'
    },
    {
      icon: BookOpen,
      title: 'Redaktor Merytoryczny',
      description: 'Osoba dbająca o jakość i precyzję publikowanych materiałów informacyjnych.'
    },
    {
      icon: Network,
      title: 'Specjalista Social Media',
      description: 'Ekspert w komunikacji i rozpowszechnianiu treści na platformach społecznościowych.'
    }
  ];

  return (
    <div className=" mx-auto  sm: px-0  w-full h-full ">
      <div className="bg-gray-50 dark:bg-slate-800 lg:rounded-xl sm:rounded-none shadow-lg lg:px-36 lg:py-24 sm: py-12 space-y-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-6">
          Dołącz do NewsWorld
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {careerOpportunities.map((opportunity, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg hover:scale-105 transition-transform"
            >
              <opportunity.icon 
                className="mx-auto mb-4 text-slate-600 dark:text-white" 
                size={48} 
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-slate-900 dark:text-white">
                {opportunity.title}
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-300">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>

          <Link 
            href="/kontakt" 
            className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors mx-auto w-[300px] justify-center flex"
          >
            Aplikuj Teraz
          </Link>

        </div>
      </div>
  );
};

export default Career;