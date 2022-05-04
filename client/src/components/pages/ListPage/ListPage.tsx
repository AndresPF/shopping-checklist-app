import { useParams } from 'react-router-dom';
import { ListItemsView } from '../../ListItemsView/ListItemsView';
import './ListPage.scss';
import { useGetListQuery } from '../../../store/api';

export const ListPage = () => {
  const params = useParams();
  const { data, isLoading, isError } = useGetListQuery(params.listId || '');

  if (isLoading) return <div>Loading...</div>;
  if (!data || isError) return <div>Something went wrong!</div>;

  return (
    <div className="ListPage">
      <ListItemsView _id={data._id} title={data.title} items={data.items} />
    </div>
  );
};
