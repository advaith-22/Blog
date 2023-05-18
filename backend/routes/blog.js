const { getAllBlogs, getOneBlog, createBlog, deleteOneBlog, patchOneBlog } = require('../controllers/blog');

const router = require('express').Router();

router.get("/", getAllBlogs)

router.get("/:id", getOneBlog)

router.post("/", createBlog)

router.delete("/:id", deleteOneBlog)

router.patch("/:id", patchOneBlog)



module.exports = router