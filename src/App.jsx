export default function JayashMusicPortfolio() {
  const tracks = [
    {
      title: "Kyu Zindagi",
      genre: "Emotional Electronic / Indian Fusion",
      description:
        "A deeply emotional electronic single blending cinematic production with heartfelt vocals by Jayash Naithani and Lavanya Bajpai.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "MITR",
      genre: "Experimental / Spiritual Fusion",
      description:
        "Minimal yet immersive production inspired by emotional and spiritual storytelling with atmospheric textures.",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "DARIYA",
      genre: "Indie / Cinematic",
      description:
        "A cinematic indie collaboration exploring freedom, memories, and emotional depth through immersive instrumentation.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Mine",
      genre: "Dark Pop / Electronic",
      description:
        "Dark atmospheric production with emotional vocal writing and immersive sound design.",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tu Na Mila",
      genre: "Indie Pop / Emotional",
      description:
        "A melancholic indie-pop release centered around emotional storytelling and melodic songwriting.",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Mai Na Rha",
      genre: "Alternative / Emotional",
      description:
        "Raw emotional songwriting combined with cinematic textures and immersive production.",
      image:
        "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const services = [
    "Music Production",
    "Mixing & Mastering",
    "Vocal Recording & Editing",
    "Beat Production",
    "Songwriting",
    "Sound Design",
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black to-black" />

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
              Producer • Singer • Audio Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              JAYASH NAITHANI
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
              Independent artist, producer, singer, and audio engineer with
              over 800K+ combined streams across Spotify, Apple Music, YouTube,
              and streaming platforms worldwide. Creating emotional, cinematic
              electronic music blending Indian influences with modern EDM, Drum
              &amp; Bass, indie, and immersive sound design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://open.spotify.com/track/0Uj12mDTTvkrV9wNiGNKJZ?si=e9ba011029724dd3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Listen to my Latest Release "Kyu Zindagi"
              </a>
              <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition">
                Book Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-purple-500/20 blur-3xl rounded-full" />
            <div className="relative bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <img
                src="/jayash.jpg"
                alt="Jayash Naithani"
                className="rounded-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND WRAPPER: About → Streaming ── */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/jayash-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* All content sits above the overlay */}
        <div className="relative z-10">

          {/* About Section */}
          <section className="py-24 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I have been producing original music since 2021, working across
                  EDM, electronic, hip-hop, lo-fi, cinematic, and experimental
                  genres. I handle the complete workflow — songwriting, production,
                  recording, mixing, mastering, and final release.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My goal is to create music that feels emotional, immersive, and
                  globally competitive while still carrying unique artistic identity
                  and Indian influences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/80 p-6 rounded-3xl border border-white/10">
                  <h3 className="text-4xl font-black mb-2">25+</h3>
                  <p className="text-gray-400">Official Releases</p>
                </div>
                <div className="bg-zinc-900/80 p-6 rounded-3xl border border-white/10">
                  <h3 className="text-4xl font-black mb-2">800K+</h3>
                  <p className="text-gray-400">Combined Platform Streams</p>
                </div>
                <div className="bg-zinc-900/80 p-6 rounded-3xl border border-white/10">
                  <h3 className="text-4xl font-black mb-2">5+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-zinc-900/80 p-6 rounded-3xl border border-white/10">
                  <h3 className="text-4xl font-black mb-2">Global</h3>
                  <p className="text-gray-400">Independent Artist Reach</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-24 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Services</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Professional audio services for artists, creators, brands, and
                  independent musicians.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 mb-6 flex items-center justify-center text-xl">
                      🎵
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      High-quality professional workflow focused on creativity,
                      clarity, and industry-level sound.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Releases */}
          <section className="py-24 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Featured Releases</h2>
                <p className="text-gray-400">A selection of original tracks and productions.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="group bg-zinc-900/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-purple-500/40 hover:-translate-y-2 transition duration-500"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">{track.genre}</p>
                      <h3 className="text-3xl font-black mb-3">{track.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{track.description}</p>
                      <div className="flex gap-3">
                        <a
                          href="https://open.spotify.com/artist/07bB80O9umDkGmq0FIfKCm?si=6tfLtNQmTi2EPMLsfHdTjw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white text-black py-3 rounded-2xl font-semibold hover:opacity-90 transition text-center"
                        >
                          Listen
                        </a>
                        <button className="px-5 border border-white/20 rounded-2xl hover:bg-white/10 transition">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="py-24 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-black mb-6">Let's Create Something Incredible.</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Open for collaborations, freelance audio work, production projects,
                and original music opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:your@email.com"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
                >
                  Contact Me
                </a>
                <a
                  href="https://open.spotify.com/artist/07bB80O9umDkGmq0FIfKCm?si=6tfLtNQmTi2EPMLsfHdTjw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
                >
                  Spotify
                </a>
              </div>
            </div>
          </section>

          {/* Streaming Platforms */}
          <section className="py-24 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl font-black mb-6">Listen Everywhere.</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                Explore Jayash Naithani's music across Spotify, YouTube, and Apple Music worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://open.spotify.com/artist/07bB80O9umDkGmq0FIfKCm?si=6tfLtNQmTi2EPMLsfHdTjw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 hover:border-green-500/40 transition">
                    <div className="text-5xl mb-4">🎧</div>
                    <h3 className="text-xl font-bold mb-2">Spotify</h3>
                    <p className="text-gray-400 text-sm">800K+ combined streams</p>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@jayashnaithanimusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 hover:border-red-500/40 transition">
                    <div className="text-5xl mb-4">▶️</div>
                    <h3 className="text-xl font-bold mb-2">YouTube</h3>
                    <p className="text-gray-400 text-sm">Visual releases &amp; music</p>
                  </div>
                </a>
                <a
                  href="https://music.apple.com/us/artist/jayash-naithani/1631734935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 hover:border-pink-500/40 transition">
                    <div className="text-5xl mb-4">🎵</div>
                    <h3 className="text-xl font-bold mb-2">Apple Music</h3>
                    <p className="text-gray-400 text-sm">Official releases</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

        </div> {/* end relative z-10 */}
      </div> {/* end background wrapper */}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">© 2026 Jayash. All rights reserved.</p>
          <div className="flex gap-6 text-gray-400">
            <a href="https://www.instagram.com/prodbyjayash/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="https://open.spotify.com/artist/07bB80O9umDkGmq0FIfKCm?si=6tfLtNQmTi2EPMLsfHdTjw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Spotify</a>
            <a href="https://www.youtube.com/@jayashnaithanimusic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a>
            <a href="https://music.apple.com/us/artist/jayash-naithani/1631734935" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Apple Music</a>
          </div>
        </div>
      </footer>

    </div>
  );
}