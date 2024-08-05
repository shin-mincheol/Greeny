// import NoResult from '@/app/(greeny)/community/NoResult';
import PageHeading from '@/app/(greeny)/community/PageHeading';
import PostList from '@/app/(greeny)/community/PostList';

export default function QNA() {
  return (
    <>
      <PageHeading text="Q&A" />
      {/* 검색창 */}
      <PostList />
      {/* <NoResult /> */}
    </>
  );
}
