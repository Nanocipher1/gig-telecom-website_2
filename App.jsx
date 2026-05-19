
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-7xl font-black">
            GiG <span className="text-orange-500">Telecom</span>
          </h1>

          <p className="mt-8 text-2xl text-slate-300">
            The Future of Connectivity, Built by You.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-8 rounded-3xl">
              <h2 className="text-4xl font-black">6 Mbps</h2>
              <p className="text-orange-400 text-3xl mt-4">KSh 1500</p>
            </div>

            <div className="bg-orange-500 p-8 rounded-3xl text-black">
              <h2 className="text-4xl font-black">10 Mbps</h2>
              <p className="text-3xl mt-4">KSh 2000</p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl">
              <h2 className="text-4xl font-black">15 Mbps</h2>
              <p className="text-orange-400 text-3xl mt-4">KSh 2500</p>
            </div>
          </div>

          <button className="mt-12 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-xl font-bold">
            Call 0112295189
          </button>
        </div>
      </section>
    </div>
  )
}
