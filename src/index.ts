import app from './server';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({path: '.env'});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.DB_CONNECTION;

mongoose.connect(MONGODB_URI).then(() => {
    console.log("Conectado a la base de datos");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos: ", error);
    process.exit(1);
  });

