export type TList = {
  _id: string;
  title: string;
  items: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TPopulatedList = {
  _id: string;
  title: string;
  items: TListItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TListItem = {
  _id: string;
  title: string;
  quantity: string;
  purchased: boolean;
  list: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
