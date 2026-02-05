import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-20 pb-32 flex items-center bg-gradient-to-b from-blue-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Badge / Tagline sutil */}
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 bg-blue-50 mb-8">
                    Tecnologia para crescimento real
                </div>

                {/* 1.1 Headline Principal */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl">
                    Soluções digitais completas para empresas que querem <span className="text-blue-600">crescer de verdade</span>
                </h1>

                {/* 1.2 Subheadline */}
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                    A Bavex desenvolve sites e sistemas modernos, performáticos e escaláveis, focados em gerar presença digital profissional, credibilidade e resultados reais para empresas.
                </p>

                {/* 1.3 Chamada para ação (CTA) */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    >
                        Solicitar um orçamento
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>

                    <Link
                        href="https://wa.me/5511999999999" // Link placeholder para WhatsApp
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                    >
                        <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                        Falar com a Bavex
                    </Link>
                </div>

            </div>

            {/* Elemento visual decorativo de fundo (opcional para dar profundidade) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[400px] bg-blue-100/40 blur-3xl rounded-full opacity-50" />
        </section>
    );
}