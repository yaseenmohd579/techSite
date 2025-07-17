import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      summary: "Explore the latest trends shaping web development, from AI integration to serverless architectures and progressive web apps.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      image: "https://picsum.photos/400/250?random=40"
    },
    {
      title: "Mobile-First Design: Why It Matters More Than Ever",
      summary: "Understanding the importance of mobile-first approach in modern app development and its impact on user experience.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      image: "https://picsum.photos/400/250?random=41"
    },
    {
      title: "Microservices vs Monolithic Architecture: Making the Right Choice",
      summary: "A comprehensive comparison of architectural patterns to help you choose the best approach for your next project.",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      image: "https://picsum.photos/400/250?random=42"
    },
    {
      title: "Implementing DevOps: A Step-by-Step Guide for Startups",
      summary: "Learn how to set up efficient DevOps practices that will streamline your development process and improve deployment reliability.",
      author: "Emily Davis",
      date: "February 28, 2024",
      image: "https://picsum.photos/400/250?random=43"
    },
    {
      title: "Cloud Security Best Practices Every Developer Should Know",
      summary: "Essential security measures and best practices for protecting your applications and data in cloud environments.",
      author: "David Kim",
      date: "February 22, 2024",
      image: "https://picsum.photos/400/250?random=44"
    },
    {
      title: "API Design Best Practices: Building Scalable and Maintainable APIs",
      summary: "Guidelines and strategies for designing APIs that are developer-friendly, scalable, and future-proof.",
      author: "Lisa Thompson",
      date: "February 18, 2024",
      image: "https://picsum.photos/400/250?random=45"
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
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from the world of 
              technology and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl overflow-hidden text-white mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  Featured Post
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-cyan-100 mb-6">
                  {blogPosts[0].summary}
                </p>
                <div className="flex items-center space-x-4 text-cyan-200 mb-6">
                  <span>{blogPosts[0].author}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <button className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                  Read Full Article
                </button>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Recent Posts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Posts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                summary={post.summary}
                author={post.author}
                date={post.date}
                image={post.image}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-12 text-center shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, tutorials, and 
              industry insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expertise 
              and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="bg-cyan-500 text-white hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
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

export default Blog;