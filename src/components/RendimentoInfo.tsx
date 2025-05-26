import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  show: boolean;
  toggle: () => void;
}

const RendimentoInfo: React.FC<Props> = ({ show, toggle }) => (
  <>
    <button
      type="button"
      onClick={toggle}
      className="mt-2 flex items-center text-accent font-semibold text-sm hover:underline focus:outline-none"
      aria-expanded={show}
      aria-controls="rendimento-info"
    >
      {show ? (
        <>
          <ChevronUp className="w-4 h-4 mr-1" /> O que é rentabilidade anual?
        </>
      ) : (
        <>
          <ChevronDown className="w-4 h-4 mr-1" /> O que é rentabilidade anual?
        </>
      )}
    </button>

    <AnimatePresence>
      {show && (
        <motion.div
          id="rendimento-info"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 p-4 bg-accent/10 rounded-xl text-dark text-sm shadow-inner overflow-hidden"
        >
          <p>
            Rentabilidade anual é o quanto seu investimento cresce em média por
            ano, em percentual. Por exemplo, se você investe R$10.000 e ao final
            do ano tem R$10.800, sua rentabilidade foi de 8%.
          </p>
          <p className="mt-2">
            <strong>Como saber a sua?</strong>
            <br />
            Consulte o histórico do seu investimento no banco ou corretora. Veja
            quanto ele cresceu no último ano e calcule a porcentagem de
            crescimento.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

export default RendimentoInfo;
