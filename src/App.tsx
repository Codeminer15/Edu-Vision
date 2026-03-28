import React, { useState } from 'react';
import {
  BookOpen, Lightbulb, Calendar, CheckSquare, Video,
  BarChart3, Users, Leaf, Coins, Heart, TrendingUp,
  AlertTriangle, Globe, CheckCircle2, XCircle,
  Smartphone, ShieldAlert, Baby
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('impact');

  const Logo = ({ size = 'normal' }: { size?: string }) => {
    const isSmall = size === 'small';
    return (
      <div className={`relative flex items-center justify-center ${isSmall ? 'w-10 h-10' : 'w-14 h-14'} bg-blue-50 rounded-xl shadow-inner border border-blue-100`}>
        <BookOpen size={isSmall ? 22 : 32} className="absolute text-blue-700" />
        <Lightbulb size={isSmall ? 10 : 16} className={`absolute text-emerald-500 ${isSmall ? 'mb-1' : 'mb-2'}`} />
        <Calendar size={isSmall ? 8 : 12} className="absolute -top-1 -right-1 text-blue-500 bg-white rounded-sm" />
        <CheckSquare size={isSmall ? 8 : 12} className="absolute top-1 -left-2 text-emerald-600 bg-white rounded-sm" />
        <Video size={isSmall ? 8 : 12} className="absolute -bottom-1 right-0 text-blue-600 bg-white rounded-sm" />
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Logo />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-blue-900 tracking-tight leading-none">Edu Vision</span>
                <span className="text-emerald-600 font-bold text-sm tracking-widest">APP</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#producto" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">El Producto</a>
              <a href="#funciones" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Funciones</a>
              <a href="#analisis" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Análisis</a>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
              <Smartphone size={18} />
              Descargar App
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mb-6 border border-blue-200">
            <Lightbulb size={16} className="text-emerald-500" />
            <span>Innovación en Educación Preescolar</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 tracking-tight mb-6 max-w-4xl leading-tight">
            Gestión docente para un <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              aprendizaje significativo
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed">
            Una aplicación innovadora diseñada para facilitar la gestión docente, mejorar la planeación educativa y apoyar el aprendizaje de los estudiantes mediante herramientas digitales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2">
              Conocer Edu Vision
              <TrendingUp size={20} />
            </button>
            <button className="bg-white hover:bg-slate-50 text-blue-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm flex items-center justify-center gap-2">
              Ver Video Demo
              <Video size={20} className="text-emerald-500" />
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTO */}
      <section id="producto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-emerald-500 rounded-full"></span>
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">El Producto</span>
              </div>
              <h2 className="text-4xl font-extrabold text-blue-950 mb-6 leading-tight">¿Qué es Edu Vision App?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Edu Vision App es una plataforma digital diseñada para apoyar a los docentes en su labor diaria.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Permite realizar diagnósticos de los estudiantes, crear planeaciones didácticas, gestionar actividades y utilizar recursos multimedia como series y películas para mejorar el aprendizaje.
              </p>
              <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0">
                  <Baby size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900">Público Objetivo Principal</h4>
                  <p className="text-emerald-700">Aplicación móvil educativa dirigida exclusivamente a <strong>docentes de nivel preescolar</strong>.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white border border-slate-100 rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Herramientas Integradas</h3>
                <ul className="space-y-5">
                  {[
                    'Diagnósticos de los estudiantes',
                    'Creación de planeaciones didácticas',
                    'Gestión de actividades diarias',
                    'Uso de recursos multimedia (series/películas)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="bg-white p-2 rounded-full text-blue-600 shadow-sm border border-slate-100">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONES */}
      <section id="funciones" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">Usos o Funciones Principales</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users size={28} />, title: 'Diagnóstico de estudiantes', desc: 'Evalúa y conoce las necesidades individuales de cada alumno.', color: 'blue' },
              { icon: <Calendar size={28} />, title: 'Planeación automática de clases', desc: 'Genera estructuras didácticas ahorrando tiempo valioso.', color: 'emerald' },
              { icon: <CheckSquare size={28} />, title: 'Organización de actividades', desc: 'Mantén el control de todas las tareas y dinámicas del aula.', color: 'indigo' },
              { icon: <Video size={28} />, title: 'Recursos multimedia educativos', desc: 'Integra series y películas adaptadas para educación preescolar.', color: 'purple' },
              { icon: <BarChart3 size={28} />, title: 'Seguimiento del progreso', desc: 'Monitorea el avance de aprendizaje de forma clara y visual.', color: 'rose' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANÁLISIS */}
      <section id="analisis" className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Análisis Estratégico</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Visión integral del proyecto, posicionamiento y ventajas competitivas.</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-blue-900/50 p-1.5 rounded-full inline-flex border border-blue-800/50">
              {[
                { id: 'impact', label: 'Impacto' },
                { id: 'swot', label: 'FODA' },
                { id: 'competition', label: 'Competencia' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl text-slate-800 p-8 md:p-12 shadow-2xl">

            {/* IMPACTO */}
            {activeTab === 'impact' && (
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-extrabold text-blue-950 mb-2">Impacto Económico y Social</h3>
                  <div className="h-1 w-16 bg-emerald-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-emerald-500 text-white rounded-xl">
                        <Coins size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-emerald-950">Impacto Económico</h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { icon: <Leaf size={20} />, text: 'Reducción de papel' },
                        { icon: <Calendar size={20} />, text: 'Ahorro de tiempo' },
                        { icon: <TrendingUp size={20} />, text: 'Posible monetización' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                          <span className="text-emerald-500">{item.icon}</span>
                          <span className="font-medium text-slate-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-600 text-white rounded-xl">
                        <Users size={28} />
                      </div>
                      <h4 className="text-xl font-bold text-blue-950">Impacto Social</h4>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { icon: <TrendingUp size={20} />, text: 'Mejora educativa' },
                        { icon: <Smartphone size={20} />, text: 'Uso de tecnología' },
                        { icon: <Lightbulb size={20} />, text: 'Aprendizaje significativo' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                          <span className="text-blue-500">{item.icon}</span>
                          <span className="font-medium text-slate-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* FODA */}
            {activeTab === 'swot' && (
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-extrabold text-blue-950 mb-2">Análisis FODA</h3>
                  <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                    <h4 className="font-extrabold text-emerald-800 text-lg mb-4 flex items-center gap-2">
                      <TrendingUp size={24} /> Fortalezas
                    </h4>
                    <ul className="space-y-3 text-emerald-950 font-medium">
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Fácil uso</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Recursos multimedia</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Automatización</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                    <h4 className="font-extrabold text-blue-800 text-lg mb-4 flex items-center gap-2">
                      <Globe size={24} /> Oportunidades
                    </h4>
                    <ul className="space-y-3 text-blue-950 font-medium">
                      <li className="flex items-center gap-2"><Lightbulb size={18} className="text-blue-500" /> Crecimiento tecnológico</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500">
                    <h4 className="font-extrabold text-amber-800 text-lg mb-4 flex items-center gap-2">
                      <AlertTriangle size={24} /> Debilidades
                    </h4>
                    <ul className="space-y-3 text-amber-950 font-medium">
                      <li className="flex items-center gap-2"><XCircle size={18} className="text-amber-500" /> Dependencia de internet</li>
                    </ul>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500">
                    <h4 className="font-extrabold text-rose-800 text-lg mb-4 flex items-center gap-2">
                      <ShieldAlert size={24} /> Amenazas
                    </h4>
                    <ul className="space-y-3 text-rose-950 font-medium">
                      <li className="flex items-center gap-2"><AlertTriangle size={18} className="text-rose-500" /> Competencia</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* COMPETENCIA */}
            {activeTab === 'competition' && (
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-extrabold text-blue-950 mb-2">Análisis de Competencia</h3>
                  <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                <p className="text-slate-600 text-center text-lg">Contenido de competencia próximamente.</p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 border-t border-blue-900 py-8 text-center text-blue-300 text-sm">
        <p>© 2024 Edu Vision App — Todos los derechos reservados.</p>
      </footer>

    </div>
  );
};

export default App;