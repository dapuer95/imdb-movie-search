import React, {useState} from "react";
import Movie from "./Movie";

const NavInput = () => {

  const API_KEY = '8d876c08';
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  // const searchMovie = (e) => {
  //   e.preventDefault();
  //   if(data !== 0){
  //     fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`)
  //     .then(res => res.json())
  //     .then(result => {
  //       const {Search = []} = result
  //       setData(Search)
  //       console.log(Search)
  //     });
  //   }
  // }

  const searchMovie = async (e) => {
    e.preventDefault();
    if(data !== 0){
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`);
      const {Search = []} = await res.json();
      // console.log(Search)
      setData(Search);
    }
  }


    return (
      <div >
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* <span className="navbar-brand ms-3"><strong>IMDB</strong></span> */}

              <form className="d-flex ms-2 ">
                  <input 
                  onChange = {e => setInput(e.target.value)}
                  className="me-2 wid" type="search" placeholder="Movie to search" aria-label="Search"/>
                  <button
                  onClick={e => searchMovie(e)}
                  className="btn btn-outline-success" type="submit">Search</button>
                </form>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <span className="navbar-brand ms-3"><strong>IMDB</strong></span>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <a className="nav-link active ms-3" aria-current="page" href="#">Home</a> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active ms-3" href="https://github.com/dapuer95?tab=repositories">Creator's repo</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* form-control  */}
          <Movie data={data}></Movie>

      </div>
    )
}

export default  NavInput;