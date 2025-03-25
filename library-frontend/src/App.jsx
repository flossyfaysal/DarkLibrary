import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookCard from "./components/BookCard";
import { mockBooks } from "./data/books";

function App() {
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Books Listed
          </h1>
          <BookCard />
        </main>
      </div>
    </div>
  );
}

export default App;
