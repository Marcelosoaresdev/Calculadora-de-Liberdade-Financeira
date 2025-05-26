import React from "react";

interface InvestmentInputProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (val: string) => void;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const InvestmentInput: React.FC<InvestmentInputProps> = ({
  label,
  placeholder,
  value,
  setValue,
  icon,
  children,
}) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-dark">{label}</label>
    <div className="relative">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        {icon}
      </span>
      <input
        type="text"
        inputMode="decimal"
        pattern="[0-9.,]*"
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[0-9.,]*$/.test(val)) setValue(val);
        }}
        placeholder={placeholder}
        className="h-14 w-full pl-11 pr-4 rounded-xl border border-gray-300 text-lg text-dark focus:outline-none focus:ring-4 focus:ring-accent/50 transition shadow-sm"
        spellCheck={false}
        autoComplete="off"
      />
    </div>
    {children}
  </div>
);

export default InvestmentInput;
