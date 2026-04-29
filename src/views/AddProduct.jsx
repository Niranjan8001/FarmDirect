import React, { useState } from 'react';
import { useFarmerContext } from '../context/FarmerContext';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Upload, CheckCircle2 } from 'lucide-react';

export const AddProduct = () => {
  const { addProduct } = useFarmerContext();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Vegetables',
    price: '',
    quantity: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.quantity) return;

    addProduct({
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      image: 'https://images.unsplash.com/photo-1595858602621-eebcbcd83e1c?w=200&h=200&fit=crop' // Mock image
    });

    setSuccess(true);
    setFormData({ name: '', category: 'Vegetables', price: '', quantity: '' });
    
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="p-4 pb-24">
      {success && (
        <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-xl mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-medium">Product added successfully!</span>
        </div>
      )}

      <Card>
        <form onSubmit={handleSubmit}>
          <InputField 
            label="Product Name" 
            id="name"
            placeholder="e.g. Fresh Tomatoes"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />

          <div className="flex flex-col gap-1.5 mb-4">
            <label htmlFor="category" className="text-sm font-medium text-slate-700">Category</label>
            <select 
              id="category"
              className="border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Grains">Grains</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputField 
              label="Price (₹ per kg)" 
              id="price"
              type="number"
              min="0"
              placeholder="0.00"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              required
            />
            <InputField 
              label="Quantity (kg)" 
              id="quantity"
              type="number"
              min="0"
              placeholder="Total kg"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              required
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">Product Image</label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-slate-500 bg-slate-50">
              <Upload className="w-8 h-8 mb-2 text-slate-400" />
              <span className="text-sm font-medium">Tap to upload image</span>
            </div>
          </div>

          <Button type="submit" fullWidth>
            List Product
          </Button>
        </form>
      </Card>
    </div>
  );
};
