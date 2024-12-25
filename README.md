## Background:

This website displays Pittsburgh historic landmarks on a map and provides generated descriptions of them.

![](https://i.imgur.com/QxYmkm4.gif)

---
## Features:

- Interactive map displaying Pittsburgh's historic landmarks

- Generated landmark descriptions (Llama 3)

- PostgreSQL database integration

- Fully containerized (Docker)

---

## Requirements:

- [Docker](https://www.docker.com/get-started)

- [Docker Compose](https://docs.docker.com/compose/)

- A valid **[GroqCloud](https://console.groq.com/keys) API Key**
---
## Setup:
1. **Clone the repository:** 

    ```git clone https://github.com/username/pittsburgh-landmarks.git```
    ```cd pittsburgh-landmarks```
	
2. **Set up environment variables:**
	Create ```.env``` in the ```server``` directory. Base the contents off ```example.env```.
	###### Windows:
	```copy server\example.env server\.env```
	###### Linux / macOS:
	```cp server/example.env server/.env```
	
3. **Run the application:**
	```docker-compose up --build```
	
4. **Access the app:**
	Frontend: http://localhost:3000
	Backend: http://localhost:4000

5. **Stop the application**
```docker-compose down```
---
## Technologies:
The following technologies were employed:

-  **Node.js**: runtime environment

-  **Express.js**: backend API

-  **PostgreSQL**: database containing landmark information

-  **React**: frontend

-  **Bootstrap**: styling framework

-  **GroqCloud**: cloud service used to query high-end Llama 3 model

-  **Llama 3**: LLM used to generate descriptions

-  **OpenLayers**: map

- **Docker**: containerization

  
---
## Design Challenges:

1) The processing power and storage needed for a local Llama model was immense. The best models I could find did not generate adequate descriptions and were very slow. Therefore, I looked for a LLM cloud service and found [GroqCloud](https://groq.com/groqcloud/). Unlike other services, GroqCloud is free to use but have a limited number of models available. Fortunately, they had a powerful enough model that delivered the results I wanted.

2) After I found a [dataset](https://catalog.data.gov/dataset/city-designated-individual-historic-sites) of Pittsburgh's historic landmarks, I needed their coordinates. This called for [geocoding](https://en.wikipedia.org/wiki/Address_geocoding). I wrote a geocoding script in JavaScript and used the geocoding API [Nominatim](https://nominatim.org/) to add the coordinates to my Postgres database. I could now place the landmark markers on the map.

3) For cross-platform use, I wanted to containerize the project. Otherwise, one would have to set up their own landmarks database--either aligned with my schema, or a modified schema that would need to be reflected in the source code. I was inexperienced with [Docker](https://www.docker.com/get-started), so I used this process as a learning experience. After only a few modifications to my base code, I was able to containerize my project.

---

## Future:
- It would be best to add geocoding middleware (uisng Nominatim) that runs when the user creates or updates a landmark (POST or PUT requests).
- I would like to deploy the app on some hosting platform.