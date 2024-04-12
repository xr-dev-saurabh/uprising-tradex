import { SvgMask } from "./ui/SvgMask";

export function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center  overflow-hidden">
      <SvgMask
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="h-screen w-full border rounded-md"
      >
        The first rule of <span className="text-red-500">MRR Club</span> is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        talk about <span className="text-red-500">MRR Club</span>.
      </SvgMask>
    </div>
  );
}
