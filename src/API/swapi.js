const getResource = async resourceName => {
  const max = resourceName === "people" ? 88 : 36
  const id = getRandomIntInclusive(1, max)
  const url = `https://swapi.co/api/${resourceName}/${id}/?format=json`
  const response = await fetch(url)
  const resource = await response.json()
  return resource
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getResource
