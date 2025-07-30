# 📝 SmartNotes App

A modern, fully-featured note-taking application built with **React.js**, **TypeScript**, and **Tailwind CSS**. SmartNotes helps you create, organize, and manage your notes efficiently — all in one place.

🔗 **Live Demo:** [smartnotes-i6mq.onrender.com](https://smartnotes-i6mq.onrender.com/)

---

## 📸 Preview

**🖼️ Light Mode**
![Light Mode](https://res.cloudinary.com/deodsnio3/image/upload/v1753855003/WhatsApp_Image_2025-07-30_at_11.26.16_9f23a4c2_nmhraa.jpg)

**🌙 Dark Mode**
![Dark Mode](https://res.cloudinary.com/deodsnio3/image/upload/v1753855166/WhatsApp_Image_2025-07-30_at_11.29.18_1fe905fa_oxowse.jpg)

**📝 Note Form**
![Note Form](https://res.cloudinary.com/deodsnio3/image/upload/v1753855119/WhatsApp_Image_2025-07-30_at_11.28.29_869a7006_pagain.jpg)

---


## ✨ Features

### 🔧 Core Functionality

* 📝 Full **CRUD operations** for notes
* 🔍 **Real-time search** by title or content
* 🏷️ **Tag system** to organize and filter notes
* 📌 **Pin important notes** to keep them at the top
* 💾 **LocalStorage-based saving** (no backend needed)

### 🧑‍💻 User Experience

* 🌙 **Dark mode toggle**
* 📱 **Responsive design** (desktop, tablet, mobile)
* ⚡ **Instant updates** and smooth interactions
* 🎨 **Modern UI** with transitions
* ♿ **Accessible** by design

### ⚙️ Technical Stack

* ⚛️ Built with **React 18 (Hooks + Components)**
* 🎨 Styled using **Tailwind CSS**
* 🧩 Modular, reusable component structure
* 🔄 Custom **state management hooks**

---

## 🚀 Getting Started

### 🧾 Prerequisites

* Node.js v16+
* npm or yarn

### 🛠️ Installation

```bash
git clone https://github.com/Raish10100/SmartNotes
cd SmartNotes

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Visit [`http://localhost:8080`](http://localhost:8080) to view it in your browser.

---

## 🗂️ Project Structure

```
src/
├── components/       # Reusable UI elements
│   ├── ui/           # shadcn/ui components
│   ├── Header.jsx
│   ├── NoteCard.jsx
│   ├── NoteForm.jsx
│   ├── NoteList.jsx
│   ├── SearchBar.jsx
│   └── TagInput.jsx
├── hooks/            # Custom logic hooks
│   ├── useNotes.js
│   ├── useDarkMode.js
│   └── use-toast.js
├── types/
│   └── note.js       # Note types (TS)
├── pages/
│   └── Index.jsx     # App entry page
```

---

## 🧑‍🏫 Usage Guide

### 📝 Creating Notes

1. Click **"New Note"**
2. Add title, content, and tags
3. Hit **"Save Note"**

### 🗃️ Managing Notes

* **Edit**: Click on a note or edit icon
* **Delete**: Trash icon
* **Pin/Unpin**: Click pin icon
* **Search**: Filter via search bar
* **Filter**: Click tag badges

### 🏷️ Tags

* Add during creation/editing
* Click a tag to filter
* Remove tags in edit mode

### 🌓 Dark Mode

* Toggle using the moon icon
* Preference saved across visits

---

## ⚒️ Built With

* [React 18](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Lucide Icons](https://lucide.dev/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)

---

## 🎨 Design System Highlights

* **Primary color:** `#3B82F6` (Productive Blue)
* **Accent:** `#8B5CF6` (Creative Purple)
* Semantic tokens for consistency
* Smooth UI animations
* Clear and legible typography

---

## 📱 Responsive Design

* 🖥️ Desktop: Multi-column grid
* 📱 Mobile: Compact layout
* 📱 Tablet: Adaptive structure
* 👉 Touch-friendly UI

---

## 🙏 Acknowledgments

* UI inspiration from modern productivity apps
* Components by [shadcn/ui](https://ui.shadcn.com/)

---

**Made with ❤️ using React, Tailwind CSS, and ShadCN/UI**