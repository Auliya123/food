import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -Zrld-BvbXFo-7J7j8MVupfloyMcZoNsGTGq6O45Xkqm3Z0zhujbzV6MCM-XdNXqiQ6Ll54rIAfwgKfKLhZtK4ABT4zZ2zO6dGl5MddcyqUVGsWZh2avmfMX4tbCYHYx",
  },
});
