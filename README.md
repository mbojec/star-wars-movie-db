# Star Wars Movie Database

"Star Wars Movie Database" was a recruitment task project. The main goal of this app was to communicate with the [Star Wars Rest Api](https://swapi.co/) and fetch data about every Star Wars Movie from part I to VII.
Each movie should contained data about all the planets that took part at that movie. 

The user should also have the possibility to add his own custom movie with as many planets data as hi wants.
The data about the created custom movies should be store locally with redux persist.

## Project structure

### Home
<div align="center"><img src="https://github.com/mbojec/star-wars-movie-db/blob/master/Screenshots/Desktop.png?raw=true" width="100%"/></div>

### Search
<div align="center"><img src="https://github.com/mbojec/star-wars-movie-db/blob/master/Screenshots/Desktop_Search.png?raw=true" width="100%"/></div>

### Error
<div align="center"><img src="https://github.com/mbojec/star-wars-movie-db/blob/master/Screenshots/Desktop_Error.png?raw=true" width="100%"/></div>

## Building project

### Installation

"Star Wars Movie Database" requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd star_wars_movie_db
$ npm install -d
$ npm start
```

For development...

```sh
$ npm run start
```

For production...

```sh
$ npm run build
```

### Webpack
"Star Wars Movie Database" uses webpack as a module bundle. In the production state webpack creates build directory with the bundle JavaScript files `out.js` and `index.html` as the main html file and `main.scss` as the style container for the entire app. If you want to change the structure of your app please remember to change the `entryPath` and `entryFile` variables in the `webpack.config.js` file.


## License

Copyright 2019 mbojec

   Licensed under the Apache License, Version 2.0 (the "License") you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

   Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
