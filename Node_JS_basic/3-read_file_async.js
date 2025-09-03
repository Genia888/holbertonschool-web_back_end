const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

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

      let output = `Number of students: ${students.length}\n`;
      for (const [field, list] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
      }

      // On affiche quand même dans la console (optionnel)
      process.stdout.write(output);

      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
