![](https://i.imgur.com/QxYmkm4.gif)
## Background
This website displays Pittsburgh historic landmarks on a map and provides generated descriptions of them.

The following technologies were employed:
- **Node.js**: runtime environment
- **Express.js**: backend API
- **PostgreSQL**: database containing landmark information
- **React**: frontend
- **Bootstrap**: styling framework
- **GroqCloud**: cloud service used to query high-end Llama 3 model
- **Llama 3**: LLM used to generate descriptions
- **OpenLayers**: map

## Design Challenges
1) The processing power and storage needed for a local Llama model was immense. The best models I could find did not generate adequate descriptions and were very slow. Therefore, I looked for a LLM cloud service and found [GroqCloud](https://groq.com/groqcloud/). Unlike other services, GroqCloud is free to use but have a limited number of models available. Fortunately, they had a powerful enough model that delivered the results I wanted.
2) After I found a [dataset](https://catalog.data.gov/dataset/city-designated-individual-historic-sites) of Pittsburgh's historic landmarks, I needed their coordinates. This called for [geocoding](https://en.wikipedia.org/wiki/Address_geocoding). I wrote a geocoding script in JavaScript and used the geocoding API [Nominatim](https://nominatim.org/) to add the coordinates to my Postgres database. I could now place the landmark markers on the map.

	In the future, it would be best to add geocoding middleware that runs when the user creates or updates a landmark (POST or PUT requests), and it will update the database accordingly.