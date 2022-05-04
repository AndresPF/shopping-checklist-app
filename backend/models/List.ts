import { Schema, model, Types } from 'mongoose';

interface TList {
  _id: Schema.Types.ObjectId;
  title: string;
  items: Schema.Types.ObjectId[];
}

const listSchema = new Schema<TList>(
  {
    _id: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
    title: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'ShopItem' }],
  },
  { timestamps: true }
);

export const List = model<TList>('ShopList', listSchema);
