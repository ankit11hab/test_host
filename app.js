const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup',(e)=>
{
    const searchString = e.target.value;
    const filteredMovies = movieNames.filter(moviename =>
        {
            return moviename.contain(searchString);
        })
        console.log(filteredMovies);
});

var count = 1;

for(var i = 20; i<=35;i++)
{
    fetch('https://api.themoviedb.org/3/movie/'+i+'?api_key=9067d5b883bb8d41403dc6c8833b8246')
    
    .then(function(res)
    {
        if(res.ok)
        {
            return res.json();
        }
    })
    .then(function(data)
    {
        if(count==1)
        {
            document.getElementById('name1').innerHTML = data.original_title;
            document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
        else if(count==2)
        {
            document.getElementById('name2').innerHTML = data.original_title;
            document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
        else if(count==3)
        {
            document.getElementById('name3').innerHTML = data.original_title;
            document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
        else if(count==4)
        {
            document.getElementById('name4').innerHTML = data.original_title;
            document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
        else if(count==5)
        {
            document.getElementById('name11').innerHTML = data.original_title;
            document.getElementById('img11').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
        else if(count==6)
        {
            document.getElementById('name12').innerHTML = data.original_title;
            document.getElementById('img12').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
        else if(count==7)
        {
            document.getElementById('name13').innerHTML = data.original_title;
            document.getElementById('img13').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
        else if(count==8)
        {
            document.getElementById('name14').innerHTML = data.original_title;
            document.getElementById('img14').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
            count++;
        }
    })
    .catch(err => console.log(''))
}


