import { supabase } from "../lib/supabase";

export default function Auth() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <button
      onClick={loginWithGoogle}
      className="w-full bg-white text-black py-2 rounded"
    >
      Continue with Google
    </button>
  );
}
