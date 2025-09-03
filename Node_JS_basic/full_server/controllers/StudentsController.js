import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2];
    try {
      const fields = await readDatabase(database);
      res.status(200).type('text/plain');
      let output = 'This is the list of our students\n';
      Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });
      res.send(output);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const database = process.argv[2];
    try {
      const fields = await readDatabase(database);
      const list = fields[major] || [];
      res.status(200).type('text/plain').send(`List: ${list.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
