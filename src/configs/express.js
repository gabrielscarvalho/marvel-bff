const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

module.exports = ({ express }) => {

  express.set('port', process.env.PORT);
  express.set('json spaces', 4);
  express.use(helmet());
  express.use(cors());
  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(methodOverride());

};