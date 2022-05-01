import { Router } from 'express';
import { Item } from './models/Item'; // new
const router = Router();

// Get all items
router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

router.post('/items', async (req, res) => {
  const { title, quantity, list } = req.body;
  const item = new Item({
    title,
    quantity,
    purchased: false,
    list,
  });
  try {
    await item.save();
    res.send(item);
  } catch (errorData) {
    res.status(400);
    res.send({ error: { message: 'Something went wrong.', data: errorData } });
  }
});

router.get('/items/:itemId', async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    res.send(item);
  } catch (errorData) {
    res.status(404);
    res.send({
      error: {
        message: "Item doesn't exist",
        data: errorData,
      },
    });
  }
});

export default router;
