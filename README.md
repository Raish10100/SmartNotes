# 📝 Notes App

A modern, fully-featured note-taking application built with React.js, TypeScript, and Tailwind CSS. Create, organize, and manage your notes with ease.

![Notes App Screenshot](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Notes+App+Screenshot)

## ✨ Features

### Core Functionality
- **📝 Full CRUD Operations**: Create, read, update, and delete notes
- **🔍 Real-time Search**: Search notes by title or content
- **🏷️ Tag System**: Organize notes with custom tags and filter by tags
- **📌 Pin Important Notes**: Pin crucial notes to keep them at the top
- **💾 Local Storage**: Automatic saving to browser's localStorage (no backend required)

### User Experience
- **🌙 Dark Mode Toggle**: Switch between light and dark themes
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **⚡ Real-time Updates**: Instant search and filtering
- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **♿ Accessible**: Built with accessibility best practices

### Technical Features
- **⚛️ Modern React**: Functional components with hooks
- **🎨 Tailwind CSS**: Utility-first styling with custom design system
- **🧩 Modular Components**: Clean, reusable component architecture
- **🔄 State Management**: Efficient local state with custom hooks

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Raish10100/SmartNotes
   cd SmartNotes
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the app in action!

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.jsx      # App header with search and actions
│   ├── NoteCard.jsx    # Individual note display
│   ├── NoteForm.jsx    # Note creation/editing form
│   ├── NoteList.jsx    # Notes container and filtering
│   ├── SearchBar.jsx   # Search input component
│   └── TagInput.jsx    # Tag management component
├── hooks/              # Custom React hooks
│   ├── useNotes.js     # Notes CRUD and localStorage
│   ├── useDarkMode.js  # Dark mode management
│   └── use-toast.js    # Toast notifications
├── types/              # TypeScript type definitions
│   └── note.js         # Note interface and types
├── pages/              # Page components
│   └── Index.jsx       # Main application page
└── lib/                # Utility functions
    └── utils.ts        # Helper utilities
```

## 🎯 Usage Guide

### Creating Notes
1. Click the **"New Note"** button in the header
2. Add a title and content for your note
3. Optionally add tags by typing and pressing Enter or comma
4. Click **"Save Note"** to create your note

### Managing Notes
- **Edit**: Click on any note card or use the edit icon
- **Delete**: Click the trash icon on a note card
- **Pin**: Click the pin icon to pin/unpin important notes
- **Search**: Use the search bar to find notes by title or content
- **Filter**: Click on tag badges to filter notes by specific tags

### Organizing with Tags
- Add tags when creating or editing notes
- Click on any tag in the filter section to show only notes with that tag
- Remove tags by clicking the X next to them in the note form
- Use multiple tags to create a flexible organization system

### Dark Mode
- Toggle between light and dark themes using the moon icon in the header
- Your preference is automatically saved and restored on future visits

## 🛠️ Built With

- **[React 18](https://reactjs.org/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - UI components
- **[Lucide React](https://lucide.dev/)** - Icons
- **[Vite](https://vitejs.dev/)** - Build tool
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

## 🎨 Design System

The app features a custom design system with:
- **Productive Blue** (`#3B82F6`) for primary actions
- **Creative Purple** (`#8B5CF6`) for accents and highlights
- **Semantic color tokens** for consistent theming
- **Smooth animations** for enhanced user experience
- **Professional typography** for excellent readability

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop**: Multi-column grid layout with hover effects
- **Tablet**: Two-column layout with touch-friendly interactions
- **Mobile**: Single-column layout with optimized spacing

## 🙏 Acknowledgments

- Design inspiration from modern productivity apps
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

**Made with ❤️ using React, Shadcn, and Tailwind CSS**