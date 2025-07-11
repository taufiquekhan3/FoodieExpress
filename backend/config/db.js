import mongoose from 'mongoose';

//A7mH8qx29RG2pgQ5
//mongodb+srv://taufiquekhan3731:<db_password>@cluster0.mawp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0




export const connectDB = async () => {
    await mongoose.connect
    (`mongodb+srv://taufiquekhan3731:A7mH8qx29RG2pgQ5@cluster0.mawp0.mongodb.net/food-del`).then(() => console.log("DB Connected"));
}  

