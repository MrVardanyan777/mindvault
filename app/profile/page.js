"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [ notesdata, setNotesdata ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const reponse  = await fetch(`/api/users/${session?.user.id}/note`);
      const data = await reponse.json();
      setNotesdata(data);
    }


    if (session?.user.id) fetchPosts();

}, [session?.user.id]);

  const handleEdit = (note) => {
    router.push(`/update-note?id=${note._id}`)
  }

  const handleDelete = async (note) => {
    const hasConfirmed = confirm("Are you sure you want to delete this note?"); 

    if(hasConfirmed) {
      try {
        await fetch(`/api/note/${note._id.toString()}`, {
          method: 'DELETE'
        })  

        const filteredNotes = notesdata.filter((n) => n._id !== notesdata._id)

        setNotesdata(filteredNotes);

      } catch (error) {
        console.log(error);
      }
    }
  }

  

  return (
    <>
      <Profile 
        name="My"
        desc="Welcome to your personalized profile page."
        data={notesdata}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default MyProfile;