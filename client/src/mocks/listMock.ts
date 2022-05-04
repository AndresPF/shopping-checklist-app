export const listMock = [
  {
    _id: '626f60728ced66da7dc5a6b1',
    title: 'La Mala',
    items: ['626f60b68ced66da7dc5a6c0', '626f60bc8ced66da7dc5a6c4'],
    createdAt: '2022-05-02T04:39:14.654Z',
    updatedAt: '2022-05-02T04:40:28.515Z',
    __v: 2,
  },
  {
    _id: '626f60788ced66da7dc5a6b3',
    title: 'La Masomenos',
    items: ['626f60cb8ced66da7dc5a6c8'],
    createdAt: '2022-05-02T04:39:20.959Z',
    updatedAt: '2022-05-02T04:40:43.348Z',
    __v: 1,
  },
];

export type TListMock = {
  _id: string;
  title: string;
  items: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const populatedListMock = {
  _id: '626f60728ced66da7dc5a6b1',
  title: 'La Mala',
  items: [
    {
      _id: '626f60b68ced66da7dc5a6c0',
      title: 'Chelas',
      quantity: '6',
      purchased: false,
      list: '626f60728ced66da7dc5a6b1',
      createdAt: '2022-05-02T04:40:22.583Z',
      updatedAt: '2022-05-02T04:40:22.583Z',
      __v: 0,
    },
    {
      _id: '626f60bc8ced66da7dc5a6c4',
      title: 'Gansitos',
      quantity: '6',
      purchased: false,
      list: '626f60728ced66da7dc5a6b1',
      createdAt: '2022-05-02T04:40:28.512Z',
      updatedAt: '2022-05-02T04:40:28.512Z',
      __v: 0,
    },
  ],
  createdAt: '2022-05-02T04:39:14.654Z',
  updatedAt: '2022-05-02T04:40:28.515Z',
  __v: 2,
};

export type TPopulatedListMock = {
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
