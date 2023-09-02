"use client";

import { React, useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NoteCardList = ({ data }) => {
  return (
    <div className="mt-16 note_layout">
      {data.map((post) => (
        <NoteCard key={post._id} post={post} />
      ))}
    </div>
  );
};

const Feed = () => {
  const { data: session } = useSession();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const reponse = await fetch(`/api/users/${session?.user.id}/note`);
      const data = await reponse.json();

      setNotes(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  return (
    <section className="feed">
      {notes.length === 0 ? (
        <div className="text-center w-full font-popins">
          <h1>Opps, You don't any notes still.</h1>
          <Link href='create-note' className="black_btn mt-4 w-full">
              Make a Note
          </Link>
        </div>
      ) : (
        <NoteCardList data={notes} />
      )}
    </section>
  );
};

export default Feed;
