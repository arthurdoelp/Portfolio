import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import Container from "./components/Container";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import friends from "./friends.json";
import categories from "./categories.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    categoriesState: [],
    score: 0,
    highScore: 0,
    message: "",
    guess: false,
    randomOrder: [],
    categories
  };

  //make a copy of the array and then update the info in the copy and then push the new array to the state and display
  //This.
  //Need to pass in the id and then figure out if there is an id, setState the friendsState array to have a key of id and value of true or false
  // search through the array to see if the passed in id matches and of the ids in the array of friendsState. If it does, game over, if not add it to the array of friends (i think)
  //Need to check to see if there is an ID.  If there is an ID, pass it to the friendsState array with the key of the ID and the value of true.
  clickFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log(id);
    if (id) {
      // let arrObj = {
      //   id: id,
      //   clicked: true
      // }

      let categoryStateArray = this.state.categoriesState;
      //let idArr = friendStateArray
      let compareCheck = categoryStateArray.includes(id);

      //let friendsCategoryArray = ["HTML", "CSS", "Bootstrap"];



      // // Filter this.state.friends for friends with an id not equal to the id being removed
      // const friends = this.state.friends.filter(friend => friend.id !== id);
      // // Set this.state.friends equal to the new friends array
      // this.setState({ friends });


      //I need to find the friends who have the same categories that are listed in the this.state.categoryState Array and only display those.
      //The friends each need an array of categories
      //I need to compare the categories of each of the friends to the categoryState array.
      //we need to extract the categories 
      //I need an array of arrays and then a for loop that will go through each one of the values in each of the arrays to see if it is included.  If the value is included, set to true
      //if the value is not included move to the next array
      //filter out only the objects that contain the same id
      //const something = this.state.friends.filter(category => friendsCategoryArray.includes(this.state.categoriesState) )
      //we will filter the friends

      //const notPurchased = this.state.categoriesState.filter(selectedCategories => !selectedCategories.purchased);

      if (compareCheck) {
        //console.log("the ID IS in the friendStateArray: " + compareCheck);
      }
      else {
        //console.log("the ID is NOT in the friendStateArray: " + compareCheck);
      }

      if (compareCheck) {
        //categoryStateArray.splice(id);
        let selectedCategoryStateArray = categoryStateArray.filter(m => {
          return m !== id;
        });
        console.log(selectedCategoryStateArray);
        //console.log("Game over");
        //categoryStateArray = [];
        this.setState(prevState => ({
          //CategoriesState: categoryStateArray,
          score: 0,
          //message: "You guessed incorrectly",
          guess: false,
          categoriesState: selectedCategoryStateArray
        }));
      }
      else {
        categoryStateArray.push(id);
        this.setState(prevState => ({
          categoriesState: categoryStateArray,
          score: prevState.score + 1,
          //message: "You guessed correctly!",
          guess: true
        }));
      }

      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }

      console.log(categoryStateArray);
      console.log("Score: " + this.state.score);
      console.log("Highscore: " + this.state.highScore);


      // function shuffle(a) {
      //   for (let i = a.length - 1; i > 0; i--) {
      //     const j = Math.floor(Math.random() * (i + 1));
      //     [a[i], a[j]] = [a[j], a[i]];
      //   }
      //   return a;
      // }

      // var friendsArrCopy = this.state.friends;
      // shuffle(friendsArrCopy);
      // this.setState({ friends: friendsArrCopy })
      //let friendsCat = this.state.friends.filter(friend => categoryStateArray.includes(friend.category[0] , friend.category[1]));

      //console.log(friendsCat);
      //this.setState({friends});
      

      let something = ['joe', 'jane', 'mary'].includes('jim' || 'jane');
      console.log(something);
    }

  };

  clearCategories = () => this.setState({categoriesState: [] });


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    let friendsCat;

    if(this.state.categoriesState.length !== 0) {
      friendsCat = this.state.friends.filter(friend => friend.category.includes(
        this.state.categoriesState[0] ||
        this.state.categoriesState[1] ||
        this.state.categoriesState[2] ||
        this.state.categoriesState
        ));
    }
    else {
      friendsCat = this.state.friends;
    }
        


    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
          guess={this.state.guess}
        />
        <Categories
          categoriesState={this.state.categoriesState}
          categories={this.state.categories}
          clickFriend={this.clickFriend}
          clearCategories={this.clearCategories}
        >
        </Categories>
        <Container
          guess={this.state.guess}
        >
          {friendsCat.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              name={friend.name}
              category={friend.category}
              description={friend.description}
              github={friend.github}
              link={friend.link}
            />
          ))}
        </Container>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
