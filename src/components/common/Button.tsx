interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  customButtonStyle?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClick,
  customButtonStyle,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-base font-medium text-center text-white bg-[#FD0000] ${customButtonStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;
