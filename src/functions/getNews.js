const getNews = async () => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let news;

    await fetch('https://blogposting-api.herokuapp.com/api/getAllBlogposts', requestOptions)
    .then(async (data) => {
        news = await data.json();
    })
    .catch((error) => {
        console.log(error)
    });

    return news;
}

module.exports.getNews = getNews;