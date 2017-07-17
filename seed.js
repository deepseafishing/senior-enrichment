const db = require('./db/index');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');
const Bluebird = require('bluebird');

const campuses = [
  {
    name: 'SHOHOKU4',
    image:
      'https://mblogthumb-phinf.pstatic.net/20131001_58/vipolice_1380634630983GQThN_JPEG/4.jpg?type=w2'
  },
  {
    name: 'SHOHOKU11',
    image:
      'https://mblogthumb-phinf.pstatic.net/20131001_141/vipolice_1380634630069vEU4q_JPEG/1.jpg?type=w2'
  },
  {
    name: 'SHOHOKU7',
    image:
      'https://mblogthumb-phinf.pstatic.net/20131001_115/vipolice_1380634630362o6LGH_JPEG/5.jpg?type=w2'
  },
  {
    name: 'SHOHOKU14',
    image:
      'https://mblogthumb-phinf.pstatic.net/20131001_284/vipolice_1380634630682vEymR_JPEG/3.jpg?type=w2'
  }
];

const students = [
  { name: 'Takenori', email: 'takenori@shohoku.com', campusId: 1 },
  { name: 'Hanamichi', email: 'hanamichi@shohoku.com', campusId: 2 },
  { name: 'Hisashi', email: 'hisashi@shohoku.com', campusId: 2 },
  { name: 'Ryota', email: 'ryota@shohoku.com', campusId: 3 },
  { name: 'Yasuharu', email: 'yasuharu@shohoku.com', campusId: 3 },
  { name: 'Mitsuyoshi', email: 'mitsuyoshi@shohoku.com', campusId: 3 },
  { name: 'Kiminobu', email: 'kiminobu@shohoku.com', campusId: 4 },
  { name: 'Kaede', email: 'kaede@shohoku.com', campusId: 4 }
];

db.didSync
  .then(() => {
    return Campus.bulkCreate(campuses);
  })
  .then(() => {
    return Student.bulkCreate(students);
  })
  .then(function() {
    console.log('Finished inserting data');
  })
  .catch(function(err) {
    console.error('There was totally a problem', err, err.stack);
  })
  .finally(function() {
    db.close();
    console.log('connection closed');
    return null;
  });
