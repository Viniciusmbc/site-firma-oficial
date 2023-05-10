type ChatMessageProps = {
  message: string;
  isOption?: boolean;
  handleOptionClick?: (message: string) => void;
};

const ChatMessage = ({
  message,
  isOption,
  handleOptionClick,
}: ChatMessageProps) => {
  return (
    <div className={`mb-2 ${isOption ? "text-center" : ""}`}>
      {isOption && (
        <div className="flex justify-center space-x-4 mt-2">
          <input
            type="radio"
            id={message}
            name="options"
            value={message}
            className="sr-only"
            onChange={() => handleOptionClick?.(message)}
          />
          <label
            htmlFor={message}
            className="bg-blue-500 text-white px-4 py-1 rounded-lg cursor-pointer select-none"
          >
            {message}
          </label>
          {/* Renderizar outras opções numéricas clicáveis aqui */}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
