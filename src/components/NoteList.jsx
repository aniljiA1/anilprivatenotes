import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete }) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
