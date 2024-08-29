import RangeCalculator from "@/components/range-calculator";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-12">
        dexCMD
      </h1>
      <RangeCalculator />
    </div>
  );
}
