"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../ui/theme-toggle';
import { BiWorld, BiMenu, BiX } from "react-icons/bi";
import { categoriesList } from '@/data/categories';
import { categoryIcons } from '../../../public/icons/CategoryIcons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
 return (
   <Link 
     href={href} 
     className="flex items-center space-x-2 text-gray-700 dark:text-slate-300 hover:text-red-600 font-medium transition"
     onClick={onClick}
   >
     {children}
   </Link>
 );
};

const Navbar: React.FC = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
   setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 const closeMobileMenu = () => {
   setIsMobileMenuOpen(false);
 };

 return (
   <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-slate-900">
     <div className="container mx-auto px-4 py-3 flex justify-between items-center">
       <Link href="/" className="flex items-center">
         <span className='flex-col'>
           <h1 className="text-red-600 text-3xl font-extrabold tracking-wide relative flex items-center space-x-2">
             <BiWorld className='dark:text-white text-black' />
             Swiat<span className="underline decoration-red-400">News</span>
           </h1>
           <p className="text-xs ml-10 text-slate-400">Jesteś na bieżąco</p>
         </span>
       </Link>

       <div className="flex items-center justify-end space-x-6">
         <nav className="hidden xl:flex space-x-6">
           {categoriesList.map((category) => (
             <NavLink key={category.id} href={`/${category.slug}`}>
               <>
                 {categoryIcons[category.name]}
                 <span>{category.name}</span>
               </>
             </NavLink>
           ))}
         </nav>
         <button 
           className="xl:hidden text-2xl"
           onClick={toggleMobileMenu}
         >
           {isMobileMenuOpen ? <BiX /> : <BiMenu />}
         </button>

         <ThemeToggle />
       </div>
     </div>

     {isMobileMenuOpen && (
       <div className="fixed inset-0 top-[58px] bg-gray-50 dark:bg-slate-900 z-40 xl:hidden">
         <nav className="flex flex-col p-12 text-2xl items-center">
           {categoriesList.map((category, index) => (
             <div className="w-full" key={category.id}>
               <NavLink 
                 href={`/${category.slug}`}
                 onClick={closeMobileMenu}
               >
                 <div className="flex flex-col items-center justify-center space-y-2 py-1 w-full">
                   <div className="flex items-center justify-center space-x-2">
                     {categoryIcons[category.name]}
                     <span className="text-center">{category.name}</span>
                   </div>
                   {index < categoriesList.length - 1 && (
                     <hr className="w-full border-t border-gray-300 dark:border-gray-700 mt-4" />
                   )}
                 </div>
               </NavLink>
             </div>
           ))}
         </nav>
       </div>
     )}
   </header>
 );
};

export default Navbar