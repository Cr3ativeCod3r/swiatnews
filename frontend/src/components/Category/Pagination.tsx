"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  categorySlug: string;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalItems, 
  pageSize,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  if (totalPages <= 1) return null;
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage - 1 <= 2) {
        endPage = Math.min(totalPages - 1, 4);
      }
      
      if (totalPages - currentPage <= 2) {
        startPage = Math.max(2, totalPages - 3);
      }
      
      if (startPage > 2) {
        pages.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  
  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700"
        >
          &laquo; Poprzednia
        </Link>
      )}
      
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-1">...</span>
          ) : (
            <Link
              href={createPageUrl(page as number)}
              className={`px-3 py-1 rounded ${
                currentPage === page 
                  ? 'bg-blue-500 text-white dark:bg-slate-600 dark:text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-400'
              }`}
            >
              {page}
            </Link>
          )}
        </React.Fragment>
      ))}
      
      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700"
        >
          Następna &raquo;
        </Link>
      )}
    </div>
  );
};

export default Pagination;