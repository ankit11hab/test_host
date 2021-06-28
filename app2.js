var j = 0;
const moviedesc = [];
const myfunc = async ()=>{
    for(var i = 1;i<800;i++)
    {
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
                    document.getElementById('over1').innerHTML = "A master thief coincidentally is robbing a house where a murder—in which the President of The United States is involved—occurs in front of his eyes. He is forced to run, while holding evidence that could convict the President.";
                    document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500/xX9gmwtnTi0Y8WcTF7Jsg9Hdp6W.jpg";
                }
                if(j==2)
                {
                    document.getElementById('name2').innerHTML = "Million Dollar Baby";
                    document.getElementById('over2').innerHTML = "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.";
                    document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg";
                }
                if(j==3)
                {
                    document.getElementById('name3').innerHTML = "The Untouchables";
                    document.getElementById('over3').innerHTML = "Young Treasury Agent Elliot Ness arrives in Chicago and is determined to take down Al Capone, but it's not going to be easy because Capone has the police in his pocket. Ness meets Jimmy Malone, a veteran patrolman and probably the most honorable one on the force.";
                    document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500/iK4twY48a1nVCez0qXE5w4JFvXw.jpg";
                }
                if(j==4)
                {
                    document.getElementById('name4').innerHTML = "The Lord of the Rings: The Two Towers";
                    document.getElementById('over4').innerHTML = "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.";
                    document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg";
                }
                if(j==5)
                {
                    document.getElementById('name11').innerHTML = "About a Boy";
                    document.getElementById('over11').innerHTML ="Will Freeman is a good-looking, smooth-talking bachelor whose primary goal in life is avoiding any kind of responsibility. But when he invents an imaginary son in order to meet attractive single moms, Will gets a hilarious lesson about life from a bright, but hopelessly geeky 12-year-old named Marcus.";
                    document.getElementById('img11').src = "https://www.themoviedb.org/t/p/w500/qoZ1bD0q9EFqcNiEYbEigsRcNCt.jpg";
                }
                if(j==6)
                {
                    document.getElementById('name12').innerHTML = "Four Rooms";
                    document.getElementById('over12').innerHTML = "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.";
                    document.getElementById('img12').src = "https://www.themoviedb.org/t/p/w500/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg";
                }
                if(j==7)
                {
                    document.getElementById('name13').innerHTML = "Dirty Dancing";
                    document.getElementById('over13').innerHTML = "Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances 'Baby' Houseman is surprised to find herself stepping into the shoes of a professional hoofer—and unexpectedly falling in love.";
                    document.getElementById('img13').src = "https://www.themoviedb.org/t/p/w500/dvEggyDTTIBDvrUNjTEa9depT0f.jpg";
                }
                if(j==8)
                {
                    document.getElementById('name14').innerHTML = data.original_title;
                    document.getElementById('over14').innerHTML = data.overview;
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
            document.getElementById('over1').innerHTML = filteredMovies[0].overview;
            document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[0].poster_path;
            count++;
        }
        else if(count==2)
        {
            document.getElementById('name2').innerHTML = filteredMovies[1].original_title;
            document.getElementById('over2').innerHTML = filteredMovies[1].overview;
            document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[1].poster_path;
            count++;
        }
        else if(count==3)
        {
            document.getElementById('name3').innerHTML = filteredMovies[2].original_title;
            document.getElementById('over3').innerHTML = filteredMovies[2].overview;
            document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[2].poster_path;
            count++;
        }
        else if(count==4)
        {
            document.getElementById('name4').innerHTML = filteredMovies[3].original_title;
            document.getElementById('over4').innerHTML = filteredMovies[3].overview;
            document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[3].poster_path;
            count++;
        }
        else if(count==5)
        {
            document.getElementById('name11').innerHTML = filteredMovies[4].original_title;
            document.getElementById('over11').innerHTML = filteredMovies[4].overview;
            document.getElementById('img11').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[4].poster_path;
            count++;
        }
        else if(count==6)
        {
            document.getElementById('name12').innerHTML = filteredMovies[5].original_title;
            document.getElementById('over12').innerHTML = filteredMovies[5].overview;
            document.getElementById('img12').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[5].poster_path;
            count++;
        }
        else if(count==7)
        {
            document.getElementById('name13').innerHTML = filteredMovies[6].original_title;
            document.getElementById('over13').innerHTML = filteredMovies[6].overview;
            document.getElementById('img13').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[6].poster_path;
            count++;
        }
        else if(count==8)
        {
            document.getElementById('name14').innerHTML = filteredMovies[7].original_title;
            document.getElementById('over14').innerHTML = filteredMovies[7].overview;
            document.getElementById('img14').src = "https://www.themoviedb.org/t/p/w500"+filteredMovies[7].poster_path;
            count++;
        }

        
        }
    });


}
myfunc()


/* 
for(var i = 0;i<movietitle.length-1;i++)
{
    console.log(movietitle[i]);
}  */