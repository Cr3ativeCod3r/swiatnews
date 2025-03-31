import React from 'react';
import { User, Award, Globe } from 'lucide-react';
import { CiCircleInfo } from "react-icons/ci";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swiatnews',
  description: 'Kim jesteśmy'
}

const AboutUs: React.FC = () => {
  return (
    <div className=" mx-auto w-full h-full">
      <div className="bg-gray-50 dark:bg-slate-800 rounded-xl shadow-lg lg:py-24 lg:px-36 sm: py-12 space-y-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-6">
          O SwiatNews
        </h1>
      <div className="flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900 rounded-2xl mx-auto lg:w-[50vw] sm: w-[98vw]">
        <CiCircleInfo className="text-blue-600 dark:text-blue-300 mr-2 w-24" size={24} />
        <p className="text-gray-700 dark:text-gray-200 text-center">
          Portal jest wersją MVP, będzie rozwijany i rozbudowywany o nowe funkcjonalności.
        </p>
      </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <User className="mx-auto mb-4 text-slate-600 dark:text-white" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Nasza Misja
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Dostarczanie rzetelnych, aktualnych informacji z różnych dziedzin życia - od polityki po technologię.
            </p>
          </div>
          
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <Award className="mx-auto mb-4 text-slate-600 dark:text-white" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Nasza Wartość
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Przywiązujemy ogromną wagę do obiektywizmu, dokładności i transparentności w przekazywaniu informacji.
            </p>
          </div>
          
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <Globe className="mx-auto mb-4 text-slate-600 dark:text-white" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Nasz Zespół
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Grupą twórców NewsWorld są pasjonaci mediów, studenci i profesjonaliści z różnych dziedzin.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg text-slate-700 dark:text-slate-300 italic">
          &quot;Informacja to klucz do zrozumienia świata. My otwieramy te drzwi.&quot;
          </p>
          <p className="text-md text-slate-600 dark:text-slate-400 mt-2">
            - Założyciel NewsWorld
          </p>
        </div>
        
        <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Historia Projektu
          </h2>
          <p className="text-slate-700 dark:text-slate-300 lg:text-center sm: text-justify">
            NewsWorld narodził się w 2025 roku jako projekt studencki, mający na celu stworzenie nowoczesnego, minimalistycznego portalu informacyjnego. Jako student trzeciego roku informatyki na Politechnice, podjąłem wyzwanie dostarczenia czystych, czytelnych informacji w erze cyfrowego chaosu informacyjnego.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;