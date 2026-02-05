import Link from 'next/link';
import { ArrowRight, Monitor, Layout, Code2, ShieldCheck } from 'lucide-react';

export default function ServicesPreview() {

    const services = [
        {
            title: "Sites profissionais completos", // 
            description: "Sites institucionais que transmitem credibilidade e autoridade.",
            icon: Monitor,
            link: "/servicos#sites"
        },
        {
            title: "Landing pages estratégicas", // 
            description: "Páginas focadas em conversão para campanhas e vendas.",
            icon: Layout,
            link: "/servicos#landing-pages"
        },
        {
            title: "Sistemas web sob medida", // 
            description: "Soluções personalizadas para eficiência e gestão do seu negócio.",
            icon: Code2,
            link: "/servicos#sistemas"
        },
        {
            title: "Planos mensais de manutenção", // 
            description: "Suporte contínuo para garantir segurança e estabilidade.",
            icon: ShieldCheck,
            link: "/servicos#manutencao"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                            Nossos Serviços
                        </h2>
                        <p className="text-lg text-gray-600">
                            Desenvolvemos desde a presença digital básica até sistemas complexos.
                        </p>
                    </div>

                    <Link
                        href="/servicos"
                        className="hidden md:flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Ver todos os serviços
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group flex flex-col h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 flex-grow">
                                {service.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Botão Mobile (aparece apenas em telas pequenas) */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/servicos"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Ver todos os serviços
                    </Link>
                </div>

            </div>
        </section>
    );
}