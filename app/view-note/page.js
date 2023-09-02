"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useSession } from "next/navigation";
import ViewCard from "@components/ViewCard";
import Link from "next/link";

const View = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const noteId = searchParams.get("id");
  const [post, setPost] = useState({
    note: "",
    heading: "",
  });

  useEffect(() => {
    const getNoteDetails = async () => {
      const response = await fetch(`/api/note/${noteId}`);
      const data = await response.json();
      setPost({
        note: data.note,
        heading: data.heading,
      });
    };

    if (noteId) {
      getNoteDetails();
    }
  }, [noteId]);

  return (
    <>
      <ViewCard data={post} />

      <div className="flex justify-end items-center w-full my-6">
        <Link href="/" className="mr-5 font-popins hover:underline">
          ⇐ Back
        </Link>
        <button
          type="button"
          className="black_btn"
          onClick={(post) => router.push(`/update-note?id=${noteId}`)}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default View;
