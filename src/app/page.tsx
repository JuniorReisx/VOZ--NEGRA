
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Users, BookOpen, Heart, Share2, ChevronRight, Star, MapPin, PlayCircle, Award, MessageCircle, Filter, Send, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Search, User, Bell } from 'lucide-react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [storyForm, setStoryForm] = useState({ name: '', email: '', story: '', anonymous: false });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      date: "20 de Novembro",
      title: "Dia da Consciência Negra",
      subtitle: "Celebrando a resistência e a cultura afro-brasileira",
      bg: "bg-gradient-to-br from-amber-900 via-red-800 to-orange-900",
      particle: "from-yellow-400 to-red-500"
    },
    {
      date: "13 de Maio",
      title: "Abolição da Escravatura",
      subtitle: "Lembrando que a luta pela igualdade continua",
      bg: "bg-gradient-to-br from-purple-900 via-pink-800 to-red-900",
      particle: "from-purple-400 to-pink-500"
    },
    {
      date: "21 de Março",
      title: "Dia Internacional de Luta pela Eliminação da Discriminação Racial",
      subtitle: "Unidos contra o racismo em todas as suas formas",
      bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
      particle: "from-green-400 to-teal-500"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Racismo Estrutural: Entendendo suas Raízes",
      category: "educacao",
      excerpt: "O racismo estrutural é um sistema que perpetua desigualdades através de instituições e práticas sociais...",
      author: "Dr. Silvio Almeida",
      date: "15 de junho, 2024",
      readTime: "8 min",
      trending: true
    },
    {
      id: 2,
      title: "Zumbi dos Palmares: O Líder da Resistência",
      category: "historia",
      excerpt: "Conheça a história do maior líder quilombola do Brasil e sua luta pela liberdade...",
      author: "Profa. Lilia Schwarcz",
      date: "20 de novembro, 2024",
      readTime: "12 min",
      trending: false
    },
    {
      id: 3,
      title: "Cotas Raciais: Por que São Necessárias",
      category: "atualidades",
      excerpt: "Uma análise sobre a importância das ações afirmativas no combate às desigualdades...",
      author: "Djamila Ribeiro",
      date: "8 de julho, 2024",
      readTime: "10 min",
      trending: true
    },
    {
      id: 4,
      title: "Colorismo: As Nuances do Preconceito",
      category: "educacao",
      excerpt: "Entenda como o colorismo afeta a comunidade negra e perpetua hierarquias raciais...",
      author: "Grada Kilomba",
      date: "2 de agosto, 2024",
      readTime: "6 min",
      trending: false
    }
  ];

  const stories = [
    {
      id: 1,
      author: "Maria Silva",
      location: "São Paulo, SP",
      story: "Consegui minha primeira oportunidade em tecnologia após participar de um programa de inclusão. Hoje trabalho como desenvolvedora e mentoro outras pessoas negras na área.",
      type: "superacao",
      likes: 127,
      verified: true
    },
    {
      id: 2,
      author: "João Santos",
      location: "Salvador, BA",
      story: "Abri minha empresa de catering especializada em culinária afro-brasileira. É gratificante ver nossa cultura sendo valorizada através da gastronomia.",
      type: "empreendedorismo",
      likes: 89,
      verified: false
    },
    {
      id: 3,
      author: "Anônimo",
      location: "Rio de Janeiro, RJ",
      story: "Depois de anos sofrendo racismo no trabalho, denunciei e consegui justiça. A empresa mudou suas políticas e hoje tem um ambiente mais inclusivo.",
      type: "justica",
      likes: 203,
      verified: true
    }
  ];

  const events = [
    {
      id: 1,
      title: "Feira de Cultura Afro-Brasileira",
      date: "2024-07-15",
      location: "Pelourinho, Salvador",
      type: "cultural",
      description: "Feira com artesanatos, culinária e apresentações culturais afro-brasileiras",
      featured: true
    },
    {
      id: 2,
      title: "Roda de Conversa: Mulheres Negras no Mercado de Trabalho",
      date: "2024-07-20",
      location: "Online",
      type: "educativo",
      description: "Discussão sobre desafios e oportunidades para mulheres negras no ambiente corporativo",
      featured: false
    },
    {
      id: 3,
      title: "Caminhada Contra o Racismo",
      date: "2024-08-01",
      location: "Copacabana, Rio de Janeiro",
      type: "ativismo",
      description: "Mobilização pacífica pela igualdade racial e combate ao preconceito",
      featured: true
    }
  ];

  const ngos = [
    {
      id: 1,
      name: "Instituto Geledés",
      description: "Organização política de mulheres negras que tem por missão institucional a luta contra o racismo e o sexismo",
      website: "https://www.geledes.org.br",
      focus: "Direitos Humanos",
      impact: "50k+ vidas impactadas"
    },
    {
      id: 2,
      name: "Educafro",
      description: "Rede de cursinhos pré-vestibulares comunitários que tem como objetivo principal a inclusão de negros nas universidades",
      website: "https://www.educafro.org.br",
      focus: "Educação",
      impact: "10k+ aprovações"
    },
    {
      id: 3,
      name: "Reação",
      description: "Organização que trabalha na promoção da igualdade racial através de projetos educacionais e culturais",
      website: "https://www.reacao.org.br",
      focus: "Cultura e Educação",
      impact: "25k+ participantes"
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos', icon: BookOpen },
    { id: 'educacao', name: 'Educação', icon: BookOpen },
    { id: 'historia', name: 'História', icon: Award },
    { id: 'atualidades', name: 'Atualidades', icon: MessageCircle }
  ];

  const filteredArticles = selectedCategory === 'todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado por compartilhar sua história! Ela será analisada e publicada em breve.');
    setStoryForm({ name: '', email: '', story: '', anonymous: false });
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r ${banners[currentBanner].particle} rounded-full opacity-20 animate-pulse`}
        
        />
      ))}
    </div>
  );

  const renderHome = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 transition-all duration-2000 ${banners[currentBanner].bg}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <FloatingParticles />
      </div>
      
      {/* Parallax Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="relative z-10 h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          {/* Main Title with Glow Effect */}
          <h1 className="text-8xl md:text-9xl font-black mb-8 tracking-tight relative">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              VOZ NEGRA
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl -z-10"></div>
          </h1>
          
          {/* Animated Subtitle */}
          <div className="relative mb-12">
            <p className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              RESPEITO NÃO SE NEGOCIA
            </p>
            <p className="text-2xl md:text-3xl font-light text-red-400 animate-pulse">
              RACISMO É CRIME
            </p>
          </div>
          
          {/* Enhanced Banner Card */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-yellow-400 w-6 h-6" />
              <div className="text-yellow-400 text-lg font-bold">
                {banners[currentBanner].date}
              </div>
              <Sparkles className="text-yellow-400 w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {banners[currentBanner].title}
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              {banners[currentBanner].subtitle}
            </p>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setCurrentPage('educacao')}
              className="group relative bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <BookOpen size={28} />
                <span>Educação</span>
                <Zap size={20} className="group-hover:animate-pulse" />
              </div>
            </button>
            
            <button 
              onClick={() => setCurrentPage('historias')}
              className="group relative bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <Heart size={28} />
                <span>Histórias</span>
                <Sparkles size={20} className="group-hover:animate-pulse" />
              </div>
            </button>
            
            <button 
              onClick={() => setCurrentPage('eventos')}
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <Calendar size={28} />
                <span>Eventos</span>
                <TrendingUp size={20} className="group-hover:animate-pulse" />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Banner Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${
              currentBanner === index 
                ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );

  const renderEducacao = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-pulse"
        
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Educação
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Conhecimento é poder. Eduque-se sobre a história, cultura e lutas da população negra.
          </p>
        </div>
        
        {/* Enhanced Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-lg shadow-yellow-500/25'
                  : 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <category.icon size={24} />
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Enhanced Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <div key={article.id} className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
              {article.trending && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <TrendingUp size={14} />
                  Trending
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">{article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="font-bold text-white mb-1">{article.author}</div>
                    <div>{article.date}</div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 group-hover:shadow-lg">
                    Ler mais
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHistorias = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400/10 rounded-full animate-pulse"
  
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Histórias Reais
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Compartilhe sua experiência e inspire outras pessoas. Sua voz importa.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Form Section */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-10 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
                <Share2 size={28} />
              </div>
              Compartilhe sua História
            </h2>
            
            <form onSubmit={handleStorySubmit} className="space-y-6">
              <div>
                <label className="block text-white font-bold mb-3 text-lg">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={storyForm.name}
                  onChange={(e) => setStoryForm({...storyForm, name: e.target.value})}
                  className="w-full p-4 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:border-red-500 focus:outline-none transition-all duration-300 text-lg backdrop-blur-sm"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-white font-bold mb-3 text-lg">
                  Email (para contato)
                </label>
                <input
                  type="email"
                  value={storyForm.email}
                  onChange={(e) => setStoryForm({...storyForm, email: e.target.value})}
                  className="w-full p-4 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:border-red-500 focus:outline-none transition-all duration-300 text-lg backdrop-blur-sm"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-bold mb-3 text-lg">
                  Sua História
                </label>
                <textarea 
                  value={storyForm.story}
                  onChange={(e) => setStoryForm({...storyForm, story: e.target.value})}
                  className="w-full p-4 bg-gray-700/50 text-white rounded-xl border border-gray-600 focus:border-red-500 focus:outline-none transition-all duration-300 text-lg backdrop-blur-sm h-32 resize-none"
                  placeholder="Conte sua experiência, superação ou denúncia..."
                  required
                />
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={storyForm.anonymous}
                  onChange={(e) => setStoryForm({...storyForm, anonymous: e.target.checked})}
                  className="w-5 h-5 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
                />
                <label htmlFor="anonymous" className="text-white text-lg">
                  Publicar anonimamente
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <Send size={24} />
                Enviar História
                <Sparkles size={20} />
              </button>
            </form>
          </div>
          
          {/* Enhanced Stories Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl">
                <MessageCircle size={28} />
              </div>
              Histórias Compartilhadas
            </h2>
            
            {stories.map(story => (
              <div key={story.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 backdrop-blur-sm transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {story.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">{story.author}</span>
                        {story.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="text-gray-400 flex items-center gap-1">
                        <MapPin size={14} />
                        {story.location}
                      </div>
                    </div>
                  </div>
                  
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    story.type === 'superacao' ? 'bg-green-600 text-white' :
                    story.type === 'empreendedorismo' ? 'bg-blue-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {story.type}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {story.story}
                </p>
                
                <div className="flex items-center gap-4 text-gray-400">
                  <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                    <Heart size={18} />
                    <span className="font-semibold">{story.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );



  const renderEventos = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Eventos & ONGs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Participe de eventos e apoie organizações que lutam pela igualdade racial.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar size={28} />
              Próximos Eventos
            </h2>
            
            <div className="space-y-6">
              {events.map(event => (
                <div key={event.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(event.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.type === 'cultural' ? 'bg-yellow-600 text-black' :
                      event.type === 'educativo' ? 'bg-blue-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {event.description}
                  </p>
                  
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    Mais Informações
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* NGOs Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Users size={28} />
              ONGs Parceiras
            </h2>
            
            <div className="space-y-6">
              {ngos.map(ngo => (
                <div key={ngo.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {ngo.name}
                    </h3>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {ngo.focus}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {ngo.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                      Visitar Site
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                      Apoiar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(currentPage) {
      case 'home': return renderHome();
      case 'educacao': return renderEducacao();
      case 'historias': return renderHistorias();
      case 'eventos': return renderEventos();
      default: return renderHome();
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
     {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 backdrop-blur-xl border-b border-yellow-400/20 shadow-lg' 
          : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => setCurrentPage('home')}
              className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-black text-lg">
                VN
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                VOZ NEGRA
              </span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { key: 'home', label: 'Início' },
                { key: 'educacao', label: 'Educação' },
                { key: 'historias', label: 'Histórias' },
                { key: 'eventos', label: 'Eventos' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    currentPage === item.key
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-white hover:text-yellow-400 hover:bg-yellow-400/5'
                  }`}
                >
                  {item.label}
                  {currentPage === item.key && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-yellow-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200">
                <Bell size={20} />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200">
                <User size={20} />
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-4 pb-4 border-t border-gray-800/50 pt-4">
              <div className="flex flex-col space-y-2">
                {[
                  { key: 'home', label: 'Início' },
                  { key: 'educacao', label: 'Educação' },
                  { key: 'historias', label: 'Histórias' },
                  { key: 'eventos', label: 'Eventos' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => { setCurrentPage(item.key); setMobileMenuOpen(false); }}
                    className={`text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      currentPage === item.key
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : 'text-white hover:text-yellow-400 hover:bg-yellow-400/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile Actions */}
              <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-gray-800/50">
                <button className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200">
                  <Search size={20} />
                </button>
                <button className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200">
                  <Bell size={20} />
                </button>
                <button className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200">
                  <User size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <main className="pt-20">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">VOZ NEGRA</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Uma plataforma dedicada à educação, resistência e valorização da cultura negra. 
            Juntos, construímos uma sociedade mais justa e igualitária.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Sobre
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Contato
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Política de Privacidade
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
            <p>&copy; 2024 Voz Negra. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

