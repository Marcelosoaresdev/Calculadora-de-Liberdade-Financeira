import React from "react";

const Heading: React.FC = () => (
  <div className="text-center space-y-2">
    <h1 className="text-4xl font-bold text-dark">
      Calculadora de <span className="text-accent">Liberdade Financeira</span>
    </h1>
    <p className="text-sm text-dark/80 max-w-md mx-auto">
      Descubra em quanto tempo você alcançará sua liberdade financeira com base
      nos seus aportes, investimentos e objetivo final.
    </p>
  </div>
);

export default Heading;
