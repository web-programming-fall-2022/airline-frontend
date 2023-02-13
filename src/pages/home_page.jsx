import React from 'react';
import { useQuery } from 'react-query';
import BlogPostCard from '../components/blog_post_card';

function HomePage() {
  const { isLoading, isError, data } = useQuery('blogPosts', () => {
    return fetch('https://jsonplaceholder.ir/posts').then(res => res.json());
  });
  return (
    <section className="mx-10 my-10 min-h-screen">
      <h3 className="text-2xl font-black">رویای سفر رو تبدیل به واقعیت کن</h3>
      <div className="mt-5 grid min-w-0 grid-rows-2 place-items-start gap-3 md:grid-cols-3 lg:grid-cols-5">
        {isLoading && <div>در حال بارگذاری...</div>}
        {isError && <div>مشکلی پیش آمده است!</div>}
        {data &&
          data
            .slice(0, 10)
            .map(post => (
              <BlogPostCard
                key={post.id}
                body={post.body}
                id={post.id}
                title={post.title}
                image={
                  'https://cdn.alibaba.ir/ostorage/hotel-accommodation-images/2022-06-12/99d7000a-da16-42ea-9701-96f1257b3f31.jpg'
                }
              />
            ))}
      </div>
    </section>
  );
}

export default HomePage;
