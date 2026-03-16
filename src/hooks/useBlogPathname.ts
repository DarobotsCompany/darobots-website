import { usePathname } from 'next/navigation';

export default function useBlogPathname() {
  const pathName = usePathname();

  const isBlogPage = pathName?.includes('/blog');

  return isBlogPage;
}
