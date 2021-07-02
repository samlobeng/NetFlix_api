import express from "express";
import uniqid from "uniqid";
import createError from "http-errors";
import fs from "fs";
import fe from "fs-extra";
import path, {dirname, join} from "path";
import {fileURLToPath} from "url";
import {validationResult} from "express-validator";
import multer from "multer";
import {writeUsersPicture} from "./fs-tools-img.js";

// paths
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

// Routers
const imgUploadRouter = express.Router();

imgUploadRouter.post(
  "/:id/poster",
  multer().single("img_file"),
  async (req, res, next) => {
    try {
      const new_id = req.params.id;
      console.log(new_id);
      writeUsersPicture(req.file.originalname, req.file.buffer, new_id);
      res.send("Poster Uploaded Successfully! ");
    } catch (error) {
      next(error);
    }
  }
);

imgUploadRouter.get("/", (req, res, next) => {
  try {
    res.send("Working ;;;;;;");
  } catch (error) {
    next(error);
  }
});

export default imgUploadRouter;
