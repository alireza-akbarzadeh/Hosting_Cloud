export type BuyOrderRequestParams = {
    currency: string;
    amount: number;
    price: number;
    network?: string;
};

// export async function buyOrderRequestDS<T = any>(model: BuyOrderRequestParams) {
//     return http.post<T>("/orderRequest/buy", model);


// export function usePurchaseStepsDS(id: string, config?: DefaultFetchConfig) {
//     return useFetch(id ? "/orderRequest/buy/" + id : null, {
//         revalidateOnFocus: false, //true
//         revalidateOnMount: false, //true
//         // revalidateOnReconnect: false, //true
//         // refreshWhenOffline: false, //false
//         // refreshWhenHidden: false, //false
//         // refreshInterval: 0, //disabled = 0
//         ...config,
//     });
// }


