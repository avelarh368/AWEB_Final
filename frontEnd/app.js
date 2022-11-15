import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3002);

app.listen(app.get('port'), () => {
  console.log(`Escuchando puerto ${app.get('port')}`);
});