import React, { useState } from "react";
import ShortUrlService from "../services/UrlService";

const PostUrl = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [error, setError] = useState(null);

  const handleShortenURL = async () => {
    try {
      const response = await ShortUrlService.postUrl({ url: originalURL });
      console.log(response.data.id);
      setShortURL(response.data.id);
      setError(null);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Shorten URL</h1>
      <div className="mb-4 text-sm">
        <label
          htmlFor="originalURL"
          className="block text-sm font-medium text-gray-600"
        >
          Original URL:
        </label>
        <input
          type="text"
          id="originalURL"
          value={originalURL}
          onChange={(e) => setOriginalURL(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        onClick={handleShortenURL}
        className="bg-blue-500 text-sm text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Shorten
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {shortURL && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Shortened URL:</p>
          <a
            href={`https://shorturl-backend-tan.vercel.app/${shortURL}`}
            target="_blank"
            className="text-blue-500 text-sm"
          >
            {`https://shorturl-backend-tan.vercel.app/${shortURL}`}
          </a>
        </div>
      )}
    </div>
  );
};

export default PostUrl;
