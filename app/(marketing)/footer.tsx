import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/gr.svg"
            alt="Deutsch"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Deutsch
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/uk.svg"
            alt="English"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            alt="Français"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Français
        </Button>
      </div>
    </footer>
  );
};
