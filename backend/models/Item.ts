import { Schema, model, Types } from 'mongoose';

interface TItem {
  _id: Schema.Types.ObjectId;
  title: string;
  quantity: string;
  purchased: boolean;
  list: Schema.Types.ObjectId;
}

const itemSchema = new Schema<TItem>(
  {
    _id: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
    title: { type: String, required: true },
    quantity: { type: String, default: '1' },
    purchased: { type: Boolean, default: false },
    list: { type: Schema.Types.ObjectId, ref: 'ShopList', required: true },
  },
  { timestamps: true }
);

export const Item = model<TItem>('ShopItem', itemSchema);
