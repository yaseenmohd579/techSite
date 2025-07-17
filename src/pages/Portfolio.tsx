import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'App', 'Software'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      fullDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, payment gateway integration, inventory management, and real-time order tracking. The platform includes both customer-facing store and admin dashboard for complete business management.",
      image: "https://picsum.photos/400/300?random=30",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web"
    },
    {
      title: "Mobile Banking App",
      description: "Secure banking application for iOS and Android",
      fullDescription: "A feature-rich mobile banking application developed using React Native, providing users with secure account management, fund transfers, bill payments, and investment tracking. The app includes biometric authentication, push notifications, and offline transaction capabilities.",
      image: "https://picsum.photos/400/300?random=31",
      tags: ["React Native", "Firebase", "Redux", "Biometric"],
      category: "App"
    },
    {
      title: "Healthcare Management System",
      description: "Complete healthcare solution for hospitals",
      fullDescription: "An enterprise healthcare management system that streamlines hospital operations, patient management, appointment scheduling, and medical records. Built with modern web technologies and includes modules for doctors, patients, pharmacy, and administration.",
      image: "https://picsum.photos/400/300?random=32",
      tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      category: "Software"
    },
    {
      title: "Restaurant POS System",
      description: "Point of sale system for restaurants",
      fullDescription: "A comprehensive point-of-sale system designed specifically for restaurants, featuring order management, inventory tracking, staff management, and detailed analytics. The system includes both web and tablet interfaces for seamless operation.",
      image: "https://picsum.photos/400/300?random=33",
      tags: ["React", "Express", "MySQL", "Socket.io"],
      category: "Web"
    },
    {
      title: "Fitness Tracking App",
      description: "Personal fitness and workout tracking application",
      fullDescription: "A comprehensive fitness application that helps users track workouts, monitor progress, and achieve their fitness goals. Features include custom workout plans, nutrition tracking, social sharing, and integration with wearable devices.",
      image: "https://picsum.photos/400/300?random=34",
      tags: ["Flutter", "Dart", "Firebase", "HealthKit"],
      category: "App"
    },
    {
      title: "CRM Software",
      description: "Customer relationship management platform",
      fullDescription: "A powerful CRM system that helps businesses manage customer relationships, track sales pipelines, and automate marketing campaigns. The platform includes lead management, email automation, reporting dashboards, and third-party integrations.",
      image: "https://picsum.photos/400/300?random=35",
      tags: ["Angular", "NestJS", "PostgreSQL", "Redis"],
      category: "Software"
    },
    {
      title: "Educational Platform",
      description: "Online learning management system",
      fullDescription: "An interactive online learning platform that enables educators to create courses, manage students, and track progress. Features include video streaming, interactive quizzes, assignment submission, and real-time collaboration tools.",
      image: "https://picsum.photos/400/300?random=36",
      tags: ["Next.js", "GraphQL", "Prisma", "AWS"],
      category: "Web"
    },
    {
      title: "Task Management App",
      description: "Productivity app for team collaboration",
      fullDescription: "A feature-rich task management application that helps teams collaborate efficiently. Includes project planning, time tracking, file sharing, and real-time communication. Available on both web and mobile platforms.",
      image: "https://picsum.photos/400/300?random=37",
      tags: ["React Native", "Node.js", "WebSocket", "MongoDB"],
      category: "App"
    },
    {
      title: "Inventory Management System",
      description: "Enterprise inventory tracking solution",
      fullDescription: "A robust inventory management system designed for businesses to track stock levels, manage suppliers, and automate reordering. Features barcode scanning, reporting analytics, and integration with accounting systems.",
      image: "https://picsum.photos/400/300?random=38",
      tags: ["Django", "Python", "PostgreSQL", "Celery"],
      category: "Software"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Our Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across web development, 
              mobile applications, and custom software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeFilter}-${index}`}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                category={project.category}
                fullDescription={project.fullDescription}
                index={index}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
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
              Like What You See?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Share your vision and we'll bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;