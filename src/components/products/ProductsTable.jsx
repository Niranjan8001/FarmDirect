import React from 'react';
import { MoreVertical, Edit2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const productsData = [
  { id: 1, name: 'Farm Fresh Tomatoes', weight: '2 kg', price: '₹60', unit: '/ kg', stock: '120 kg', sold: '75 kg', status: 'Active', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop' },
  { id: 2, name: 'Cucumbers', weight: '1 kg', price: '₹40', unit: '/ kg', stock: '85 kg', sold: '40 kg', status: 'Active', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop' },
  { id: 3, name: 'Red Onions', weight: '1 kg', price: '₹35', unit: '/ kg', stock: '60 kg', sold: '25 kg', status: 'Active', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop' },
  { id: 4, name: 'Whole Wheat', weight: '5 kg', price: '₹120', unit: '/ kg', stock: '200 kg', sold: '60 kg', status: 'Active', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop' },
  { id: 5, name: 'Potatoes', weight: '2 kg', price: '₹30', unit: '/ kg', stock: '150 kg', sold: '30 kg', status: 'Low Stock', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop' },
  { id: 6, name: 'Green Chilies', weight: '250 g', price: '₹25', unit: '/ 250g', stock: '0 kg', sold: '15 kg', status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop' },
  { id: 7, name: 'Mustard Oil', weight: '1 L', price: '₹180', unit: '/ L', stock: '25 L', sold: '10 L', status: 'Active', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&h=100&fit=crop' },
];

export const ProductsTable = () => {
  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 dark:border-[#334155] bg-slate-50/50 dark:bg-[#0F172A]/50">
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Product</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Price</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Stock</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Sold</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Status</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, index) => (
              <tr 
                key={product.id} 
                className={`group hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors ${
                  index !== productsData.length - 1 ? 'border-b border-slate-100 dark:border-[#334155]' : ''
                }`}
              >
                <td className="py-4 px-6">
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
                <td className="py-4 px-6">
                  <span className="font-semibold text-slate-800 dark:text-[#F8FAFC]">{product.price}</span>
                  <span className="text-sm text-slate-500 dark:text-[#94A3B8]">{product.unit}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-slate-600 dark:text-[#CBD5E1]">{product.stock}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-slate-600 dark:text-[#CBD5E1]">{product.sold}</span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                    product.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400' : 
                    product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                    'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
                      <Edit2 className="w-4 h-4" />
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
      
      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-100 dark:border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-[#94A3B8]">
          Showing <span className="font-medium text-slate-800 dark:text-[#F8FAFC]">1</span> to <span className="font-medium text-slate-800 dark:text-[#F8FAFC]">7</span> of <span className="font-medium text-slate-800 dark:text-[#F8FAFC]">12</span> products
        </p>
        
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-green-600 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-transparent text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] text-sm font-medium transition-colors">
            2
          </button>
          
          <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <button className="flex items-center gap-2 ml-4 p-1.5 px-3 rounded-md border border-slate-200 dark:border-[#334155] text-sm text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
            <span>10 / page</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
