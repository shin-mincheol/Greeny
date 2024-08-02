import '@/styles/reset.css';
import '@/styles/variable.css';
import { Noto_Sans_KR } from 'next/font/google';

const noto_Sans_KR = Noto_Sans_KR({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-noto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={noto_Sans_KR.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Greeny</title>
      </head>
      <body>
        <div id="root">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
