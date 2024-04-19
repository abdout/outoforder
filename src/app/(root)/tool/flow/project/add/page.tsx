
"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const Add = (props: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      props.onClose();
    }
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        
        router.push("/tool/flow/project");
        props.onClose();
        window.location.reload();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
    >
      <div className=" flex flex-col  bg-[#fcfcfc] p-6">
        <button onClick={props.onClose} className="place-self-end ">
          <Icon icon="material-symbols-light:close" width={28} />
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col p-20 gap-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Title"
          />

          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Description"
          />

          <button
            type="submit"
            className="bg-yellow-400 font-medium mt-4 py-3 px-6 h-12"
          >
            Create project
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
