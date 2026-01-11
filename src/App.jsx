import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return user ? <Dashboard user={user} /> : <Login />;
}

export default App;
