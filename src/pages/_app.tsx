import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { SideNav } from "~/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Twitter Clone by joshua hendrix" />
        <meta name="author" content="Joshua Hendrix" />
        <meta name="keywords" content="twitter, clone, nextjs, prisma, trpc" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@joshuahendrix_" />
        <meta name="twitter:creator" content="@joshuahendrix_" />
        <meta property="og:title" content="Twitter Clone" />
        <meta
          property="og:description"
          content="Twitter Clone by joshua hendrix"
        />
        <meta
          property="og:image"
          content="https://twitter-clone-joshuahendrix.vercel.app/twitter-clone.png"
        />
        <meta
          property="og:url"
          content="https://twitter-clone-joshuahendrix.vercel.app/"
        />
        <meta property="og:site_name" content="Twitter Clone" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex sm:pr-4">
        <SideNav />
        <div className="min h-screen flex-grow border-x">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
