// TODO

//How to create a component in REACT
//This contains the react.createElement function and returns it.
//JSX should represent the intended HTML of the rendered components.

//THIS IS THE STATE
const { useState } = React;

const ListItem = (props) => {



  //THIS IS THE HOOK - Initializing a functions components state by using the useState hook.
  //useState can be invoked by passing the initial state as the argument.

  //Bolding = useState function
  //boldVar = current state
  //useState = returns an array of 2 elements
    //1. current state (boldVar)
    //2. function that can be used to update the state (bolding) but also is another useState

  //To Update State
    // PASS IN NEW STATE VALUE INTO THE FUNCTION (bolding).
  const [boldVar, bolding] = useState(false);
  const [isDone, setIsDone] = useState(false);
  //Dependant on boldVAR which is true or false.
    // if true: 'bold'
    // if false: 'normal'
  const bolder = {
    fontWeight: boldVar ? 'bold' : 'normal'

  };

  const style = {
    textDecoration: isDone ? 'line-through' : 'none'
  };


  return (
    <li style={{...style, ...bolder}} onClick={() => setIsDone(!isDone)}


    onMouseEnter={() => bolding(!boldVar)} // initially its false; which becomes not false; which then is true which then will be bold.
    onMouseLeave={() => bolding(!boldVar)} // currently at true, which becomes not true; which becomes false; which then will be normal.

    >{props.todo}</li>
  )
}



// This is our 'list'
const ToDoList = (props) => (
    <ul>
      {props.todos.map((todo) => (
        <ListItem todo={todo}/>
      ))}
    </ul>
)



//Functions that have () instead of {} will return whatever is in the body
        // If () is used, no return is needed
        // If {} is used, return with () is needed
const GroceryList = () => (
  <div>
    <h2>My Todo List</h2>
      <ToDoList todos={['Tomato', 'Orange', 'Potato', 'Pinapple', 'Eggs', 'Cheese', 'Wine']}/>
  </div>
);

//How to render the created component into the DOM
  //JSX returns a COMPONENT INSTANCE when you wrap a component in an HTML tag.
ReactDOM.render(<GroceryList />, document.getElementById('app'));


