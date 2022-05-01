import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface TItem {
  _id?: string;
  title: string;
  quantity: string;
  purchased: boolean;
  list: string;
}

const itemSchema = new Schema<TItem>(
  {
    _id: { type: String, default: uuidv4() },
    title: { type: String, required: true },
    quantity: { type: String, default: '1' },
    purchased: { type: Boolean, default: false },
    list: { type: String, required: true },
  },
  { timestamps: true }
);

export const Item = model<TItem>('ShopItem', itemSchema);
