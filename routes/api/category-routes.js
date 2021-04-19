const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({include: [Product]});
    res.json(categoryData)
  }
catch (err) {
  console.log(err.message)
  res.status(400).end(err.message)
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {include:[Product]});
    res.json(category)
    
  } 
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value 
  
   try {
    const updatedcategory = await Category.update(body, {where: {id} });
    res.json(updatedcategory)
    
  } 
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCat = await Category.destroy({ where: { id } })
    res.json(deletedCat)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

module.exports = router;
