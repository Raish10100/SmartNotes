import { useState, useEffect } from 'react';

// Custom hook for managing notes with localStorage persistence
export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes).map((note) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }));
        setNotes(parsedNotes);
      } catch (error) {
        console.error('Error parsing saved notes:', error);
      }
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (noteData) => {
    const newNote = {
      id: Date.now().toString(),
      ...noteData,
      isPinned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setNotes((prev) => [newNote, ...prev]);
    return newNote;
  };

  // Update an existing note
  const updateNote = (id, noteData) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, ...noteData, updatedAt: new Date() }
          : note
      )
    );
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  // Toggle pin status
  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, isPinned: !note.isPinned, updatedAt: new Date() }
          : note
      )
    );
  };

  // Get all unique tags
  const getAllTags = () => {
    const allTags = notes.flatMap((note) => note.tags);
    return Array.from(new Set(allTags)).sort();
  };

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
    togglePin,
    getAllTags,
  };
};
