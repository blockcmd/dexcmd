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
    <div className="flex flex-col gap-4">
      <h1>dexCMD</h1>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Current price</Label>
        <Input
          placeholder="price"
          className="w-[200px]"
          value={currentPrice}
          onChange={handleInputCurrentPriceChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Lower bound percent</Label>
        <Input
          placeholder="%"
          className="w-[200px]"
          onChange={handleInputLowerBoundChange}
          value={lowerBound}
        />
      </div>
      <Input
        placeholder="Lower bound price"
        className="w-[200px]"
        value={lowerBoundPrice}
      />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Upper bound percent</Label>
        <Input
          placeholder="%"
          className="w-[200px]"
          onChange={handleInputUpperBoundChange}
          value={upperBound}
        />
      </div>
      <Input
        placeholder="Upper bound price"
        className="w-[200px]"
        value={upperBoundPrice}
      />
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
