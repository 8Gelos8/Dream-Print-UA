import { Navigation } from "@/components/Navigation";
import { pricing } from "@/data/products";

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4"> Прайс-лист</h1>
          <p className="text-center text-gray-600 text-lg mb-12">Актуальні ціни на всі послуги</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6 border-l-4 border-purple-600">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-600 mb-1">Орієнтовна вартість</div>
                  <div className="text-2xl font-bold text-purple-600">{item.minPrice} - {item.maxPrice} <span className="text-sm">{item.unit}</span></div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg">Замовити</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
