const router = require("express").Router();

const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
  searchBlogs,
} = require("../controllers/blogs.controller");

router.get("/", getAllBlogs);
router.post("/new", createNewBlog);
router.get("/search", searchBlogs);
router.delete("/:id", deleteBlogWithId);
router.patch("/:id", updateBlogWithId);

module.exports = router;
