import { config } from "dotenv";
import mongoose from "mongoose";
import app from "./app";

config();
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);

    app.listen(5000, () => {
      console.log("App is listening on http://localhost:5000");
    });
  } catch (err) {
    console.log(err);
  }
}

main()