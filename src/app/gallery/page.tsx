import { Navigation } from "@/components/Navigation";
import { ImageUploader } from "@/components/ImageUploader";

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4"> Галерея</h1>
          <p className="text-center text-gray-600 text-lg mb-12">Завантажуйте та керуйте фото продукції</p>
          <ImageUploader />
        </div>
      </main>
    </>
  );
}
