import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <button className="border border-black border-dotted w-11/12 h-16 flex justify-center items-center gap-2 mt-9 bg-cyan-200">
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
