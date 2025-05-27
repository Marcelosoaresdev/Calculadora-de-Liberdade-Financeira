import React from "react";
import { motion } from "framer-motion";

interface Props {
  valorAlvoInvalido: boolean;
  meses: number;
  anos: number;
  restoMeses: number;
  valorAlvo: number;
}

const Result: React.FC<Props> = ({
  valorAlvoInvalido,
  meses,
  anos,
  restoMeses,
  valorAlvo,
}) => (
  <div className="text-center min-h-[50px]">
    {valorAlvoInvalido ? (
      <p className="text-danger font-semibold text-lg">
        Por favor, insira um valor alvo válido (maior que zero).
      </p>
    ) : meses >= 1000 * 12 ? (
      <p className="text-danger font-semibold text-lg">
        Com os valores informados, não será possível atingir a liberdade
        financeira.
      </p>
    ) : (
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-semibold text-dark"
      >
        Você atingirá sua meta financeira em{" "}
        <span className="text-accent">{anos}</span> anos e{" "}
        <span className="text-accent">{restoMeses}</span> meses.
      </motion.div>
    )}
    {!valorAlvoInvalido && (
      <p className="text-dark/70 mt-3 text-lg">
        Valor alvo:{" "}
        <span className="font-semibold text-accent">
          R${" "}
          {valorAlvo.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </span>
      </p>
    )}
  </div>
);

export default Result;
