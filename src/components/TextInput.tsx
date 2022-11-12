import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputInputProps) {
  return (
    <div className="py-4 px-3 rounded bg-gray-800 text-gray-100 w-full text-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300 outline-none">
      {children}
    </div>
  );
}
function TextInputIcon() {}

function TextInputInput({ ...props }: TextInputInputProps) {
  return <input className={""} {...props} />;
}
