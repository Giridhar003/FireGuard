import React from 'react';

function Input({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`block w-full rounded-md shadow-sm border-gray-300 focus:border-primary-500 focus:ring-primary-500 ${
          error ? 'border-red-500' : ''
        }`}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Input;