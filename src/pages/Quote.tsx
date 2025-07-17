import React from 'react';
import SEOHead from '../components/SEOHead';
import MultiStepQuoteForm from '../components/MultiStepQuoteForm';

const Quote = () => {
  return (
    <>
      <SEOHead
        title="Get a Custom Quote for Your Development Project"
        description="Request a personalized quote for your web development, mobile app, or custom software project. Get detailed pricing and timeline estimates from NextEra Tech Solutions within 24 hours."
        keywords="development quote, project estimate, web development pricing, mobile app cost, custom software quote, development consultation"
        canonical="/quote"
      />
      
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your project vision and we'll provide you with a detailed, 
              personalized estimate tailored to your specific needs and requirements.
            </p>
          </div>
          
          <MultiStepQuoteForm />
        </div>
      </div>
    </>
  );
};

export default Quote;