"use client";
import { useState } from 'react';
import { MessageCircle, MapPin, Phone, Facebook, Twitter, Linkedin, Youtube, Dribbble } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: {
      websiteDesign: false,
      uxDesign: false,
      userResearch: false,
      contentCreation: false,
      strategy: false,
      other: false
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (service) => {
    setFormData(prev => ({
      ...prev,
      services: { ...prev.services, [service]: !prev.services[service] }
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent! We\'ll get back to you soon.');
  };

  return (
    <div className="flex justify-center items-center p-4 md:p-8">
      <div className="max-w-5xl w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden border-2 border-black">
        <div className="grid md:grid-cols-5 min-h-[420px]">
          {/* Left Sidebar */}
          <div className="md:col-span-2 bg-white p-6 md:p-8 border-r-2 border-black">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-black rounded" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px)'
                }}></div>
                <h1 className="text-xl font-bold">StudyHour</h1>
              </div>
            </div>

            {/* Chat to us */}
            <div className="mb-10">
              <div className="flex items-start gap-3 mb-3">
                <MessageCircle className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Chat to us</h3>
                  <p className="text-sm text-gray-600 mb-2">Our friendly team is here to help.</p>
                  <a href="mailto:hi@studyhour.com" className="text-sm font-medium hover:underline">
                    hi@studyhour.com
                  </a>
                </div>
              </div>
            </div>

            {/* Visit us */}
            <div className="mb-10">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit us</h3>
                  <p className="text-sm text-gray-600 mb-2">Come say hello at our office HQ.</p>
                  <p className="text-sm font-medium">100 Smith Street</p>
                  <p className="text-sm font-medium">Bhubaneswar, Odisha</p>
                </div>
              </div>
            </div>

            {/* Call us */}
            <div className="mb-12">
              <div className="flex items-start gap-3 mb-3">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Call us</h3>
                  <p className="text-sm text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+915550000000" className="text-sm font-medium hover:underline">
                    +91 (555) 000-0000
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Dribbble className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="md:col-span-3 bg-lime-300 p-6 md:p-8">
            <div className="max-w-lg">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                Got ideas? We've got the skills. Let's team up.
              </h2>
              <p className="text-sm md:text-base mb-6">
                Tell us more about yourself and what you've got in mind.
              </p>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b-2 border-black pb-2 text-base placeholder-gray-700 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-transparent border-b-2 border-black pb-2 text-base placeholder-gray-700 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about the project..."
                    rows="2"
                    className="w-full bg-transparent border-b-2 border-black pb-2 text-base placeholder-gray-700 focus:outline-none focus:border-black resize-none transition-colors"
                  />
                </div>

                {/* Services Checkboxes */}
                <div>
                  <p className="font-bold mb-2">How can we help?</p>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-5 h-5 border-2 border-black rounded flex items-center justify-center ${formData.services.websiteDesign ? 'bg-black' : 'bg-transparent'}`}>
                        {formData.services.websiteDesign && (
                          <svg className="w-3 h-3 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.services.websiteDesign}
                        onChange={() => handleCheckbox('websiteDesign')}
                        className="sr-only"
                      />
                      <span className="text-sm">Website design</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-5 h-5 border-2 border-black rounded flex items-center justify-center ${formData.services.contentCreation ? 'bg-black' : 'bg-transparent'}`}>
                        {formData.services.contentCreation && (
                          <svg className="w-3 h-3 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.services.contentCreation}
                        onChange={() => handleCheckbox('contentCreation')}
                        className="sr-only"
                      />
                      <span className="text-sm">Content creation</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-5 h-5 border-2 border-black rounded flex items-center justify-center ${formData.services.uxDesign ? 'bg-black' : 'bg-transparent'}`}>
                        {formData.services.uxDesign && (
                          <svg className="w-3 h-3 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.services.uxDesign}
                        onChange={() => handleCheckbox('uxDesign')}
                        className="sr-only"
                      />
                      <span className="text-sm">UX design</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-5 h-5 border-2 border-black rounded flex items-center justify-center ${formData.services.strategy ? 'bg-black' : 'bg-transparent'}`}>
                        {formData.services.strategy && (
                          <svg className="w-3 h-3 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.services.strategy}
                        onChange={() => handleCheckbox('strategy')}
                        className="sr-only"
                      />
                      <span className="text-sm">Strategy & consulting</span>
                    </label>

                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-lime-300 py-4 rounded-lg font-bold text-base hover:bg-gray-900 transition-colors"
                >
                  Let's get started!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}