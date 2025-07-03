"use client"

import CustomVideoPlayer from "@/components/ui/customVideoPlayer"
import {
    Star,
    Shield,
    Users,
    Book,
    Wrench,
    Network,
    HandHeart,
    DollarSign,
    RefreshCw,
    Award,
    Rocket,
    Plus,
    Minus,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { reviewsList, faqList } from "./constants";
import { SectionReviews } from "@/components/section-reviews"
import ReviewsVideosCarousel from "@/components/ui/reviewsVideosCarousel"


export default function SuaRendaEmCasa() {
    const [openFaq, setOpenFaq] = useState(0)
    // 
    const benefits = [
        { icon: Network, text: "Assista as aulas de onde quiser" },
        { icon: HandHeart, text: "Receba suporte exclusivo todos os dias" },
        { icon: DollarSign, text: "O passo a passo para vender todos os dias" },
        { icon: RefreshCw, text: "Estratégias para resultados rápidos" },
        { icon: Award, text: "Certificado de conclusão" },
        { icon: Rocket, text: "acompanhamento até os resultados" },
    ]

    const modules = [
        {
            image: "/placeholder.svg?height=531&width=947",
            title: "SAINDO DO ZERO (Explicativo)",
            description: "Aqui você irá ficar por dentro de tudo o que você precisa fazer para sair do absoluto zero.",
        },
        {
            image: "/placeholder.svg?height=531&width=947",
            title: "ENTENDENDO O MERCADO",
            description: "entenda como funciona o mercado digital e como você vai poder viver dele!",
        },
        {
            image: "/placeholder.svg?height=531&width=947",
            title: "COMO TER UMA NOVA PROFISSÃO PELO CELULAR",
            description: "Aqui você vai aprender com todo passo a passo uma nova profissão e poder fazer pelo celular",
        },
        {
            image: "/placeholder.svg?height=531&width=947",
            title: "MEU PRIMEIRO CLIENTE EM 24 HORAS",
            description: "Aprenda como ter seu primeiro cliente e colocar dinheiro no bolso em 24 horas",
        },
        {
            image: "/placeholder.svg?height=531&width=947",
            title: "COMO FAZER OS SERVIÇOS DIGITAIS (PASSO A PASSO)",
            description: "Como realizar os serviços na internet que te pagarão muito bem!",
        },
        {
            image: "/placeholder.svg?height=531&width=947",
            title: "VENDENDO TODOS OS DIAS E CONQUISTANDO A LIBERDADE",
            description: "Aqui você estará pronto e vender todos os dias!",
        },
    ]

    const testimonialVideos = ["m2POK9C6MYw", "94vv40py55I", "uHZW96gjU2k", "I8OAvaDnVI4"]

    const faqItems = [
        {
            question: "Por onde receberei o curso?",
            answer: "Após realizar sua inscrição, seu acesso será enviado diretamente em seu e-mail cadastrado.",
        },
        {
            question: "Quais são as formas de pagamento?",
            answer: "Você pode pagar via boleto, pix ou cartão de crédito em até 12x!",
        },
        {
            question: "E se eu me arrepender?",
            answer:
                "Em caso de arrependimento, basta nos enviar uma mensagem que devolvemos todo o seu investimento em até 7 dias após sua compra.",
        },
        {
            question: "Em quanto tempo terei resultados?",
            answer:
                "SE VOCÊ NÃO FIZER UMA NOVA RENDA DIGITAL EM 1 MÊS, DEVOLVO SEU DINHEIRO E AINDA TE DOU R$100 REAIS NO PIX",
        },
    ]

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    background: `url('/images/sua-renda-em-casa/bg-image.png') no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen text-center text-white">
                    {/* Logo */}
                    <div className="mb-8">
                        <Image src="/images/sua-renda-em-casa/logo.svg"
                            width={361}
                            height={513}
                            alt="Sua Renda em Casa"
                            className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                        />
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-6 max-w-4xl leading-tight">
                        SE VOCÊ <span className="text-orange-500">NÃO FIZER UMA NOVA RENDA</span> DIGITAL EM 1 MÊS, DEVOLVO SEU DINHEIRO
                        E <span className="text-yellow-500">AINDA TE DOU 100 REAIS NO PIX</span>.
                    </h1>

                    <p className="text-lg md:text-xl mb-8 font-medium">SEM PRECISAR APARECER, PELO CELULAR E DE FORMA SIMPLES</p>

                    {/* Video */}
                    <div className="w-full max-w-4xl mb-8">
                        <div
                            className="aspect-video bg-black pb-1 rounded-2xl"
                            style={{
                                boxShadow: '1px 1px 99px 0px #a5a5a57a',
                            }}>
                            <CustomVideoPlayer />
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a href="https://pay.kiwify.com.br/sUqnazH?afid=93ETP2aM" className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-3 fixed bottom-3 z-50">
                        OFERTA PROMOCIAONAL
                        <div className="bg-white bg-opacity-40 rounded-full p-2">
                            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                                <path
                                    d="M11 20.5L30 20.5M30 20.5C26.5275 18.3044 24.8553 16.8295 22.6596 13.5M30 20.5C26.611 22.6576 24.9012 24.0787 22.6596 27.5"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </section>

            {/* Arrow Down Section */}
            <section className="bg-gray-100 pb-10">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-4 mt-[-9px]">
                        <svg width="123" height="37" viewBox="0 0 123 37" fill="none">
                            <path d="M60 36.5C33.5 36.5 33.5 7 0 7H122.5C88.5 7 83 36.5 60 36.5Z" fill="#101010" />
                            <path
                                d="M59.5 1V24.5M59.5 24.5C63.1071 19.0598 65.5301 16.4399 71 13M59.5 24.5C55.9554 19.1905 53.6207 16.5119 48 13"
                                stroke="#F4BA23"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-6 mb-12">Com o treinamento você conseguirá</h2>

                    {/* Benefits Cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <Image src="/images/sua-renda-em-casa/liberdade-financeira.png"
                                width={361} height={513}
                                alt="Liberdade Financeira"
                                className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                            />

                            <p className="text-lg font-medium text-gray-700">
                                Nunca mais seja escravo das finanças, faça ela trabalhar para você.
                            </p>
                        </div>
                        <div className="text-center">
                            <Image src="/images/sua-renda-em-casa/liberdade-geografica.png"
                                width={361} height={513}
                                alt="Liberdade Geográfica"
                                className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                            />

                            <p className="text-lg font-medium text-gray-700">
                                Viva e trabalhe em qualquer lugar do mundo, sem restrições!
                            </p>
                        </div>
                        <div className="text-center">
                            <Image src="/images/sua-renda-em-casa/liberdade-de-tempo.png"
                                width={361} height={513}
                                alt="Liberdade de Tempo"
                                className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                            />

                            <p className="text-lg font-medium text-gray-700">
                                Nunca mais bata cartão e cumpra horário, seu negócio, suas regras!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Icons Section */}
            <section className="bg-[#101010] py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 text-white">
                                <div className="bg-yellow-400 p-3 rounded-full">
                                    <benefit.icon className="w-6 h-6 text-gray-900" />
                                </div>
                                <p className="text-sm md:text-base font-medium">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Modules Section */}
            <section className="py-16 bg-[#101010]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Aqui está tudo o que você vai receber no Treinamento
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {modules.map((module, index) => (
                            <div key={index} className="">
                                <div className="relative">                                <Image
                                    src={`/images/sua-renda-em-casa/modulos/${index + 1}.png`}
                                    width={361} height={513}
                                    alt="Liberdade de Tempo"
                                    className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                                />

                                    <Image
                                        src={`/images/sua-renda-em-casa/play.svg`}
                                        width={361} height={513}
                                        alt="Liberdade de Tempo"
                                        // cody, centralize o play
                                        className="absolute z-10 w-14 h-14 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="p-6 w-full text-center">
                                    <h3 className="text-2xl font-bold mb-3 text-yellow-500">{module.title}</h3>
                                    <p className="text-white">{module.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl text-center mb-8 text-gray-900">
                            O Treinamento <span className="font-bold text-orange-500">Sua renda em casa</span> foi feito para você!
                            <br />
                            <br />
                            <span className="font-black">Não importa a sua:</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full">
                                    <Users className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Idade</h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full">
                                    <Book className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Escolaridade</h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-yellow-400 p-3 rounded-full">
                                    <Wrench className="w-8 h-8 text-gray-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Experiência</h3>
                            </div>
                        </div>

                        <p className="text-lg text-center text-gray-700">
                            O objetivo do treinamentos é justamente te ensinar, você vai aprender tudo do absoluto zero!
                        </p>
                    </div>
                </div>
            </section>

            {/* Media Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                        O QUE A MÍDIA FALA DO MARKETING DIGITAL e de nós?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/q6AJJoEDSsM"
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/kxTPQ0wYC-k"
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/CBuw-Oyq7tA"
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Image src="/images/sua-renda-em-casa/noticia1.png"
                            width={361} height={513}
                            alt="Liberdade de Tempo"
                            className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                        />

                        <Image src="/images/sua-renda-em-casa/noticia2.png"
                            width={361} height={513}
                            alt="Liberdade de Tempo"
                            className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Bonus Section */}
            <section className="bg-[#101010] py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            Bônus exclusivos para acelerar seus resultados:
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-lg p-6 text-center">
                                <Image src="/images/sua-renda-em-casa/bonus1.png"
                                    width={361} height={513}
                                    alt="Liberdade de Tempo"
                                    className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-bold mb-3">BÔNUS ESPECIAL #01</h3>
                                <p className="text-gray-700">
                                    <strong>Aulas ao vivo 3 vezes por semana</strong>
                                    <br />
                                    <strong className="text-red-600">
                                        De <s>R$2.000,00</s> por ZERO
                                    </strong>
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-6 text-center">
                                <Image src="/images/sua-renda-em-casa/bonus2.png"
                                    width={361} height={513}
                                    alt="Liberdade de Tempo"
                                    className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-bold mb-3">BÔNUS ESPECIAL #02</h3>
                                <p className="text-gray-700">
                                    <strong>{`'Aprenda o caminho para fechar seus primeiros clientes em tempo recorde"`}</strong>
                                    <br />
                                    Você quer ter clientes que te pagam todos os meses prestando serviços? Neste bônus você entenderá como
                                    fechar cada vez mais clientes em tempo recorde.
                                    <br />
                                    <strong className="text-red-600">
                                        De <s>R$97,00</s> por ZERO
                                    </strong>
                                </p>
                            </div>
                        </div>

                        <div className="text-center text-white mb-8">
                            <h3 className="text-4xl mb-4 uppercase">Para ter acesso a todos esses bônus, você investiria no total</h3>
                            <h3 className="text-3xl font-bold border rounded-lg p-4 inline-block">
                                Valor Total: <s className="text-red-500">R$2.097,00</s>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offer Section */}
            <section className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 py-16" id="oferta">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <Image src="/images/sua-renda-em-casa/logo.svg"
                            width={361}
                            height={513}
                            alt="Sua Renda em Casa"
                            className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                        />

                        <p className="text-2xl md:text-3xl font-bold mb-8">
                            De <s>R$3.997,00</s> Por apenas
                            <br />
                            <span className="text-4xl md:text-5xl font-black text-green-800">12X de R$10,03</span>
                            <br />
                            Ou R$97,00 à vista!
                        </p>

                        <a
                            href="https://pay.kiwify.com.br/sUqnazH?afid=93ETP2aM"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 ">
                            COMECE AGORA
                        </a>
                        <div className="h-10"></div>
                        {/* Guarantee */}
                        <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <Shield className="w-12 h-12" />
                                <h3 className="text-xl font-bold">Risco Zero</h3>
                            </div>
                            <p className="text-sm">
                                <strong>Não se preocupe, você está protegido!</strong>
                                <br />
                                Você tem 7 dias de garantia incondicional. Caso se arrependa do seu investimento, basta
                                apertar um botão e devolvemos 100% do seu dinheiro.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-20 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-2">Além disso</h3>
                            <p className="text-sm">
                                SE VOCÊ NÃO FIZER UMA NOVA RENDA DIGITAL EM 1 MÊS, DEVOLVO SEU DINHEIRO E AINDA TE DOU R$100 REAIS NO
                                PIX
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teachers Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">ESSES SÃO SEUS PROFESSORES</h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <Image src="/images/sua-renda-em-casa/professor1.png"
                                width={361} height={513}
                                alt="Thiago Hora"
                                className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                            />

                            <p className="text-lg">
                                <strong>Empresário</strong>
                                <br />
                                criador do Sua renda em casa que fatura múltiplos 6 dígitos ao mês com a venda de produtos físicos,
                                digitais e serviços
                            </p>
                        </div>
                        <div className="text-center">
                            <Image src="/images/sua-renda-em-casa/professor2.png"
                                width={361} height={513}
                                alt="Nathalia Narrima"
                                className="w-full max-w-sm mx-auto mb-4 rounded-lg"
                            />
                            <p className="text-lg">
                                <strong>Empreendedora</strong>
                                <br />
                                Empresária e social media, especialista em vendas de serviços visuais.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-10 overflow-hidden">
                <div className="mx-auto px-4 bg-[#101010] pt-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
                        O QUE OS ALUNOS <span className="font-black">ESTÃO DIZENDO.</span>
                    </h2>

                    <div className="container mx-auto">
                        <ReviewsVideosCarousel />
                    </div>
                </div>

                <div className="mx-2 lg:m-0">
                    <SectionReviews reviewsList={reviewsList} />
                </div>
            </section >

            {/* FAQ Section */}
            <section className="py-16 bg-gray-100" >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Perguntas frequentes</h2>

                    <div className="max-w-3xl mx-auto">
                        {faqItems.map((item, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="w-full bg-white rounded-lg p-6 text-left flex justify-between items-center shadow-md hover:shadow-lg transition-shadow"
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                >
                                    <span className="font-bold text-lg text-gray-900">{item.question}</span>
                                    {openFaq === index ? (
                                        <Minus className="w-6 h-6 text-gray-600" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-gray-600" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="bg-gray-50 p-6 rounded-b-lg">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer className="py-12 pb-40" >
                <div className="flex flex-col container lg:max-w-4xl m-auto lg:flex-row bg-white rounded-xl">
                    <div className='w-full lg:w-1/2'>
                        <Image src="/images/sua-renda-em-casa/selos-footer.png"
                            width={800} height={300}
                            alt="metodos de pagamento"
                            className="w-full object-cover mx-auto mb-4 rounded-lg"
                        />
                    </div>
                    <div className='w-full lg:w-1/2 flex'>
                        <Image src="/images/sua-renda-em-casa/metodos-pagamento.png"
                            width={800} height={300}
                            alt="metodos de pagamento"
                            className="w-full object-cover mx-auto mb-4 rounded-lg"
                        />
                    </div>
                </div>
            </ footer >

            {/* Stars decoration */}
            < div className="fixed bottom-4 left-4 flex gap-2" >
                {
                    [...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))
                }
            </ div>
        </div >
    )
}
