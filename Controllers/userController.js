const User = require('../Models/User');
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS?process.env.SALT_ROUNDS:10; // Do hashowania haseł

exports.logout =  (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error while logging out:', err);
    }
    res.redirect('/');
  });
};


exports.login = async (req, res) => {
  const session = req.session;
  console.log('req.session', session)
  try {
    if (req.body.username) {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      req.session.userId = user._id;
      req.session.userName = req.body.username;
      res.redirect('/private');
    } else {
      res.render('login', {  title: 'Login site', error: 'Incorrect username or password.' }); //Dodane wyświetlenie błedu
    }
    }
    else {
      res.render('login', {  title: 'Login site', session: req.session });
    }
  } catch (error) {
    console.error(error);
    res.render('login', {  title: 'Login site', error: 'An error occurred while logging in.' }); //Dodane wyświetlenie błedu
  }
}



exports.register = async (req, res) => {
  try {
    if(req.body.username)  {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    });
    await user.save();
    res.redirect('/login');
    }
    else {
      res.render('register', {  title: 'Register site'});
    }
  } catch (error) {
    console.error(error);
    res.render('register', { title: 'Register site', error: 'An error occurred during registration.' }); //Dodane wyświetlenie błedu
  }
}


exports.private = async (req, res) => {
    res.render('private', { title: 'Private site'})
  }



// Strona logowania
// app.get('/login', (req, res) => {
//   res.render('login');
// });







