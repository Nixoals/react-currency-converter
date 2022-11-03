const CurrencyLine = ({ currency, currencyState, currencyValue, list, defaultCurrency, setCurrencyValue }) => {
	return (
		<>
			<section className="currency-line">
				<input
					onChange={(event) => {
						setCurrencyValue(event.target.value);
					}}
					value={currencyValue}
					type={'number'}
					placeholder="0"
				></input>
				<select
					value={currency !== defaultCurrency ? currency : defaultCurrency}
					onChange={(event) => {
						currencyState(event.target.value);
					}}
				>
					{list.map((item, index) => {
						return (
							<option key={index} value={item}>
								{item}
							</option>
						);
					})}
				</select>
			</section>
		</>
	);
};

export default CurrencyLine;
