import './App.css';
import rates from './const';
import money from './images/money.png';
import CurrencyLine from './images/components/CurrencyLine';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowUp, faArrowDown);

function App() {
	const [currencyTop, setCurrencyTop] = useState('EUR');
	const [currencyBot, setCurrencyBot] = useState('USD');
	const [currencyTopValue, setCurrencyTopValue] = useState('');
	const [currencyBotValue, setCurrencyBotValue] = useState('');

	const currencyList = Object.keys(rates);

	const convertCurrency = (start, startCurrency, toConvert, direction) => {
		let currencyConverted;
		if (direction === 'normal' && currencyTopValue) {
			currencyConverted = (start / Number(rates[startCurrency])) * Number(rates[toConvert]);
			return setCurrencyBotValue(currencyConverted.toFixed(2));
		} else if (direction === 'reverse' && currencyBotValue) {
			currencyConverted = (start / Number(rates[startCurrency])) * Number(rates[toConvert]);
			return setCurrencyTopValue(currencyConverted.toFixed(2));
		}
	};

	return (
		<>
			<header>
				<img src={money} alt="money"></img>
				<h1>Converter</h1>
				<img src={money} alt="money"></img>
			</header>
			<main className="currency-wrapper">
				<CurrencyLine list={currencyList} currency={currencyTop} currencyState={setCurrencyTop} currencyValue={currencyTopValue} setCurrencyValue={setCurrencyTopValue} defaultCurrency={'EUR'}></CurrencyLine>
				<section className="button-converter">
					<button
						onClick={() => {
							convertCurrency(currencyTopValue, currencyTop, currencyBot, 'normal');
						}}
					>
						<FontAwesomeIcon className="arrow-icon" icon="fa-solid fa-arrow-down" />
					</button>
					<button
						onClick={() => {
							convertCurrency(currencyBotValue, currencyBot, currencyTop, 'reverse');
						}}
					>
						<FontAwesomeIcon className="arrow-icon" icon="fa-solid fa-arrow-up" />
					</button>
				</section>
				<CurrencyLine list={currencyList} currency={currencyBot} currencyState={setCurrencyBot} currencyValue={currencyBotValue} setCurrencyValue={setCurrencyBotValue} defaultCurrency={'USD'}></CurrencyLine>
			</main>
		</>
	);
}

export default App;
