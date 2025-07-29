import React from 'react';
import { NoteCard } from './NoteCard.jsx';

export const NoteList = ({
  notes,
  onEdit,
  onDelete,
  onTogglePin,
  searchQuery,
  selectedTags
}) => {
  const filteredNotes = notes.filter(note => {
    const matchesSearch = searchQuery === '' ||
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags = selectedTags.length === 0 ||
      selectedTags.every(tag => note.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const sortedNotes = filteredNotes.sort((a, b) => {
    const aTime = new Date(a.updatedAt).getTime();
    const bTime = new Date(b.updatedAt).getTime();

    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return bTime - aTime;
  });

  if (sortedNotes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {searchQuery || selectedTags.length > 0 ? 'No notes found' : 'No notes yet'}
        </h3>
        <p className="text-muted-foreground max-w-md">
          {searchQuery || selectedTags.length > 0
            ? 'Try adjusting your search or filter criteria'
            : 'Create your first note to get started organizing your thoughts'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sortedNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onTogglePin={onTogglePin}
        />
      ))}
    </div>
  );
};
