import React, { useState } from 'react';
import { useNotes } from '@/hooks/useNotes.js';
import { useDarkMode } from '@/hooks/useDarkMode.js';
import { Header } from '@/components/Header';
import { NoteList } from '@/components/NoteList';
import { NoteForm } from '@/components/NoteForm.jsx';
import { useToast } from '@/hooks/use-toast.js';

const Index = () => {
  const { notes, addNote, updateNote, deleteNote, togglePin, getAllTags } = useNotes();
  const { isDark, toggleDarkMode } = useDarkMode();
  const { toast } = useToast();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingNote, setEditingNote] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCreateNote = () => {
    setEditingNote(undefined);
    setIsFormVisible(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsFormVisible(true);
  };

  const handleSaveNote = (noteData) => {
    try {
      if (editingNote) {
        updateNote(editingNote.id, noteData);
        toast({
          title: "Note updated",
          description: "Your note has been successfully updated.",
        });
      } else {
        addNote(noteData);
        toast({
          title: "Note created",
          description: "Your new note has been saved.",
        });
      }
      setIsFormVisible(false);
      setEditingNote(undefined);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(id);
      toast({
        title: "Note deleted",
        description: "The note has been permanently deleted.",
      });
    }
  };

  const handleTogglePin = (id) => {
    togglePin(id);
    const note = notes.find(n => n.id === id);
    toast({
      title: note?.isPinned ? "Note unpinned" : "Note pinned",
      description: note?.isPinned
        ? "Note has been unpinned"
        : "Note has been pinned to the top",
    });
  };

  const handleTagClick = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleCancelForm = () => {
    setIsFormVisible(false);
    setEditingNote(undefined);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onCreateNote={handleCreateNote}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTags={selectedTags}
        onTagClick={handleTagClick}
        availableTags={getAllTags()}
        isDarkMode={isDark}
        onToggleDarkMode={toggleDarkMode}
        noteCount={notes.length}
      />

      <main className="container mx-auto px-4 py-6">
        <NoteList
          notes={notes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
          onTogglePin={handleTogglePin}
          searchQuery={searchQuery}
          selectedTags={selectedTags}
        />
      </main>

      <NoteForm
        note={editingNote}
        onSave={handleSaveNote}
        onCancel={handleCancelForm}
        isVisible={isFormVisible}
      />
    </div>
  );
};

export default Index;
