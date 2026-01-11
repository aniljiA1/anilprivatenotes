import { supabase } from "../lib/supabase";

export default function NoteItem({ note, onDelete }) {
  const deleteNote = async () => {
    await supabase.from("notes").delete().eq("id", note.id);
    onDelete();
  };

  return (
    <div className="bg-gray-900 p-4 rounded">
      <h2 className="font-semibold">{note.title}</h2>
      <p className="text-sm text-gray-400">{note.content}</p>
      <button onClick={deleteNote} className="text-red-400 text-xs mt-2">
        Delete
      </button>
    </div>
  );
}
