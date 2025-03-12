import mongoose, { Schema } from "mongoose";
type FoodCategorySchemaType = {
  categoryName: string;
};

const FoodSchema: Schema = new Schema(
  {
   foodName: { type: String, required: true },
    price:{type:Number, required:true},
    image:{type:String, required: true},
    ingredients:{type:String, required:true},
    category:{type:String, rel:"FoodCategory", required:true},
  },
  { timestamps: true }
);

export default mongoose.model<FoodCategorySchemaType>(
  "Food", FoodSchema
);
