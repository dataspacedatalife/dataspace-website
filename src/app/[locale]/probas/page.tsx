export default function OneHealthLanding() {
  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #3fd7c0 0%,
            #00b7d4 35%,
            #009ab8 65%,
            #006b8f 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 10s ease infinite;
        }

        .float-1 { animation: float 5s ease-in-out infinite; }
        .float-2 { animation: float 6s ease-in-out infinite; }
        .float-3 { animation: float 7s ease-in-out infinite; }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXTO */}
            <div>
              <h1
                className="gradient-text font-bold leading-[0.85]"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(4rem, 10vw, 8rem)",
                }}
              >
                OneHealth
                <br />
                DataSpace
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Facilitamos a las entidades participantes compartir,
                procesar, almacenar y analizar datos de salud humana,
                animal y medioambiental —manteniendo el control sobre
                ellos— transformándolos en conocimiento para mejorar
                la salud global.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#009AB8] to-[#3fd7c0] shadow-lg hover:scale-105 transition">
                  Discover Platform
                </button>

                <button className="px-8 py-4 rounded-full border border-[#009AB8] text-[#009AB8] bg-white hover:bg-slate-50 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* ONE HEALTH DIAGRAM */}
            <div className="flex justify-center">
              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">

                {/* HUMAN */}
                <div
                  className="absolute left-1/2 top-0 -translate-x-1/2
                  w-28 h-28 md:w-44 md:h-44 rounded-full
                  bg-gradient-to-br from-[#3fd7c0] to-[#00B7D4]
                  flex items-center justify-center
                  text-white text-4xl md:text-6xl
                  shadow-xl float-1"
                >
                  🧑
                </div>

                {/* ANIMAL */}
                <div
                  className="absolute left-0 bottom-8
                  w-28 h-28 md:w-44 md:h-44 rounded-full
                  bg-gradient-to-br from-[#009AB8] to-[#006B8F]
                  flex items-center justify-center
                  text-white text-4xl md:text-6xl
                  shadow-xl float-2"
                >
                  🐾
                </div>

                {/* ENVIRONMENT */}
                <div
                  className="absolute right-0 bottom-8
                  w-28 h-28 md:w-44 md:h-44 rounded-full
                  bg-gradient-to-br from-emerald-400 to-emerald-600
                  flex items-center justify-center
                  text-white text-4xl md:text-6xl
                  shadow-xl float-3"
                >
                  🌿
                </div>

                {/* CENTER */}
                <div
                  className="absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2
                  w-24 h-24 md:w-36 md:h-36
                  rounded-full bg-white
                  shadow-2xl flex items-center justify-center"
                >
                  <span className="text-[#009AB8] font-bold text-center text-sm md:text-xl">
                    ONE
                    <br />
                    HEALTH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="text-center mb-14">
            <h2
              className="font-semibold text-[#009AB8]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
              }}
            >
              Platform Services
            </h2>

            <p className="mt-4 text-slate-600 text-lg max-w-4xl mx-auto">
              Secure digital infrastructure to exchange, store,
              process and exploit data across the One Health ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

            {[
              {
                icon: "🔄",
                title: "Data Sharing",
                text: "Secure and sovereign exchange of data between organisations.",
              },
              {
                icon: "💾",
                title: "Storage",
                text: "Scalable and reliable storage for large health datasets.",
              },
              {
                icon: "⚡",
                title: "HPC",
                text: "High-performance computing for demanding workloads.",
              },
              {
                icon: "🧠",
                title: "AI & Analytics",
                text: "Transform data into knowledge through AI and advanced analytics.",
              },
              {
                icon: "⚛️",
                title: "Quantum",
                text: "Next-generation computing technologies for innovation.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-gradient-to-br from-[#009AB8] via-cyan-400 to-blue-500 p-[1px] shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-white rounded-3xl p-8 h-full">
                  <div className="text-5xl mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-[#009AB8] font-semibold text-2xl mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>
      </main>
    </>
  );
}