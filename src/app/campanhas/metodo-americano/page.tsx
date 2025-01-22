"use client";
import { useEffect } from "react";

export default async function MetodoAmericano() {
  useEffect(() => {
    // Certifique-se de que o código é executado apenas no cliente
    if (typeof window !== 'undefined') {
      const countdownElement = window.document.getElementById('countdown');
      let time = 24 * 60 * 60; // 24 horas em segundos

      const interval = setInterval(() => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');

        if (countdownElement) {
          countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        time--;

        // Parar o contador ao atingir zero
        if (time < 0) {
          clearInterval(interval);
        }
      }, 1000);

      // Limpeza do intervalo ao desmontar o componente
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <body className="font-sans bg-gray-100">
      <header className="bg-[#1e234c] text-white p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">TradeMax</div>
          <div className="space-x-4">
            {/* <button className="px-4 py-2 text-sm bg-transparent border border-white rounded-full hover:bg-white hover:text-[#1e234c] transition duration-300">Login</button> */}
            <button className="px-4 py-2 text-sm bg-[#01e303] text-[#1e234c] font-semibold rounded-full hover:bg-opacity-90 transition duration-300">Cadastrar-se Agora</button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[#1e234c] text-white py-20 bg-no-repeat bg-cover bg-[url('/images/image.png')]">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Transforme sua Vida com Day Trade!</h1>
              <p className="text-xl mb-8">Aprenda as estratégias que os traders de sucesso utilizam diariamente para obter resultados consistentes.</p>
              <button className="px-8 py-4 bg-[#01e303] text-[#1e234c] text-lg font-bold rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">Acessar Agora</button>
            </div>
            <div className="md:w-1/2">
              {/* <img src="./images/image.png" alt="Gráfico de trading" className="rounded-lg shadow-lg"> */}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white text-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Por que escolher TradeMax?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-2">Acesso a Estratégias Avançadas</h3>
                <p>Domine técnicas exclusivas usadas pelos melhores traders do mercado.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold mb-2">Aprenda com Traders Profissionais</h3>
                <p>Mentoria direta com experts que vivem do day trade há anos.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
                <p>Nossos alunos têm um histórico de sucesso e crescimento constante.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 text-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">O que nossos alunos dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"Ganhei confiança no mercado e vi meu lucro crescer 200% em apenas 3 meses!"</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">João Silva</div>
                    <div className="text-sm text-gray-600">Trader há 1 ano</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"As estratégias da TradeMax mudaram completamente minha abordagem no day trade."</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">Maria Santos</div>
                    <div className="text-sm text-gray-600">Trader há 2 anos</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"Finalmente consegui consistência nos meus resultados. Obrigado, TradeMax!"</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">Carlos Oliveira</div>
                    <div className="text-sm text-gray-600">Trader há 6 meses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Dúvidas Frequentes</h2>
            <p className="text-lg text-gray-600">Respondemos às perguntas sobre o método.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">Este método realmente funciona?
              </summary>
              <p className="text-gray-600 mt-2">Sim! É um método testado e comprovado, com resultados reais e
                garantidos.</p>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">Quantos dias para fazer efeito?
              </summary>
              <p className="text-gray-600 mt-2">Você vai sentir uma melhora na força da ereção logo nos primeiros 7 dias. Para chegar em em se efeito máximo levará em torno de 20 a 30 dias</p>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">É medicamento? Precisa de receita?
              </summary>
              <p className="text-gray-600 mt-2">Não. Este método é completamente natural.</p>
            </details>


            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">Tem como fazer em casa?
              </summary>
              <p className="text-gray-600 mt-2">Sim. Este método é extemamente simples e você pode fazer do conforto da sa casa.</p>
            </details>

            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">Causa problemas no coração?
              </summary>
              <p className="text-gray-600 mt-2">Não. Por ser natural não existem riscos para a saude.</p>
            </details>


            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">Vou sentir mais energia no meu dia a dia também?
              </summary>
              <p className="text-gray-600 mt-2">Sim. Você vai se sentir como um super humano. Este método irá rejuvenescer sua saude sexual e por consequência uma grande melhora na qualidade de vida</p>
            </details>


            <details className="bg-gray-100 p-4 rounded-lg shadow-md">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">Por quanto tempo tenho acesso?
              </summary>
              <p className="text-gray-600 mt-2">Acesso infinito</p>
            </details>
          </div>
          {/* <div className="text-center mt-12">
            <a href="#compra" className="cta-button">Elimine Suas Dúvidas e Compre Agora</a>
          </div> */}
        </section>


        <section className="py-20 bg-[#1e234c] text-white text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">Garantia de Satisfação</h2>
            <p className="text-xl mb-8">Garantimos sua satisfação ou devolvemos seu dinheiro em até 30 dias.</p>
            <button className="px-8 py-4 bg-[#01e303] text-[#1e234c] text-lg font-bold rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">Comece Agora Mesmo</button>
          </div>
        </section>

        <section className="py-10 bg-[#33386c] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Oferta Especial!</h2>
            <p className="text-xl mb-4">Desconto Exclusivo de 50%! Apenas nas próximas 24 horas.</p>
            <div className="text-4xl font-bold mb-4" id="countdown">23:59:59</div>
            <button className="px-8 py-4 bg-white text-[#33386c] text-lg font-bold rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">Aproveitar Agora</button>
          </div>
        </section>
      </main>
    </body>
  )
}