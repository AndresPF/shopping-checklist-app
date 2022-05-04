import { ListView } from '../ListView/ListView';
import './Lists.scss';
import { useGetListsQuery } from '../../store/api';

export const Lists = () => {
  const { data, isLoading, isError } = useGetListsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data || isError) return <div>Something went wrong!</div>;

  return (
    <div className="ListsPage">
      <ListView lists={data} />
    </div>
  );
};
