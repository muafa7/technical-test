import { getFruitData } from "./fruitData.js";

const data = getFruitData();

const getFruitName = () => { 
    const fruitByType =[]
    data.filter((fruit) => {
        if (!fruitByType.includes(fruit.fruitName.toLowerCase())) {
            return fruitByType.push(fruit.fruitName.toLowerCase())
        }
    })
    return fruitByType
}

const getFruitType = () => {
    const groupByType = {}
    data.forEach(fruit => {
        if (groupByType.hasOwnProperty(fruit.fruitType) && !groupByType[fruit.fruitType].includes(fruit.fruitName.toLowerCase())) {
            groupByType[fruit.fruitType].push(fruit.fruitName.toLowerCase())
        }
        else {
            groupByType[fruit.fruitType] = [fruit.fruitName.toLowerCase()]
        }
    })

    return JSON.stringify(groupByType)
}

const getFruitStock = () => {
    const groupByType = {}
    data.forEach(fruit => {
        if (groupByType.hasOwnProperty(fruit.fruitType)) {
            groupByType[fruit.fruitType].push(fruit)
        }
        else {
            groupByType[fruit.fruitType] = [fruit]
        }
    })

    for (const prop in groupByType){
        const sumStock = groupByType[prop].map(fruit => fruit.stock).reduce((previous, current) => previous + current)
        groupByType[prop] = sumStock
    }

    const fruitStock = groupByType

    return JSON.stringify(fruitStock)
}

console.log(`1. Buah apa saja yang dimiliki Andi? ${getFruitName()}\n`)
console.log(`2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah.
 Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah? 
 ${getFruitType()}\n`)
console.log(`3. Berapa total stock buah yang ada di masing-masing wadah? 
${getFruitStock()}\n`)
console.log(`Apakah ada komentar terkait kasus di atas?
Kurma dengan KURMA apakah jenis yang sama? Kalau sama, menurut saya lebih baik digabung untuk menghindari duplikasi`)