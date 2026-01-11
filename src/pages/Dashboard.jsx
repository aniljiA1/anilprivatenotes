import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setNotes(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading notes...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <NoteForm onNoteAdded={fetchNotes} />

      {notes.length === 0 ? (
        <p className="text-gray-400 text-sm">
          No notes yet. Write your first private note.
        </p>
      ) : (
        <NoteList notes={notes} onDelete={fetchNotes} />
      )}
    </div>
  );
}
