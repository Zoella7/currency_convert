import React from 'react';

const CurrencyComponent = ({allcurrency}) => {

    const {ccy,base_ccy} = allcurrency

    return (
        <div>
            <input type="number"/>
            <select>
                {allcurrency.map(value=><option value={value.ccy}>{value.ccy}</option>)}
            </select>

            <input type="number"/>
            <select>
                {allcurrency.map(value=><option value={value.base_ccy}>{value.base_ccy}</option>)}
            </select>
                    </div>
    );
};

export {CurrencyComponent};