import React from 'react';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { MapPin, CheckCircle, Mail, Phone, Globe, Edit, Star, ShoppingBag, Users, Calendar, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = () => (
  <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden mb-8">
    <div className="h-48 md:h-64 overflow-hidden relative">
      <img 
        src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1600&h=400" 
        alt="Farm Cover" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="px-6 md:px-8 pb-8">
      <div className="relative flex justify-between items-start">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-[#1E293B] overflow-hidden -mt-12 md:-mt-16 relative z-10 bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="Ramesh Yadav" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
            <Edit className="w-4 h-4" />
            <span className="hidden md:inline">Edit Profile</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-[#F8FAFC]">Ramesh Yadav</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-[#94A3B8] mt-2">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Jaipur, Rajasthan</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Joined March 2022</span>
            </div>
          </div>
          
          <div className="mt-4 inline-flex items-center gap-1.5 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 px-3 py-1.5 rounded-md text-sm font-medium border border-green-100 dark:border-green-500/20">
            <CheckCircle className="w-4 h-4" />
            <span>Verified Organic Farmer</span>
          </div>
        </div>

        <div className="flex gap-6 pt-4 md:pt-0 border-t border-slate-100 dark:border-transparent md:border-t-0 w-full md:w-auto">
          <div>
            <p className="font-bold text-xl text-slate-800 dark:text-[#F8FAFC] flex items-center gap-1">
              4.8 <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </p>
            <p className="text-sm text-slate-500 dark:text-[#94A3B8]">Rating</p>
          </div>
          <div>
            <p className="font-bold text-xl text-slate-800 dark:text-[#F8FAFC]">245</p>
            <p className="text-sm text-slate-500 dark:text-[#94A3B8]">Orders</p>
          </div>
          <div>
            <p className="font-bold text-xl text-slate-800 dark:text-[#F8FAFC]">1.2K</p>
            <p className="text-sm text-slate-500 dark:text-[#94A3B8]">Followers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-6 mb-8">
    <h3 className="text-lg font-bold text-slate-800 dark:text-[#F8FAFC] mb-4">About the Farm</h3>
    <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed text-sm md:text-base">
      Welcome to Yadav Organics! We are a family-owned farm located in the fertile lands near Jaipur. 
      For over three generations, we have been cultivating the finest vegetables, grains, and fruits. 
      Recently, we have transitioned entirely to organic farming practices to ensure that the food we 
      provide is not only fresh but also healthy and free from harmful chemicals. Our specialties 
      include heirloom tomatoes, crisp cucumbers, and hand-milled whole wheat.
    </p>
  </div>
);

const ContactSection = () => (
  <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-6 mb-8">
    <h3 className="text-lg font-bold text-slate-800 dark:text-[#F8FAFC] mb-4">Contact Information</h3>
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm md:text-base">
        <div className="p-2 bg-slate-50 dark:bg-[#0F172A] rounded-lg text-slate-500 dark:text-[#94A3B8]">
          <Mail className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Email</p>
          <p className="font-medium text-slate-800 dark:text-[#F8FAFC]">contact@yadavorganics.in</p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm md:text-base">
        <div className="p-2 bg-slate-50 dark:bg-[#0F172A] rounded-lg text-slate-500 dark:text-[#94A3B8]">
          <Phone className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Phone</p>
          <p className="font-medium text-slate-800 dark:text-[#F8FAFC]">+91 98765 43210</p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm md:text-base">
        <div className="p-2 bg-slate-50 dark:bg-[#0F172A] rounded-lg text-slate-500 dark:text-[#94A3B8]">
          <Globe className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Website</p>
          <p className="font-medium text-slate-800 dark:text-[#F8FAFC]">www.yadavorganics.in</p>
        </div>
      </div>
    </div>
  </div>
);

const CertificationsSection = () => (
  <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-6">
    <h3 className="text-lg font-bold text-slate-800 dark:text-[#F8FAFC] mb-4 flex items-center gap-2">
      <Award className="w-5 h-5 text-amber-500" />
      Certifications
    </h3>
    <div className="space-y-3">
      <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-[#0F172A] rounded-lg border border-slate-100 dark:border-[#334155]">
        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
        <div>
          <p className="font-medium text-sm text-slate-800 dark:text-[#F8FAFC]">Jaivik Bharat</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">Certified Organic by FSSAI</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-[#0F172A] rounded-lg border border-slate-100 dark:border-[#334155]">
        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
        <div>
          <p className="font-medium text-sm text-slate-800 dark:text-[#F8FAFC]">India Organic</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">NPOP Certification</p>
        </div>
      </div>
    </div>
  </div>
);

const QuickLinksSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-6 mb-8">
      <h3 className="text-lg font-bold text-slate-800 dark:text-[#F8FAFC] mb-4">Farm Management</h3>
      <div className="grid grid-cols-1 gap-3">
        <button onClick={() => navigate('/inventory')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors border border-slate-100 dark:border-[#334155] w-full text-left group">
          <div className="bg-blue-50 dark:bg-blue-500/10 p-2 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-sm text-slate-800 dark:text-[#F8FAFC]">Manage Inventory</p>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">View and edit your products</p>
          </div>
        </button>
        <button onClick={() => navigate('/reviews')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors border border-slate-100 dark:border-[#334155] w-full text-left group">
          <div className="bg-amber-50 dark:bg-amber-500/10 p-2 rounded-lg text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-sm text-slate-800 dark:text-[#F8FAFC]">Customer Reviews</p>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Read feedback from buyers</p>
          </div>
        </button>
        <button onClick={() => navigate('/orders')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors border border-slate-100 dark:border-[#334155] w-full text-left group">
          <div className="bg-green-50 dark:bg-green-500/10 p-2 rounded-lg text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-sm text-slate-800 dark:text-[#F8FAFC]">Orders & Customers</p>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Manage your sales</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export const ProfileView = () => {
  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 py-8 max-w-5xl mx-auto">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <AboutSection />
            <CertificationsSection />
          </div>
          
          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <ContactSection />
            <QuickLinksSection />
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
};
