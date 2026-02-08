import { Navigation } from "@/components/Navigation";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Наші Послуги</h1>
          <p className="text-center text-gray-600 text-lg mb-12">Ми пропонуємо сублімаційний друк на різних поверхнях</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 flex justify-center items-center h-40">
                  <span className="text-7xl">{product.icon}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{product.nameEn}</span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">Дізнатися </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
