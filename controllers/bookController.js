// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
const Book = require("../model/schema");

const addBooks = async (req, res) => {
  const { title, author, genre, publicationYear, ISBN } = req.body;
  let books;
  try {
    books = new Book({ title, author, genre, publicationYear, ISBN });
  } catch {
    (err) => console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to Add" });
  }
  return res.status(201).json({ book });
};

const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No Products found" });
  }
  return res.status(200).json({ books });
};

const getByID = async (req, res) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findById(id);
  } catch {
    (err) => console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No Products found" });
  }
  return res.status(200).json({ books });
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      genre,
      publicationYear,
      ISBN,
    });
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "404 Not Found" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "404 Not Found" });
  }
  return res.status(200).json({ message: "Book successfully deleted!" });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getByID = getByID;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
