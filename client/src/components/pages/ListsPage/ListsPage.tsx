import { ListsView } from '../../ListsView/ListsView';
import './ListsPage.scss';
import { useGetListsQuery } from '../../../store/api';

export const ListsPage = () => {
  const { data, isLoading, isError } = useGetListsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data || isError) return <div>Something went wrong!</div>;

  return (
    <div className="ListsPage">
      <ListsView lists={data} />
    </div>
  );
};
