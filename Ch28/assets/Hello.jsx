const Hello = ({message, name}) =>  {
    console.log({message, name});
    return (
      <div className = "Hello">
        <h1>Hello World{message} {name}</h1>
      </div>
    );
  };
  
  //export default Hello

  import PropTypes from 'prop-types'
  Hello.PropTypes= {
    message: ProtoTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    
  };

  export default Hello;
  