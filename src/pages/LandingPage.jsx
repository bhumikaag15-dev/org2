import React from 'react';
import { Shield, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush-100 text-deepPlum text-xs font-semibold tracking-wide">
            <Shield className="w-3.5 h-3.5 text-dustyRose" /> Supporting Healthier Pregnancies • SDG 3
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-deepPlum">
            Care for every moment of <span className="italic text-dustyRose">motherhood</span>.
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 font-light">
            MaatriCare helps mothers stay informed, organized, and connected throughout pregnancy and postpartum care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button 
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-deepPlum text-white font-medium hover:bg-opacity-95 transition shadow-md flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-deepPlum font-medium border border-rose-200 hover:bg-softPeach transition"
            >
              Explore Features
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-md lg:max-w-none">
          <div className="aspect-square rounded-full bg-gradient-to-br from-blush-100 via-softPeach to-warmCream p-8 shadow-inner flex items-center justify-center border border-rose-100/60">
            <div className="w-full h-full rounded-full border-2 border-dashed border-dustyRose/30 flex items-center justify-center p-6 text-center">
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-dustyRose" />
                </div>
                <h3 className="font-serif text-2xl text-deepPlum">Continuous Guidance</h3>
                <p className="text-xs text-stone-500 max-w-xs">Personalized timelines, milestone insights, and care coordination without clinical complexity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white/60 py-16 px-6 border-y border-rose-100/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif text-deepPlum">Because every mother deserves informed, compassionate care.</h2>
            <p className="text-stone-600 text-sm">Organizing essential antenatal and postnatal resources in a safe, easy-to-use digital portal.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Pregnancy Information", desc: "Access trimester-by-trimester education verified for safety and clear guidance." },
              { title: "Care Organization", desc: "Track appointments, diagnostic tests, and daily routines effortlessly." },
              { title: "Postnatal Support", desc: "Resource libraries dedicated to newborn wellness and maternal emotional care." }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-warmCream/50 border border-rose-100/80 space-y-3">
                <div className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center text-deepPlum">
                  <CheckCircle2 className="w-4 h-4 text-dustyRose" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-deepPlum">{feature.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}