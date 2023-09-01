const Blogs = require("../models/blogs.model");

class BlogServices {
  find = async () => {
    return await Blogs.find({});
  };
  create = async (data) => {
    const document = new Blogs(data);
    return await document.save();
  };
}
module.exports = BlogServices;

