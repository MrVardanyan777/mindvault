"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditNote = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const noteId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
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


    const editNote = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      if(!noteId) return alert('NoteId is not found!')


      try {
        const response = await fetch(`/api/note/${noteId}`, {
          method: "PATCH",
          body: JSON.stringify({
            note: post.note,
            heading: post?.heading || "New Note",
          }),
        });

        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editNote}
    />
  );
};

export default EditNote;
