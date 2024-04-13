import MiniCreatePost from '@/components/MiniCreatePost';
import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config';
import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = params;

  return {
    title: `r/${slug}`,
    description: 'Whisp Hub Community name of ${slug}',
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = params;

  const session = await getAuthSession();

  const subreddit = await db.subreddit.findFirst({
    where: {
      name: slug,
    },
    include: {
      posts: {
        include: { author: true, votes: true, comments: true, subreddit: true },
        take: INFINITE_SCROLL_PAGINATION_RESULTS,
      },
    },
  });

  if (!subreddit) return notFound();
  return (
    <>
      <h1 className='h-14 text-3xl font-bold md:text-4xl'>
        r/{subreddit.name}
      </h1>

      <MiniCreatePost session={session} />
      {/* TODO: Show posts feed */}
    </>
  );
};

export default page;
