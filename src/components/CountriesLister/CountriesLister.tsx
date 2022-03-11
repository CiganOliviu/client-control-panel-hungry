import React from "react";
import { Country } from "../../helpers/types";

function CountriesLister({ countries }: {countries: any}) {

    return (
        <div>
            {
                countries.map((data: Country) => <h2>{data?.name}</h2>)
            }
        </div>
    )
}

export default CountriesLister;