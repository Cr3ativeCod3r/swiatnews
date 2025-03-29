import LatestNews from './LatestNews';
import { BreakingNewsProvider } from './BreakingNewsProvider';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 lg:py-8 sm: py-0">
            <div className="container mx-auto lg:px-4 sm: px-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-slate-800 ">
                    <div className="md:flex">
                        <BreakingNewsProvider />
                        <div className="md:w-1/3 p-6">
                            <h3 className="text-lg font-semibold text-red-600 mb-4">Najnowsze wiadomości</h3>
                            <LatestNews />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;