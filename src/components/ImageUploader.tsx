"use client";

import React, { useState, ChangeEvent } from "react";

interface UploadedImage {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
}

export const ImageUploader = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setLoading(true);
    setTimeout(() => {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage: UploadedImage = {
            id: Date.now().toString() + Math.random(),
            name: file.name,
            url: event.target?.result as string,
            uploadedAt: new Date().toLocaleDateString("uk-UA"),
          };
          setImages((prev) => [newImage, ...prev]);
        };
        reader.readAsDataURL(file);
      });
      setLoading(false);
      setMessage(" Фото успішно завантажено!");
      setTimeout(() => setMessage(""), 3000);
    }, 1000);
  };

  const handleDelete = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6"> Завантажити фото</h2>

        <div className="border-2 border-dashed border-purple-300 rounded-lg p-12 text-center bg-purple-50">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            disabled={loading}
            className="hidden"
            id="fileInput"
          />
          <label htmlFor="fileInput" className="cursor-pointer block">
            <div className="text-5xl mb-4"></div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Натисніть або перетягніть</p>
            <p className="text-gray-600">PNG, JPG, WebP</p>
          </label>
        </div>

        {message && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {message}
          </div>
        )}

        {images.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Завантажені фото ({images.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg"
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center">
                    <button
                      onClick={() => handleDelete(img.id)}
                      className="opacity-0 group-hover:opacity-100 bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Видалити
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs truncate">
                    {img.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
