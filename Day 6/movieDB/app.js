var movies = [
    {
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Life of Pi",
        hasWatched: true,
        rating: 5
    }
];

movies.forEach(function (movies) {
   console.log(buildString(movies));
})

function buildString(movies) {
    var result = "You have ";
    if (movies.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movies.title + "\ ";
    result += movies.rating + "stars";
    console.log(result);
}