module.exports = (req, res) => {
  let who = 'html';

  if (req.body && req.body.who) {
    who = req.body.who;
    console.log(req.body.who);
  } else if (req.query.who) {
    who = req.query.who;
    console.log(req.query.who);
  } else if (req.cookies.who) {
    who = req.cookies.who;
    console.log(req.cookies.who);
  }

  res.status(200).send(`Hello ${who}!`);
};