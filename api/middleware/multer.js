import multer from "multer";
import sanitize from "sanitize-filename";
import { MULTER_UPLOAD } from "../configs/environment.js";

const storage = multer.diskStorage({
  destination: MULTER_UPLOAD,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + sanitize(file.originalname));
  },
});

export const uploadAvatar = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (["image/jpeg", "image/png"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG and PNG images are allowed"));
    }
  },
}).single("avatar");