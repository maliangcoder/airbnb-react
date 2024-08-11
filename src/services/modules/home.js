import mlRequest from ".."

export function getHomeGoodPriceData() {
  return mlRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeDiscountData() {
  return mlRequest.get({
    url: "/home/discount"
  })
}

export function getHotRecommendData() {
  return mlRequest.get({
    url: '/home/hotrecommenddest'
  })
}
