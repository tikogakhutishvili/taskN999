let arr = [
    {
        name:"nikooo",
        proffession: undefined,
        birthyear: 2001
    },
    {
        name:"tikoo",
        proffession: "dancer...shmancer",
        birthyear: 2003
    },
    {
        name:"makvala",
        proffession: "fruit collector",
        birthyear: 1933
    },
    {
        name:"QueenB",
        proffession: "singer",
        birthyear: 1981
    }
]
let years = arr.map(item => item.birthyear).sort( (a,b) => b-a)
console.log(years)
document.getElementById("years").innerHTML = years;
//// ტვინი ვარრ ორი ერთში გავაკეთე დდ



let Arr = [
    {
        user:"skvincha.097",
        proffession: undefined,
        birthyear: 2011
    },
    {
        user:"nugzari/makvalasi_forevaa",
        proffession: "shofeerr",
        birthyear: 1925
    },
    {
        user:"basti_chemicuga2019",
        proffession: "pet",
        birthyear: 2019
    },
    {
        user:"QueenB",
        proffession: "singer",
        birthyear: 1981
    }
]
let User = document.getElementById("user").innerHTML = Arr.map(item => item.user).join(" ,  ")
let Proffession = document.getElementById("proffession").innerHTML = Arr.map(item => item.proffession).join(" ,  ")
let Birthyear= document.getElementById("birthyear").innerHTML = Arr.map(item => item.birthyear).join(" ,  ")



let arr1 = [
    {
        laptop: "Apple",
        price: "99999"
    },
    {
        laptop: "Lenovo",
        price: "2300"
    },
    {
        laptop: "Acer",
        price: "1999"
    },
    {
        laptop: "HP",
        price: "1500"
    },
    {
        laptop: "Asus",
        price: "2500"
    },
    {
        laptop: "Dell",
        price: "4000"
    },
]
let max = arr1.map(item => item.price).sort((a,b) => a-b)
console.log(max[max.length-1])