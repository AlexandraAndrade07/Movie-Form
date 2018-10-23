import React, { Component } from 'react'


export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poster: "",
      comment: ""
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }



  submitForm(e) {
    
      const config = {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(this.state),
        };
      

      const url = "http://92.175.11.66:3001/api/quests/movies/";
    
    
      fetch(url, config)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
            } else {
            alert(`Your movie is sent l'ID ${res}!`);
            console.log(JSON.stringify(this.state));
        }
        }).catch(e => {
            console.error(e);
            alert('Error to send movie');
          });
      e.preventDefault();
   }
   

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
   }

  render() {
    
    return (
      <div className="FormFilm">
        <h1>What is your favorite movie ?</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
          <legend>Good question!</legend>
            <div className="centerContent">   
                <label className="title" htmlFor="name">Movie name :</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Title movie"
                    onChange ={this.onChange}
                    value ={this.state.name}
                  />
              </div>

              <div className="form-data">
                  <label className="title" htmlfor="poster">Enter url of your favorite movie :</label>
                    <input 
                      type="url" 
                      name="poster" 
                      id="poster" 
                      placeholder="http//" 
                      onChange ={this.onChange}
                      value ={this.state.poster}
                    />
                </div>

              <div className="form-data">
                <label className="title" htmlFor="comment">Whay you loves this film ?</label>
                  <input 
                    type="textarea" 
                    name="comment" 
                    id="comment" 
                    placeholder="Tell us some reasons... the soundtrack, the director, the cast or some particular scene" 
                    onChange ={this.onChange}
                    value ={this.state.comment}
                  />
                <button props ={this.state.value} onChange={this.onChange} color="warning">send</button>
            </div>
          </fieldset>
        </form>
        
       </div>
        
    )
  }
}
