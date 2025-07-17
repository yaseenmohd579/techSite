import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const FloatingTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, TechStart Innovations",
      company: "TechStart Innovations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e2b8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "NextEra Tech transformed our vision into a stunning reality. Their attention to detail and technical expertise exceeded our expectations. The mobile app they developed has increased our user engagement by 300%.",
      rating: 5,
      project: "Mobile App Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, Digital Ventures",
      company: "Digital Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Working with NextEra Tech was a game-changer for our business. They delivered a scalable web platform that handles our growing user base flawlessly. Their agile approach kept us informed throughout the entire process.",
      rating: 5,
      project: "Web Platform Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, InnovateLab",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The custom software solution NextEra Tech built for us revolutionized our workflow. Their team understood our complex requirements and delivered exactly what we needed. Outstanding technical skills and professionalism.",
      rating: 5,
      project: "Custom Software Development"
    },
    {
      id: 4,
      name: "David Park",
      role: "Product Manager, CloudSync",
      company: "CloudSync",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "NextEra Tech's expertise in cloud architecture helped us scale our application to serve millions of users. Their DevOps implementation reduced our deployment time by 80%. Highly recommended for enterprise solutions.",
      rating: 5,
      project: "Cloud Infrastructure"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [floatingPositions, setFloatingPositions] = useState<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    // Generate random positions for floating testimonials
    const positions = testimonials.map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setFloatingPositions(positions);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with NextEra Tech Solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
              >
                <div className="flex items-center justify-center mb-8">
                  <Quote className="h-12 w-12 text-cyan-500" />
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-sm text-cyan-600 font-medium">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <span className="inline-flex items-center px-3 py-1 bg-cyan-100 text-cyan-800 text-sm font-medium rounded-full">
                    {testimonials[activeTestimonial].project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating testimonial bubbles */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: index === activeTestimonial ? 0 : 0.7,
                  scale: index === activeTestimonial ? 0 : 1,
                  x: floatingPositions[index]?.x + '%' || '0%',
                  y: floatingPositions[index]?.y + '%' || '0%'
                }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${floatingPositions[index]?.x || 0}%`,
                  top: `${floatingPositions[index]?.y || 0}%`
                }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 max-w-xs cursor-pointer hover:bg-white transition-colors"
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-semibold text-sm text-gray-900">
                        {testimonial.name}
                      </h5>
                      <p className="text-xs text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    "{testimonial.content.substring(0, 80)}..."
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-cyan-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingTestimonials;