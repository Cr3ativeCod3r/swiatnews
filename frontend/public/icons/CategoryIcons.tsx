import { FaLandmark, FaBriefcase, FaLaptopCode, FaFutbol, FaTheaterMasks, FaFlask } from 'react-icons/fa';

export const categoryIcons: Record<string, JSX.Element> = {
  Polityka: <FaLandmark className="text-red-600 opacity-75" />,
  Biznes: <FaBriefcase className="text-blue-600 opacity-75" />,
  Technologia: <FaLaptopCode className="text-green-600 opacity-75" />,
  Sport: <FaFutbol className="text-yellow-600 opacity-75" />,
  Kultura: <FaTheaterMasks className="text-purple-600 opacity-75" />,
  Nauka: <FaFlask className="text-teal-600 opacity-75" />,
};