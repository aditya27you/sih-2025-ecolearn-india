import React from 'react';
import { Button } from '@/components/atoms/Button';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-base-100 to-primary/5">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <span className="material-symbols-rounded text-sm">eco</span>
              <span>Green Future for India</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight mb-6">
              Gamifying <span className="text-primary">Sustainability</span> for Students
            </h1>
            <p className="text-lg md:text-xl font-sans text-base-content/70 mb-8 max-w-xl leading-relaxed">
              Join thousands of students across India making a real environmental impact. 
              Earn points, complete challenges, and climb the leaderboard while saving the planet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="px-8 h-14 text-lg shadow-lg shadow-primary/30"
                onClick={() => navigate('/login')}
              >
                Get Started
                <span className="material-symbols-rounded">arrow_forward</span>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="h-14 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-base-100 bg-neutral flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-sans text-base-content/60">
                <span className="font-bold text-base-content">500+</span> schools already onboarded
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <img 
                src="/assets/images/eco-hero.png" 
                alt="Environmental Impact" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=1000';
                }}
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-200 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded text-3xl">nature_people</span>
                </div>
                <div>
                  <p className="text-2xl font-black text-base-content">12k+</p>
                  <p className="text-xs text-base-content/60 font-bold uppercase tracking-wider">Trees Planted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-black mb-4">How It Works</h2>
            <p className="text-lg text-base-content/60 font-sans">
              Three simple steps to start your sustainability journey and earn rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'library_books', 
                title: 'Learn', 
                desc: 'Interactive modules on climate change, waste management, and renewable energy.',
                color: 'bg-blue-500/10 text-blue-600'
              },
              { 
                icon: 'task_alt', 
                title: 'Act', 
                desc: 'Complete real-world challenges like plastic-free days or tree plantation drives.',
                color: 'bg-primary/10 text-primary'
              },
              { 
                icon: 'workspace_premium', 
                title: 'Earn', 
                desc: 'Collect Eco-Points, earn badges, and compete with schools across India.',
                color: 'bg-accent/10 text-accent'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-base-200/50 border border-base-300 hover:border-primary/30 transition-all"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="material-symbols-rounded text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-heading font-black mb-3">{feature.title}</h3>
                <p className="text-base-content/70 font-sans leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <span className="material-symbols-rounded text-[150px]">eco</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary-content mb-6 relative z-10">
              Ready to make an impact?
            </h2>
            <p className="text-xl text-primary-content/80 mb-10 max-w-2xl mx-auto relative z-10">
              Join PrakritiPath today and be part of the change you want to see in the world.
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="btn btn-lg bg-white text-primary border-none hover:bg-white/90 rounded-2xl px-12 h-16 text-lg font-bold shadow-xl relative z-10"
            >
              Join the Movement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
