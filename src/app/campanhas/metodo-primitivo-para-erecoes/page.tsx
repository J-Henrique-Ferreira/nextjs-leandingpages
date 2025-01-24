import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { reviewsList, faqList } from "./constants";
import { SectionReviews } from "@/components/section-reviews";

export default function MetodoPrimitivoParaEcecoes() {
    return (
        <div>
            <section className="bg-[#ffa31a] fixed top-0 w-full">
                <p className="font-semibold text-white uppercase text-center py-2">
                    20% de desconto até SEXTA-FEIRA
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase text-center py-10 bg-[url('https://wallpapers.com/images/hd/red-fire-background-atebt6p51kpiqod3.jpg')]">
                    método antigo para fortalecer ereções
                </h2>
            </section>

            <header className="bg-gradient-to-r from-black to-[#392200] text-white text-center py-16 lg:px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl lg:text-4xl md:text-5xl font-semibold mb-4 uppercase text-[#ffa31a]">
                        Recupere Sua Confiança e <strong>transe</strong> como um{" "}
                        <strong>cavalo</strong>!
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Descubra o <strong>MÉTODO COMPROVADO</strong> que já transformou a
                        vida de <strong>CENTENAS</strong> de homens!
                    </p>

                    <Image src="/images/metodo-primitivo-para-erecoes/positivas/emocao_positiva_mulher_1.png"
                        width={1000} height={1000}
                        alt="Homem confiante"
                        className="mt-8 mx-auto w-full lg:rounded-lg border border-red-500 shadow-sm shadow-red-300"
                    />

                    <a href="#compra" className="cta-button mt-16 zoom-button">
                        Comece Agora
                    </a>
                </div>
            </header>

            <div className="container mx-auto">
                <section className="py-16 px-4 text-center bg-gray-100">
                    <div className="lg:max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase">
                            Nunca mais se sinta frustrado e inseguro
                        </h2>

                        <Image src="/images/metodo-primitivo-para-erecoes/negativas/broxa2.jpg"
                            width={1000} height={1000}
                            alt="homem frustrado por ter impotência sexual"
                            className="mt-8 mx-auto w-full lg:rounded-lg border border-red-500 shadow-sm shadow-red-300"
                        />

                        <p className="text-lg text-gray-600 mb-8 mt-12 text-start">
                            Imagine-se no momento mais importante, pronto para impressionar,
                            mas seu corpo não corresponde. Parece familiar? Não deixe que isso
                            defina você!
                            <br />
                            <br />
                            <strong>
                                Uma boa ereção não é apenas sobre desempenho, é sobre confiança,
                                saúde e qualidade de vida.
                            </strong>
                            <br />
                            <br />
                            Problemas de ereção podem arruinar sua vida, impactando sua
                            autoestima, seus relacionamentos e até sua felicidade. Mas aqui
                            está a boa notícia: você pode mudar essa realidade!
                        </p>
                    </div>
                </section>
            </div>

            <section className="bg-[#ffa31a]">
                <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase text-center py-10 bg-[url('https://wallpapers.com/images/hd/red-fire-background-atebt6p51kpiqod3.jpg')]">
                    veja resultados em 7 dias
                </h2>
            </section>

            <section className="bg-gradient-to-r from-black to-[#392200] text-white text-center py-16 lg:px-4">
                <div className="lg:max-w-4xl mx-auto">
                    <h2 className="text-2xl lg:text-4xl md:text-5xl font-semibold mb-4 uppercase text-[#ffa31a]">
                        Você quer transar como um <strong>CAVALO</strong>?
                    </h2>

                    <Image src="/images/metodo-primitivo-para-erecoes/positivas/cavalo2.jpg"
                        width={1000} height={1000}
                        alt="homem frustrado por ter impotência sexual"
                        className="mt-8 mx-auto w-full lg:rounded-lg border border-red-500 shadow-sm shadow-red-300"
                    />

                    <p className="text-lg md:text-xl fw-lighter mb-8 mt-12 md:text-start">
                        Se a sua resposta foi sim então diga adeus à meia bomba ou pior e olhe para o futuro com confiança!
                        Por que agora você tem a oportinidade de transformar a sua vida sexual da agua para o vinho.
                        <br /><br />
                        Não espere que o problema aumente.
                        Cuide de si mesmo e mostre ao mundo o melhor que você pode ser. Chega de se sentir impotente
                        <br />
                        <br />
                        Garanta agora seu pau duro nunca e comece a aplicar o método hoje mesmo! Porque sua saúde masculina não é
                        um luxo, é uma prioridade.
                        <br />
                        <br />
                        Seja a melhor versão de você. 👊💪
                    </p>
                </div>
            </section>


            <div className="container mx-auto ">
                {/* Benefícios Section */}
                <section className="bg-white py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">POR QUE AS PESSOAS ESTÃO UTILIZANDO ESTE MÉTODO?</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Método 100% natural, baseado em ciência e resultados reais.
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <Image src="/images/metodo-primitivo-para-erecoes/positivas/Orgasmo-feminino.jpg" alt="Relacionamentos melhores"
                                width={1000} height={1000}
                                className="mb-4 mx-auto w-full lg:rounded-lg shadow-sm"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ereções POTENTES e duradouras</h3>
                            <p className="text-gray-600">
                                O método é capaz de te transformar em um verdadeiro ator pornô. Você será
                                visto com outros olhos pelas amigas dela
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <Image src="/images/metodo-primitivo-para-erecoes/oleos.jpg" alt="Soluções naturais"
                                width={1000} height={1000}
                                className="mb-4 mx-auto w-full lg:rounded-lg shadow-sm"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Soluções Naturais</h3>
                            <p className="text-gray-600">Sem medicamentos caros, apenas utilizando ingredientess naturais e seguindo
                                o passo-a-passo.</p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <Image src="/images/metodo-primitivo-para-erecoes/positivas/casal_1.avif" alt="Confiança renovada"
                                width={1000} height={1000}
                                className="mb-4 mx-auto w-full lg:rounded-lg shadow-sm"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Confiança Renovada</h3>
                            <p className="text-gray-600">Sinta-se seguro e preparado para qualquer situação. Mesmo após ejacular
                                você continuará de pau duro</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="#compra" className="cta-button zoom-button ">Começar Hoje</a>
                    </div>
                </section>

                {/* Depoimentos Section  */}
                <section className="py-16 bg-gray-50">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
                            O Que Nossos Alunos nos contaram sobre o método
                        </h2>
                        <p className="text-lg text-gray-600">
                            Histórias reais de transformação e sucesso.
                        </p>
                    </div>
                    <SectionReviews reviewsList={reviewsList} />
                </section>

                {/* FAQ Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Dúvidas Frequentes</h2>
                        <p className="text-lg text-gray-600">Respondemos às perguntas sobre o método.</p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqList.map((faq, index) =>
                            <Accordion key={faq.question} type="single" collapsible>
                                <AccordionItem value={`item-${index}`} className="bg-gray-100 px-4 rounded-lg shadow-md">
                                    <AccordionTrigger className="text-lg font-semibold text-gray-800 cursor-pointer">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 mt-2">
                                        {faq.response}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        )}
                    </div>

                </section>
            </div>

            <section className="bg-gradient-to-r from-black to-[#392200] text-white py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
                    Deseja Desbloquear seu instinto primitivo?
                </h2>
                <p>
                    Elas irão <strong>IMPLORAR PARA TE DAR</strong> de novo
                </p>
                <br />
                <a
                    href="https://link-para-a-compra.com"
                    className="cta-button zoom-button">
                    Quero ficar potente
                </a>
            </section>
        </div>
    );
}
