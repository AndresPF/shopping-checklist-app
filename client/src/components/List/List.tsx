import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetListQuery } from '../../store/api';
import './List.scss';

type ListItemProps = {
  title: string;
  quantity: string;
  purchased: boolean;
};

const ListItem = ({ title, quantity, purchased }: ListItemProps) => (
  <div className="list-group-item d-flex justify-content-between align-items-center">
    {title}
    {quantity}
    {purchased ? 'comprado' : 'no comprado'}
  </div>
);

export const List = () => {
  const [newItem, setNewItem] = useState(false);
  const params = useParams();
  const { data, error, isLoading, isSuccess, isError } = useGetListQuery(
    params.listId || ''
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (isLoading) return <div>Loading...</div>;
  console.log(error, isSuccess, isError);
  if (!data || isError) return <div>Something went wrong!</div>;

  return (
    <div className="container-fluid flex-column align-items-center justify-flex-center">
      <div className="row">
        <div className="col">
          <h2>
            Param ID: {params.listId} | Title: {data.title}
          </h2>
          <div className="list-group">
            {data.items.map((item) => (
              <ListItem
                key={item._id}
                title={item.title}
                quantity={item.quantity}
                purchased={item.purchased}
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
                      aria-label="New Item name with two buttons (cancel or create)"
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
