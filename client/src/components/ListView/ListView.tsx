import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { TListMock } from '../../mocks/listMock';
import 'bootstrap';
import './ListView.scss';

type ListViewProps = { lists: TListMock[] };
type ListItemProps = Pick<TListMock, '_id' | 'title' | 'items'>;

const ListViewItem = ({ _id, title, items }: ListItemProps) => (
  <Link
    className="list-group-item d-flex justify-content-between align-items-center"
    to={_id}
  >
    {title}
    {items.length > 0 ? (
      <span className="badge bg-primary rounded-pill">{items.length}</span>
    ) : (
      <span className="badge bg-secondary rounded-pill">0</span>
    )}
  </Link>
);

export const ListView = ({ lists }: ListViewProps) => {
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [listName, setListName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(listName);
    e.preventDefault();
  };

  return (
    <div className="container-fluid flex-column align-items-center justify-flex-center">
      <div className="row">
        <div className="col">
          <h2>Lists</h2>
          <div className="list-group">
            {lists.map((list) => (
              <ListViewItem
                key={list._id}
                _id={list._id}
                title={list.title}
                items={list.items}
              />
            ))}
            {showNewListForm ? (
              <div className="list-group-item list-group-item-light">
                <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New List Name"
                      aria-label="New List name with two buttons (cancel or create)"
                      value={listName}
                      onChange={(e) => setListName(e.target.value)}
                      required
                    />
                    <button
                      className="btn btn-light border"
                      type="button"
                      onClick={() => setShowNewListForm(false)}
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
                onClick={() => setShowNewListForm(true)}
              >
                <i className="bi-plus pe-1" />
                Create New List
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
