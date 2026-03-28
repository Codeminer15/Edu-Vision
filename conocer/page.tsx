import {
  BookOpen,
  Target,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Heart,
  Lightbulb,
  Calendar,
  Video,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

interface Props {
  onBack: () => void;
}

export default function ConocerPage({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20">
              <Sparkles size={16} />
              <span>Conoce nuestra aplicación</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Transformando la educación preescolar
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Edu Vision App nace de la necesidad de modernizar y simplificar la
              labor docente en el nivel preescolar, ofreciendo herramientas
              digitales que potencian el aprendizaje significativo.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-emerald-500 rounded-full"></span>
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">
                  Nuestra Misión
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-6 leading-tight">
                Empoderar a los docentes con tecnología educativa
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Creemos que los docentes merecen herramientas que faciliten su
                trabajo diario, permitiéndoles enfocarse en lo que realmente
                importa: el desarrollo integral de cada estudiante.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Edu Vision App integra todas las funciones necesarias para la
                gestión educativa en una sola plataforma intuitiva y accesible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl">
                  <Target className="text-blue-600" size={24} />
                  <span className="font-semibold text-blue-900">
                    Enfoque pedagógico
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl">
                  <Heart className="text-emerald-600" size={24} />
                  <span className="font-semibold text-emerald-900">
                    Centrado en el estudiante
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white border border-slate-100 rounded-3xl shadow-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950">
                      Visión Educativa
                    </h3>
                    <p className="text-slate-500">Innovación con propósito</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Aprendizaje personalizado para cada estudiante",
                    "Reducción de carga administrativa",
                    "Seguimiento continuo del progreso",
                    "Integración de recursos multimedia",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle2
                        className="text-emerald-500 shrink-0"
                        size={20}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-1 w-8 bg-blue-500 rounded-full"></span>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                Características
              </span>
              <span className="h-1 w-8 bg-blue-500 rounded-full"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Descubre las herramientas que hacen de Edu Vision App la solución
              ideal para docentes de preescolar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={28} />,
                title: "Diagnóstico Estudiantil",
                description:
                  "Evalúa las habilidades, fortalezas y áreas de mejora de cada estudiante con formularios personalizados.",
                color: "blue",
              },
              {
                icon: <Calendar size={28} />,
                title: "Planeación Didáctica",
                description:
                  "Crea planes de clase estructurados con objetivos claros, actividades dinámicas y evaluaciones.",
                color: "emerald",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Gestión de Actividades",
                description:
                  "Organiza y programa actividades diarias, semanales y mensuales con recordatorios automáticos.",
                color: "indigo",
              },
              {
                icon: <Video size={28} />,
                title: "Recursos Multimedia",
                description:
                  "Accede a una biblioteca de videos, canciones y materiales educativos adaptados para preescolar.",
                color: "purple",
              },
              {
                icon: <BarChart3 size={28} />,
                title: "Seguimiento y Reportes",
                description:
                  "Genera reportes visuales del progreso de cada estudiante para compartir con padres y directivos.",
                color: "rose",
              },
              {
                icon: <Shield size={28} />,
                title: "Seguridad y Privacidad",
                description:
                  "Protección de datos de estudiantes con los más altos estándares de seguridad y cumplimiento.",
                color: "amber",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Edu Vision */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-8 bg-emerald-400 rounded-full"></span>
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">
                  Por qué elegirnos
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                Diseñada por y para educadores
              </h2>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Edu Vision App fue desarrollada en colaboración con docentes de
                preescolar, asegurando que cada función responda a necesidades
                reales del aula.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Zap size={24} />,
                    title: "Rápida y eficiente",
                    desc: "Interfaz intuitiva que reduce el tiempo de gestión",
                  },
                  {
                    icon: <Lightbulb size={24} />,
                    title: "Innovación constante",
                    desc: "Actualizaciones regulares con nuevas funciones",
                  },
                  {
                    icon: <Users size={24} />,
                    title: "Soporte dedicado",
                    desc: "Equipo de atención disponible para ayudarte",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-blue-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-2xl mb-4">
                  <BookOpen className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Comienza hoy</h3>
                <p className="text-blue-200">
                  Únete a miles de docentes que ya transforman su práctica
                  educativa
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Docentes activos", value: "500+" },
                  { label: "Estudiantes beneficiados", value: "10,000+" },
                  { label: "Satisfacción del usuario", value: "98%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-xl p-4 flex items-center justify-between"
                  >
                    <span className="text-blue-100">{stat.label}</span>
                    <span className="font-bold text-emerald-400">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            ¿Listo para transformar tu práctica docente?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Descarga Edu Vision App y descubre cómo la tecnología puede
            potenciar el aprendizaje de tus estudiantes.
          </p>
          <button
            onClick={onBack}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            Volver al inicio
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
