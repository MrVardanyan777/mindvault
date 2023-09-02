import Link from "next/link";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

  const customStyles = {
    '.ql-editor p': {
      backgroundColor: '#f0f0f0', // Set the desired background color
    },
  };

  return (
    <section className="w-full px-9 max-w-full flex flex-col">
      <h1 className="head_text text-left">{type} Note</h1>
      <p className="desc w-full text-left max-w-md">
        "Welcome to MindVault, where your ideas become treasures. Capture,
        create, and curate your thoughts effortlessly. This is your canvas for
        innovation, your sanctuary of creativity."
      </p>

      <form onSubmit={handleSubmit}>

        <input placeholder="New Note" 
               className="w-full border-b-2 border-gray-500 p-3 mb-[-5px] mt-4 rounded-xl bg-transparent outline-none" 
               value={post.heading}
               onChange={(e) => {
                setPost({...post, heading: e.target.value})
               }} 
               />

        <div>
          <ReactQuill
            style={customStyles}
            value={post?.note || ""}
            onChange={(newContnet) => {
              setPost({ ...post, note: newContnet});
            }}
            className="my-10"
          />
        </div>
        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-lightgray text-white rounded-full"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
