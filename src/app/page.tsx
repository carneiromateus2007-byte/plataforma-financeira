'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Shield, Zap, Check, Star, TrendingUp, DollarSign, PieChart, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header/Navbar */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-black to-gray-700 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                FinanceControl
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors">Recursos</a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Preços</a>
              <a href="#testimonials" className="text-gray-600 hover:text-black transition-colors">Depoimentos</a>
              <Link href="/dashboard">
                <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50">
                  Entrar
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-black text-white hover:bg-gray-800">
              🚀 Controle Financeiro Profissional
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Transforme suas
              <span className="block bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
                Finanças Pessoais
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Gerencie receitas, despesas e orçamentos com inteligência. 
              Visualize seus dados financeiros em tempo real e tome decisões mais inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-black hover:bg-gray-50 text-lg px-8 py-6">
                Ver Demonstração
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ✨ Teste grátis por 14 dias • Sem cartão de crédito
            </p>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '50k+', label: 'Usuários Ativos' },
              { value: 'R$ 2M+', label: 'Economizados' },
              { value: '4.9/5', label: 'Avaliação' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-black mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-black border border-gray-300">
              Recursos Poderosos
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas profissionais para controle financeiro completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: 'Dashboard Inteligente',
                description: 'Visualize todas as suas finanças em tempo real com gráficos interativos e insights automáticos.',
                color: 'from-black to-gray-700'
              },
              {
                icon: <PieChart className="h-8 w-8" />,
                title: 'Categorias Personalizadas',
                description: 'Organize seus gastos em categorias customizadas com orçamentos e alertas inteligentes.',
                color: 'from-gray-800 to-gray-600'
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Análise de Tendências',
                description: 'Identifique padrões de gastos e oportunidades de economia com análises avançadas.',
                color: 'from-gray-700 to-gray-500'
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Metas Financeiras',
                description: 'Defina e acompanhe metas de economia com progresso visual e notificações.',
                color: 'from-black to-gray-800'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Segurança Total',
                description: 'Seus dados protegidos com criptografia de ponta a ponta e backups automáticos.',
                color: 'from-gray-600 to-gray-400'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Sincronização Rápida',
                description: 'Acesse seus dados de qualquer dispositivo com sincronização em tempo real.',
                color: 'from-gray-900 to-gray-700'
              },
            ].map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white">
              Planos Flexíveis
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Escolha o plano ideal para você
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comece grátis e evolua conforme suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Básico',
                price: 'Grátis',
                period: 'para sempre',
                description: 'Perfeito para começar',
                features: [
                  'Até 50 transações/mês',
                  '5 categorias personalizadas',
                  'Dashboard básico',
                  'Exportação CSV',
                  'Suporte por email'
                ],
                cta: 'Começar Grátis',
                popular: false
              },
              {
                name: 'Pro',
                price: 'R$ 29,90',
                period: '/mês',
                description: 'Para usuários avançados',
                features: [
                  'Transações ilimitadas',
                  'Categorias ilimitadas',
                  'Dashboard avançado',
                  'Análises e relatórios',
                  'Metas financeiras',
                  'Exportação PDF/Excel',
                  'Suporte prioritário',
                  'Sincronização multi-dispositivo'
                ],
                cta: 'Começar Teste Grátis',
                popular: true
              },
              {
                name: 'Business',
                price: 'R$ 79,90',
                period: '/mês',
                description: 'Para equipes e empresas',
                features: [
                  'Tudo do plano Pro',
                  'Múltiplos usuários',
                  'Gestão de equipes',
                  'API de integração',
                  'Relatórios customizados',
                  'Suporte 24/7',
                  'Consultoria financeira',
                  'Onboarding personalizado'
                ],
                cta: 'Falar com Vendas',
                popular: false
              },
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`border-2 ${plan.popular ? 'border-black shadow-2xl scale-105' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white px-4 py-1">
                      ⭐ Mais Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <Link href="/dashboard">
                    <Button 
                      className={`w-full mb-6 ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black border-2 border-gray-300 hover:bg-gray-50'}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-black border border-gray-300">
              Depoimentos
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milhares de pessoas já transformaram suas finanças
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'Empreendedora',
                avatar: '👩‍💼',
                rating: 5,
                text: 'Consegui economizar R$ 5.000 em 3 meses usando o FinanceControl. A visualização dos gastos me ajudou a identificar onde estava desperdiçando dinheiro.'
              },
              {
                name: 'João Santos',
                role: 'Desenvolvedor',
                avatar: '👨‍💻',
                rating: 5,
                text: 'Interface intuitiva e recursos poderosos. Finalmente encontrei uma ferramenta que me ajuda a manter minhas finanças organizadas sem complicação.'
              },
              {
                name: 'Ana Costa',
                role: 'Designer',
                avatar: '👩‍🎨',
                rating: 5,
                text: 'O melhor investimento que fiz foi assinar o plano Pro. Os relatórios detalhados me deram insights valiosos sobre meus hábitos financeiros.'
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pronto para transformar suas finanças?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão no controle total de suas finanças
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Agendar Demonstração
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            ✨ 14 dias grátis • Cancele quando quiser • Sem compromisso
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-black mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-black transition-colors">Recursos</a></li>
                <li><a href="#pricing" className="hover:text-black transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Guias</a></li>
                <li><a href="#" className="hover:text-black transition-colors">API</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Licenças</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-black to-gray-700 rounded-lg flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-black">FinanceControl</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 FinanceControl. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
