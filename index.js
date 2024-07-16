const express = require('express')
const app = express()

const song = [
    {
      "id": 1,
      "title": "Bohemian Rhapsody",
      "artist": "Queen",
      "album": "A Night at the Opera",
      "duration": "5:55",
      "genre": "Rock",
      "releaseDate": "1975-10-31"
    },
    {
      "id": 2,
      "title": "Imagine",
      "artist": "John Lennon",
      "album": "Imagine",
      "duration": "3:01",
      "genre": "Pop",
      "releaseDate": "1971-09-09"
    },
    {
      "id": 3,
      "title": "Billie Jean",
      "artist": "Michael Jackson",
      "album": "Thriller",
      "duration": "4:54",
      "genre": "Pop",
      "releaseDate": "1982-11-30"
    },
    {
      "id": 4,
      "title": "Like a Rolling Stone",
      "artist": "Bob Dylan",
      "album": "Highway 61 Revisited",
      "duration": "6:13",
      "genre": "Folk Rock",
      "releaseDate": "1965-07-20"
    },
    {
      "id": 5,
      "title": "Smells Like Teen Spirit",
      "artist": "Nirvana",
      "album": "Nevermind",
      "duration": "5:01",
      "genre": "Grunge",
      "releaseDate": "1991-09-10"
    },
    {
      "id": 6,
      "title": "What's Going On",
      "artist": "Marvin Gaye",
      "album": "What's Going On",
      "duration": "3:53",
      "genre": "Soul",
      "releaseDate": "1971-05-21"
    },
    {
      "id": 7,
      "title": "Hotel California",
      "artist": "Eagles",
      "album": "Hotel California",
      "duration": "6:30",
      "genre": "Rock",
      "releaseDate": "1976-12-08"
    },
    {
      "id": 8,
      "title": "Hey Jude",
      "artist": "The Beatles",
      "album": "Hey Jude",
      "duration": "7:11",
      "genre": "Rock",
      "releaseDate": "1968-08-26"
    },
    {
      "id": 9,
      "title": "Purple Haze",
      "artist": "Jimi Hendrix",
      "album": "Are You Experienced",
      "duration": "2:50",
      "genre": "Psychedelic Rock",
      "releaseDate": "1967-03-17"
    },
    {
      "id": 10,
      "title": "Respect",
      "artist": "Aretha Franklin",
      "album": "I Never Loved a Man the Way I Love You",
      "duration": "2:29",
      "genre": "Soul",
      "releaseDate": "1967-04-29"
    }
  ]
  
app.get('/',(request,response) =>{
    response.send('Primera Api')
})


app.get('/songs',(request, response) =>{
      response.send(song)
})


app.get('/songs/:id', (request, response) => {

    const id = Number(request.params.id)
    const result = song.find(s => {
     return s.id === id
    })
    if(result){ 
      response.send(result)
    }else{
      response.status(400).send('Not found')
    }
})


app.listen(3000, () => {
    console.log('Server started on 3000')
} )

