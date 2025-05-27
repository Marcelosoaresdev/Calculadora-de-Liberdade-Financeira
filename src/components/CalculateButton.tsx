import React from "react";

interface Props {
  onClick: () => void;
}

const CalculateButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-3 bg-primary-dark hover:bg-accent text-white font-semibold rounded-xl shadow-md transition-colors duration-200 flex items-center gap-2"
  >
    Calcular
  </button>
);

export default CalculateButton;
