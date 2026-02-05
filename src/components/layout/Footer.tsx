import Link from 'next/link';
import { Monitor, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Coluna 1: Sobre */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                <Monitor size={20} />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                BAVEX
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            A Bavex desenvolve sites e sistemas modernos, performáticos e escaláveis, focados em gerar presença digital profissional e resultados reais.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    {/* Coluna 2: Serviços */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Serviços</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/servicos" className="hover:text-white transition-colors">Sites Profissionais</Link></li>
                            <li><Link href="/servicos" className="hover:text-white transition-colors">Landing Pages</Link></li>
                            <li><Link href="/servicos" className="hover:text-white transition-colors">Sistemas Web</Link></li>
                            <li><Link href="/servicos" className="hover:text-white transition-colors">Manutenção & Suporte</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Empresa */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre a Bavex</Link></li>
                            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
                            <li><Link href="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
                            <li><Link href="/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Contato Rápido */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contato</h3>
                        <ul className="space-y-2 text-sm">
                            <li>WhatsApp: (11) 99999-9999</li>
                            <li>Email: contato@bavex.com.br</li>
                            <li className="pt-4">
                                <Link
                                    href="/contato"
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-xs font-bold hover:bg-blue-700 transition-colors"
                                >
                                    SOLICITAR ORÇAMENTO
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
                    <p>&copy; {currentYear} Bavex Soluções Digitais. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}