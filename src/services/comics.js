module.exports = ({ repositories }) => {

  const { MarvelRepository } = repositories.marvel;

  class ComicsService{
    static async find(offset = 0, limit = 10) {
      try {
        const result = await MarvelRepository.getComics({ limit, offset });
        return result.data.data;
      } catch(error) {
        throw new Error(error);
      }
    }
  }

  return { ComicsService };

};