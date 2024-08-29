"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function LpPositionTracker() {
  const [entryPrice, setEntryPrice] = useState("");
  const [upperBoundPrice, setUpperBoundPrice] = useState("");
  const [lowerBoundPrice, setLowerBoundPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [depositedAmountTokenA, setDepositedAmountTokenA] = useState("");
  const [depositedAmountTokenB, setDepositedAmountTokenB] = useState("");
  const [initialPriceTokenA, setInitialPriceTokenA] = useState("");
  const [initialPriceTokenB, setInitialPriceTokenB] = useState("");
  const [finalPriceTokenA, setFinalPriceTokenA] = useState("");
  const [finalPriceTokenB, setFinalPriceTokenB] = useState("");
  const [collectedFees, setCollectedFees] = useState("");
  const [collectedRewards, setCollectedRewards] = useState("");
  const [positionValueInTokenA, setPositionValueInTokenA] = useState("");
  const [positionValueInTokenB, setPositionValueInTokenB] = useState("");
  const [positionValueIn50_50, setPositionValueIn50_50] = useState("");
  const [currentValueOfPosition, setCurrentValueOfPosition] = useState("");

  function handleInputEntryPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEntryPrice(e.target.value);
  }

  function handleInputUpperBoundPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUpperBoundPrice(e.target.value);
  }

  function handleInputLowerBoundPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLowerBoundPrice(e.target.value);
  }

  function handleInputCurrentPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPrice(e.target.value);
  }

  function handleInputDepositedAmountTokenAChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDepositedAmountTokenA(e.target.value);
  }

  function handleInputDepositedAmountTokenBChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDepositedAmountTokenB(e.target.value);
  }

  function handleInputInitialPriceTokenAChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInitialPriceTokenA(e.target.value);
  }

  function handleInputInitialPriceTokenBChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInitialPriceTokenB(e.target.value);
  }

  function handleInputFinalPriceTokenAChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFinalPriceTokenA(e.target.value);
  }

  function handleInputFinalPriceTokenBChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFinalPriceTokenB(e.target.value);
  }

  function handleInputCollectedFeesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCollectedFees(e.target.value);
  }

  function handleInputCollectedRewardsChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCollectedRewards(e.target.value);
  }

  return (
    <div className="flex flex-col gap-4 border-2 border-primary p-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">LP Position Tracker</h2>
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
        <Label htmlFor="currentPrice">Upper bound price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={upperBoundPrice}
          onChange={handleInputUpperBoundPriceChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Lower bound price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={lowerBoundPrice}
          onChange={handleInputLowerBoundPriceChange}
        />
      </div>
      <hr />
      <h3>Token A</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial amount</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={depositedAmountTokenA}
          onChange={handleInputDepositedAmountTokenAChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={initialPriceTokenA}
          onChange={handleInputInitialPriceTokenAChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Final price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={finalPriceTokenA}
          onChange={handleInputFinalPriceTokenAChange}
        />
      </div>
      <hr />
      <h3>Token B</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial amount</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={depositedAmountTokenB}
          onChange={handleInputDepositedAmountTokenBChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={initialPriceTokenB}
          onChange={handleInputInitialPriceTokenBChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Final price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={finalPriceTokenB}
          onChange={handleInputFinalPriceTokenBChange}
        />
      </div>
      <h3>Fees</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Collected fees</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={collectedFees}
          onChange={handleInputCollectedFeesChange}
        />
      </div>
      <h3>Rewards</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Collected rewards</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[300px] rounded-none"
          value={collectedRewards}
          onChange={handleInputCollectedRewardsChange}
        />
      </div>
      <h3>Value of position if held all in Token A</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Value</Label>
        <Input
          id="currentPrice"
          className="w-[300px] rounded-none"
          value={positionValueInTokenA}
        />
      </div>
      <h3>Value of position of held in 50/50 split</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Value</Label>
        <Input
          id="currentPrice"
          className="w-[300px] rounded-none"
          value={positionValueIn50_50}
        />
      </div>
      <h3>Current value of position</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Value</Label>
        <Input
          id="currentPrice"
          className="w-[300px] rounded-none"
          value={currentValueOfPosition}
        />
      </div>
    </div>
  )
}