import Link from "next/link";
import { ReactNode } from "react";

interface largeSqureMenuProps {
  icon: ReactNode;
  title: string;
  link: string;
  subtitle?: string;
}

export default function LargeSquareMenu(
  props: largeSqureMenuProps
): JSX.Element {
  return (
    <Link
      className="w-5/12 h-60 flex justify-center items-center border-2 rounded-xl grow cursor-pointer"
      href={`/search/${props.link}`}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        {props.icon}
        <span className="font-bold text-2xl">{props.title}</span>
      </div>
      <span className="text-slate-400">{props.subtitle}</span>
    </Link>
  );
}
