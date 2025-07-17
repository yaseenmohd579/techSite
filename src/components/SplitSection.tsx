import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SplitSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  reverse?: boolean;
  backgroundColor?: string;
  ctaText?: string;
  ctaAction?: () => void;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  image,
  imageAlt,
  icon: Icon,
  reverse = false,
  backgroundColor = 'bg-white',
  ctaText,
  ctaAction
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={`py-20 lg:py-32 ${backgroundColor} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute ${reverse ? 'right-0' : 'left-0'} top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gradient-accent rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}
        >
          {/* Content */}
          <motion.div
            variants={itemVariants}
            className={`${reverse ? 'lg:col-start-2' : ''} space-y-6`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-xl">
                <Icon className="h-6 w-6 text-white" />
              </div>
              {subtitle && (
                <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                  {subtitle}
                </span>
              )}
            </div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold font-display text-gray-900 leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {description}
            </motion.p>

            {features && (
              <motion.ul
                variants={itemVariants}
                className="space-y-3"
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-accent rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {ctaText && ctaAction && (
              <motion.button
                variants={itemVariants}
                onClick={ctaAction}
                className="inline-flex items-center px-6 py-3 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {ctaText}
              </motion.button>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className={`${reverse ? 'lg:col-start-1' : ''} relative`}
          >
            <div className="relative">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-200 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SplitSection;