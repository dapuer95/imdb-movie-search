import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Popover, OverlayTrigger} from 'react-bootstrap';


const Movie = ({data}) => {

    const [state, setState] =useState({});

    const array = [
        {Title: 'Game of Thrones', Year: '2011–2019', imdbID: 'tt0944947', Type: 'series', Poster: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg"},
        {Title: 'The Imitation Game', Year: '2014', imdbID: 'tt2084970', Type: 'movie', Poster: "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg"},
        {Title: "Molly's Game", Year: '2017', imdbID: 'tt4209788', Type: 'movie', Poster: "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
        {Title: 'Sherlock Holmes: A Game of Shadows', Year: '2011', imdbID: 'tt1515091', Type: 'movie', Poster: "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg"}
    ];

    let movies;

    data.length !==0 ? movies = data : movies=array;


    const popover = (
        <Popover id="popover-basic" >
          <Popover.Header as="h3"><strong>Info</strong></Popover.Header>
          <Popover.Body className='footColor'>
            <p className='color'>Year: {state.year}</p>
            <p className='color'>Type: {state.type}</p>
          </Popover.Body>
        </Popover>
      );

    return(

        <div className="container-sm mt-5 App">
            <div className="row">
                    {
                    movies.map(movie => {
                        return <div onMouseEnter = {() => setState({title : movie.Title, year : movie.Year, type : movie.Type})} 
                         key={movie.imdbID} className="col mb-4">
                                    <div className="card text-white bg-dark border-dark footColor" style={{width: '15rem', height:'29rem'}}>
                                        <OverlayTrigger trigger={["hover", "focus"]} placement="right" overlay={popover}>
                                        <img  src={movie.Poster}  style={{height:'21rem'}} className="card-img-top" alt="Movie poster"/>
                                        </OverlayTrigger>
                                        <div className="card-body">
                                            <p className="card-text">{movie.Title}</p>
                                        </div>
                                        <Link to={`/info/${movie.imdbID}`}>
                                            <div className="d-grid gap-2">
                                                    <button type="button" className="btn btn-outline-success">Full info</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                    })
                }
            </div>
            
        </div>
        
    )
}

export default Movie;