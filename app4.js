const myfunc = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=9067d5b883bb8d41403dc6c8833b8246&query=abc&language=en-US')
        let data = await res.json();
        console.log(data.results);
    }
    catch (err) {
        console.log('here');
        console.error(err.message);
    }
}
myfunc();