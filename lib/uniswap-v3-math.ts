import JSBI from 'jsbi';

const Q96 = JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(96));

function getTickAtSqrtPrice(sqrtPriceX96: any){
	let tick = Math.floor(Math.log((sqrtPriceX96/Number(Q96))**2)/Math.log(1.0001));
	return tick;
}

async function getTokenAmounts(liquidity: any,sqrtPriceX96: any,tickLow: any,tickHigh: any,Decimal0: any,Decimal1: any){
	let sqrtRatioA = Math.sqrt(1.0001**tickLow);
	let sqrtRatioB = Math.sqrt(1.0001**tickHigh);
	let currentTick = getTickAtSqrtPrice(sqrtPriceX96);
       let sqrtPrice = sqrtPriceX96 / Number(Q96);
	let amount0 = 0;
	let amount1 = 0;
	if(currentTick < tickLow){
		amount0 = Math.floor(liquidity*((sqrtRatioB-sqrtRatioA)/(sqrtRatioA*sqrtRatioB)));
	}
	else if(currentTick >= tickHigh){
		amount1 = Math.floor(liquidity*(sqrtRatioB-sqrtRatioA));
	}
	else if(currentTick >= tickLow && currentTick < tickHigh){ 
		amount0 = Math.floor(liquidity*((sqrtRatioB-sqrtPrice)/(sqrtPrice*sqrtRatioB)));
		amount1 = Math.floor(liquidity*(sqrtPrice-sqrtRatioA));
	}

	let amount0Human = (amount0/(10**Decimal0)).toFixed(Decimal0);
	let amount1Human = (amount1/(10**Decimal1)).toFixed(Decimal1);

	console.log("Amount Token0 in lowest decimal: "+amount0);
	console.log("Amount Token1 in lowest decimal: "+amount1);
	console.log("Amount Token0 : "+amount0Human);
	console.log("Amount Token1 : "+amount1Human);
	return [amount0, amount1]
}

