const speed = 6000;
const canvas = document.querySelector('canvas');
const img = document.createElement('img');

canvas.width = 400;
canvas.height = 600;
canvas.style.border = '1px solid black';
img.src = './block.svg';

init().then((block) => {
    let gameClock = setInterval(() => {

      putBlock(block, 0).then((field) =>{
        renderField(field).then( () => {

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
                resolve(block);
            })
        })
    });
}

function renderField(field){
    return new Promise( (resolve, reject) => {
      for (let i = 0; i < field.length; i++) {
          console.count(field[i]);
      }
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(img, 0, 0, 20, 20);
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
          let field_row = field[i].split(''); //reihe zu array
          let block_row = block[i].split('');
          for(let j = 0; j < 16; j++) {
            if (block_row[j]) field_row[j] = block_row[j]; //wenn block einen wert an der stelle hat eintragen ansonsten o
            else field_row[j] = 'o';
          }
          field[i] = field_row.join(''); //array wieder zu string reihe
        }
        resolve(field);
    });
}

function moveBlock(block, field) {
    return new Promise( (resolve, reject) => {

    })
}




//Letzter stand:  resetField in gameClock
