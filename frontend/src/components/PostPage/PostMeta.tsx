import { format } from "date-fns";
import { pl } from "date-fns/locale";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

interface PostMetaProps {
    author?: { name: string };
    date: string;
    category: string;
    title: string;
    url?: string; 
}

const PostMeta: React.FC<PostMetaProps> = ({ author, date, category, title, url }) => {
    const formattedDate = date ? format(new Date(date), 'd MMMM yyyy, HH:mm', { locale: pl }) : '';
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    
    const handleFacebookShare = () => {
        const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(fbShareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <div className="flex flex-col px-2">
            <div className="text-sm text-gray-500 mb-2">
                <span className="text-blue-500 hover:underline">{category}</span> &gt; <span className="font-medium">{title}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mt-2 mb-6">
                <div className="flex items-center mr-4">
                    <Image
                        src="/images/reporter.svg"
                        alt={"img"}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </div>
                {author && <span className="mr-4"><span className="font-medium">{author.name}</span></span>}
                {date && <span className="ml-auto"> <time>{formattedDate}</time></span>}
                
                <div className="flex items-center ml-4">
                    <button 
                        onClick={handleFacebookShare}
                        className="p-2 rounded-full hover:bg-blue-100 transition-colors"
                        aria-label="Share on Facebook"
                        title="Udostępnij na Facebook"
                    >
                        <FaFacebook size={20} color="#1877F2" className="cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostMeta;