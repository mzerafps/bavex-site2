import Link from 'next/link';
import {
    Monitor,
    Layout,
    Code2,
    ShieldCheck,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

export const metadata = {
    title: 'Serviços | Bavex',
    description: 'Conheça nossas soluções: Sites Profissionais, Landing Pages, Sistemas Web e Manutenção.',
};

export default function ServicesPage() {

    const services = [
        {
            id: "sites",
            title: "Site Profissional Completo",
            description: "Desenvolvemos sites institucionais completos, pensados para transmitir credibilidade, autoridade e profissionalismo. Cada projeto é estruturado com foco em desempenho, experiência do usuário e conversão.",
            icon: Monitor,
            features: [
                "Design moderno e responsivo",
                "Estrutura profissional de páginas",
                "SEO técnico inicial (otimização para Google)",
                "Otimização de performance (carregamento rápido)",
                "Integração com WhatsApp e formulários",
                "Painel administrativo simples para edições",
                "Adequação básica à LGPD"
            ],
            color: "bg-blue-50 text-blue-600"
        },
        {
            id: "landing-pages",
            title: "Landing Pages Estratégicas",
            description: "Criamos páginas de venda e captura focadas 100% em conversão. Ideais para campanhas de tráfego pago, lançamentos de produtos e serviços específicos.",
            icon: Layout,
            features: [
                "Foco total na clareza da mensagem",
                "Design estratégico para guiar o olhar do usuário",
                "Otimização para captação de leads (contatos)",
                "Integrações essenciais (Email Marketing, CRM)",
                "Velocidade extrema de carregamento",
                "Layout mobile-first (perfeito no celular)"
            ],
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            id: "sistemas",
            title: "Sistemas Web Sob Medida",
            description: "Desenvolvemos softwares personalizados de acordo com a regra de negócio da sua empresa. Foco total em eficiência operacional, escalabilidade e segurança de dados.",
            icon: Code2,
            features: [
                "Painéis administrativos personalizados",
                "Automação de processos internos",
                "Gestão de clientes, pedidos ou estoques",
                "APIs e integrações com sistemas externos",
                "Arquitetura escalável (cresce com a empresa)",
                "Alta segurança e controle de acesso"
            ],
            color: "bg-indigo-50 text-indigo-600"
        },
        {
            id: "manutencao",
            title: "Planos Mensais de Manutenção",
            description: "Não basta colocar o site no ar, é preciso mantê-lo seguro e atualizado. Oferecemos suporte contínuo para garantir a estabilidade e evolução da sua ferramenta.",
            icon: ShieldCheck,
            features: [
                "Hospedagem de alta performance",
                "Manutenção técnica preventiva",
                "Atualizações de segurança e plugins",
                "Backups diários e semanais",
                "Suporte básico para dúvidas e ajustes",
                "Monitoramento de disponibilidade (Uptime)"
            ],
            color: "bg-amber-50 text-amber-600"
        }
    ];

    return (
        <div className="bg-white">

            {/* Header da Página */}
            <section className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Soluções Digitais <span className="text-blue-500">Sob Medida</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Da presença digital básica à sistemas complexos. Entregamos tecnologia com visão de negócio para fazer sua empresa crescer.
                    </p>
                </div>
            </section>

            {/* Lista de Serviços */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                {services.map((service, index) => (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`scroll-mt-28 flex flex-col md:flex-row gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >

                        {/* Coluna Visual (Ícone Grande) */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className={`w-full aspect-video rounded-3xl flex items-center justify-center ${service.color} bg-opacity-50`}>
                                <service.icon className="w-32 h-32 opacity-80" />
                            </div>
                        </div>

                        {/* Coluna de Conteúdo */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-3 rounded-lg ${service.color}`}>
                                    <service.icon size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {service.title}
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contato"
                                className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-colors shadow-sm"
                            >
                                Solicitar orçamento para este serviço
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                    </section>
                ))}
            </div>

            {/* Faixa Final de CTA */}
            <section className="bg-blue-50 py-16 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Não tem certeza do que precisa?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Nossa equipe pode analisar o seu momento atual e sugerir a melhor estratégia. Não vendemos o que você não precisa.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all"
                    >
                        Falar com um consultor
                    </Link>
                </div>
            </section>

        </div>
    );
}