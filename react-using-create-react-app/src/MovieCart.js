import React from "react";

class MovieCart extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The avengers hool",
      plot: "Marvek scifi movie",
      price: 199,
      rating: 0,
      stars: 0,
    };
  }

  // if we use arrow function then we dont need binding
  addStar() {
    console.log("s");

    //first method
    // this.setState({
    //   stars: this.state.stars + 1,
    // });

    //second method takes previous state and update
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  }

  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Moive image" />
          </div>
          <div className="right">
            <div className="title">{this.state.title}</div>
            <div className="plot">{this.state.plot}</div>
            <div className="price">Rs . {this.state.price}</div>
            <div className="footer">
              <div className="rating">{this.state.rating}</div>
              <button
                className="star"
                onClick={() => {
                  this.addStar.bind(this)();
                }}
              >
                {this.state.stars}
              </button>
              <button className="favourite"> favourites</button>
              <button className="addCard">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCart;
