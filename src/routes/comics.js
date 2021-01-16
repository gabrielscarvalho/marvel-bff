module.exports = ({ express, controllers }) => {

  const { ComicsController } = controllers.comics;

  express.get('/marvel/comics', ComicsController.get);

};