import React, { useState } from 'react';
import { Menu, X, Leaf, Sprout, BarChart3, Users, Mail, Phone, MapPin, ChevronDown, ChevronUp, Send, Instagram, Facebook, Twitter, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import logo from './logo.jpg';

// --- CONFIGURATION ---

// 1. CHANGE THIS to your real Gmail address to receive messages
const CONTACT_EMAIL = "vinushkodange5@gmail.com"; 

// 2. DEMO MODE
// Set to 'false' to enable real email sending.
const DEMO_MODE = false; 

// --- SUB-COMPONENTS ---

const Navbar = ({ navigate, currentPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigate('home')}
        >
          <img 
            src={logo} 
            alt="Mrittika Logo" 
            className="h-10 w-auto object-contain rounded-md" 
          />
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            Mrittika<span className="text-green-700">AgroTech</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Gallery', 'FAQ', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigate(item.toLowerCase())}
              className={`text-sm font-medium transition-colors hover:text-green-700 ${
                currentPage === item.toLowerCase() ? 'text-green-700 font-semibold' : 'text-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>

    {mobileMenuOpen && (
      <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
        <div className="flex flex-col p-4 gap-4">
          {['Home', 'About', 'Gallery', 'FAQ', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigate(item.toLowerCase())}
              className={`text-left text-lg font-medium py-2 px-2 rounded-md ${
                currentPage === item.toLowerCase() ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    )}
  </header>
);

const Footer = ({ navigate }) => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4 text-white">
            <img 
              src={logo} 
              alt="Mrittika Logo" 
              className="h-10 w-auto object-contain rounded-md" 
            />
            <span className="text-xl font-bold">MrittikaAgroTech</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Innovating agriculture with smart technology. Data-driven soil and crop solutions for a sustainable future.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigate('about')} className="hover:text-green-400 transition">About Us</button></li>
            <li><button onClick={() => navigate('services')} className="hover:text-green-400 transition">Services</button></li>
            <li><button onClick={() => navigate('gallery')} className="hover:text-green-400 transition">Gallery</button></li>
            <li><button onClick={() => navigate('contact')} className="hover:text-green-400 transition">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition text-white">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>© 2026 MrittikaAgroTech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    <section className="relative bg-green-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            Smart Agriculture Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Innovating Agriculture with <span className="text-green-700">Smart Technology</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            We provide data-driven soil and crop solutions to maximize your yield while ensuring sustainability for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('contact')}
              className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition shadow-lg shadow-green-700/20"
            >
              Get Started
            </button>
            <button 
              onClick={() => navigate('about')}
              className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100 opacity-20 -skew-x-12 hidden lg:block"></div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-gray-600">Comprehensive technology-driven solutions tailored for modern farming needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Soil Health Monitoring", 
              desc: "Real-time analysis of soil parameters including pH, moisture, and nutrients to optimize crop planning.",
              icon: <Sprout className="text-green-600" size={32} />
            },
            { 
              title: "Crop Advisory Systems", 
              desc: "Intelligent, data-backed guidance helps farmers make informed decisions throughout the crop cycle.",
              icon: <BarChart3 className="text-green-600" size={32} />
            },
            { 
              title: "Smart Recommendations", 
              desc: "AI-driven fertilizer and irrigation recommendations to reduce waste and increase efficiency.",
              icon: <Leaf className="text-green-600" size={32} />
            }
          ].map((service, idx) => (
            <div key={idx} className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition duration-300 border border-transparent hover:border-green-100 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                {React.cloneElement(service.icon, { className: "group-hover:text-white transition-colors text-green-600" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
          Join the revolution of smart agriculture. Contact us today to learn how our technology can work for you.
        </p>
        <button 
          onClick={() => navigate('contact')}
          className="px-8 py-4 bg-white text-green-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
        >
          Contact Us Now
        </button>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="animate-in fade-in duration-500 py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About MrittikaAgroTech</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          MrittikaAgroTech focuses on smart agricultural technologies that improve soil health, crop yield, and sustainable farming practices. We bridge the gap between traditional farming and modern technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-green-50 p-10 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">V</span>
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg">
            To enable sustainable agriculture through intelligent, data-driven solutions that accessible to every farmer.
          </p>
        </div>
        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm">M</span>
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            To empower farmers and agri-businesses with technology that enhances
            productivity while protecting the environment.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                <Users size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Team Member {i}</h3>
              <p className="text-green-700 text-sm font-medium mb-3">Agri-Tech Specialist</p>
              <p className="text-gray-500 text-sm">Passionate about driving innovation in the agricultural sector.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const GalleryPage = () => (
  <div className="animate-in fade-in duration-500 py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
        <p className="text-gray-600">Snapshots of our research, fieldwork, and technology in action.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Field Testing", desc: "Analyzing soil samples in Karnataka" },
          { title: "Soil Analysis", desc: "Lab testing for micronutrients" },
          { title: "Drone Survey", desc: "Aerial monitoring of crop health" },
          { title: "Farmer Workshop", desc: "Educating local farmers on new tech" },
          { title: "Smart Sensors", desc: "IoT devices deployed in the field" },
          { title: "Harvest Day", desc: "Results of data-driven farming" }
        ].map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-video cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 group-hover:scale-105 transition duration-500">
              <span className="flex flex-col items-center gap-2">
                  <Leaf size={48} className="opacity-20" />
                  <span className="text-sm font-medium opacity-50">Image Placeholder</span>
              </span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "What does MrittikaAgroTech do?", a: "We develop smart agricultural solutions focused on soil and crop health using IoT and AI technologies." },
    { q: "Who can use your services?", a: "Farmers, researchers, agricultural cooperatives, and agri-businesses can all benefit from our data-driven solutions." },
    { q: "Do you provide on-field support?", a: "Yes, we provide on-field installation support and training for our devices, depending on the project scope and location." },
    { q: "Where are you located?", a: "We are currently based in Karnataka, India, but we serve clients across the region." },
  ];

  return (
    <div className="animate-in fade-in duration-500 py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ContactPage now receives props instead of defining them inside
const ContactPage = ({ formData, handleInputChange, handleSendMessage, isSubmitting, submitStatus }) => (
  <div className="animate-in fade-in duration-500 py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-gray-600 text-lg">Have a project in mind or want to learn more about our technology? We'd love to hear from you.</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">{CONTACT_EMAIL}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 9900425226</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Karnataka, India</p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2036.4484467880475!2d75.25170321795565!3d12.980396540930593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzQ5LjUiTiA3NcKwMTUnMTAuNiJF!5e0!3m2!1sen!2sin!4v1767842580891!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Map"
              ></iframe>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form className="space-y-4" onSubmit={handleSendMessage}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" 
                placeholder="John Doe" 
                required 
                disabled={isSubmitting}
                autoFocus
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" 
                placeholder="john@example.com" 
                required 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" 
                placeholder="How can we help you?" 
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle size={18} />
                <span>Message sent successfully! Check your inbox.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-700 bg-red-50 p-3 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                <AlertCircle size={18} />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Short delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    if (DEMO_MODE) {
       // --- DEMO LOGIC ---
       setSubmitStatus('success');
       setFormData({ fullName: '', email: '', message: '' }); 
    } else {
      // --- REAL DIRECT EMAIL LOGIC ---
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            message: formData.message,
            _subject: `New Inquiry from ${formData.fullName} (Mrittika App)`
          })
        });

        if (response.ok) {
           setSubmitStatus('success');
           setFormData({ fullName: '', email: '', message: '' }); 
        } else {
           console.error("FormSubmit Error:", response);
           setSubmitStatus('error');
        }
      } catch (error) {
        console.error("Network Error:", error);
        setSubmitStatus('error');
      }
    }
    
    setIsSubmitting(false);
    // Hide status message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
      <Navbar 
        navigate={navigate} 
        currentPage={currentPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'contact' && (
          <ContactPage 
            formData={formData}
            handleInputChange={handleInputChange}
            handleSendMessage={handleSendMessage}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
          />
        )}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;