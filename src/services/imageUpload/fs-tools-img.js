import fs from "fs-extra";
import {fileURLToPath} from "url";
import {dirname, join} from "path";

const {readJSON, writeJSON, writeFile} = fs;

const usersPublicFolderPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../../public/img/media"
);

export const writeUsersPicture = (fileName, content, id) => {
  fs.ensureDir(join(usersPublicFolderPath, `/${id}`), (err) => {
    console.log(join(usersPublicFolderPath, `/${id}`));
  });
  writeFile(join(join(usersPublicFolderPath, `/${id}`), fileName), content);
};
