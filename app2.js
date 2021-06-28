var j = 0;
const moviedesc = [];
const myfunc = async ()=>{
    for(var i = 1;i<800;i++)
    {

        function truncateString(str, num, str2) {
            // If the length of str is less than or equal to num
            // just return str--don't truncate it.
            if (str.length <= num) {
              return str
            }
            else if(str.length >= num && str2.length < 30)
                return str.slice(0, num) + '...'
            else if(str.length >= num && str2.length >= 30 && str2.length <= 64)
                return str.slice(0, 48) + '...';
            else if(str.length >= num && str2.length >= 65)
            return str.slice(0, 22) + '...';

          }

        try{
            const res = await fetch('https://api.themoviedb.org/3/movie/'+i+'?api_key=9067d5b883bb8d41403dc6c8833b8246')
            if(res.ok)
            {
                let data = await res.json();
                moviedesc[j] = data;
                if(data.poster_path!=null)
                {
                j++;
                if(j==1)
                {
                    document.getElementById('name1').innerHTML = "Absolute Power";
                    document.getElementById('over1').innerHTML = "A master thief coincidentally is robbing a house where a murder—in which the...";
                    document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500/xX9gmwtnTi0Y8WcTF7Jsg9Hdp6W.jpg";
                }
                if(j==2)
                {
                    document.getElementById('name2').innerHTML = "Million Dollar Baby";
                    document.getElementById('over2').innerHTML = "Despondent over a painful estrangement from his daughter, trainer Frankie...";
                    document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg";
                }
                if(j==3)
                {
                    document.getElementById('name3').innerHTML = "The Untouchables";
                    document.getElementById('over3').innerHTML = "Young Treasury Agent Elliot Ness arrives in Chicago and is determined to take...";
                    document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500/iK4twY48a1nVCez0qXE5w4JFvXw.jpg";
                }
                if(j==4)
                {
                    document.getElementById('name4').innerHTML = "The Lord of the Rings: The Two Towers";
                    document.getElementById('over4').innerHTML = "Frodo and Sam are trekking to Mordor to destroy the...";
                    document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg";
                }
                if(j==5)
                {
                    document.getElementById('name11').innerHTML = "About a Boy";
                    document.getElementById('over11').innerHTML ="Will Freeman is a good-looking, smooth-talking bachelor whose primary...";
                    document.getElementById('img11').src = "https://www.themoviedb.org/t/p/w500/qoZ1bD0q9EFqcNiEYbEigsRcNCt.jpg";
                }
                if(j==6)
                {
                    document.getElementById('name12').innerHTML = "Four Rooms";
                    document.getElementById('over12').innerHTML = "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are...";
                    document.getElementById('img12').src = "https://www.themoviedb.org/t/p/w500/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg";
                }
                if(j==7)
                {
                    document.getElementById('name13').innerHTML = "Dirty Dancing";
                    document.getElementById('over13').innerHTML = "Expecting the usual tedium that accompanies a summer in the Catskills with her...";
                    document.getElementById('img13').src = "https://www.themoviedb.org/t/p/w500/dvEggyDTTIBDvrUNjTEa9depT0f.jpg";
                }
                if(j==8)
                {
                    document.getElementById('name14').innerHTML = data.original_title;
                    document.getElementById('over14').innerHTML = truncateString(data.overview, 78, data.original_title);
                    document.getElementById('img14').src = "https://www.themoviedb.org/t/p/w500"+data.poster_path;
                }}
            }
        }
        catch(err){
            console.log('here')
            console.error(err.message)
        }
        
    }





    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keyup',(e)=>
    {
        const searchString = e.target.value.toLowerCase();
        const filteredMovies = moviedesc.filter(movie =>
        {
            return movie.original_title.toLowerCase().includes(searchString);
        })
        console.log(filteredMovies);
        var count = 1;
        for(var i = 0;i<filteredMovies.length-1;i++)
        {
            if(count==1)
        {
            document.getElementById('name1').innerHTML = filteredMovies[0].original_title;
            document.getElementById('over1').innerHTML = truncateString(filteredMovies[0].overview, 78,filteredMovies[0].original_title);
            document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[0].poster_path;
            count++;
        }
        else if(count==2)
        {
            document.getElementById('name2').innerHTML = filteredMovies[1].original_title;
            document.getElementById('over2').innerHTML = truncateString(filteredMovies[1].overview, 78, filteredMovies[1].original_title);
            document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[1].poster_path;
            count++;
        }
        else if(count==3)
        {
            document.getElementById('name3').innerHTML = filteredMovies[2].original_title;
            document.getElementById('over3').innerHTML = truncateString(filteredMovies[2].overview, 78, filteredMovies[2].original_title);
            document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[2].poster_path;
            count++;
        }
        else if(count==4)
        {
            document.getElementById('name4').innerHTML = filteredMovies[3].original_title;
            document.getElementById('over4').innerHTML = truncateString(filteredMovies[3].overview, 78, filteredMovies[3].original_title);
            document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[3].poster_path;
            count++;
        }
        else if(count==5)
        {
            document.getElementById('name11').innerHTML = filteredMovies[4].original_title;
            document.getElementById('over11').innerHTML = truncateString(filteredMovies[4].overview, 78, filteredMovies[4].original_title);
            document.getElementById('img11').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[4].poster_path;
            count++;
        }
        else if(count==6)
        {
            document.getElementById('name12').innerHTML = filteredMovies[5].original_title;
            document.getElementById('over12').innerHTML = truncateString(filteredMovies[5].overview, 78, filteredMovies[5].original_title);
            document.getElementById('img12').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[5].poster_path;
            count++;
        }
        else if(count==7)
        {
            document.getElementById('name13').innerHTML = filteredMovies[6].original_title;
            document.getElementById('over13').innerHTML = truncateString(filteredMovies[6].overview, 78, filteredMovies[6].original_title);
            document.getElementById('img13').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[6].poster_path;
            count++;
        }
        else if(count==8)
        {
            document.getElementById('name14').innerHTML = filteredMovies[7].original_title;
            document.getElementById('over14').innerHTML = truncateString(filteredMovies[7].overview, 78, filteredMovies[7].original_title);
            document.getElementById('img14').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[7].poster_path;
            count++;
        }

        
        }
    });


}
myfunc()
