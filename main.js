const endpoint = "https://api-berita-indonesia.vercel.app/"


async function hitAPI() {
    const api = await fetch(endpoint)
    const data = await api.json()
    console.log(data)
}

hitAPI()
