import { Router } from 'express';
import { Item, List } from './models';
import { Types } from 'mongoose';
const router = Router();

router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

router.post('/items', async (req, res) => {
  const { title, quantity, listId } = req.body;

  try {
    const itemList = await List.findById(listId).orFail();

    const item = new Item({
      _id: new Types.ObjectId(),
      title,
      quantity,
      purchased: false,
      list: itemList._id,
    });

    itemList.items = [...itemList.items, item._id];

    await item.save();
    await itemList.save();

    res.send(item);
  } catch (errorData) {
    res
      .status(400)
      .send({ error: { message: 'Something went wrong.', data: errorData } });
  }
});

router.get('/items/:itemId', async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId)
      .orFail()
      .populate('list');
    res.send(item);
  } catch (errorData) {
    res.status(404).send({
      error: {
        message: "Item doesn't exist",
        data: errorData,
      },
    });
  }
});

router.patch('/items/:itemId', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.itemId, {
      title: req.body.title,
      quantity: req.body.quantity,
      purchased: req.body.purchased,
    }).orFail();

    // just to display on response
    if (req.body.title) item.title = req.body.title;
    if (req.body.quantity) item.quantity = req.body.quantity;
    if (req.body.purchased) item.purchased = req.body.purchased;
    res.send(item);
  } catch (errorData) {
    res.status(404).send({
      error: {
        message: 'Something went wrong updating item',
        data: errorData,
      },
    });
  }
});

router.delete('/items/:itemId', async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId).orFail();
    const list = await List.findById(item.list).orFail();
    const index = list.items.indexOf(item._id);
    list.items.splice(index, 1);
    await list.save();
    item.delete();
    res.status(204).send();
  } catch (errorData) {
    res
      .status(404)
      .send({ error: { message: "Item doesn't exist.", data: errorData } });
  }
});

router.get('/lists', async (req, res) => {
  const lists = await List.find();
  res.send(lists);
});

router.post('/lists', async (req, res) => {
  const { title } = req.body;
  const list = new List({
    _id: new Types.ObjectId(),
    title,
  });
  try {
    await list.save();
    res.send(list);
  } catch (errorData) {
    res
      .status(400)
      .send({ error: { message: 'Something went wrong.', data: errorData } });
  }
});

router.get('/lists/:listId', async (req, res) => {
  try {
    const list = await List.findById(req.params.listId)
      .orFail()
      .populate('items');
    res.send(list);
  } catch (errorData) {
    res.status(404).send({
      error: {
        message: "List doesn't exist",
        data: errorData,
      },
    });
  }
});

router.patch('/lists/:listId', async (req, res) => {
  try {
    const list = await List.findByIdAndUpdate(req.params.listId, {
      title: req.body.title,
    }).orFail();

    // just to display on response
    if (req.body.title) list.title = req.body.title;
    res.send(list);
  } catch (errorData) {
    res.status(404).send({
      error: {
        message: 'Something went wrong updating List',
        data: errorData,
      },
    });
  }
});

router.delete('/lists/:listId', async (req, res) => {
  try {
    const list = await List.findByIdAndDelete(req.params.listId).orFail();
    const items = await Item.find({ list: req.params.listId })
      .remove()
      .orFail();

    res.status(204).send();
  } catch (errorData) {
    res
      .status(404)
      .send({ error: { message: "List doesn't exist.", data: errorData } });
  }
});

export default router;
