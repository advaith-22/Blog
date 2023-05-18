const BlogSchema = require("../model/BlogSchema");
const mongoose = require("mongoose");

const getAllBlogs = async (req, res) => {
    const blog = await BlogSchema.find({}).sort({createdAt: -1})
    res.status(200).json(blog)
}

const getOneBlog = async (req, res) => {
    const { id } = req.params;
    const blog = await BlogSchema.findById(id);
    res.status(200).json(blog)
}

const createBlog = async (req, res) => {
    const {title, description, blog} = req.body;

    try {
        const blogjson = await BlogSchema.create({title, description, blog})
        res.status(200).json(blogjson)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const deleteOneBlog = async (req, res) => {
    const { id } = req.params;
    const blog = await BlogSchema.findByIdAndRemove(id);
    res.status(200).json(blog)
}

const patchOneBlog = async (req, res) => {
    const {title, description, blog} = req.body;

    const { id } = req.params;
    const blogjson = await BlogSchema.findByIdAndUpdate(id, {title, description, blog});
    res.status(200).json(blog)
}


module.exports = {
    getAllBlogs,
    getOneBlog,
    createBlog,
    deleteOneBlog,
    patchOneBlog
}