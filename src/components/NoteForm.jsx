import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function NoteForm({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = async () => {
    await supabase.from("notes").insert([{ title, content }]);
    setTitle("");
    setContent("");
    onNoteAdded();
  };

  return (
    <div className="space-y-2">
      <input
        className="w-full bg-gray-800 p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full bg-gray-800 p-2 rounded"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={createNote}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
