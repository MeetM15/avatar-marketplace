"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Check if the entered password matches the hardcoded password
    if (password === process.env.NEXT_PUBLIC_PASSWORD_PROTECT) {
      // Set the password in the cookie to allow access
      document.cookie = `user-password=${password}; path=/`; // Set the cookie for future visits
      router.push("/"); // Redirect to the homepage or protected page
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="h-screen w-screen p-10 flex items-center justify-center bg-white">
      <div className="flex flex-col gap-6 items-center justify-center bg-gray-100 rounded-lg shadow p-4 w-full max-w-md">
        <h1 className="text-xl">Password Protected</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <Input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            className="bg-white px-4 py-6 w-full"
          />
          <Button type="submit">Submit</Button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
