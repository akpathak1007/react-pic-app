// Todo: Context error SOLUTION 1: Define constructor and bind the method this current object context.
/*  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  } 
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  } */

// todo: Content error SOLUTION 2: Define method as arrow function which already takes care of binding of the context.
/*     onFormSubmit = event=>{
      event.preventDefault();    
      this.props.onSubmit(this.state.term);
  } */

//todo Third solution is to call onFormSubmit method in a arrow function on onSubmit prop
/*  <form onSubmit={e=>this.onFormSubmit(e)} action="">*/
