import Pagination from "./Pagination";
import {usePosts} from "@/hooks/usePosts";
import { useRouter } from 'next/navigation';

function CategoryPageFooter({ pageSize, categorySlug }: { pageSize: number, categorySlug: string }) {
  const router = useRouter();
  const { currentPage, setCurrentPage, totalItems } = usePosts();

  const handlePageChange = (page: number) => {
    router.push(`/${categorySlug}?page=${page}`);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Pagination 
      currentPage={currentPage}
      totalItems={totalItems}
      pageSize={pageSize}
      onPageChange={handlePageChange}
      categorySlug={categorySlug}
    />
  );
}

export default CategoryPageFooter;