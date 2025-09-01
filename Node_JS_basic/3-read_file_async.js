const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');

        if (students.length === 0) {
          console.log('Number of students: 0');
          resolve();
          return;
        }

        const fields = {};

        students.forEach((line) => {
          const parts = line.split(',');
          const firstname = parts[0];
          const field = parts[3];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        console.log(`Number of students: ${students.length}`);

        for (const [field, list] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
