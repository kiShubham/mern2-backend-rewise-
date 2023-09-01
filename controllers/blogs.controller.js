const Blogs = require("../models/blogs.model");
const BlogServices = require("../services/blogs.service");
const BlogServiceInstance = new BlogServices();

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogServiceInstance.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNewBlog = async (req, res) => {
  try {
    const blogDocument = await BlogServiceInstance.create(req.body);
    res.json(blogDocument);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blogs.findOneAndDelete({ _id: id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;

    const filter = { _id: id };
    const update = req.body;
    const options = { new: true };

    const data = await Blogs.findOneAndUpdate(filter, update, options);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const searchBlogs = async (req, res) => {
  try {
    const { title: inputTitle, email: inputEmail } = req.query;
    const dataMatch = await Blogs.find({
      $or: [
        { title: inputTitle },
        { authors: { $elemMatch: { email: inputEmail } } },
      ],
    });

    res.json(dataMatch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
  searchBlogs,
};
