import Head from 'next/head';

import { useUserContext } from '../features/context/auth';
import Link from 'next/link';
import Button from '../components/button';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Layout from '../components/layout';
const Home: NextPageWithLayout = () => {
  // 関数を実行し以下の変数を作成

  const { user, isLoading } = useUserContext();
  if (isLoading) {
    return (
      <>
        <div
          className="h-screen w-screen flex justify-center items-center"
          aria-label="読み込み中"
        >
          <div className=" animate-spin h-20 w-20 bg-blue-300 rounded-xl"></div>
        </div>
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* 監視したuser documentが空だから表示されない。故に作る必要がある */}
        <p>{user?.username}</p>
        <Button>
          <Link href="create-post">
            <a>投稿</a>
          </Link>
        </Button>
      </main>
    </div>
  );
};
Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default Home;
