import React from 'react';
import { Globe, Smartphone, Code } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedHero from '../components/AnimatedHero';
import SplitSection from '../components/SplitSection';
import TechnologyMarquee from '../components/TechnologyMarquee';
import ProcessTimeline from '../components/ProcessTimeline';
import FloatingTestimonials from '../components/FloatingTestimonials';

const Home = () => {
  return (
    <>
      <SEOHead
        title="Premium Web, Mobile & Software Development Services"
        description="NextEra Tech Solutions delivers cutting-edge web development, mobile app development, and custom software solutions. Transform your business with our expert development team and innovative technology solutions."
        keywords="web development, mobile app development, custom software, React development, Flutter apps, enterprise software, digital transformation, software consulting"
        canonical="/"
      />
      
      <AnimatedHero />
      
      <SplitSection
        title="Web Development Excellence"
        subtitle="Modern Web Solutions"
        description="We craft responsive, high-performance websites and web applications using cutting-edge technologies like React, Next.js, and modern JavaScript frameworks. Our web solutions are built for scalability, speed, and exceptional user experiences that drive business growth."
        features={[
          "Responsive design that works on all devices",
          "SEO-optimized for maximum visibility",
          "Lightning-fast performance and loading speeds",
          "Scalable architecture for future growth"
        ]}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
        imageAlt="Modern web development workspace with multiple screens showing responsive design"
        icon={Globe}
        backgroundColor="bg-white"
      />
      
      <SplitSection
        title="Mobile App Innovation"
        subtitle="Cross-Platform Excellence"
        description="Transform your business with powerful mobile applications for iOS and Android. We specialize in React Native and Flutter development, delivering native performance with cross-platform efficiency. Our apps are designed to engage users and drive business results."
        features={[
          "Native performance on iOS and Android",
          "Cross-platform development for cost efficiency",
          "Intuitive user interfaces and smooth animations",
          "Seamless integration with backend systems"
        ]}
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        imageAlt="Mobile app development process showing multiple devices and design mockups"
        icon={Smartphone}
        reverse={true}
        backgroundColor="bg-gray-50"
      />
      
      <SplitSection
        title="Custom Software Solutions"
        subtitle="Enterprise-Grade Development"
        description="Build scalable, secure, and efficient custom software solutions tailored to your unique business requirements. From enterprise applications to specialized tools, we deliver robust software that streamlines operations and drives productivity."
        features={[
          "Scalable architecture for enterprise needs",
          "Advanced security and data protection",
          "Integration with existing business systems",
          "Ongoing support and maintenance"
        ]}
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        imageAlt="Custom software development environment with code editors and system architecture diagrams"
        icon={Code}
        backgroundColor="bg-white"
      />
      
      <TechnologyMarquee />
      <ProcessTimeline />
      <FloatingTestimonials />
    </>
  );
};

export default Home;