
/*interface Planet {
    name: string,
    rotation_period: string,
    "orbital_period": "304",
    "diameter": "10465",
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": "1",
    "population": "200000",
    "residents": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/"
    ],
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-09T13:50:49.641000Z",
    "edited": "2014-12-20T20:58:18.411000Z",
    "url":
}*/

interface Planet {
    [key: string]: string | string[];
}

async function loadPlanets(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return data.results;
}

function outPutPlanet(p: Planet): void {
    // Narrowing
    /*if (p.name && typeof p.name === 'string') {
        console.log(p.name.toUpperCase());
    }*/
    for (const key in p) {
        //console.log(key);

        if (typeof (p[key]) === 'string') {
            // Narrowing ger att här är p.key en sträng
            console.log(`${key}: ${p[key]}`);
        } else {
            //console.log("array! " + p[key]);
            for (const element of p[key]) {
                console.log(`${key}: ${element}`);
            }
        }
    }
}

function savePlanets(): void {
    const swPlanetUrl = "https://swapi.dev/api/planets/?page=1&format=json";
    loadPlanets(swPlanetUrl)
        .then((planets: Planet[]) => {

            const p0: Planet = planets[0];
            console.log(`Name: ${p0.name}`);
            outPutPlanet(p0);
        });
}

savePlanets();
