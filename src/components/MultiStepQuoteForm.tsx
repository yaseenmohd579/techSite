import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';

interface FormData {
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  description: string;
}

const MultiStepQuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    description: ''
  });

  const services = [
    { id: 'web', name: 'Web Development', icon: '🌐', description: 'Custom websites & web applications' },
    { id: 'mobile', name: 'Mobile App Development', icon: '📱', description: 'iOS & Android applications' },
    { id: 'software', name: 'Custom Software', icon: '⚙️', description: 'Enterprise software solutions' },
    { id: 'uiux', name: 'UI/UX Design', icon: '🎨', description: 'User interface & experience design' },
    { id: 'api', name: 'API Development', icon: '🔗', description: 'Backend APIs & integrations' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️', description: 'Cloud infrastructure & deployment' }
  ];

  const budgetOptions = [
    { value: 'under-25k', label: 'Under $25,000', description: 'Small to medium projects' },
    { value: '25k-75k', label: '$25,000 - $75,000', description: 'Medium to large projects' },
    { value: '75k-150k', label: '$75,000 - $150,000', description: 'Large enterprise projects' },
    { value: 'over-150k', label: 'Over $150,000', description: 'Complex enterprise solutions' }
  ];

  const timelineOptions = [
    { value: '1-2-months', label: '1-2 Months', description: 'Quick turnaround projects' },
    { value: '3-4-months', label: '3-4 Months', description: 'Standard development timeline' },
    { value: '5-6-months', label: '5-6 Months', description: 'Complex feature-rich projects' },
    { value: 'over-6-months', label: '6+ Months', description: 'Large-scale enterprise solutions' }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.services.length > 0;
      case 2:
        return formData.budget && formData.timeline;
      case 3:
        return formData.name && formData.email && formData.description;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="h-12 w-12 text-green-600" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h3>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your interest in NextEra Tech Solutions. We'll review your requirements 
            and get back to you within 24 hours with a detailed proposal.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData({
                services: [],
                budget: '',
                timeline: '',
                name: '',
                email: '',
                company: '',
                description: ''
              });
            }}
            className="inline-flex items-center px-6 py-3 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Submit Another Request
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step <= currentStep
                  ? 'bg-gradient-accent text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step < currentStep ? <Check className="h-5 w-5" /> : step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-accent h-2 rounded-full"
            initial={{ width: '33%' }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Services */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">
                What services do you need?
              </h3>
              <p className="text-lg text-gray-600">
                Select all services that apply to your project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceToggle(service.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                    formData.services.includes(service.id)
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    {formData.services.includes(service.id) && (
                      <Check className="h-5 w-5 text-cyan-500 ml-auto" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Budget & Timeline */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">
                Budget & Timeline
              </h3>
              <p className="text-lg text-gray-600">
                Help us understand your project scope and timeline
              </p>
            </div>

            <div className="space-y-8">
              {/* Budget */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Expected Budget</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, budget: option.value }))}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        formData.budget === option.value
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Timeline</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {timelineOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeline: option.value }))}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        formData.timeline === option.value
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Contact Details */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">
                Tell us about your project
              </h3>
              <p className="text-lg text-gray-600">
                Provide your contact details and project description
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  required
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                  placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Previous
        </button>

        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
              isStepValid()
                ? 'bg-gradient-accent text-white hover:shadow-lg hover:scale-105'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Next
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isStepValid()}
            className={`inline-flex items-center px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
              isStepValid()
                ? 'bg-gradient-accent text-white hover:shadow-lg hover:scale-105'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get My Quote
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepQuoteForm;