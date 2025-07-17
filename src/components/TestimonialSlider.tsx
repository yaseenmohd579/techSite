import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://picsum.photos/100/100?random=1",
    content: "NextEra Tech delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is unmatched. The project was completed on time and within budget, which is rare in this industry."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Digital Ventures",
    image: "https://picsum.photos/100/100?random=2",
    content: "Working with NextEra Tech was a game-changer for our business. They built a robust web platform that scales beautifully with our growing user base. Their agile approach and constant communication made the entire process smooth and enjoyable."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CTO, Innovation Labs",
    image: "https://picsum.photos/100/100?random=3",
    content: "The custom software solution developed by NextEra Tech revolutionized our workflow. Their team understood our complex requirements and delivered a solution that perfectly fits our needs. Outstanding technical skills and professional service."
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 text-lg mb-6 italic">
            "{testimonials[currentIndex].content}"
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;