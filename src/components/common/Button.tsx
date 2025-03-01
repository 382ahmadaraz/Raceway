interface ButtonProps {
  text?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
  customButtonStyle?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClick,
  children,
  customButtonStyle,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-base font-medium text-center text-white bg-[#FD0000] ${customButtonStyle}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
