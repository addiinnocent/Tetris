const speed = 600;

async function init() {

    let block = await randomBlock()

    putBlock(block);

    for (let i = 0; i < field.length; i++) {
        console.count(field[i]);
    }
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

function putBlock(block) {
    return new Promise((resolve, reject) => {

        for (let i = 0; i < 4; i++) {
            field[i] = block[i] + field[i];
            field[i] = field[i].slice(0, 16);
        }
    });
}

init().catch((Error) => {
    console.log(Error)})

let gameClock = setInterval(() => {
}, speed);

