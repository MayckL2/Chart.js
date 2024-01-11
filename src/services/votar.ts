export default function votar(e: string | null) {
    console.log(e)

    let obj: { name: string, votos: number }[]
    if (localStorage.getItem('data')) {
      let data = JSON.parse(localStorage.getItem('data') || '{}')
      console.log(data[0].votos)
      obj = [
        { name: 'final fantasy', votos: e == 'final fantasy' ? data[0].votos + 1 : data[0].votos },
        { name: 'skyrim', votos: e == 'Skyrim' ? data[1].votos + 1 : data[1].votos },
        { name: 'fire emblem', votos: e == 'Fire emblem' ? data[2].votos + 1 : data[2].votos }
      ]
      localStorage.setItem('data', JSON.stringify(obj))
    } else {
      obj = [
        { name: 'final fantasy', votos: e == 'final fantasy' ? 1 : 0 },
        { name: 'skyrim', votos: e == 'Skyrim' ? 1 : 0 },
        { name: 'fire emblem', votos: e == 'Fire emblem' ? 1 : 0 }
      ]
      localStorage.setItem('data', JSON.stringify(obj))
    }

    return true
  }