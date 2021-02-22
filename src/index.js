import fs from 'fs';
import twowaypart from './twowaypart';

const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

export default (setFilePath) => {
  try {
    const setFile = readFile(setFilePath);
    const setData = JSON.parse(setFile);

    const result = twowaypart(setData);
    return JSON.stringify(result);
  } catch (error) {
    return JSON.stringify({ error: error.message });
  }
};
