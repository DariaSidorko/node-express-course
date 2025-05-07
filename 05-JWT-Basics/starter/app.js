// require('dotenv').config();
// require('express-async-errors');

// const express = require('express');
// const app = express();

// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// // middleware
// app.use(express.static('./public'));
// app.use(express.json());

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

// const port = process.env.PORT || 3000;

// const start = async () => {
//   try {
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

require('dotenv').config();
const express = require('express');
const app = express();

//app.use(express.static('./public'));
app.use(express.static('preferred/public'));
app.use(express.json());

const authRoutes = require('./routes/authRoutes');

app.use('/api/v1', authRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
