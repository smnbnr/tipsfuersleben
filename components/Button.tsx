import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ text, href, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="border border-black border-dotted font-bold w-full h-12 flex justify-center items-center gap-2 mt-2 bg-cyan-200"
    >
      {href ? <Link href={href}>{text}</Link> : text}
    </button>
  );
};

export default Button;
