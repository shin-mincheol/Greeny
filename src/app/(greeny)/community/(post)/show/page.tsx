// import NoResult from '@/app/(greeny)/community/NoResult';
import PageHeading from '@greeny/community/PageHeading';
import PostList from '@greeny/community/PostList';
import SearchAndWrite from '@greeny/community/(post)/SearchAndWrite';

export default function SHOW() {
  return (
    <>
      <PageHeading text="자랑하기" />
      <SearchAndWrite />
      <PostList />
      {/* <NoResult /> */}
    </>
  );
}
