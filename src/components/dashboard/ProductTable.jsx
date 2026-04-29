import React from 'react';
import { MoreVertical, Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Farm Fresh Tomatoes',
    weight: '2 kg',
    price: '₹60',
    unit: '/ kg',
    stock: '120 kg',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Cucumbers',
    weight: '1 kg',
    price: '₹40',
    unit: '/ kg',
    stock: '85 kg',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Red Onions',
    weight: '1 kg',
    price: '₹35',
    unit: '/ kg',
    stock: '60 kg',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'Whole Wheat',
    weight: '5 kg',
    price: '₹120',
    unit: '/ kg',
    stock: '200 kg',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    name: 'Potatoes',
    weight: '2 kg',
    price: '₹30',
    unit: '/ kg',
    stock: '150 kg',
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop'
  }
];

export const ProductTable = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden mt-6">
      <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-[#334155]">
        <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC]">My Products</h3>
        <button onClick={() => navigate('/inventory')} className="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1">
          View all products
          <span>→</span>
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 dark:border-[#334155]">
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Product</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Price</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Stock</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Status</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr 
                key={product.id} 
                className={`group hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors ${
                  index !== products.length - 1 ? 'border-b border-slate-100 dark:border-[#334155]' : ''
                }`}
              >
                <td className="py-3 px-5">
                  <div className="flex items-center gap-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-200 dark:border-[#334155]"
                    />
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{product.name}</p>
                      <p className="text-xs text-slate-500 dark:text-[#94A3B8]">{product.weight}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5">
                  <span className="font-semibold text-slate-800 dark:text-[#F8FAFC]">{product.price}</span>
                  <span className="text-sm text-slate-500 dark:text-[#94A3B8]">{product.unit}</span>
                </td>
                <td className="py-3 px-5">
                  <span className="text-sm text-slate-600 dark:text-slate-300">{product.stock}</span>
                </td>
                <td className="py-3 px-5">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                    product.status === 'Active' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
                      <Link className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
