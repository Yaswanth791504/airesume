"use client";
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import GeminiIcon from "./../public/gemini.svg";
import Image from "next/image";
import { addUser } from "./firebase/firebaseCalls";

export default function Home() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const userData = await signInWithPopup(auth, googleProvider);
      await addUser(userData.user.uid, userData.user.email ?? "");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signOutFromGoogle = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        .line-through-custom {
          text-decoration-color: #942d2c;
        }
        .underline-black {
          text-decoration-color: black;
        }
      `}</style>
      <main className="flex flex-col h-screen bg-gray-100 scrollbar-hide">
        <nav className="w-full h-20 flex flex-row justify-between items-center px-10 bg-white">
          <h1 className="text-4xl text-[#942d2c] font-bold">Resume Mosaic.</h1>
          <div className="flex flex-row gap-5">
            <button
              onClick={user ? signOutFromGoogle : signInWithGoogle}
              className="px-6 py-3 rounded-md cursor-pointer bg-[#942d2c] text-white hover:bg-[#c94240] transition duration-300 ease-in-out transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Loading..." : user ? "Sign out" : "Sign in"}
            </button>
          </div>
        </nav>
        <div className="flex flex-1 relative flex-col gap-10 justify-center items-center p-10 bg-white">
          <Image
            src={GeminiIcon}
            alt="Gemini Icon"
            style={{
              width: "150px",
              height: "150px",
              position: "absolute",
              right: "250px",
              top: "120px",
            }}
          />
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl text-gray-700 line-through line-through-custom">
              Build your Resumes with word.
            </h4>
            <h1 className="text-9xl font-bold text-[#942d2c]">
              Let <span className="underline underline-black">AI</span> Help you{" "}
              <br /> fill your{" "}
              <span className="underline underline-black">Resume</span>.
            </h1>
          </div>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-8 py-4 rounded-md cursor-pointer bg-[#942d2c] text-white hover:bg-[#c94240] transition duration-300 ease-in-out transform hover:scale-105 mt-5"
          >
            Jump to Mosaic
          </button>
        </div>
      </main>
    </>
  );
}
