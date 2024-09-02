import mlRequest from '..'

export function getEntireRoomList(offset = 0, size = 20) {
  return mlRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}
