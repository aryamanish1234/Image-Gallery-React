import React, {component} from 'react';
import Img from './Img';
import Irgmg from './Irgmg';
import './image.css';
class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArr: [
                {
                    imgSrc: '../img/1.jpg',
                    title: 'This is Image two title',
                    details: 'this is image two details'
                },
                {
                    imgSrc: '../img/1.jpg',
                    title: 'This is Image two title',
                    details: 'this is image two details'
                },
                {
                    imgSrc: '../img/1.jpg',
                    title: 'This is Image two title',
                    details: 'this is image two details'
                },
                {
                    imgSrc: '../img/1.jpg',
                    title: 'This is Image two title',
                    details: 'this is image two details'
                }
            ],
            imgStyle: {
                imglistConstyle:{
                    display: 'flex'
                },
                IrgImgConstly: {
                    display: 'none'
                }
            },
            Irgmg: {
                src: '',
                title: '',
                details: ''
            },
        }
    }
handleclick = (e) => {
    console.log("this is the action");
    e.preventDefault();
    if (this.state.imgStyle.imglistConstyle.display === 'flex'){
        this.setState({
            imgStyle: {
                imglistConstyle: {
                    display: 'none'
                },
                IrgImgConstly: {
                    display: 'block'
                }
            }
        });
        console.log(e.target.src);

        Object.values(this.state.imgArr).forEach(element => {
            console.log(element.imgSrc);
            let sourcesstring = '..'+e.target.src.toString().slice(21)
            console.log(sourcesstring);
            if(element.imgSrc === sourcesstring){
                this.setState({
                    Irgmg: {
                        src: e.target.src,
                        title: element.title,
                        details: element.details
                    }
                })
            }
        });
    }
} 
 render() {
            let imageitemlist = this.state.imgArr.map(image =>{
                return (
                    <button onClick={this.handleclick} style={{background: 'none', border:'none'}} key={image.imgSrc}> <Img src={image.imgSrc}></Img></button>
                );
            });
            return (
              <React.Fragment> 
                  <div className="lg-img con" style={this.state.imgStyle.IrgImgConstly}>
                      <Irgmg src={this.state.Irgmg.src} title={this.state.Irgmg.title} details={this.state.Irgmg.details}/>
                  </div>
                  <div className="wrapper" style={this.state.imgStyle.imglistConstyle}>
                      {imageitemlist}
                  </div>
              </React.Fragment>
                
            )
        }
}

export default Image ;

