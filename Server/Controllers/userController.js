const User = require('../Models/User');
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS?process.env.SALT_ROUNDS:10; // Do hashowania haseł
const jwt = require('jsonwebtoken');


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


exports.postlogin = async (req, res) => {
  // const session = req.session;
  console.log('req', req)
  try {
    if (req.body.username) {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const payload = {
            user: {
                id: user.id // Umieść ID użytkownika w payloadzie tokena
            }
        };

        jwt.sign(
            payload,
            process.env.SESSION_SECRET, // Pobierz sekret z zmiennych środowiskowych (.env)
            { expiresIn: 360000 }, // Czas ważności tokena (np. 100 godzin) - dostosuj
            (err, token) => {
                if (err) throw err;
                // Zwróć token w odpowiedzi
                res.json({ token });
            }
        );

    } else {
      return res.status(400).json({ msg: 'Nieprawidłowe dane logowania' });
    }
    }
    else {
      return res.status(400).json({ msg: 'Nieprawidłowe dane logowania' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Błąd logowania' });
  }
}

exports.postregister = async (req, res) => {
  try {
    if(req.body.username)  {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    });
    await user.save();
    return res.status(200).json({ msg: 'Ok' });
    }
    else {
      res.render('register', {  title: 'Register site'});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Nieprawidłowe dane rejestracji' });
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







