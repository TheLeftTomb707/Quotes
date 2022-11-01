import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        async function Data() {
        var response = await fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`);
        const json = await response.json();
        var list = [];
        list.push( <>
            <h1>{json.quotes[Math.floor(Math.random()*102)].quote}</h1>
        </>
        )
        setQuote(list);
        }
        Data()
    }, []);

    return (
        <div id="content">
            {quote}
            <a href="/"><button id="but">Get New Quote</button></a>
        </div>
    );
};

export default App;