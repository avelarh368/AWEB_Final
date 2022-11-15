import { Application, Sprite, Container } from 'pixi.js';

const drawMovie = () => {
  const pixiScreen = new Application({
    view: document.getElementById('pixi-canvas'),
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x08A4BD,
    height: 360,
    width: 480
  });
  
  const spriteContainer = new Container();
  spriteContainer.x = 60;
  spriteContainer.y = 60;
  pixiScreen.stage.addChild(spriteContainer);
  
  const seat = Sprite.from('C:/Users/Admin1/Documents/Dev/react/AWEB/frontEnd/public/img/theater/seat.png');
  seat.x = 100;
  seat.y = 100;
  spriteContainer.addChild(seat);
};

export default drawMovie;