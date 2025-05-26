import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Target, PiggyBank } from "lucide-react";

import Heading from "./components/Heading";
import InvestmentInput from "./components/InvestmentInput";
import RendimentoInfo from "./components/RendimentoInfo";
import Result from "./components/Result";
import ResetButton from "./components/ResetButton";

const App: React.FC = () => {
  const [valorAtualStr, setValorAtualStr] = useState("");
  const [aporteMensalStr, setAporteMensalStr] = useState("");
  const [rendimentoAnualStr, setRendimentoAnualStr] = useState("");
  const [valorAlvoStr, setValorAlvoStr] = useState("");
  const [showRendimentoInfo, setShowRendimentoInfo] = useState(false);

  const valorAtual = parseFloat(valorAtualStr.replace(",", ".")) || 0;
  const aporteMensal = parseFloat(aporteMensalStr.replace(",", ".")) || 0;
  const rendimentoAnual = parseFloat(rendimentoAnualStr.replace(",", ".")) || 0;
  const valorAlvo = parseFloat(valorAlvoStr.replace(",", ".")) || 0;
  const rendimentoMensal = rendimentoAnual / 12 / 100;

  let meses = 0;
  let montante = valorAtual;
  while (montante < valorAlvo && meses < 1000 * 12) {
    montante = montante * (1 + rendimentoMensal) + aporteMensal;
    meses++;
  }

  const anos = Math.floor(meses / 12);
  const restoMeses = meses % 12;
  const valorAlvoInvalido = valorAlvo <= 0;

  function handleReset() {
    setValorAtualStr("");
    setAporteMensalStr("");
    setRendimentoAnualStr("");
    setValorAlvoStr("");
    setShowRendimentoInfo(false);
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

        <Result
          valorAlvoInvalido={valorAlvoInvalido}
          meses={meses}
          anos={anos}
          restoMeses={restoMeses}
          valorAlvo={valorAlvo}
        />
        <div className="flex justify-center">
          <ResetButton onClick={handleReset} />
        </div>
      </motion.div>
    </div>
  );
};

export default App;
