import { requestUrls } from "./requestUrls"
import useCustomFetch from "./useCustomFetch"

export const useCustomFetchCountries = () => {
    const {
        error: serverErrorCountries,
        data: apiDataCountries,
        isLoading: isLoadingCountries,
    } = useCustomFetch(requestUrls.fetchCountries);

    return { isLoadingCountries, serverErrorCountries, apiDataCountries };
}

export const useCustomFetchCountryDetail = (id: string | undefined) => {
    const {
        error: serverErrorCountryDetail,
        data: apiDataCountryDetail,
        isLoading: isLoadingCountryDetail,
    } = useCustomFetch(`${requestUrls.fetchCountries}/${id}`)

    console.log(`${requestUrls.fetchCountries}/${id}`);

    return { isLoadingCountryDetail, serverErrorCountryDetail, apiDataCountryDetail}
}