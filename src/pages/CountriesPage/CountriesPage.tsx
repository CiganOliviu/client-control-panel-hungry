import React, { useEffect, useState } from "react";
import { useCustomFetchCountries } from "../../backendApi/apiCalls";
import CountriesLister from "../../components/CountriesLister/CountriesLister";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function CountriesPage() {

    const [countries, setCountries] = useState([]);
    const { serverErrorCountries, apiDataCountries } = useCustomFetchCountries();
    
    useEffect(() => {
        if (apiDataCountries) {
            setCountries(apiDataCountries);
        }
    }, [apiDataCountries])

    useEffect(() => {
        if (serverErrorCountries) {
            throw new Error("Error when fetching countries data from restapi");
        }
    }, [serverErrorCountries])

    return (
        <div>
            <Header />
                <CountriesLister countries={countries} />
            <Footer />
        </div>
    )
}

export default CountriesPage;