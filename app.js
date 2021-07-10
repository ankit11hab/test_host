document.getElementById('name1').innerHTML = "Absolute Power";
document.getElementById('over1').innerHTML = "A master thief coincidentally is robbing a house where a murder—in which the...";
document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500/xX9gmwtnTi0Y8WcTF7Jsg9Hdp6W.jpg";

document.getElementById('name2').innerHTML = "Million Dollar Baby";
document.getElementById('over2').innerHTML = "Despondent over a painful estrangement from his daughter, trainer Frankie...";
document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg";

document.getElementById('name3').innerHTML = "The Untouchables";
document.getElementById('over3').innerHTML = "Young Treasury Agent Elliot Ness arrives in Chicago and is determined to take...";
document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500/iK4twY48a1nVCez0qXE5w4JFvXw.jpg";

document.getElementById('name4').innerHTML = "The Lord of the Rings: The Two Towers";
document.getElementById('over4').innerHTML = "Frodo and Sam are trekking to Mordor to destroy the...";
document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg";

document.getElementById('name111').innerHTML = "About a Boy";
document.getElementById('over111').innerHTML = "Will Freeman is a good-looking, smooth-talking bachelor whose primary...";
document.getElementById('img111').src = "https://www.themoviedb.org/t/p/w500/qoZ1bD0q9EFqcNiEYbEigsRcNCt.jpg";

document.getElementById('name112').innerHTML = "Four Rooms";
document.getElementById('over112').innerHTML = "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are...";
document.getElementById('img112').src = "https://www.themoviedb.org/t/p/w500/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg";

document.getElementById('name113').innerHTML = "Dirty Dancing";
document.getElementById('over113').innerHTML = "Expecting the usual tedium that accompanies a summer in the Catskills with her...";
document.getElementById('img113').src = "https://www.themoviedb.org/t/p/w500/dvEggyDTTIBDvrUNjTEa9depT0f.jpg";

document.getElementById('name114').innerHTML = "Men in Black: International";
document.getElementById('over114').innerHTML = "The Men in Black have always protected the Earth from the scum of the...";
document.getElementById('img114').src = "https://www.themoviedb.org/t/p/w500/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg";

document.getElementById('name5').innerHTML = "American Beauty";
document.getElementById('over5').innerHTML = "Lester Burnham, a depressed suburban father in a mid-life crisis, deci";
document.getElementById('img5').src = "https://www.themoviedb.org/t/p/w500/6MNwC101wSEsDyxTJBGXsgIMlmh.jpg";

document.getElementById('name6').innerHTML = "Inception";
document.getElementById('over6').innerHTML = "Cobb, a skilled thief who commits corporate espionage by infiltrating...";
document.getElementById('img6').src = "https://www.themoviedb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg";

document.getElementById('name7').innerHTML = "Dancer in the Dark";
document.getElementById('over7').innerHTML = "Selma, a Czech immigrant on the verge of blindness, struggles to make...";
document.getElementById('img7').src = "https://www.themoviedb.org/t/p/w500/9rsivF4sWfmBzrNr4LPu6TNJhXX.jpg";

document.getElementById('name8').innerHTML = "The Dark Knight";
document.getElementById('over8').innerHTML = "Batman raises the stakes in his war on crime. With the help...";
document.getElementById('img8').src = "https://www.themoviedb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg";

document.getElementById('name9').innerHTML = "Avengers: Endgame";
document.getElementById('over9').innerHTML = "After the devastating events of Avengers: Infinity War, the universe...";
document.getElementById('img9').src = "https://www.themoviedb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg";

document.getElementById('name10').innerHTML = "Venom";
document.getElementById('over10').innerHTML = "Investigative journalist Eddie Brock attempts a comeback following a...";
document.getElementById('img10').src = "https://www.themoviedb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg";

document.getElementById('name11').innerHTML = "Joker";
document.getElementById('over11').innerHTML = "During the 1980s, a failed stand-up comedian is driven insane and turns...";
document.getElementById('img11').src = "https://www.themoviedb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg";

document.getElementById('name12').innerHTML = "Interstellar";
document.getElementById('over12').innerHTML = "The adventures of a group of explorers who make use of a newly discove...";
document.getElementById('img12').src = "https://www.themoviedb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"; 


const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const myfunc = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9067d5b883bb8d41403dc6c8833b8246&query=${searchString}&language=en-US`);
        let data = await res.json();
        function truncateString(str, num, str2) {
            // If the length of str is less than or equal to num
            // just return str--don't truncate it.
            if (str.length <= 70) {
              return str
            }
            else if(str.length >= num && str2.length < 30)
                return str.slice(0, 70) + '...'
            else if(str.length >= num && str2.length >= 30 && str2.length <= 64)
                return str.slice(0, 48) + '...';
            else if(str.length >= num && str2.length >= 65)
            return str.slice(0, 22) + '...';

          }

        const filteredMovies = data.results;
        console.log(filteredMovies);
        var count = 1;
        for (j = 0; j < 20; j++) {
            
            if (filteredMovies[j].poster_path != null) {
                if (count == 1) {
                    document.getElementById('name1').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over1').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 2) {
                    document.getElementById('name2').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over2').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 3) {
                    document.getElementById('name3').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over3').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 4) {
                    document.getElementById('name4').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over4').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 5) {
                    document.getElementById('name111').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over111').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img111').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 6) {
                    document.getElementById('name112').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over112').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img112').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 7) {
                    document.getElementById('name113').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over113').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img113').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 8) {
                    document.getElementById('name114').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over114').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img114').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }

                else if (count == 9) {
                    document.getElementById('name5').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over5').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img5').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 10) {
                    document.getElementById('name6').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over6').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img6').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 11) {
                    document.getElementById('name7').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over7').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img7').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 12) {
                    document.getElementById('name8').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over8').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img8').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 13) {
                    document.getElementById('name9').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over9').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img9').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 14) {
                    document.getElementById('name10').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over10').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img10').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 15) {
                    document.getElementById('name11').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over11').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img11').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
                else if (count == 16) {
                    document.getElementById('name12').innerHTML = filteredMovies[j].original_title;
                    document.getElementById('over12').innerHTML = truncateString(filteredMovies[j].overview, 78, filteredMovies[j].original_title);
                    document.getElementById('img12').src = "https://www.themoviedb.org/t/p/w500" + filteredMovies[j].poster_path;
                    count++;
                }
            }
        }
    }
    myfunc();
});