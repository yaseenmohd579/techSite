import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const ProcessTimeline = () => {
  const processes = [
    {
      icon: Search,
      title: 'Discovery & Research',
      description: 'We dive deep into understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
      duration: '1-2 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Our design team creates intuitive user experiences and stunning visual interfaces, with interactive prototypes for validation.',
      duration: '2-3 weeks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'Using agile methodology, we build your solution with clean, scalable code while conducting rigorous testing throughout the process.',
      duration: '4-8 weeks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your solution with comprehensive monitoring and provide ongoing support to ensure optimal performance and growth.',
      duration: 'Ongoing',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>
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
            Our Proven Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to final deployment, we follow a structured approach 
            that ensures quality, transparency, and successful project delivery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-200 via-purple-200 via-green-200 to-orange-200"></div>

          <div className="space-y-16 lg:space-y-24">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4 lg:hidden">
                      <div className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-xl flex items-center justify-center mr-4`}>
                        <process.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>

                    <div className="hidden lg:block mb-4">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">
                      {process.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {process.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${process.color} text-white text-sm font-medium rounded-full`}>
                        Duration: {process.duration}
                      </div>
                      <div className="text-sm text-gray-500">
                        {index < processes.length - 1 ? 'Next →' : 'Complete ✓'}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your project with our proven process?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;