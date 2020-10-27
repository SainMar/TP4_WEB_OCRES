import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

class MainPage extends React.Component {

  constructor(){
    super()
    this.state= {
      date: "date de naissance",
      img: 'https://www.grandparquet.com/wp-content/uploads/2016/02/pas-de-photo.png',
      nom: 'nomUser',
      prenom: 'prenomUser',
      nbSuper: 0,
      bg_color: '#e9ecef',
      data: [
        {
          id: "1",
          prenom: "Jeanne",
          nom: "Ouioui",
          img: "https://www.jokeme.fr/images/jeanne-darc.jpg",
          date: new Date(1998, 10, 24).toLocaleString()
        },
        {
          id: "2",
          prenom: "Martine",
          nom: "à la campagne",
          img: "https://i.skyrock.net/9581/60489581/pics/2931277913_1_3.jpg",
          date: new Date(1965, 12, 12).toLocaleString()
        },
        {
          id: "3",
          prenom: "Claude",
          nom: "François",
          img: "https://www.melody.tv/uploads/generated/actualite/e/a/1829-claude_francois_les_autres_reprises_de_ses_tubes_600.jpg",
          date: new Date(1935, 11, 12).toLocaleString()
        },
      ]
    }
  }

  SelectProfile(e){
    
    this.profiles = this.state.data.map((profile) => {
      
      if(profile.id === e.target.id){
       
        this.setState(
          {prenom : profile.prenom, nom : profile.nom, img: profile.img, date: profile.date}
        );
      }
    })
  }

  changeBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const bgColor = '#'+randomColor;
    this.setState({bg_color: bgColor})
  }
  
    render(){
        
        return (
          <div>
            <Container fluid>
              <Container fluid>
                <Row>
                  <Col sm={{span: 5, offset: 7 }} md={{span: 5, offset: 7 }} lg={{span: 5, offset: 7 }}>
                  <Button id={"1"} variant="outline-primary" onClick={(e) => this.SelectProfile(e)}>Jeanne</Button>
                  <Button id={"2"} variant="outline-primary" onClick={(e) => this.SelectProfile(e)}>Martine</Button>
                  <Button id={"3"} variant="outline-primary" onClick={(e) => this.SelectProfile(e)}>Claude</Button>
                  </Col>
                </Row>
                <Row>
                  <div class="col-4 col-centered info-user">
                    <Jumbotron style={{backgroundColor: this.state.bg_color, maxHeight: "500px", minHeight: "500px" }}>
                        <Row>
                          
                            <Col xs={10} md={7} lg={5}>
                                <img class="rounded-circle shadow" width="100" height="auto" src={this.state.img} alt={this.state.prenom}/>
                            </Col>
                          
                        </Row>
                        <br></br>
                        <Row>
                          <ul>
                              <li> Prénom:  {this.state.prenom}  </li><br></br>
                              <li> Nom:  {this.state.nom} </li><br></br>
                              <li> Date de Naissance:  {this.state.date} </li>
                              
                          </ul>
                          
                        </Row>
                        <Button variant="outline-primary" onClick={() => this.changeBg()} >Changement de style</Button>
                    </Jumbotron>
                  </div>
                </Row>
              </Container>
              <Container fluid>
                <Row>
                  <div class="jumbotron info-user">
                    <Row>
                          <Button variant="outline-primary" onClick={() => this.setState( {nbSuper: this.state.nbSuper + 1})}>
                            C'est Super ! 
                            
                          </Button>
                    </Row>
                    <Row>
                      <Badge variant="warning" style={{marginLeft: "auto", marginRight: "auto"}}>{this.state.nbSuper} </Badge>
                    </Row>
                  </div>
                </Row>
              </Container>
            </Container>
          </div>
        )
    }
}

export default MainPage;