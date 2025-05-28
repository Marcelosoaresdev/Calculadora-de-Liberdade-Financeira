import React from "react";
import { motion } from "framer-motion";

interface Props {
  valorAlvoInvalido: boolean;
  meses: number;
  anos: number;
  restoMeses: number;
  valorAlvo: number;
  valorAtualMaiorQueAlvo?: boolean;
  aporteMaiorQueAlvo?: boolean;
  valorIgualAlvo?: boolean;
}

const Result: React.FC<Props> = ({
  valorAlvoInvalido,
  meses,
  anos,
  restoMeses,
  valorAlvo,
  valorAtualMaiorQueAlvo,
  aporteMaiorQueAlvo,
  valorIgualAlvo,
}) => (
  <div className="text-center min-h-[50px]">
    {valorAlvoInvalido ? (
      <p className="text-danger font-semibold text-lg">
        Por favor, insira um valor alvo válido (maior que zero).
      </p>
    ) : valorAtualMaiorQueAlvo ? (
      <p className="text-green-700 font-semibold text-lg">
        Parabéns! O valor já investido é maior que o valor alvo desejado.
      </p>
    ) : aporteMaiorQueAlvo ? (
      <p className="text-warning font-semibold text-lg">
        Seu aporte mensal é maior que o valor alvo. Confira os valores
        informados.
      </p>
    ) : valorIgualAlvo ? (
      <p className="text-warning font-semibold text-lg">
        O valor atual <span className="text-danger">é igual ao valor alvo</span>
        .
      </p>
    ) : meses >= 1000 * 12 ? (
      <p className="text-danger font-semibold text-lg">
        Com os valores informados, não será possível atingir sua meta
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
