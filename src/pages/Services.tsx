import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Database, 
  Cloud,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "We create stunning, responsive websites that not only look great but also perform exceptionally well. Our websites are built with modern technologies like React, Next.js, and optimized for search engines. Whether you need a simple landing page, an e-commerce platform, or a complex web application, we deliver solutions that drive results and provide exceptional user experiences across all devices.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading Speed", "CMS Integration", "E-commerce Ready", "Analytics Setup"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Transform your business with powerful mobile applications for iOS and Android. We specialize in both native and cross-platform development using React Native and Flutter. Our apps are designed to provide seamless user experiences, integrate with existing systems, and scale with your business growth. From concept to app store deployment, we handle the entire development lifecycle.",
      features: ["Cross-platform Apps", "Native Performance", "Offline Functionality", "Push Notifications", "App Store Optimization", "Backend Integration"]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Every business has unique challenges that require tailored solutions. Our custom software development services address your specific needs with scalable, secure, and efficient applications. We build enterprise-grade software, automation tools, and business management systems that streamline operations, improve productivity, and provide competitive advantages in your industry.",
      features: ["Enterprise Solutions", "Business Automation", "Data Management", "System Integration", "Scalable Architecture", "Security Focused"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Great design is the foundation of successful digital products. Our UI/UX design services focus on creating intuitive, engaging, and accessible interfaces that users love. We conduct thorough user research, create detailed wireframes and prototypes, and design beautiful interfaces that not only look amazing but also provide exceptional usability and conversion rates.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing", "Brand Integration"]
    },
    {
      icon: Database,
      title: "API & Backend Development",
      description: "Power your applications with robust, scalable backend systems and APIs. We design and develop RESTful and GraphQL APIs that ensure seamless data flow between your frontend applications and databases. Our backend solutions are built for performance, security, and scalability, with comprehensive documentation and monitoring capabilities.",
      features: ["RESTful APIs", "GraphQL Development", "Database Design", "Authentication Systems", "Real-time Features", "API Documentation"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Setup",
      description: "Modernize your infrastructure with cloud computing and DevOps practices. We help you migrate to the cloud, set up continuous integration/deployment pipelines, and implement monitoring and scaling solutions. Our expertise covers AWS, Google Cloud, and Azure, ensuring your applications are secure, reliable, and can handle growth efficiently.",
      features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring Setup", "Security Implementation", "Cost Optimization"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What We Offer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth 
              in the digital landscape. From web development to cloud infrastructure, 
              we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-8 py-4">
                  <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that perfectly fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;