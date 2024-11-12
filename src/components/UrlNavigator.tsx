"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UrlNavigator = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic URL validation
    let formattedUrl = url.trim();

    if (!formattedUrl.startsWith("/")) {
      formattedUrl = "/" + formattedUrl;
    }

    // Use our custom router.push
    router.push(formattedUrl);

    setUrl("");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="url-input" className="text-sm font-medium">
            Enter URL Path
          </label>
          <input
            id="url-input"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="/your-path"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Navigate
        </button>
      </form>
    </div>
  );
};

export default UrlNavigator;
