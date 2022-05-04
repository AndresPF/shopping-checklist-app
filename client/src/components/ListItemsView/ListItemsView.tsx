import { ChangeEvent, FormEvent, useState } from 'react';
import {
  useAddItemMutation,
  useGetListQuery,
  useUpdateItemMutation,
} from '../../store/api';
import { TPopulatedList } from '../types';
import './ListItemsView.scss';

type ListItemProps = {
  id: string;
  title: string;
  quantity: string;
  purchased: boolean;
  refetch: () => void;
};

const ListItem = ({
  id,
  title,
  quantity,
  purchased,
  refetch,
}: ListItemProps) => {
  const [isPurchased, setIsPurchased] = useState(purchased);
  const [updateItem] = useUpdateItemMutation();

  const handlePurchased = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    await updateItem({ _id: id, purchased: !isPurchased });
    setIsPurchased(!isPurchased);
    refetch();
  };

  return (
    <div
      className={`list-group-item d-flex justify-content-between align-items-center ${
        purchased
          ? 'list-group-item-secondary text-decoration-line-through'
          : ''
      }`}
    >
      <span className="col-7 text-start">{title}</span>
      <span className="col-3">{quantity}</span>
      <span className="col-2">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          checked={isPurchased}
          onChange={(e) => handlePurchased(e)}
          aria-label="Item purchased?"
        />
      </span>
    </div>
  );
};

export const ListItemsView = ({
  _id,
  title,
  items,
}: Pick<TPopulatedList, '_id' | 'title' | 'items'>) => {
  const { refetch } = useGetListQuery(_id);
  const [addItem] = useAddItemMutation();
  const [newItem, setNewItem] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addItem({ title: itemName, quantity: itemQuantity, id: _id });
    setNewItem(false);
    refetch();
  };

  return (
    <div className="container-fluid flex-column align-items-center justify-flex-center">
      <div className="row">
        <div className="col">
          <h2>{title}</h2>
          <div className="list-group">
            <div className="list-group-item list-group-item-primary border-secondary p-0 px-3 d-flex justify-content-between align-items-center">
              <span className="col-7 py-1 text-start">Title</span>
              <span className="col-3 py-1 border-start border-end border-secondary">
                Quantity
              </span>
              <span className="col-2 py-1 ">Purchased</span>
            </div>
            {items.map((item) => (
              <ListItem
                key={item._id}
                id={item._id}
                title={item.title}
                quantity={item.quantity}
                purchased={item.purchased}
                refetch={refetch}
              />
            ))}
            {newItem ? (
              <div className="list-group-item list-group-item-light">
                <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New Item Name"
                      aria-label="New Item Input"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Quantity"
                      aria-label="New Item Quantity"
                      value={itemQuantity}
                      onChange={(e) => setItemQuantity(e.target.value)}
                      required
                    />
                    <button
                      className="btn btn-light border"
                      type="button"
                      onClick={() => setNewItem(false)}
                    >
                      cancel
                    </button>
                    <button className="btn btn-primary border" type="submit">
                      create
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <button
                type="button"
                className="list-group-item list-group-item-light d-flex justify-flex-start align-items-center"
                onClick={() => setNewItem(true)}
              >
                <i className="bi-plus pe-1" />
                Create New Item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
