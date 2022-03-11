import React from "react";
import { Country } from "../../helpers/types";

function CountriesLister({ countries }: {countries: any}) {

    return (
        <div>
            {
                countries.map((data: Country) => <div key={ data?.name }><a href="#">{ data?.name }</a> <br/></div>)
            }
        </div>
    )
}

export default CountriesLister;