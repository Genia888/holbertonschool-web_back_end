import fs from 'fs/promises';

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').slice(1);
    const fields = {};

    lines.forEach((line) => {
      if (line.trim() === '') return;
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
