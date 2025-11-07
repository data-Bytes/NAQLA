import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ label, name, value, onChange, type = "text", placeholder }) => (
  <div className="space-y-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none"
    />
  </div>
);

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type = "button", onClick, className = "", children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${className}`}
  >
    {children}
  </button>
);

export const LogoMark: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md" />
    <span className="text-lg font-extrabold text-gray-900">Naqla</span>
  </div>
);
