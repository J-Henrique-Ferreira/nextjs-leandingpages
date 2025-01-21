export default function TradingNaPratica() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Domine o Trading</h1>
          <p className="text-xl mb-8">
            Aprenda estratégias comprovadas e torne-se um trader de sucesso
          </p>
          <a
            href="#pricing"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Comece Agora
          </a>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            O que você vai aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Análise Técnica Avançada",
              "Gestão de Risco Eficaz",
              "Psicologia do Trading",
            ].map((benefit) => (
              <div
                key={benefit}
                className="bg-white text-slate-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{benefit}</h3>
                <p>
                  Domine as habilidades essenciais para se tornar um trader
                  consistente e lucrativo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nossos alunos dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "João Silva",
                text: "Este curso transformou minha abordagem ao trading. Altamente recomendado!",
              },
              {
                name: "Maria Santos",
                text: "Finalmente estou vendo resultados consistentes graças às estratégias aprendidas aqui.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <p>&quot;{testimonial.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 text-slate-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-12">Invista no seu futuro</h2>
          <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">
                Curso Completo de Trading
              </h3>
              <p className="text-gray-600 mb-6">
                Acesso vitalício a todo o conteúdo
              </p>
              <p className="text-4xl font-bold text-blue-900 mb-6">R$ 997</p>
              <ul className="text-left mb-8">
                <li className="mb-2">✓ 50+ horas de vídeo aulas</li>
                <li className="mb-2">✓ Material de estudo exclusivo</li>
                <li className="mb-2">✓ Acesso à comunidade privada</li>
                <li className="mb-2">✓ Suporte personalizado</li>
              </ul>
              <a
                href="#"
                className="block w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Garanta sua vaga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2025 Curso de Trading. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
