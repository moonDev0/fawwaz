import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {

  return (
    <Html lang="en">
      <Head>
      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
    />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
