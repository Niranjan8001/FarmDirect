import React, { useState, useEffect } from 'react';
import { useFarmerContext } from '../context/FarmerContext';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { 
  Leaf, 
  Shield, 
  RefreshCw, 
  BarChart3, 
  Phone, 
  Send, 
  Sun, 
  Moon, 
  ChevronDown, 
  Lock 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import farmBackground from '../assets/farm_background_v2.png';

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, setLanguage, language, isAuthenticated, isDark, toggleTheme } = useFarmerContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setError('');
    
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    
    setStep(2);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) return;

    try {
      setLoading(true);
      setError('');
      const success = await login('phone', { phone, otp });
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid OTP. Please use 1234 for testing.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      const success = await login('google');
      if (success) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Google Sign-In failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans ${isDark ? 'dark' : ''}`}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${farmBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-8 z-20">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 transition-all hover:scale-105"
        >
          {isDark ? <Moon className="w-4 h-4 text-slate-200" /> : <Sun className="w-4 h-4 text-amber-500" />}
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 items-center min-h-screen px-4 md:px-12 lg:px-24 gap-12">
        
        {/* Left Section: Hero Text */}
        <div className="hidden lg:flex flex-col gap-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Grow Together.<br />
              <span className="text-green-400">Prosper Forever.</span>
            </h1>
            <p className="text-lg text-white/90 max-w-md leading-relaxed">
              FarmDirect connects farmers with partners for a stronger, greener tomorrow.
            </p>
          </div>

          <div className="space-y-6">
            <FeatureItem 
              icon={<Shield className="w-5 h-5 text-green-400" />} 
              title="Secure & Trusted" 
            />
            <FeatureItem 
              icon={<RefreshCw className="w-5 h-5 text-green-400" />} 
              title="Instant Access" 
            />
            <FeatureItem 
              icon={<BarChart3 className="w-5 h-5 text-green-400" />} 
              title="Smart & Efficient" 
            />
          </div>
        </div>

        {/* Center Section: Login Card */}
        <div className="flex justify-center animate-scale-in">
          <div className={`${isDark ? 'glass-card-dark' : 'glass-card'} w-full max-w-md rounded-3xl p-8 flex flex-col items-center`}>
            
            {/* Logo */}
            <div className="mb-6 flex flex-col items-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-3">
                <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">FarmDirect</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Farmer Partner App</p>
            </div>

            {/* Header with Language Dropdown */}
            <div className="w-full flex justify-between items-center mb-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Welcome Back! 👋</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Login to continue your journey.</p>
              </div>
              <button 
                onClick={() => setLanguage(language === 'English' ? 'Hindi' : 'English')}
                className="flex items-center gap-1 text-sm font-semibold text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-3 py-1.5 rounded-xl border border-green-100 dark:border-green-800 transition-colors"
              >
                {language} <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {error && (
              <div className="w-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm p-3 rounded-xl mb-4 text-center border border-red-100 dark:border-red-800">
                {error}
              </div>
            )}

            {step === 1 ? (
              <form onSubmit={handleSendOtp} className="w-full space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-green-500 transition-colors" />
                    <input 
                      type="tel" 
                      placeholder="Enter 10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      maxLength={10}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  className="py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-green-200 dark:shadow-none"
                >
                  Get Mock OTP <Send className="w-4 h-4" />
                </Button>
                
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                  <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Or continue with</span>
                  <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                </div>

                <button 
                  type="button" 
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                  Mock Google Sign-In
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="w-full space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">Verification Code</label>
                  <div className="relative group">
                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-green-500 transition-colors" />
                    <input 
                      type="number" 
                      placeholder="Enter 1234"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  className="py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-200 dark:shadow-none"
                >
                  Verify & Login
                </Button>
                <button 
                  type="button" 
                  onClick={() => {
                    setStep(1);
                    setOtp('');
                    setError('');
                  }}
                  className="w-full text-center text-sm text-green-600 dark:text-green-400 font-bold"
                >
                  Change Phone Number
                </button>
              </form>
            )}

            <div className="mt-8 flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium">
              <Lock className="w-3 h-3" />
              Your data is safe and secure with us.
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title }) => (
  <div className="flex items-center gap-4 group">
    <div className="feature-icon-box group-hover:scale-110 transition-transform bg-white/20">
      {icon}
    </div>
    <span className="text-white font-bold text-lg">{title}</span>
  </div>
);
