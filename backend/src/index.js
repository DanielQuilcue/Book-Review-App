import app from './app.js'
import { connectDB } from './db.js';

connectDB();
app.listen(27017);
console.log('server ready',27017);