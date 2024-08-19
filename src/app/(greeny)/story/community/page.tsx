// import NoResult from '@greeny/story/NoResult';
import PageHeading from '@greeny/story/PageHeading';
import PostList from '@greeny/story/PostList';
import SearchAndWrite from '@greeny/story/community/SearchAndWrite';
import Categories from '@greeny/story/community/Categories';

export default function Community({ searchParams }: { searchParams: { category: string } }) {
  return (
    <>
      <PageHeading text="커뮤니티" />
      <SearchAndWrite />
      <Categories />
      <PostList searchParams={searchParams} />
      {/* <NoResult /> */}
    </>
  );
}
