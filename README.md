This project uses Supabase as the backend for authentication and data storage.

### Notes Table

create table notes (
id uuid primary key default gen_random_uuid(),
user_id uuid references auth.users not null,
title text not null,
content text not null,
created_at timestamp with time zone default now()
);
Row Level Security (RLS)
RLS is enabled to ensure users can only access their own notes.

alter table notes enable row level security;
Policies

-- Read own notes
create policy "Users read own notes"
on notes for select
using (auth.uid() = user_id);

-- Insert own notes
create policy "Users insert own notes"
on notes for insert
with check (auth.uid() = user_id);

-- Delete own notes
create policy "Users delete own notes"
on notes for delete
using (auth.uid() = user_id);
All data ownership is enforced at the database level, not in the UI.

🔥 **This README section alone shows backend maturity.**

---

## 🧠 Why This Is the Correct Approach

| Item                 | Reason                      |
| -------------------- | --------------------------- |
| SQL in Supabase      | Actual enforcement          |
| README docs          | Reviewer visibility         |
| No SQL files in repo | Cleaner, realistic workflow |

Real companies **do NOT expect DB SQL inside frontend repos** unless migrations are used.

---

## 🎯 Interview Gold Line (Say This)

> “I documented the database schema and Row Level Security policies in the README, while enforcing them directly in Supabase to ensure true backend-level access control.”

---

If you want, next I can:

- Write a **perfect README.md fully**
- Add **edit/update policy**
- Show **how Supabase auto-fills user_id**
- Review your repo **as an interviewer**

Just say the word 🚀
