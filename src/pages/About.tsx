import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, ChevronRight } from 'lucide-react';
import TeamCard from '../components/TeamCard';

const About = () => {
  const timeline = [
    {
      phase: "Discover",
      description: "We analyze your requirements and research the market to understand your needs"
    },
    {
      phase: "Design",
      description: "Our team creates wireframes and prototypes to visualize your solution"
    },
    {
      phase: "Develop",
      description: "We build your solution using agile methodology with regular updates"
    },
    {
      phase: "Deliver",
      description: "We deploy, test, and provide ongoing support for your finished product"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Lead Developer",
      bio: "Full-stack expert with 10+ years in enterprise software development",
      image: "https://picsum.photos/300/400?random=20"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Mobile Architect",
      bio: "Mobile development specialist with expertise in React Native and Flutter",
      image: "https://picsum.photos/300/400?random=21"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead UI/UX Designer",
      bio: "Creative designer focused on user-centered design and brand identity",
      image: "https://picsum.photos/300/400?random=22"
    },
    {
      name: "Emily Davis",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure expert specializing in AWS and scalable deployments",
      image: "https://picsum.photos/300/400?random=23"
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      bio: "API and database specialist with expertise in Node.js and Python",
      image: "https://picsum.photos/300/400?random=24"
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      bio: "Agile methodology expert ensuring smooth project delivery and client communication",
      image: "https://picsum.photos/300/400?random=25"
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
              About NextEra Tech Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-cyan-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-cyan-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses of all sizes by delivering innovative, scalable, and 
                user-friendly digital solutions that drive growth, efficiency, and success. 
                We believe in the power of technology to transform ideas into reality and 
                create meaningful impact in the digital world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the leading digital solutions partner, recognized for our technical 
                excellence, innovation, and commitment to client success. We envision a future 
                where every business can harness the full potential of technology to achieve 
                their goals and make a positive impact in their industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  NextEra Tech Solutions was founded in 2018 with a simple yet ambitious goal: 
                  to bridge the gap between innovative technology and business success. What started 
                  as a small team of passionate developers has grown into a full-service digital 
                  solutions company.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, SMEs, and 
                  enterprise clients across various industries. From e-commerce platforms to 
                  healthcare applications, from fintech solutions to educational tools, we've 
                  helped businesses transform their digital presence.
                </p>
                <p>
                  Today, we're proud to have delivered over 200+ successful projects, maintaining 
                  a 98% client satisfaction rate. Our commitment to quality, innovation, and 
                  client success continues to drive us forward as we embrace new technologies 
                  and tackle exciting challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://picsum.photos/600/400?random=26"
                alt="Our Journey"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in technology, 
              design, and business strategy to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4 mx-auto">
                    <span className="text-cyan-600 font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.phase}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-6 w-6 text-cyan-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're Ready to Bring Your Idea to Life
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your vision into a successful digital solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;