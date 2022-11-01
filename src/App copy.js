import React, { useEffect, useState } from "react";

const App = () => {
    const [country, setCountry] = useState("");

    useEffect(() => {
        async function Data() {
        var response = await fetch(``);
        const json = await response.json();
        var list = [];
        list.push( <>
            <h1></h1>
        </>
        )
        setCountry(list);
        }
        Data()
    }, []);

    return (
        <div id="content">
            {country}
        </div>
    );
};

export default App;