import PostItem from '@/app/(greeny)/community/PostItem';
import styles from './Community.module.scss';

export default function PostList() {
  // fetch posts
  // /community: 2개만(&limit=2)
  // /community/qna, /community/show : 여러개
  const item = {
    title: 'stringg safasd fdsafsdf sfasfsd fdsfsfad sfa stringg safasd fdsafsdf sfasfsd fdsfsfad sfa',
    description: 'stringg safasd fdsafsdf sfasfsd fdsfsfad sfastringg safasd fdsafsdf sfasfsd fdsfsfad sfa',
    // image: {
    //   path: 'string',
    //   name: 'string',
    //   //
    // },
  };

  return (
    <ul className={styles.ul}>
      <PostItem item={item} />
      <PostItem item={item} />
      {/* <PostItem item={item} />
      <PostItem item={item} />
      <PostItem item={item} />
      <PostItem item={item} />
      <PostItem item={item} />
      <PostItem item={item} /> */}
    </ul>
  );
}
