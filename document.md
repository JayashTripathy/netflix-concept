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
  - filtered [top10Movies] from [movies.json] using `filter` and then sorted it using sort function according to their ranks
  - Rn an idea popped how about we assign some custom styles to the genres and then wherever we are showing genre tags we can show that particular tag in there unique style
  - Since we have already create [MovieEnum](./src/types/movies.ts) lets generate some styles using chat gpt and then assign it to the genres
  - created [constants](./src/constants.ts) and stored all the genre color codes in there 
  - created a helper function to get this color from the constants and created [utils](./src/utils/getGenreStyle.ts) folder and stored there so that we can use that anywhere in our application
  - fixed some calculations issues that was in carousel of topMoviesStrip

### Day 4 - `21 NOV 2023`
  
  - Started creating  main movie page [movieid] which will be dynamic  and will be server side rendered
  - [movieid] should be SEO friendly so it will have 2 file `page.tsx` and `client.tsx` in the page.tsx we will add the `title`, `image` and the `description` to the  meta tags and in the client.tsx we will make the UI of the page so that when any one share the link of the movie it will beautifully display link.
  - So right now the `movieid is server side rendered on run time` so server will generate the page on every request because movie id can be anything, 
    
    - this is the build log -
  
      Route (app)                              Size     First Load JS
      ┌ ○ /                                    14.5 kB        94.9      kB                                                            
      ├ ○ /_not-found                          882 B          81.3 kB                       
      ├ ○ /genre                               145 B          80.5 kB                       
      ├ λ /movie/[movieid]                     145 B          80.5 kB                           
      └ ○ /watchlist                              144 B          80.5 kB                           

      λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)                         
      ○  (Static)  automatically rendered as static HTML (uses no initial props)                         
    
  - But we can further optimize the as we know for a fact that the data we have is in the [movies.json] is static and will not change so we can make the page statically generated on the server on the build time only using `generateStaticParams`   

     - build log -  
                                
       Route (app)                              Size     First Load JS                                                      
        ┌ ○ /                                    14.5 kB        94.9 kB                                            
        ├ ○ /_not-found                          882 B          81.3 kB                                              
        ├ ○ /genre                               145 B          80.5 kB                                       
        ├ ● /movie/[movieid]                     145 B          80.5 kB
        ├   ├ /movie/tt0111161                                           
        ├   ├ /movie/tt0068646                                           
        ├   ├ /movie/tt0468569                                           
        ├   └ [+47 more paths]                                           
        └ ○ /watchlist    
   
        ○  (Static)  automatically rendered as static HTML (uses no initial props)    
        ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
    
    Now  [movieid] is statically generated (SSG) 

  - Created UI of the [movieid] page and added some responsiveness to it

### Day 5 - `22 NOV 2023`

  - Completed all the work of [movieid] page 
  - Created [bottomNav] for mobile devices
  - Created Genre page and the data inside extracted from [movies.json] using `map` function grouped it by genre and then displayed it on the page
  - Displayed the movies in the grid format and made it responsive in [allGenre] page
  - Created a [badge] UI component and reused it in main page and [genre] page
  - Optimized by `memoizing` the group genre data by using `useMemo` hook in [allGenre] page
  - Optimized main page usng using `debounce` on scroll event of the carousel so that it will not fire on every scroll event
  - Created a utility function [getGroupedGenreMovies] to get all the grouped movies data and stored in utils so that we can use it in the [allGenre] as well as in [movieList] page .
  - Added [backButton] component for back navigation and used it on  [movieid] and [genre] page


### Day 6 - `23 NOV 2023`

  - Limited the number of genre to 6 in [allGenre] page , because it was taking too much time to load in old devices because of the image size 
    (in future when we will use some api  we can use pagination and load more genres on scroll and also we can use `lazy loading` for images and use optimized images in the first place)
  - Added whatsapp share button to the [movieid] page
  - Now im gonna make the watchlist page and for that firstly ill create a custom `useLocalStorage` hook which will be used to store the ids of movies in the localstorage which will used to display the movies in 
    the [watchlist] page
  - Created a [watchListButton] component which will be used to `add` and `remove` the movies from the `watchlist` and used it in [movieid] page and [movieList] component
  - Created [watchlist] page and displayed the movies which are added to the watchlist using `useLocalStorage` hook using `watchlist` as a key
  - Fixed logic of [watchListButton] component to add and remove the movies from the watchlist
  




## Resources and code snippets i used: 
    
    
-  UI design will be inspired by [https://dribbble.com/shots/23042599-Netflix-Concept-UI-Netflix-streaming-service](https://dribbble.com/shots/23042599-Netflix-Concept-UI-Netflix-streaming-service)
- Stackoverflow - to customize the scrollbar of the application- [https://stackoverflow.com/questions/9664325/style-the-scrollbar-with-css-in-google-chrome-webkit](https://stackoverflow.com/questions/9664325/style-the-scrollbar-with-css-in-google-chrome-webkit)
- tailwindMerge npm package - to merge tailwind classes - [https://www.npmjs.com/package/tailwind-merge](https://www.npmjs.com/package/tailwind-merge) 
- react-share npm package - to add social share buttons - [https://www.npmjs.com/package/react-share](https://www.npmjs.com/package/react-share)




## Note:

- The static json data of movies is stored in [movies.json] and accquired from internet which contains top 50 movies details including imdb rank , title , description , image , rating , year , genre , duration , trailer link , cast , director , etc. 
- All `page.tsx` files will be `server side rendered`.



 
[movieid]: ./src//app/(main)/page.tsx
[movies.json]: ./src/movies.json
[bottomNav]: ./src/components/navigation/bottomNav.tsx
[badge]: ./src/components/ui/badge.tsx
[allGenre]: ./src/app/(main)/allGenre/page.tsx
[genre]: ./src/app/genreType/[type]/client.tsx
[getGroupedGenreMovies]: ./src/utils/getGoupedGenreMovies.ts
[movieList]: ./src/components/movieList.tsx
[backButton]: ./src/components/ui/backButton.tsx
[watchlist]: ./src/app/(main)/watchlist/page.tsx
[useLocalStorage]: ./src/hooks/useLocalStorage.ts
[watchListButton]: ./src/components/ui/watchListButton.tsx