import useAxios from "../Hooks/useAxios"
import {CoinTrending} from "./CoinTrending";
import {Skeleton} from "./Skeleton";

export const Trending = () => {
    const { response, loading } = useAxios('search/trending');
  
    if(loading) {
        return (
          <div className="wrapper-container mt-8">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
            <Skeleton className="h-8 w-full mt-2" />
          </div>
        )
      }

  return (
    <div className="mt-8">
    <h1 className="text-2xl mb-2 text-yellow-800">Trending</h1>
    {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
  </div>
  )
}

/*

const Trending = () => {
  

  return (
   
  )
}

export default Trending */