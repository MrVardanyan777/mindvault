"use client";

import Feed from "@components/Feed";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <section className="w-full flex justify-center text-center items-center flex-col">
      <h1 className="text-[50px] font-bold mt-[-2rem] tracking-wider font-popins sm:text-[40px]">
        MindVault
        <br className="max-md:hidden" />
        <span className="text-[40px] capitalize font-raleway font-medium sm:text-[30px]">
          Your second brain in Your Pocket
        </span>
      </h1>
      {!session?.user ? (
        <p className="text-[18px] m-8 font-raleway font-normal">
          Discover MindVault: Your Personal Thought Oasis. Elevate your
          note-taking game with MindVault, the ultimate app to capture, curate,
          and cherish your ideas. Seamlessly intuitive and meticulously
          designed, MindVault transforms note-keeping into an inspiring journey.
        </p>
      ) : (
        <Feed />
      )}
      {!session?.user && (
        <Image
          src="/images/home-hero.webp"
          width={700}
          height={100}
          alt="home-hero"
          className="object-contain"
        />
      )}
    </section>
  );
};

export default Home;
