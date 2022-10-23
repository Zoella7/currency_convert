import {Header} from "./Header";
import {CurrencyComponent} from "./CurrencyComponent";
import "./App.css"
import {useEffect, useState} from "react";

const baseURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'


function App () {

    const [allcurrency, setCurrency] = useState([]);

    useEffect(() => {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                setCurrency([...data])
            }, [])
        return (
            <div>
                <Header allcurrency={allcurrency}/>
                <CurrencyComponent
                    allcurrency={allcurrency}
                />
                {/*<div> =</div>*/}
                {/*<CurrencyComponent*/}
                {/*    allcurrency={allcurrency}*/}
                {/*/>*/}
            </div>)

    })
}
export default App;
