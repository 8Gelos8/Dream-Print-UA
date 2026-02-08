import { Navigation } from "@/components/Navigation";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4"> Про Dream Print UA</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Наша Історія</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Dream Print UA - це сучасна компанія, яка спеціалізується на сублімаційному друку та виробництві персоналізованих подарунків. Ми вірим, що кожен замовник заслуговує на унікальний, якісний продукт.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-lg">Задоволених клієнтів</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">5000+</div>
              <p className="text-lg">Завершених замовлень</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg">Якість гарантована</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
