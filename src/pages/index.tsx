import type { NextPage } from 'next';
import Head from 'next/head';

import { useUserContext } from '../features/context/auth';
const Home: NextPage = () => {
  const { fbUser, user, isLoading } = useUserContext();
  console.log(fbUser);
  console.log(user);

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
      <header className="bg-slate-300 p-3">header</header>
      <main>
        {fbUser?.displayName}
        <p>{user ? user?.username : '無理'}</p>
      </main>
      <header className="bg-slate-200 p-2">footer</header>
    </div>
  );
};

export default Home;