import {
    Layers,
    Zap,
    TrendingUp,
    MessageSquare,
    Target
} from 'lucide-react';

export default function Differentials() {

    // Dados baseados na Seção 1.6 do Documento
    const differentials = [
        {
            icon: Layers,
            title: "Arquitetura moderna e escalável",
            description: "Construímos bases sólidas que permitem que seu projeto cresça sem precisar ser refeito do zero."
        },
        {
            icon: Zap,
            title: "Foco em performance e resultado",
            description: "Sites rápidos que rankeiam melhor no Google e retêm a atenção do usuário."
        },
        {
            icon: TrendingUp,
            title: "Projetos pensados para crescimento",
            description: "Não entregamos apenas código, entregamos ferramentas para alavancar seu negócio."
        },
        {
            icon: MessageSquare,
            title: "Comunicação clara e transparente",
            description: "Sem 'techniquez'. Falamos a sua língua e mantemos você informado em cada etapa."
        },
        {
            icon: Target,
            title: "Visão estratégica além do código",
            description: "Entendemos de tecnologia e de negócios para propor as melhores soluções."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Seção 1.4 - O que fazemos (Intro) */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                        O que fazemos
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Desenvolvemos soluções digitais sob medida para empresas que entendem a tecnologia como um ativo estratégico.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nosso foco é entregar projetos bem estruturados, com alto padrão técnico, performance e visão de longo prazo.
                    </p>
                </div>

                {/* Seção 1.6 - Diferenciais (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}