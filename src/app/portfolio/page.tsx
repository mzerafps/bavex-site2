import Link from 'next/link';
import { Briefcase, ArrowRight, Loader2 } from 'lucide-react';

export const metadata = {
    title: 'Portfólio | Bavex',
    description: 'Conheça os projetos desenvolvidos pela Bavex com foco em estratégia, experiência do usuário e escalabilidade.',
};

export default function PortfolioPage() {
    return (
        <div className="bg-white min-h-[80vh] flex flex-col">

            {/* Cabeçalho da Seção */}
            <section className="pt-20 pb-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-xl mb-6">
                        <Briefcase size={32} />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Nosso Portfólio
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Cada projeto desenvolvido pela Bavex é pensado de forma estratégica, considerando as necessidades do negócio, a experiência do usuário e a escalabilidade da solução.
                    </p>
                </div>
            </section>

            {/* Área de "Em Breve" */}
            <section className="flex-grow flex items-center justify-center py-24 px-4">
                <div className="max-w-2xl w-full bg-white rounded-3xl border border-gray-200 shadow-xl p-12 text-center relative overflow-hidden">

                    {/* Efeito de background decorativo */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient" />

                    <div className="flex justify-center mb-6">
                        <Loader2 className="w-16 h-16 text-blue-600 animate-spin" strokeWidth={1.5} />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Novos projetos a caminho
                    </h2>

                    <p className="text-gray-600 mb-8">
                        Em breve, novos projetos estarão disponíveis para visualização aqui. Estamos preparando cases detalhados para mostrar como geramos resultado real.
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-4">
                            Enquanto isso, que tal construirmos o seu case de sucesso?
                        </p>
                        <Link
                            href="/contato"
                            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        >
                            Iniciar meu projeto
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}