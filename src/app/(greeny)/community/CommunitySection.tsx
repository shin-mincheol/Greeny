import styles from './Community.module.scss';
import PostList from '@/app/(greeny)/community/PostList';
import SectionHeader from '@/app/(greeny)/community/SectionHeader';

type Props = {
  title: string;
  url: string;
};

export default function CommunitySection(sectionInfo: Props) {
  return (
    <section className={styles.section}>
      <SectionHeader {...sectionInfo} />
      <PostList />
    </section>
  );
}
