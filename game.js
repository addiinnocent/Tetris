const speed = 600;

let initialised = false;


init().then((block) => {
    let gameClock = setInterval(() => {

        resetField().then( () => {
            putBlock(block, 1).then ( () =>{
                for (let i = 0; i < field.length; i++) {
                    console.count(field[i]);
                }
            });
        });

    }, speed);

}).catch((Error) => {
    console.log(Error)
})



function init() {
    return new Promise((resolve, reject) => {
        let block = randomBlock().then(block => {

            putBlock(block, 0).then(() => {

                initialised = true;
                resolve(block);

            })
        })


    });
}

function resetField(){
    return new Promise( (resolve, reject) =>{

    })

}

function randomBlock() {
    return new Promise((resolve, reject) => {

        let blocks = [
            block_reversel,
            block_l,
            block_reversel,
            block_z,
            block_reversez,
            block_long,
            block_square,
            block_t
        ]

        let block = blocks[Math.round(Math.random() * blocks.length)]

        resolve(block);

    });
}

function putBlock(block, position) {
    return new Promise((resolve, reject) => {

        for (let i = 0; i < 4; i++) {
            field[i+position] = block[i] + field[i]; //Zeile
            field[i] = field[i].slice(0, 16); //Zeile
        }
    });
}

function moveBlock(block, field) {
    return new Promise( (resolve, reject) => {

    })
}




//Letzter stand:  resetField in gameClock