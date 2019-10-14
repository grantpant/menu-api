const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://grantpant:Wut1t1s@ds233258.mlab.com:33258/menu',
  { useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => console.log('mLab is connected'))
  .catch(err => console.error(err.message));

const MenuItemSchema = new mongoose.Schema({
  title: String,
  ingredients: []
});

const MenuItem = mongoose.model('menu-item', MenuItemSchema);

const bibimpap = new MenuItem({
  "title": "Bibimpap",
  "ingredients": [
    {
      "name": "eggs",
      "qty": 5
    }, {
      "name": "ground bison",
      "qty": 1,
      "unit": "lb"
    }, {
      "name": "ground beef",
      "qty": 0.5,
      "unit": "lb"
    }, {
      "name": "quinoa",
      "qty": 1,
      "unit": "cup"
    }
  ]
});

// bibimpap.save((err, bibimpap) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(bibimpap);
//   }
// });

app.get('/', (req, res) => {
  // MenuItem.find((err, menuItems) => {
  //   if (err) {
  //     console.error(err)
  //   } else {
  //     res.send(menuItems);
  //   }
  // });
  res.json({ "name": "Grant" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`menu server listening on port ${port}...`);
});