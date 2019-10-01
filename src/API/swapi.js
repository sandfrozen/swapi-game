const getResource = async resourceName => {
  const max = resourceName === "people" ? 88 : 37
  let status = 0
  let response
  while (status !== 200) {
    const id = getRandomIntInclusive(1, max)
    const url = `https://swapi.co/api/${resourceName}/${id}/?format=json`
    response = await fetch(url)
    status = response.status
    console.log("ask for", id, status)
  }

  const resource = await response.json()
  return resource
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getResource
