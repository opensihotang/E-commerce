import mongoose from "mongoose";

const connect = async (req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`connection succes to ${connection.connection.host}`);
  } catch (error) {
    console.log("koneksi ke vandaoDB error" + error.message);
    process.exit(1);
  }
};

export default connect;
