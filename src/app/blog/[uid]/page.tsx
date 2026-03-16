import BlogDetails from '@/components/Blog/BlogDetails/BlogDetails';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

interface BlogDetailsPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: any;
}

export default async function BlogDetailsPage({ searchParams }: BlogDetailsPageProps) {
  const params = await searchParams;
  const blogId = params.id;

  return (
    <>
      <Header />
      <BlogDetails blogId={blogId as string} />
      <Footer />
    </>
  );
}
