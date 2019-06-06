var movies = [
    { title: "Star Wars: A New Hope", year: 1977 },
    { title: "Star Wars: The Empire Strikes Back", year: 1980 },
    { title: "Star Wars: Return of the Jedi", year: 1983 }
];

var localDataSource = new kendo.data.DataSource({ data: movies });

kendo.bind($("form"), localDataSource.read());