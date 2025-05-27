import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, TrendingUp, Target, PiggyBank } from "lucide-react";

import Heading from "./components/Heading";
import InvestmentInput from "./components/InvestmentInput";
import RendimentoInfo from "./components/RendimentoInfo";
import Result from "./components/Result";
import CalculateButton from "./components/CalculateButton";

const App: React.FC = () => {
  const [valorAtualStr, setValorAtualStr] = useState("");
  const [aporteMensalStr, setAporteMensalStr] = useState("");
  const [rendimentoAnualStr, setRendimentoAnualStr] = useState("");
  const [valorAlvoStr, setValorAlvoStr] = useState("");
  const [showRendimentoInfo, setShowRendimentoInfo] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const calculateFinancialFreedom = () => {
    const valorAtual = parseFloat(valorAtualStr.replace(",", ".")) || 0;
    const aporteMensal = parseFloat(aporteMensalStr.replace(",", ".")) || 0;
    const rendimentoAnual =
      parseFloat(rendimentoAnualStr.replace(",", ".")) || 0;
    const valorAlvo = parseFloat(valorAlvoStr.replace(",", ".")) || 0;
    const rendimentoMensal = rendimentoAnual / 12 / 100;

    let meses = 0;
    let montante = valorAtual;
    while (montante < valorAlvo && meses < 1000 * 12) {
      montante = montante * (1 + rendimentoMensal) + aporteMensal;
      meses++;
    }

    return {
      meses,
      anos: Math.floor(meses / 12),
      restoMeses: meses % 12,
      valorAlvo,
      valorAlvoInvalido: valorAlvo <= 0,
    };
  };

  const [result, setResult] = useState({
    meses: 0,
    anos: 0,
    restoMeses: 0,
    valorAlvo: 0,
    valorAlvoInvalido: true,
  });

  function handleCalculate() {
    const calculatedResult = calculateFinancialFreedom();
    setResult(calculatedResult);
    setShowResult(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-accent flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-bg-light rounded-3xl w-full max-w-2xl p-10 shadow-2xl ring-1 ring-black ring-opacity-5 space-y-8"
      >
        <Heading />

        <div className="grid grid-cols-1 gap-6">
          <InvestmentInput
            label="Valor já investido (R$)"
            placeholder="Ex: 10000"
            value={valorAtualStr}
            setValue={setValorAtualStr}
            icon={<PiggyBank className="text-primary-dark w-5 h-5" />}
          />
          <InvestmentInput
            label="Aporte mensal (R$)"
            placeholder="Ex: 500"
            value={aporteMensalStr}
            setValue={setAporteMensalStr}
            icon={<DollarSign className="text-primary-dark w-5 h-5" />}
          />
          <InvestmentInput
            label="Rentabilidade anual (%)"
            placeholder="Ex: 8"
            value={rendimentoAnualStr}
            setValue={setRendimentoAnualStr}
            icon={<TrendingUp className="text-primary-dark w-5 h-5" />}
          >
            <RendimentoInfo
              show={showRendimentoInfo}
              toggle={() => setShowRendimentoInfo((v) => !v)}
            />
          </InvestmentInput>
          <InvestmentInput
            label="Valor alvo (R$)"
            placeholder="Ex: 500000"
            value={valorAlvoStr}
            setValue={setValorAlvoStr}
            icon={<Target className="text-primary-dark w-5 h-5" />}
          />
        </div>

        <div className="flex justify-center">
          <CalculateButton onClick={handleCalculate} />
        </div>

        <AnimatePresence mode="wait">
          {showResult && (
            <motion.div
              key={
                // essa string única força a animação ao mudar os valores
                `${result.meses}-${result.anos}-${result.restoMeses}-${result.valorAlvo}-${result.valorAlvoInvalido}`
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Result
                valorAlvoInvalido={result.valorAlvoInvalido}
                meses={result.meses}
                anos={result.anos}
                restoMeses={result.restoMeses}
                valorAlvo={result.valorAlvo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
