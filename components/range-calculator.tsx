"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function RangeCalculator() {
  const [rangeSync, setRangeSync] = useState(false);
  const [upperBound, setUpperBound] = useState("");
  const [lowerBound, setLowerBound] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [upperBoundPrice, setUpperBoundPrice] = useState("");
  const [lowerBoundPrice, setLowerBoundPrice] = useState("");

  function handleInputUpperBoundChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUpperBound(e.target.value);
    if (rangeSync) {
      setLowerBound(e.target.value);
    }
    const newUpperBoundPrice =
      (parseFloat(e.target.value) / 100 + 1) * parseFloat(currentPrice);
    setUpperBoundPrice(newUpperBoundPrice.toString());
  }

  function handleInputLowerBoundChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLowerBound(e.target.value);
    if (rangeSync) {
      setUpperBound(e.target.value);
    }
    const newLowerBoundPrice =
      (1 - parseFloat(e.target.value) / 100) * parseFloat(currentPrice);
    setLowerBoundPrice(newLowerBoundPrice.toString());
  }

  function handleInputCurrentPriceChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setCurrentPrice(e.target.value);
  }

  return (
    <div className="flex flex-col gap-4 border-2 border-primary p-4 w-fit">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Range Calculator</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Current price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={currentPrice}
          onChange={handleInputCurrentPriceChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Upper bound percent</Label>
        <Input
          placeholder="%"
          className="w-[300px] rounded-none"
          onChange={handleInputUpperBoundChange}
          value={upperBound}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Upper bound price</Label>
        <Input
          placeholder="Upper bound price"
          className="w-[300px] rounded-none"
          value={upperBoundPrice}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="lowerBoundPercent">Lower bound percent</Label>
        <Input
          id="lowerBoundPercent"
          placeholder="%"
          className="w-[300px] rounded-none"
          onChange={handleInputLowerBoundChange}
          value={lowerBound}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="lowerBoundPrice">Lower bound price</Label>
        <Input
          id="lowerBoundPrice"
          placeholder="Lower bound price"
          className="w-[300px] rounded-none"
          value={lowerBoundPrice}
        />
      </div>
      <div className="items-top flex space-x-2">
        <Checkbox
          id="terms"
          checked={rangeSync}
          onCheckedChange={() => setRangeSync(!rangeSync)}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Equal range on both sides
        </label>
      </div>
    </div>
  );
}
