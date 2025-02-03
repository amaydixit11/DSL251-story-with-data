// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Spotify Listening Analysis
            </h1>
            <p className="mt-2 text-gray-600">April to December 2024</p>
          </div>
          <a 
            href="https://colab.research.google.com/drive/1SiAznpjyErzbzoyA8r2L4zOqpUfBzYaz?usp=sharing"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Analysis Notebook
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;