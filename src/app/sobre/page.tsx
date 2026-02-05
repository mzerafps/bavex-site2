import Link from 'next/link';
import { Target, Telescope, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Sobre a Bavex | Quem Somos',
    description: 'Conheça a Bavex: uma empresa de tecnologia focada em soluções digitais completas, crescimento sustentável e visão estratégica.',
};

export default function AboutPage() {

    const valuesList = [
        "Qualidade técnica", // [cite: 63]
        "Transparência", // [cite: 64]
        "Compromisso com resultado", // [cite: 65]
        "Evolução contínua", // [cite: 66]
        "Visão estratégica" // [cite: 67]
    ];

    return (
        <div className="bg-white">

            {/* Header / Quem Somos */}
            <section className="bg-gray-50 py-20 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Sobre a Bavex
                    </h1>
                    <div className="text-lg md:text-xl text-gray-600 space-y-6 leading-relaxed text-justify md:text-center">
                        <p>
                            A Bavex é uma empresa de tecnologia especializada no desenvolvimento de soluções digitais completas para empresas que buscam crescimento sustentável no ambiente digital. [cite: 56]
                        </p>
                        <p>
                            Atuamos com uma visão estratégica, unindo técnica, planejamento e execução para entregar projetos sólidos, funcionais e preparados para evoluir junto com o negócio do cliente. [cite: 57]
                        </p>
                    </div>
                </div>
            </section>

            {/* Missão e Visão */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Missão */}
                        <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-600 p-3 rounded-xl text-white">
                                    <Target size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Nossa Missão</h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Desenvolver soluções digitais confiáveis, modernas e eficientes, que ajudem empresas a fortalecer sua presença digital e alcançar melhores resultados.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-500 p-3 rounded-xl text-white">
                                    <Telescope size={28} />
                                </div>
                                <h2 className="text-2xl font-bold">Nossa Visão</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Ser reconhecida como uma empresa de tecnologia que entrega qualidade, confiança e soluções digitais bem estruturadas, com foco em longo prazo.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Nossos Valores */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                            <Heart size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Nossos Valores</h2>
                        <p className="mt-4 text-gray-600">O que guia cada linha de código que escrevemos.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {valuesList.map((valor, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
                            >
                                <CheckCircle2 className="text-blue-500 mb-4 h-8 w-8" />
                                <span className="font-semibold text-gray-900">{valor}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Pronto para evoluir seu negócio?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Agora que você já sabe quem somos e no que acreditamos, vamos conversar sobre o seu projeto.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                    >
                        Falar com a Bavex
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
}