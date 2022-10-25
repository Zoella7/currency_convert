import React from 'react';

const CurrencyComponent = ({allCurrency, defaultValue,onChangeValue,amountValue,onChangeAmount}) => {

    // const {ccy, base_ccy} = allCurrency

    return (
        <div>
            <input type="number" value={amountValue} onChange={onChangeAmount}/>
            <select value={defaultValue} onChange={onChangeValue}>
                {allCurrency.map((value,index) => <option key={index} value={value}>{value}</option>)}
            </select>
            
        </div>
    );
};

export {CurrencyComponent};