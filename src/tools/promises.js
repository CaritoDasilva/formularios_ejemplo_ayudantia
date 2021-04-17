var isMatch = false;
//define la promesa
const thatCuteGuyCallMe = new Promise((resolve, reject) => {
    if (isMatch) {
        resolve('Jump girl jump!')
    }
    else {
        let reason = new Error('Never mind theres another fish in the sea');
        reject(reason);
    }
})

//Llama la promesa
const lookThePhone = () => {
    thatCuteGuyCallMe.then(response => console.log('Respuesta => ', response))
        .catch(err => console.log(err))
}

//ejecuta la función que llamaz la función
lookThePhone()

//async await :O