# 🗄️ Private Notes Vault (React + Vite)

A private, authenticated notes web application where each user can create, view, and delete **their own notes only**.

This project is intentionally minimal and focuses on:
- Authentication
- Data ownership
- Security
- Clean, distraction-free UI

---

## 🎯 Objective

Build a secure notes application that demonstrates a **basic full-stack flow** using Supabase, without unnecessary features or complexity.

---

## ✨ Features

### 🔐 Authentication
- Email & Password authentication
- Google OAuth authentication
- Powered by **Supabase Authentication**
- Unauthenticated users cannot access notes

### 📝 Notes
- Create a note (title + content)
- View a list of personal notes
- View a single note
- Delete a note
- Notes are **private by default**

### 🔒 Security
- Notes are tied to the authenticated user
- **Row Level Security (RLS)** enforced at database level
- Users can only access their own data, even if the frontend is tampered with

---

## 🛠️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | React |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Backend | Supabase |
| Database | Supabase Postgres |
| Authentication | Supabase Auth (Email + Google OAuth) |

---

## 📁 Project Structure

private-notes-vault/
├─ src/
│ ├─ components/
│ │ ├─ AuthForm.jsx
│ │ ├─ NoteCard.jsx
│ │ └─ Navbar.jsx
│ ├─ pages/
│ │ ├─ Login.jsx
│ │ ├─ Notes.jsx
│ │ └─ NoteDetail.jsx
│ ├─ lib/
│ │ └─ supabaseClient.js
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ .env
├─ package.json
└─ README.md


---

## 🗃️ Database Schema

### `notes` table

| Column | Type |
|-----|-----|
| id | uuid |
| user_id | uuid (auth.users) |
| title | text |
| content | text |
| created_at | timestamp |

---

## 🔐 Row Level Security (RLS)

All authorization is enforced directly in the database using Supabase Row Level Security.

### Policies:
- Users can read only their own notes
- Users can create notes for themselves
- Users can delete only their own notes

This ensures complete data isolation between users.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:


VITE_SUPABASE_URL=https://qyvkoazsjkjmrxsexaqt.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_PUBLIC_KEY
⚠️ Never expose the service_role key on the client.

🚀 Running Locally

# Install dependencies
npm install

# Start development server
npm run dev
Open in browser:
👉 http://localhost:5173

🧠 UX Philosophy
Private by default

Minimal interface

No dashboards, tags, or folders

Designed to feel like a personal scratchpad



Deploy: https://anilprivatenotes.vercel.app/


👤 Author
Anil Kumar



