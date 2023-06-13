import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import iconeChat from "public/chatbotImg/iconeChat.png";

interface ChatBubbleProps {
  message: string;
}

const chatBubbleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const chatWindowVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedTimeframe, setSelectedTimeframe] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(() => {
    calculateEstimatedPrice();
  }, [selectedOption, selectedTimeframe]);

  const handleClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (userName === "") {
      setUserName(userMessage);
      setWelcomeMessage(
        `Bem-vindo, ${userMessage}.
         O que você deseja contratar?`
      );
      setUserMessage("");
    } else if (selectedOption && selectedTimeframe) {
      const message = `Olá, meu nome é ${userName} e gostaria de fazer um orçamento para ${selectedOption} com prazo ${selectedTimeframe}.`;
      const whatsappURL = `https://api.whatsapp.com/send?phone=555591897784&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleGoBack = () => {
    if (selectedTimeframe) {
      setSelectedTimeframe(""); // Reset the selected timeframe state
    } else if (selectedOption) {
      setSelectedOption(""); // Reset the selected option state
    }
  };

  const formatSelectedOption = (option: string) => {
    // Substitui o hífen por espaço em branco
    return option.replace(/-/g, " ").toUpperCase();
  };

  const calculateEstimatedPrice = () => {
    if (selectedOption && selectedTimeframe) {
      let basePrice = 0;
      switch (selectedOption) {
        case "sites-institucionais":
          basePrice = 600;
          break;
        case "loja-virtual":
          basePrice = 1000;
          break;
        case "sites-imoveis":
          basePrice = 1100;
          break;
        default:
          basePrice = 0;
      }

      let priceMultiplier = 1;
      switch (selectedTimeframe) {
        case "prazo-curto":
          priceMultiplier = 1.2;
          break;
        case "prazo-medio":
          priceMultiplier = 1.5;
          break;
        case "prazo-longo":
          priceMultiplier = 2;
          break;
        default:
          priceMultiplier = 1;
      }

      const estimatedPrice = basePrice * priceMultiplier;
      setEstimatedPrice(estimatedPrice);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <img
          src="https://res.cloudinary.com/deaejawfj/image/upload/v1686663128/iconeChat_ly8vce.webp"
          width={100}
          height={100}
          alt="Chat Bot Icon"
          className="w-full h-full max-w-[100px] max-h-[100px] shadow rounded-full animate-pulse"
        />
        <motion.div
          className="bg-blue-500 text-black font-semibold text-lg px-4 py-2 rounded-lg cursor-pointer"
          initial="hidden"
          animate={isChatOpen ? "hidden" : "visible"}
          variants={chatBubbleVariants}
          onClick={handleClick}
        >
          {message}
        </motion.div>
      </div>
      {isChatOpen && (
        <>
          <motion.div
            className="fixed bottom-4 right-4 bg-white w-full max-w-xs max-h-[80vh] border border-gray-300 rounded-lg mt-8 p-4 overflow-y-auto"
            initial="hidden"
            animate="visible"
            variants={chatWindowVariants}
          >
            {userName === "" ? (
              <>
                <motion.div
                  className="bg-blue-500 text-black px-4 py-2 rounded-lg text-center text-lg"
                  initial="hidden"
                  animate="visible"
                  variants={chatBubbleVariants}
                >
                  Qual seu nome?
                </motion.div>
                <input
                  type="text"
                  value={userMessage}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome..."
                  className="w-full p-2 border border-gray-300 rounded mt-4"
                />
                <div className="flex justify-between mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-black rounded-lg"
                    onClick={handleSendMessage}
                  >
                    Enviar
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-black rounded-lg ml-2"
                    onClick={handleCloseChat}
                  >
                    Fechar
                  </button>
                </div>
              </>
            ) : selectedOption === "" ? (
              <>
                <motion.div
                  className="bg-blue-500 text-black px-4 py-2 rounded-lg text-center text-lg"
                  initial="hidden"
                  animate="visible"
                  variants={chatBubbleVariants}
                >
                  {welcomeMessage}
                </motion.div>
                <div className="space-y-2 mt-4 flex flex-col">
                  <h3 className="font-bold">
                    Selecione o que você deseja desenvolver:
                  </h3>
                  <label>
                    <input
                      type="radio"
                      name="options"
                      value="sites-institucionais"
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Sites institucionais (Landing Page, Website empresarial,
                    Blog, Sites de Noticias)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="options"
                      value="loja-virtual"
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Loja Virtual - e-commerce
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="options"
                      value="sites-imoveis"
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Sites de Imóveis (Imobiliárias e corretores)
                  </label>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-black rounded-lg"
                    onClick={handleSendMessage}
                  >
                    Enviar
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-black rounded-lg ml-2"
                    onClick={handleCloseChat}
                  >
                    Fechar
                  </button>
                </div>
              </>
            ) : (
              <>
                <motion.div
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center text-lg"
                  initial="hidden"
                  animate="visible"
                  variants={chatBubbleVariants}
                >
                  {formatSelectedOption(selectedOption)} -{" "}
                  {formatSelectedOption(selectedTimeframe)}
                </motion.div>
                <div className="space-y-2 mt-4 flex flex-col">
                  <h3 className="font-bold">Selecione um prazo estimado:</h3>
                  <label>
                    <input
                      type="radio"
                      name="timeframe"
                      value="prazo-curto"
                      onChange={(e) => setSelectedTimeframe(e.target.value)}
                    />
                    Prazo curto (até 1 semana)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="timeframe"
                      value="prazo-medio"
                      onChange={(e) => setSelectedTimeframe(e.target.value)}
                    />
                    Prazo médio (1 a 2 semanas)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="timeframe"
                      value="prazo-longo"
                      onChange={(e) => setSelectedTimeframe(e.target.value)}
                    />
                    Prazo longo (mais de 2 semanas)
                  </label>
                </div>
                {estimatedPrice > 0 && (
                  <div className="text-center text-gray-600 mt-2">
                    Preço estimado: R${estimatedPrice.toFixed(2)}
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={handleSendMessage}
                  >
                    Enviar
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2"
                    onClick={handleGoBack}
                  >
                    Voltar
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2"
                    onClick={handleCloseChat}
                  >
                    Fechar
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ChatBubble;
