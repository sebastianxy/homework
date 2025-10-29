import React from "react";
import Sidebar from "./components/Sidebar";
import menuTree from "./data/menuTree";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 p-6">
      <Sidebar tree={menuTree} />
      <main className="ml-6 p-4 flex-1">
        <h1 className="text-2xl font-bold">Challenge 15 - N-ary Tree</h1>
        <p className="mt-2 text-gray-700">
        </p>
      </main>
    </div>
  );
}

export default App;
