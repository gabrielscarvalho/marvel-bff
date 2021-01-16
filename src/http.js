/**
 * @description HTTP Server
 */
module.exports = ({ express }) => express.listen(process.env.PORT || 3000, () => console.log(`${process.env.APP_NAME} service running in port - ${process.env.PORT || 3000}`));