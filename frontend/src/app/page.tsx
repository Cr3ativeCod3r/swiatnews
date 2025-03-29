import React from 'react';
import NewsListTable  from './home/NewsListsTable';
import HeroSection from './home/HeroSection';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection/>
        <NewsListTable />
      </main>
    </div>
  );
};

export default HomePage;
