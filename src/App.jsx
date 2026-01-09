import React, { useState } from 'react';
import { Menu, X, Leaf, Sprout, BarChart3, Users, Mail, Phone, MapPin, ChevronDown, ChevronUp, Send, Instagram, Facebook, Twitter,Linkedin, Loader2, CheckCircle, AlertCircle, Zap, Settings, Cpu, Info, Award, Trophy, Target } from 'lucide-react';
import logo from './logo.jpg';

import heroImage from "./images/Award1.jpeg"; // or your chosen group/machine photo

// --- gallery image imports ---
import g1 from './images/ArecanutImg1.jpeg';
import g2 from './images/ArecanutImg2.jpeg';
import g3 from './images/SprinklerImg.jpeg';
import g4 from './images/Award1.jpeg';
import g5 from './images/Award2.jpeg';
import g6 from './images/Award3.jpeg';



// --- CONFIGURATION ---

// 1. CHANGE THIS to your real Gmail address to receive messages
const CONTACT_EMAIL = "mrittikaagrotech25@gmail.com"; 

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

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {['Home', 'About', 'Products', 'Achievements', 'Gallery', 'FAQ', 'Contact'].map((item) => (
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
      <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg z-50">
        <div className="flex flex-col p-4 gap-4">
          {['Home', 'About', 'Products', 'Achievements', 'Gallery', 'FAQ', 'Contact'].map((item) => (
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
        
        {/* Company Identity */}
        <div>
          <div className="flex items-center gap-3 mb-4 text-white">
            <img 
              src={logo} 
              alt="Mrittika Agro Tech LLP Logo" 
              className="h-10 w-auto object-contain rounded-md" 
            />
            <span className="text-xl font-bold">
              Mrittika Agro Tech LLP
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            An innovation-led engineering startup developing practical
            agro-processing and food automation machines for rural and
            MSME-driven applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => navigate('about')} className="hover:text-green-400 transition">About</button></li>
            <li><button onClick={() => navigate('products')} className="hover:text-green-400 transition">Products</button></li>
            <li><button onClick={() => navigate('achievements')} className="hover:text-green-400 transition">Achievements</button></li>
            <li><button onClick={() => navigate('faq')} className="hover:text-green-400 transition">FAQ</button></li>
            <li><button onClick={() => navigate('contact')} className="hover:text-green-400 transition">Contact</button></li>
          </ul>
        </div>

        {/* Social Presence (placeholders for now) */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition text-white">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition text-white">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition text-white">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Legal */}
      <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>© 2026 Mrittika Agro Tech LLP. All Rights Reserved.</p>
        <p className="mt-1">Registered Limited Liability Partnership – India</p>
      </div>
    </div>
  </footer>
);



const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    {/* SECTION 1: HERO */}
<section className="relative bg-green-50 py-20 lg:py-32 overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT: TEXT (UNCHANGED) */}
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs md:text-sm font-semibold mb-6">
          Engineering Innovations for Sustainable Agriculture & Food Automation
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Building Practical Agro-Processing & Food Automation Machines{" "}
          <span className="text-green-700">for Rural India</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
          Mrittika Agro Tech LLP is an innovation-driven engineering startup developing
          portable, energy-efficient agro-processing and food automation machines
          designed for real-world Indian conditions.
        </p>

        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <span className="text-green-600">🔹</span> Portable & Field-Ready Machines
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <span className="text-green-600">🔹</span> Designed for Rural, Coastal & Hilly Regions
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <span className="text-green-600">🔹</span> Patent-Applied, Grant-Backed Innovations
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <span className="text-green-600">🔹</span> MSME & Farmer-Centric Engineering
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('products')}
            className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition shadow-lg shadow-green-700/20"
          >
            Explore Our Innovations
          </button>
          <button
            onClick={() => navigate('contact')}
            className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
          >
            Partner With Us
          </button>
        </div>
      </div>

      {/* RIGHT: IMAGE (NEW, DESKTOP ONLY) */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-green-900/10 rounded-3xl"></div>
        <img
          src={heroImage}
          alt="Mrittika Agro Tech Recognition"
          className="relative z-10 w-full h-[420px] object-cover rounded-3xl shadow-xl"
        />
      </div>

    </div>
  </div>

  {/* subtle background accent */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100 opacity-20 -skew-x-12 hidden lg:block"></div>
</section>

    {/* SECTION 2: WHAT WE BUILD (SERVICES) */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Build</h2>
          <p className="text-gray-600 text-lg">
            We design and develop next-generation agro-processing and food automation
            machines that reduce manual labor, improve productivity, and enable
            rural entrepreneurship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Agro-Processing Machinery", 
              desc: "Portable machines for areca nut processing, pepper cutting, and crop handling designed for small farmers and rural MSMEs.",
              icon: <Sprout className="text-green-600" size={32} />
            },
            { 
              title: "Food Automation Machines", 
              desc: "Fully automatic dosa making machines and instant food processing technologies for commercial and institutional kitchens.",
              icon: <BarChart3 className="text-green-600" size={32} />
            },
            { 
              title: "Customized Rural Engineering Solutions", 
              desc: "Farmer-specific, low-cost mechanization solutions developed from prototype to deployable product.",
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

    {/* SECTION 3: CREDIBILITY STRIP */}
    <section className="py-16 bg-green-50 border-y border-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">Why Mrittika Agro Tech LLP</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Patent Applied Innovation",
            "₹4 Lakhs Grant – Grassroot Innovation Kits 2025",
            "Final Round – IIT Bombay eYantra Innovation Challenge",
            "Registered Indian LLP Focused on Rural Impact"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
              <span className="font-semibold text-gray-800 text-sm md:text-base leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 4: CTA */}
    <section className="py-20 bg-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Build the Future of Rural Engineering</h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
          We actively collaborate with incubators, institutions, MSMEs,
          and field partners to scale practical engineering innovations.
        </p>
        <button 
          onClick={() => navigate('contact')}
          className="px-8 py-4 bg-white text-green-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
        >
          Partner With Us
        </button>
      </div>
    </section>
  </div>
);

// --- PRODUCTS PAGE ---
const ProductsPage = () => (
  <div className="animate-in fade-in duration-500">
    {/* 1. Intro Section */}
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Products & Engineering Solutions</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Mrittika Agro Tech LLP develops practical agro-processing and food automation
          machines focused on reducing labor, improving efficiency, and enabling
          rural and MSME-driven entrepreneurship.
        </p>
      </div>
    </section>

    {/* 2. Flagship Product */}
    <section className="py-16 bg-green-50 border-y border-green-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-green-100 overflow-hidden">
            <div className="inline-block px-4 py-1.5 bg-green-600 text-white text-sm font-bold rounded-full mb-6">
                Flagship Innovation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Portable Wild Areca Nut Dehusker
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <AlertCircle className="text-red-500" size={24}/> The Problem
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Wild areca nuts are extremely hard, irregular in shape, and unsafe to process
                        manually. Traditional methods are slow, labor-intensive, and inefficient,
                        especially in hilly and forest regions.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="text-green-600" size={24}/> Our Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        A portable, electrically powered, non-spring-based wild areca nut dehusker
                        specifically engineered for wild areca nuts and rugged field conditions.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                     <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                     <ul className="space-y-3">
                        {[
                            "Designed specifically for wild areca nuts",
                            "Portable and compact structure",
                            "External motor with pulley drive mechanism",
                            "Non-spring blade system for durability",
                            "Easy blade replacement and servicing",
                            "High efficiency with minimal nut damage",
                            "Low power consumption",
                            "Suitable for hilly & forest terrains"
                        ].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                                <span className="text-green-600 mt-1 font-bold">✔</span> {feat}
                            </li>
                        ))}
                     </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-t border-gray-100 pt-8">
                <div>
                    <h4 className="font-bold text-gray-900 mb-2">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Areca nut farmers', 'Rural MSMEs', 'Cooperative societies', 'Forest & hilly region operators'].map((tag, i) => (
                             <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-medium">
                                {tag}
                             </span>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-auto">
                    <div className="px-6 py-3 bg-green-900 text-white rounded-lg font-mono text-center shadow-lg uppercase text-sm tracking-wide font-bold">
                        Status: Prototype | Field-Tested
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    {/* 3. Other Products Grid */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Other Engineering Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-green-300 transition group flex flex-col">
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                            <Cpu size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                            Fully Automatic Dosa Making Machine
                        </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        A fully automatic dosa making machine designed for high-throughput,
                        consistent, and hygienic dosa preparation with minimal human intervention.
                    </p>
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Applications:</h4>
                        <ul className="text-sm text-gray-600 space-y-1 pl-1">
                            <li>• Hotels & restaurants</li>
                            <li>• Hostels & canteens</li>
                            <li>• Cloud kitchens</li>
                            <li>• Institutional kitchens</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded uppercase tracking-wide">
                        Status: Prototype / Pilot-Ready
                    </span>
                </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-green-300 transition group flex flex-col">
                 <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-orange-100 text-orange-700 rounded-lg">
                            <Leaf size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                            Instant Sambar / Curry Palette Machine
                        </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        A food processing system that converts natural ingredients into solid
                        sambar or curry palettes. When hot water is added, the palette instantly
                        converts into ready-to-consume food.
                    </p>
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Applications:</h4>
                        <ul className="text-sm text-gray-600 space-y-1 pl-1">
                            <li>• Hostels & PGs</li>
                            <li>• Defence & disaster relief</li>
                            <li>• Travel & trekking food</li>
                            <li>• Nutrition programs</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded uppercase tracking-wide">
                        Status: Concept | R&D Phase
                    </span>
                </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-green-300 transition group flex flex-col">
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                            Sprinkler Systems (Manual & Automated)
                        </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Cost-effective sprinkler systems designed for small land holdings,
                        supporting both manual and automated irrigation methods.
                    </p>
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Applications:</h4>
                        <ul className="text-sm text-gray-600 space-y-1 pl-1">
                            <li>• Small & marginal farmers</li>
                            <li>• Rural farms</li>
                            <li>• Water-efficient irrigation setups</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded uppercase tracking-wide">
                        Status: Prototype
                    </span>
                </div>
            </div>

             {/* Product 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-green-300 transition group flex flex-col">
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                            <Settings size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                            Pepper Cutting Machine (Manual & Automated)
                        </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Machines designed to reduce labor and improve safety in pepper cutting
                        operations, available in both manual and automated variants.
                    </p>
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Applications:</h4>
                        <ul className="text-sm text-gray-600 space-y-1 pl-1">
                            <li>• Pepper growers</li>
                            <li>• Small processing units</li>
                            <li>• Rural MSMEs</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded uppercase tracking-wide">
                        Status: Prototype
                    </span>
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>
);

// --- ABOUT PAGE ---
const AboutPage = () => (
  <div className="animate-in fade-in duration-500 py-16 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      
      {/* Title Block */}
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Mrittika Agro Tech LLP</h1>
        <p className="text-xl text-gray-800 leading-relaxed font-medium">
          Mrittika Agro Tech LLP is an Indian innovation-led engineering startup focused on developing practical agro-processing and food automation machines for rural, coastal, and hilly regions of India.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          The company operates at the intersection of mechanical engineering, automation, and sustainability, with a strong emphasis on real-world usability, affordability, and rural impact.
        </p>
      </div>

      {/* Engineering Philosophy */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Engineering Philosophy</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our innovations originate from direct field observations and real operational challenges faced by farmers, MSMEs, and rural entrepreneurs — not from laboratory-only assumptions.
        </p>
        <p className="text-gray-700 text-lg mb-4">Every machine we design prioritizes:</p>
        <ul className="grid sm:grid-cols-2 gap-3">
            {["Portability", "Ease of maintenance", "Energy efficiency", "Long operational life under challenging field conditions"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span> {item}
                </li>
            ))}
        </ul>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-green-50 p-8 rounded-xl border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-green-700" size={24} /> Vision
            </h2>
            <p className="text-gray-800 leading-relaxed">
                To become a nationally recognized rural engineering company delivering sustainable, affordable, and scalable agro-processing and food automation technologies across India.
            </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
             <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sprout className="text-gray-700" size={24} /> Mission
             </h2>
             <ul className="space-y-2 text-gray-700">
                {[
                    "To mechanize labor-intensive rural processes",
                    "To reduce post-harvest losses",
                    "To enable rural entrepreneurship and MSMEs",
                    "To promote energy-efficient and eco-friendly engineering"
                ].map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0"></span> {m}
                    </li>
                ))}
             </ul>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-900 text-white p-10 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6">Core Values</h2>
        <div className="grid sm:grid-cols-2 gap-4">
            {[
                "Purpose-driven innovation",
                "Farmer-centric engineering design",
                "Ethical and robust product development",
                "Sustainability-first approach",
                "Inclusive rural growth"
            ].map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 shrink-0" size={20}/>
                    <span className="font-medium text-lg">{val}</span>
                </div>
            ))}
        </div>
      </div>

    </div>
  </div>
);

// --- ACHIEVEMENTS PAGE ---
const AchievementsPage = () => (
  <div className="animate-in fade-in duration-500 py-16 bg-white">
    <div className="container mx-auto px-4">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Achievements & Recognition</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Mrittika Agro Tech LLP has received recognition from leading innovation programs and institutions for its grassroot-level engineering innovations and rural impact.
        </p>
      </div>

      {/* SECTION 1 - ENGINEERING PROTOTYPES */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                <Settings size={28} />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Engineering Prototypes & Field Validation</h2>
                <p className="text-gray-600">Iterative prototyping and on-field testing in real environments.</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Image Placeholder 1: Arecanut */}
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                <img src={g1} className="w-full h-full object-cover" />
            </div>

             {/* Image Placeholder 2: Arecanut */}
             <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                <img src={g2} className="w-full h-full object-cover" />
            </div>

             {/* Image Placeholder 3: Sprinkler */}
             <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                <img src={g3} className="w-full h-full object-cover" />
            </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3">Focus Areas</h3>
            <ul className="flex flex-wrap gap-4">
                {["Agro-processing machine prototyping", "Field testing under rural, hilly, and coastal conditions", "Performance optimization for durability and efficiency"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span> {item}
                    </li>
                ))}
            </ul>
        </div>
      </div>

      {/* SECTION 2 - AWARDS */}
      <div>
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-yellow-100 text-yellow-700 rounded-lg">
                <Trophy size={28} />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Awards, Grants & Recognition</h2>
                <p className="text-gray-600">Recognized for impact-driven, grassroot engineering innovation.</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Image Placeholder 1: Award */}
            <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                <img src={g4} className="w-full h-full object-cover" />
            </div>

             {/* Image Placeholder 2: Award */}
             <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                <img src={g5} className="w-full h-full object-cover" />
            </div>

             {/* Image Placeholder 3: Award */}
             <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                <img src={g6} className="w-full h-full object-cover" />
            </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Key Milestones</h3>
            </div>
            <div className="p-6">
                <ul className="space-y-4">
                    {[
                        { icon: "🏆", text: "Winners – Grassroot Innovation Kits 2025, Bengaluru" },
                        { icon: "💰", text: "Grant Received – ₹4 Lakhs" },
                        { icon: "🚀", text: "Shortlisted – iCreate Pro-Fund Gateway 2025 (SparkUp)" },
                        { icon: "🎤", text: "Final Pitch Presented" },
                        { icon: "🤖", text: "Final Round – IIT Bombay eYantra Innovation Challenge" },
                        { icon: "🏢", text: "Company Incorporated – Mrittika Agro Tech LLP" },
                        { icon: "📌", text: "Recognized for impact-driven, grassroot engineering innovation." }
                    ].map((m, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-800">
                            <span className="text-xl">{m.icon}</span>
                            <span className="font-medium mt-0.5">{m.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>

    </div>
  </div>
);

      {/* SECTION  - GALLERY */}

const galleryItems = [
  {
    src: g1,
    title: 'Arecanut Processing Prototype',
    desc: 'Field testing of portable arecanut dehusker',
  },
  {
    src: g2,
    title: 'Arecanut Field Work',
    desc: 'On-site validation under rural conditions',
  },
  {
    src: g3,
    title: 'Sprinkler System Prototype',
    desc: 'Irrigation testing for small land holdings',
  },
  {
    src: g4,
    title: 'Grant & Recognition',
    desc: 'Grassroot Innovation Kits Award – Bengaluru',
  },
  {
    src: g5,
    title: 'Innovation Program',
    desc: 'Pitch and evaluation at innovation platform',
  },
  {
    src: g6,
    title: 'Team Recognition',
    desc: 'Institutional and grant recognition',
  },
];
const GalleryPage = () => (
  <div className="animate-in fade-in duration-500 py-16 bg-white">
    <div className="container mx-auto px-4">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Gallery
        </h1>
        <p className="text-gray-600">
          Visual documentation of prototypes, field work, and recognitions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);


// --- UPDATED FAQ PAGE (Step 4A Implementation) ---
const FAQPage = () => {
  // New FAQ Content - No accordions, clean list style as requested for "Trust & Clarity"
  const faqs = [
    { 
      q: "What does Mrittika Agro Tech LLP do?", 
      a: "Mrittika Agro Tech LLP develops agro-processing and food automation machines focused on reducing manual labor, improving efficiency, and enabling rural and MSME-driven entrepreneurship." 
    },
    { 
      q: "Are your products commercially available?", 
      a: "Some products are currently in prototype or pilot-ready stages, while others are in active R&D. Commercial deployment depends on field validation, partnerships, and scaling support." 
    },
    { 
      q: "Who are your target users?", 
      a: "Our solutions are designed for farmers, rural MSMEs, food businesses, cooperatives, and institutional kitchens operating in diverse Indian conditions." 
    },
    { 
      q: "Do you collaborate with institutions or incubators?", 
      a: "Yes. We actively collaborate with incubators, research institutions, innovation programs, and industry partners for product validation, scaling, and deployment." 
    },
    { 
      q: "Is your technology patented?", 
      a: "A patent application has been filed for select innovations. Further intellectual property development is ongoing." 
    },
    { 
      q: "How can we partner or collaborate?", 
      a: "You can reach us through the Contact page for partnerships, pilot deployments, incubation support, or technical collaboration." 
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h1>
        
        <div className="grid gap-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <h3 className="font-bold text-gray-900 text-xl mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- UPDATED CONTACT PAGE (Step 4B Implementation) ---
const ContactPage = ({ formData, handleInputChange, handleSendMessage, isSubmitting, submitStatus }) => (
  <div className="animate-in fade-in duration-500 py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Collaboration</h1>
            <p className="text-gray-600 text-lg">
                For partnerships, incubation support, pilot deployments, or collaboration opportunities, please contact us using the details below.
            </p>
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
                <p className="text-gray-600">+91 7975270723 / +91 6364617823 / +91 8197023623</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600 font-medium leading-snug">
                    Mrittika Agro Tech LLP<br/>
                    #2-281(2), Ganesh Kripa<br/>
                    Kuvettu Village, Guruvayanakere Post<br/>
                    Belthangady Taluk, Dakshina Kannada – 574217<br/>
                    Karnataka, India
                </p>
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
                placeholder="Briefly describe your collaboration or inquiry" 
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
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'achievements' && <AchievementsPage />}
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