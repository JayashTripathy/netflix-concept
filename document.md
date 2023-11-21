## Daily Logs

### Day 1 -  `18 NOV 2023`
 - Created a Next.js 13 app with typescript and tailwindcss
 - Added font(poppins) and some variable css
 - Inititialized git repository 

### Day 2 - `19 NOV 2023`
 - Added metatags , title and favicon
 - Added some assets like images , icons and gifs 
 - Created header UI and added elements like logo , search bar , profile icon 
 - created carousel component [topMoviesStrip](./src/components/topMoviesStrip.tsx) for the main-page  which is scrolling on every 3s using react hooks (useEffect, useState and useRef) 
 - added responsiveness to the design
 - Added [sidemenu](./src/components/menu.tsx) to the application including and done layout improvements

### Day 3 - `20 NOV 2023`
  
  - Created [top10Movies](./src/components/top10Movies.tsx) component to the main page 
  - filtered [top10Movies] from [moviesData.json](./src/moviesData.json) using `filter` and then sorted it using sort function according to their ranks
  - Rn an idea popped how about we assign some custom styles to the genres and then wherever we are showing genre tags we can show that particular tag in there unique style
  - Since we have already create [MovieEnum](./src/types/movies.ts) lets generate some styles using chat gpt and then assign it to the genres
  - created [constants](./src/constants.ts) and stored all the genre color codes in there 
  - created a helper function to get this color from the constants and created [utils](./src/utils/getGenreStyle.ts) folder and stored there so that we can use that anywhere in our application
  - fixed some calculations issues that was in carousel of topMoviesStrip

### Day 4 - `21 NOV 2023`
  
  - Started creating  main movie page [movieid] which will be dynamic  and will be server side rendered
  - [movieid] should be SEO friendly so it will have 2 file `page.tsx` and `client.tsx` in the page.tsx we will add the `title`, `image` and the `description` to the  meta tags and in the client.tsx we will make the UI of the page so that when any one share the link of the movie it will beautifully display link.
  
   


## Note:

- UI design will be inspired by [https://dribbble.com/shots/23042599-Netflix-Concept-UI-Netflix-streaming-service](https://dribbble.com/shots/23042599-Netflix-Concept-UI-Netflix-streaming-service)

- The static json data of movies is stored in `/movies.json` and accquired from internet which contains top 50 movies details including imdb rank , title , description , image , rating , year , genre , duration , trailer link , cast , director , etc. 
- All `page.tsx` files will be `server side rendered` .


  


## Resources and code snippets i used: 
    
    
- Stackoverflow - to customize the scrollbar of the application- [https://stackoverflow.com/questions/9664325/style-the-scrollbar-with-css-in-google-chrome-webkit](https://stackoverflow.com/questions/9664325/style-the-scrollbar-with-css-in-google-chrome-webkit)
 

[movieid]: (./pages/movie/[movieid].tsx)