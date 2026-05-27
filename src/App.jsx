import { motion } from "framer-motion";
export default function JayashMusicPortfolio() {
  const tracks = [
    {
      title: "Kyu Zindagi",
      genre: "Drum & Bass / I-Pop",
      description:
        "An emotional Drum & Bass release driven by heartbreak lyrics, cinematic melodies, and a high-energy drop featuring vocals by Jayash Naithani and Lavanya.",
      image: "/kyuzindagi.png",
      spotify:
        "https://open.spotify.com/track/0Uj12mDTTvkrV9wNiGNKJZ?si=1a799e9e2d1b4acd",
      youtube:
        "https://youtu.be/UP3iZryzFR8?si=y-5a9EvsMsjeLPMj",
    },
    {
      title: "MITR",
      genre: "Future Bass",
      description:
        "A motivational Future Bass track inspired by Krishna quotes, blending uplifting energy, emotional melodies, and fast-paced electronic production.",
      image: "/mitr.png",
      spotify:
        "https://open.spotify.com/track/49NikEl2WRRvDKYA5ChkrX?si=3ab3694a227a4882",
      youtube:
        "https://youtu.be/nb60a7oIzVs?si=uFdFAPz2bKqjBxKi",
    },
    {
      title: "DARIYA",
      genre: "I-Pop / Acoustic",
      description:
        "A heartfelt acoustic I-Pop track centered around heartbreak emotions, featuring vocals by Jayash and Arnav with expressive electric guitar performances by Ishaan.",
      image: "/dariya.jpeg",
      spotify:
        "https://open.spotify.com/track/5bWxJlomHxai8GJceKg05H?si=fa414df449d54782",
      youtube:
        "https://youtu.be/-xrBnZKPn3U?si=8uJnVtjRH3orAWHp",
    },
    {
      title: "Mine",
      genre: "I-Pop / Hip-Hop",
      description:
        "A romantic I-Pop release combining emotional melodies, electrifying production, vocals by Jayash, and a rap performance by Naxy.",
      image: "/mine.png",
      spotify:
        "https://open.spotify.com/track/0QrjDUgNrjdDi41vQ3kgDL?si=a4afb7515b1146d3",
      youtube:
        "https://youtu.be/GaozdCn5MpU?si=vlBIYxm0185VixNE",
    },
    {
      title: "Tu Na Mila",
      genre: "Emotional Future Bass / I-Pop",
      description:
        "A multilingual emotional Future Bass track exploring heartbreak through Hindi vocals by Jayash and Malayalam vocals by Anagha.",
      image: "/tunamila.png",
      spotify:
        "https://open.spotify.com/track/31MQF4zIsL2ouIGJdL9WUb?si=ae8f768d8b2e4454",
      youtube:
        "https://youtu.be/CD9GhFKmOV0?si=r1JtJzX51Mvq0XM9",
    },
    {
      title: "Mai Na Rha",
      genre: "Emotional Drill",
      description:
        "A dark and emotional Drill track built around heartbreak themes, combining melodic vocals and introspective rap performances by Jayash.",
      image: "/mainarha.png",
      spotify:
        "https://open.spotify.com/track/2RuTXRoluSD0zNTkVB4L0f?si=ad9b5ce8656a4884",
      youtube:
        "https://youtu.be/prq_yWfLBGw?si=WWLFGPR9xS2IAZJG",
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
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* ── INTRO LANDING PAGE ── */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="/intro-bg.png"
          alt="Jayash Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Glow */}
        <div className="absolute inset-0 bg-purple-900/20 blur-3xl" />

        {/* Center Text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[0.15em] text-white">
            JAYASH NAITHANI
          </h1>

          <p className="mt-6 text-gray-300 uppercase tracking-[0.4em] text-sm md:text-base">
            Producer • Artist • Audio Engineer
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </motion.section>

      {/* ── HERO ── */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }} className="relative min-h-screen flex items-center justify-center px-6">
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
                src="/jayash3.jpg"
                alt="Jayash Naithani"
                className="rounded-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── BACKGROUND WRAPPER: About → Streaming ── */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/jayash-bg-2.png')",
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
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} className="py-24 px-6 border-t border-white/10">
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
          </motion.section>

          {/* Services */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} className="py-24 px-6 border-t border-white/10">
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
          </motion.section>

          {/* Featured Releases */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} className="py-24 px-6 border-t border-white/10">
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
                          href={track.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#1DB954] text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition text-center"
                        >
                          Spotify
                        </a>

                        <a
                          href={track.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#FF0000] text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition text-center"
                        >
                          YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} className="py-24 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-black mb-6">Let's Create Something Incredible.</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Open for collaborations, freelance audio work, production projects,
                and original music opportunities.
              </p>
              <form
                action="https://formsubmit.co/jayashnaithaniartist@gmail.com"
                method="POST"
                className="max-w-2xl mx-auto space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-500 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-500 transition"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-500 transition resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.section>

          {/* Streaming Platforms */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} className="py-24 px-6 border-t border-white/10">
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
          </motion.section>

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