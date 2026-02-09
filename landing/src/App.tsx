import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Sticky header CTA */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span className={`font-bold text-xl transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-700'}`}>
            YouNote
          </span>
          <a
            href="#cta"
            className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ${
              scrolled
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200'
                : 'bg-indigo-600/10 text-indigo-700 hover:bg-indigo-600/20'
            }`}
          >
            Try it free
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-40 pb-24 max-w-3xl mx-auto text-center">
        <p className="inline-block text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-8 tracking-wide">
          For devs who learn from YouTube
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
          You love learning<br className="hidden sm:block" /> from YouTube.
          <br />
          <span className="text-indigo-600">You just hate how little sticks.</span>
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
          Turn passive watching into active learning — so every tutorial actually pays off.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
          >
            Try it free
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <span className="text-sm text-gray-400">Free forever for your first 10 videos</span>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center mb-4">Sound familiar?</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center leading-tight">
            You watch. You follow along.<br />Then you close the tab and... nothing.
          </h2>
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <blockquote className="border-l-4 border-indigo-300 pl-6 text-gray-700 italic text-xl">
              "You feel confident while watching... until you try to build something on your own."
            </blockquote>
            <p>
              A 45-minute tutorial on a new framework. You nod at all the right moments. But an hour later? You can't reconstruct the logic. The code won't come. The confidence was an illusion.
            </p>
            <p>
              YouTube is built for engagement, not learning. Recommendations pull you sideways. Comments distract. Your notes — if you took them — live in a different app, disconnected from the video.
            </p>
            <p className="text-gray-900 font-medium text-xl border-b-2 border-indigo-100 pb-8">
              The problem isn't you. It's the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Solution — The Focus Shift */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">The fix</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">A workspace built for learning, not browsing</h2>
          <p className="text-lg text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed">
            YouNote gives you a clean, distraction-free player with your notes right alongside the video. No recommendations. No sidebar. No comments. Just the tutorial and your thoughts — timestamped to the exact moment.
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-16 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-sm text-gray-400">Product screenshot / demo placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — Path to Aha */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest text-center mb-4">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center leading-tight">From video to insight in 4 steps</h2>
          <p className="text-lg text-gray-500 mb-16 text-center max-w-2xl mx-auto leading-relaxed">
            Everything in YouNote exists to deliver one moment — the shift from passive watching to active learning.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-md">1</div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Drop in a YouTube link</h3>
              <p className="text-gray-500 leading-relaxed">
                Paste any tutorial URL. No setup, no extensions, no friction. Just the video you want to learn from.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-md">2</div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Watch without distractions</h3>
              <p className="text-gray-500 leading-relaxed">
                No recommendations. No comments. No sidebar. A clean player that keeps your focus on the content.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-md">3</div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Take notes as you watch</h3>
              <p className="text-gray-500 leading-relaxed">
                Your note panel sits right alongside the video. Capture insights without leaving the tutorial. No app-switching.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-md">4</div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Every note is timestamped</h3>
              <p className="text-gray-500 leading-relaxed">
                Each note auto-links to the exact moment in the video. Click any note later and you're right back there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Aha — Focus Shift */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-4">The moment it clicks</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            "This is how I should've been<br />learning all along."
          </h2>
          <p className="text-lg text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed">
            No distractions. Your notes right there. Timestamped. By the end of your first video, you'll feel the difference between watching and actually learning.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-100">
              <div className="text-4xl font-extrabold text-indigo-600 mb-3">3x</div>
              <p className="text-gray-700 font-medium mb-1">Better retention</p>
              <p className="text-gray-500 text-sm leading-relaxed">Active note-taking increases retention by 300% compared to passive watching.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-100">
              <div className="text-4xl font-extrabold text-indigo-600 mb-3">0</div>
              <p className="text-gray-700 font-medium mb-1">Distractions</p>
              <p className="text-gray-500 text-sm leading-relaxed">No recommendations, no comments, no sidebar. Just the video and your learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Developers are making the switch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Senior Developer', years: '8 years experience' },
              { role: 'Tech Lead', years: '12 years experience' },
              { role: 'Staff Engineer', years: '15 years experience' },
            ].map((person, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 italic mb-4 leading-relaxed">"Placeholder — replace with real user feedback after validation."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{person.role}</p>
                    <p className="text-xs text-gray-400">{person.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
            You love learning from YouTube.<br />
            It's time it loved you back.
          </h2>
          <p className="text-lg text-indigo-200 mb-12 max-w-xl mx-auto leading-relaxed">
            Turn passive watching into active learning — starting with your next video.
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-white text-indigo-700 text-lg font-bold px-10 py-5 rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Try it free
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-5 text-sm text-indigo-300">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-gray-400 border-t border-gray-100">
        <p>YouNote &mdash; Turn passive watching into active learning</p>
      </footer>
    </div>
  )
}

export default App
