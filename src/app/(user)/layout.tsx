import localFont from 'next/font/local';
import styles from '@/app/(greeny)/(home)/Home.module.scss';
import type { Metadata } from 'next';
import '@/styles/reset.css';
import '@/styles/common.css';
import '@/styles/variable.css';

const pretendard = localFont({
  src: '../../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://greeny.vercel.app'),
  title: {
    default: 'Greeny',
    template: '%s | Greeny',
  },
  description: '내 식물의 성장 기록과 다른 식물의 여정을 함께하는, 식물 애호가들을 위한 소셜 네트워크',
  keywords: ['식물 기록', '소중한 순간', '식물 애호가', '커뮤니티', '소셜 네트워크'],
  openGraph: {
    title: 'Greeny로 식물과의 소중한 순간을 기록하세요.',
    description: '식물과의 소중한 순간을 Greeny에서 기록하고, 다양한 식물 애호가들과의 교류를 통해 더 많은 정보를 얻으세요. 식물의 성장과정을 함께 지켜보세요.',
    images: 'images/MetaImage.png',
    url: 'https://greeny.vercel.app',
    type: 'website',
    siteName: 'Greeny',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Greeny</title>
      </head>
      <body>
        <div className={styles.root}>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
