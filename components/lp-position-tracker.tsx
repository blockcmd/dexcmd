"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast"

export default function LpPositionTracker() {
  const { toast } = useToast()
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
  const [initialValueUponDeposit, setInitialValueUponDeposit] = useState("");
  const [positionValueInTokenA, setPositionValueInTokenA] = useState("");
  const [positionValueInTokenB, setPositionValueInTokenB] = useState("");
  const [positionValueIn50_50, setPositionValueIn50_50] = useState("");
  const [currentValueOfPosition, setCurrentValueOfPosition] = useState("");
  const [currentValueOfPositionWithFeesAndRewards, setCurrentValueOfPositionWithFeesAndRewards] = useState("");
  const [impermanentLoss, setImpermanentLoss] = useState("");
  const [differenceComparedToHoldingTokenA, setDifferenceComparedToHoldingTokenA] = useState("");


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

  function handleInputCurrentValueOfPositionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentValueOfPosition(e.target.value);
  }

  function calculateDifferentValuesOfPosition() {
    const initialValueUponDeposit = parseFloat(depositedAmountTokenA) * parseFloat(initialPriceTokenA) + parseFloat(depositedAmountTokenB) * parseFloat(initialPriceTokenB);
    const positionValueInTokenA = parseFloat(depositedAmountTokenA) * 2 * parseFloat(finalPriceTokenA);
    const positionValueInTokenB = parseFloat(depositedAmountTokenB) * 2 * parseFloat(finalPriceTokenB);
    const positionValueIn50_50 = (parseFloat(depositedAmountTokenA) * parseFloat(finalPriceTokenA) + parseFloat(depositedAmountTokenB) * parseFloat(finalPriceTokenB));
    const currentValueOfPositionWithFeesAndRewards = parseFloat(currentValueOfPosition) + parseFloat(collectedFees) + parseFloat(collectedRewards);
    const impermanentLoss = currentValueOfPositionWithFeesAndRewards - positionValueIn50_50;
    const differenceComparedToHoldingTokenA = currentValueOfPositionWithFeesAndRewards - positionValueInTokenA;
    setInitialValueUponDeposit(initialValueUponDeposit.toString());
    setPositionValueInTokenA(positionValueInTokenA.toString());
    setPositionValueInTokenB(positionValueInTokenB.toString());
    setPositionValueIn50_50(positionValueIn50_50.toString());
    setCurrentValueOfPositionWithFeesAndRewards(currentValueOfPositionWithFeesAndRewards.toString());
    setImpermanentLoss(impermanentLoss.toString());
    setDifferenceComparedToHoldingTokenA(differenceComparedToHoldingTokenA.toString());
    toast({
      description: "Position calculated!",
    })
  }

  return (
    <div className="flex flex-col gap-4 border-2 border-primary p-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">LP Position Tracker</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Entry price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={entryPrice}
          onChange={handleInputEntryPriceChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Upper bound price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={upperBoundPrice}
          onChange={handleInputUpperBoundPriceChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Lower bound price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={lowerBoundPrice}
          onChange={handleInputLowerBoundPriceChange}
        />
      </div>
      <hr />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Token A</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial amount</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={depositedAmountTokenA}
          onChange={handleInputDepositedAmountTokenAChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={initialPriceTokenA}
          onChange={handleInputInitialPriceTokenAChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Final price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={finalPriceTokenA}
          onChange={handleInputFinalPriceTokenAChange}
        />
      </div>
      <hr />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Token B</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial amount</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={depositedAmountTokenB}
          onChange={handleInputDepositedAmountTokenBChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={initialPriceTokenB}
          onChange={handleInputInitialPriceTokenBChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Final price</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={finalPriceTokenB}
          onChange={handleInputFinalPriceTokenBChange}
        />
      </div>
      <hr />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Fees & Rewards</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Collected fees</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={collectedFees}
          onChange={handleInputCollectedFeesChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Collected rewards</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={collectedRewards}
          onChange={handleInputCollectedRewardsChange}
        />
      </div>
      <hr />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Current value</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Value</Label>
        <Input
          id="currentPrice"
          placeholder="price"
          className="w-[450px] rounded-none"
          value={currentValueOfPosition}
          onChange={handleInputCurrentValueOfPositionChange}
        />
      </div>
      <br />
      <Button className="w-fit" onClick={calculateDifferentValuesOfPosition}>Calculate</Button>
      <hr />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Calculated values</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Initial value upon deposit</Label>
        <Input
          id="currentPrice"
          className="w-[450px] rounded-none"
          value={initialValueUponDeposit}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Value of position if held all in Token A</Label>
        <Input
          id="currentPrice"
          className="w-[450px] rounded-none"
          value={positionValueInTokenA}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Value of position if held all in Token B</Label>
        <Input
          id="currentPrice"
          className="w-[450px] rounded-none"
          value={positionValueInTokenB}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Value of position of held in 50/50 split</Label>
        <Input
          id="currentPrice"
          className="w-[450px] rounded-none"
          value={positionValueIn50_50}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Current value of position with fees and rewards</Label>
        <Input
          id="currentPrice"
          className="w-[450px] rounded-none"
          value={currentValueOfPositionWithFeesAndRewards}
        />
      </div>
      <hr />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Comparisons</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Impermanent loss</Label>
        <Input
          id="currentPrice"
          className="w-[450px] rounded-none"
          value={impermanentLoss}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="currentPrice">Compared to holding Token A</Label>
        <Input
          id="currentPrice"
          className="w-[450px] rounded-none"
          value={differenceComparedToHoldingTokenA}
        />
      </div>
    </div>
  )
}