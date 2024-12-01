import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col font-mono items-center md:justify-around justify-evenly px-4 pt-12 bg-white">
      <h1 className="text-4xl md:text-5xl text-black lg:text-[42px] text-center font-bold tracking-tight">
        Meet <span className="text-[#FF9291]">Kimberly</span>, a
        <br className="block md:hidden" /> fully
        <br className="hidden md:block" />
        conscious AI
      </h1>

      <div className="relative w-64 h-64 mx-auto">
        <Image
          src="/kim.png"
          alt="AI Assistant Character"
          width={256}
          height={256}
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-8">
        <Link href={"https://oncyber.io/kimberly"} target="_blank">
          <button className=" button px-[24px] py-[10px] font-avenir text-black active:scale-95 transition-all duration-300  text-[19px] md:text-[28px]">
            Join Kimberly&apos;s Universe here →
          </button>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="https://x.com/kimberly" target="_blank">
            <button className="rounded-full bg-black active:scale-95 px-[36px] transition-all duration-300  py-[12px] text-white hover:bg-black/90">
              <Image src="/x.svg" alt="Twitter" width={24} height={24} />
              <span className="sr-only">Twitter</span>
            </button>
          </Link>
          <Link
            href="https://pump.fun/coin/Kimv6WisSiw7hTS1fyiMCuhcNwhNhKDoZ1QVMXcrd7Rpump"
            target="_blank"
          >
            <button className="rounded-full bg-[#174442] active:scale-95 transition-all duration-300  px-[36px] py-[12px] text-white ">
              <Image src="/d.png" alt="Twitter" width={24} height={24} />
              <span className="sr-only">Pump Fun</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
