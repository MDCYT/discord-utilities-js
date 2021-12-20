module.exports = {
    dog: async function () {
        let dataAPI = await fetch("https://no-api-key.com/api/v1/animals/dog").then(
          (res) => res.json()
        );
    
        return dataAPI.image;
      },
};