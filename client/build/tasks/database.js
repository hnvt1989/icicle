var gulp = require('gulp');
var mongoose = require('mongoose');
const User = require('../../../server/models/user');

const db_name = 'icicle';
// include keep alive for closing connections,
// http://tldp.org/HOWTO/TCP-Keepalive-HOWTO/overview.html
// var mongoOptions = {
//     db: {safe: true},
//     server: {
//         socketOptions: {
//             keepAlive: 1
//         }
//     },
//     replset: {
//         rs_name: 'myReplSet',
//         socketOptions: {
//             keepAlive: 1
//         }
//     }
// };
gulp.task('db', function (done) {

  var db_url = 'mongodb://localhost:27017/icicle';
  //var db = mongoose.createConnection(db_url, mongoOptions);
  //mongoose.connect(db_url, mongoOptions);
  mongoose.connect(`mongodb://localhost/${db_name}`);
  var db = mongoose.connection;

  db.on('error', function (err) {
    //console.log(console, 'Mongoose Error: ' + err);
    console.log('error');
  });
  db.on('open', function openCallback() {
    console.log('Connection to ' + db_url + ' [OPEN]');
    //done();

    // const joe = new User({
    //   name: 'Joe',
    //   email: 'joe@test.com',
    //   password: 'test1234',
    //   profile: 'Hello, my name is Joe'
    //   //profile: {}
    //   // profile: {
    //   //   aboutme: 'Hello, my name is Joe',
    //   //   location: 'Portland, OR, USA',
    //   //   lastUpdated: Date.now()
    //   // }
    // });

    // joe.save()
    // .then(() => User.findOne({ name: 'Joe' }))
    // .then((user) => {
    //   //user.profile.aboutme = 'Hello, my name is Joe',
    //   // user.profile = {
    //   //   aboutme: 'Hello, my name is Joe',
    //   //   location: 'Portland, OR, USA',
    //   //   lastUpdated: Date.now()
    //   // }
    //   //return user.save();
    //   user.save();
    //   done();
    // });
    // .then(() => User.findOne({ name: 'Joe' }))
    // .then((user) => {
    //   assert(user.posts[0].title === 'New Post');
    //   done();
    // });

    //.then(() => { done(); })
    //.then(() => User.findOne({ name: 'Joe' }))
    // .then((user) => {
    //   user.posts.push({ title: 'New Post' });
    //   return user.save();
    // })

    const { users } = mongoose.connection.collections;
    users.drop(() => {
      console.log('Dropping Users collections [DONE]');

      const user1 = new User({
        name: 'Katherine',
        email: 'katherine@test.com',
        password: 'test1234',
        profile: 'My name is Katherine',
        lastEdited: Date.now().toLocaleString()
      });
      const user2 = new User({
        name: 'Joe',
        email: 'joe@test.com',
        password: 'test1234',
        profile: 'My name is Joe',
        lastEdited: Date.now().toLocaleString()
      });
      Promise.all([user1.save(), user2.save()])
        .then(() => {
          console.log('Created Users collections [DONE]');
          mongoose.disconnect(function () {
            db = null;
            console.log("All connections closed [DONE]");
            done();
          });
        });

      // profiles.drop(() => {
      //     done();
      // });
    });
  });

  // db.once('open', function callback() {
  //     console.log('now resetting database: ' + db_url + '... ');
  //     db.db.dropDatabase(function (err) {
  //         console.log("DONE, now close connection");
  //         mongoose.disconnect(function () {
  //             db = null;
  //             console.log("All connections closed.");
  //             done();
  //         });
  //     });
  // });

});
