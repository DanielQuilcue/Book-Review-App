import mongoose from 'mongoose'

const usuario = "danielquilcue"
const password = "6KIc8fuxzSoU13S0"

const url = `mongodb+srv://${usuario}:${password}@cluster0.sahwpc7.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("ready");
  } catch (error) {
    console.log(error);
  }
};