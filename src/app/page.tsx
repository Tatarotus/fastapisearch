"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{
    results: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined);

      const res = await fetch(`/api/search?q=${input}`);
      setSearchResults(await res.json());
    };
    fetchData();
  }, [input]);

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <pre>JSON: {JSON.stringify(searchResults, null, 2)}</pre>
    </>
  );
}
