import mongoose, { Schema } from "mongoose";
type UserSchematype = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: "USER" | "ADMIN";
  orderedFoods: string[];
  isVerified: boolean;
};

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, requiared: true },
    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    role: ["USER", "ADMIN"],
    orderedFoods: { type: [Schema.ObjectId], ref: "FoodOrder" },
  },
  { timestamps: true }
);
export default mongoose.model<UserSchematype>("User, UserSchema");
