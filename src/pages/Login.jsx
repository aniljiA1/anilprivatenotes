import Auth from "../components/Auth";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-80 space-y-4">
        <h1 className="text-xl font-semibold text-center">
          Private Notes Vault
        </h1>
        <Auth />
      </div>
    </div>
  );
}
