'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Mail,
    MessageCircle,
    MapPin,
    ArrowRight,
    Send,
    Loader2
} from 'lucide-react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Função simulada de envio (será conectada ao backend/serviço de email depois)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simula delay de rede
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Header da Seção */}
            <section className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Vamos conversar?
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Entre em contato com a Bavex e descubra como podemos desenvolver a solução digital ideal para o seu negócio.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Coluna 1: Informações e CTAs (Seção 5.1 e 5.2) */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Fale com um especialista
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Estamos prontos para entender sua necessidade e propor a melhor estratégia tecnológica. Não vendemos apenas código, entregamos resultado.
                        </p>

                        <div className="space-y-6 mb-12">

                            {/* Card WhatsApp */}
                            <Link
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                className="flex items-center gap-4 p-6 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow group"
                            >
                                <div className="bg-green-500 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">WhatsApp</h3>
                                    <p className="text-green-700 font-medium">Falar com a Bavex agora</p>
                                </div>
                                <ArrowRight className="ml-auto text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            {/* Card Email */}
                            <a
                                href="mailto:contato@bavex.com.br"
                                className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow group"
                            >
                                <div className="bg-blue-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">E-mail</h3>
                                    <p className="text-blue-700 font-medium">Solicitar orçamento formal</p>
                                </div>
                                <ArrowRight className="ml-auto text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            {/* Card Localização (Opcional/Visual) */}
                            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="bg-gray-400 text-white p-3 rounded-full">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Localização</h3>
                                    <p className="text-gray-600">São Paulo, SP - Atendimento Global</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Coluna 2: Formulário de Contato */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Envie uma mensagem
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    E-mail corporativo
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="seu@empresa.com.br"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                    Interesse
                                </label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                                >
                                    <option>Selecione um assunto</option>
                                    <option>Site Institucional</option>
                                    <option>Sistema Web</option>
                                    <option>Landing Page</option>
                                    <option>Manutenção</option>
                                    <option>Outros</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Como podemos ajudar?
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                    placeholder="Conte um pouco sobre seu projeto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar mensagem
                                        <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}