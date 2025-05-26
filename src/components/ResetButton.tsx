import React from "react";

interface Props {
  onClick: () => void;
}

const ResetButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-6 py-3 bg-primary-dark hover:bg-accent text-white font-semibold rounded-xl shadow-md transition-colors duration-200"
  >
    Limpar campos
  </button>
);

export default ResetButton;
