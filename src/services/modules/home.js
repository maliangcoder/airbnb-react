import mlRequest from ".."

export function getHomeGoodPriceData() {
  return mlRequest.get({
    url: "/home/goodprice"
  })
}
