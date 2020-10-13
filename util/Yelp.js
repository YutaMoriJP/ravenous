const apiKey =
  'P_nD_BMNnP-VAQ4_yk8g-NN9yqerxJxCioPI2Z8BI6EtjjR3vi6QWJ4uf-o2nzOzT53Qv4cplia_BwucB1P6Gf4F_-UZHB2lqzq_wNNYDA1s9ONbZcP8N9QzGLyEX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => response.json())
      .then(jsonReponse => {
        if (Object.keys(jsonReponse).includes('businesses')) {
          return jsonReponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].alias,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
