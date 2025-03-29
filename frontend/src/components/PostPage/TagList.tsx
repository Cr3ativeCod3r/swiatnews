interface Tag {
    id: string;
    name: string;
}

const TagList = ({ tags }: { tags: Tag[] }) => (
    <div className="flex flex-wrap gap-2 mt-4">
        {tags && tags.map((tag) => (
            <span key={tag.id} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                #{tag.name}
            </span>
        ))}
    </div>
);

export default TagList;