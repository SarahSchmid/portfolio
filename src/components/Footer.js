import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-regular';
import '../styles/Footer.css';

const repoUrl = "https://github.com/SarahSchmid/Portfolio";

export class Footer extends Component {
    render(){
        return(
            <div id="Footer">
                <p>Made with React, JavaScript, custom CSS and many, many <FontAwesomeIcon icon={faHeart}/></p>
                <p>Checkout the <a href={repoUrl}>repository for this site on Github</a></p>
                <p>Copyright by Sarah Schmid © 2018</p>
            </div>
        );
    }
}