# Awesome Movies for Geeks :sunglasses:

## Contribution guidelines
To add a movie to the list, you need to have a movie poster and imdb link. Fork and clone this repository add the data as mentioned below and submit a Pull Request.

### Step 1
Goto `/src/movies` directory and create a new sub directory with the year of the movie and movie name as directory name. eg: `2014-who-am-i`
### Step 2
Inside the sub directory you created, copy the poster image into it and create a `README.md` file with the following contents in the frontmatter.
```md
---
title: MOVIE_TITLE
imdb: IMDB_URL_OF_THE_MOVIE
type: MOVIE_SERIES_OR_DOCUMENTARY (movie, series, documentary)
rating: RATING
release: RELEASE_YEAR
poster: ./poster.jpg
date: DATE_ADDED_TO_THE_REPO (YYYY-mm-dd)
---
Add your reviews here
```
eg:
```md
---
title: Who am I - No System is Safe
imdb: https://www.imdb.com/title/tt3042408/
type: movie
rating: 7.6
release: 2014
poster: ./poster.jpg
date: 2018-10-01
---
Add your reviews here
```