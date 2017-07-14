const db = require('./db/index');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');
const Bluebird = require('bluebird');

const campuses = [
  {
    name: 'SHOHOKU14',
    image:
      'https://mblogthumb-phinf.pstatic.net/20110223_63/solsolbee_1298466378308zahvM_JPEG/8.jpg?type=w2'
  },
  {
    name: 'SHOHOKU11',
    image:
      'https://mblogthumb-phinf.pstatic.net/20110223_192/solsolbee_1298466376070kTvE0_JPEG/pimg_759069163111389.jpg?type=w2'
  },
  {
    name: 'SHOHOKU10',
    image:
      'https://mblogthumb-phinf.pstatic.net/20110223_196/solsolbee_1298466376520Kw7vV_JPEG/1.jpg?type=w210@2x'
  },
  {
    name: 'SHOHOKU7',
    image:
      'https://mblogthumb-phinf.pstatic.net/20110223_261/solsolbee_1298471936941GKr0I_JPEG/naver_net_20110223_224528.jpg?type=w210@2x'
  }
];

const students = [
  { name: 'Takenori', email: 'takenori@shohoku.com', campusId: 1 },
  { name: 'Hanamichi', email: 'hanamichi@shohoku.com', campusId: 2 },
  { name: 'Hisashi', email: 'hisashi@shohoku.com', campusId: 3 },
  { name: 'Ryota', email: 'ryota@shohoku.com', campusId: 4 },
  { name: 'Yasuharu', email: 'yasuharu@shohoku.com', campusId: 4 },
  { name: 'Mitsuyoshi', email: 'mitsuyoshi@shohoku.com', campusId: 3 },
  { name: 'Kiminobu', email: 'kiminobu@shohoku.com', campusId: 2 },
  { name: 'Kaede', email: 'kaede@shohoku.com', campusId: 1 }
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

