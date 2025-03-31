import Image from "next/image";

interface PostHeaderProps {
    title: string;
    coverImage?: { url: string }[];
    imageAuthor?: string;
}

const PostHeader = ({ title, coverImage, imageAuthor }: PostHeaderProps) => (
    <div className="mb-8 lg:px-4 sm: px-0">
      
        {coverImage && coverImage.length > 0 && (
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}${coverImage[0].url}`}
                    alt={title}
                    fill
                    priority
                    className="object-cover w-full h-full"
                />
                {imageAuthor && (
                    <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1">
                        Fot. {imageAuthor}
                    </div>
                )}
            </div>
        )}
    </div>
);

export default PostHeader;