import React, { useState, useEffect } from 'react';
import { useFarmerContext } from '../context/FarmerContext';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { Card } from '../components/ui/Card';
import { Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, setLanguage, language, isAuthenticated } = useFarmerContext();
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
    
    // Mock OTP send for now as full Recaptcha setup is complex for this turn
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
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-green-900">FarmDirect</h1>
          <p className="text-green-700 font-medium">Farmer Partner App</p>
        </div>

        <Card className="!p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">
              {step === 1 ? 'Login' : 'Enter OTP'}
            </h2>
            <button 
              type="button"
              onClick={() => setLanguage(language === 'English' ? 'Hindi' : 'English')}
              className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full"
            >
              {language}
            </button>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4 text-center">
              {error}
            </div>
          )}

          {step === 1 ? (
            <form onSubmit={handleSendOtp}>
              <InputField 
                label="Phone Number" 
                id="phone"
                type="tel" 
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                maxLength={10}
                required
              />
              <Button type="submit" fullWidth className="mt-4">
                Get Mock OTP
              </Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-slate-500">Or continue with</span>
                </div>
              </div>

              <Button 
                type="button" 
                variant="outline" 
                fullWidth 
                onClick={handleGoogleLogin}
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="w-5 h-5 mr-2" />
                Mock Google Sign-In
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <InputField 
                label="One Time Password (OTP)" 
                id="otp"
                type="number" 
                placeholder="Enter 1234"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <Button type="submit" fullWidth className="mt-4">
                Verify & Login
              </Button>
              <button 
                type="button" 
                onClick={() => {
                  setStep(1);
                  setOtp('');
                  setError('');
                }}
                className="w-full text-center text-sm text-green-600 mt-4 font-medium"
              >
                Change Phone Number
              </button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};
