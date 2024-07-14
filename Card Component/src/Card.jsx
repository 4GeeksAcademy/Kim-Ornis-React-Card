import profilePic from './assets/react.svg'


function Card(){

    return(
        <div className="card">
            <img className="cardImg" src={profilePic} alt="Profile Picture"></img>
            <h2 className="cardTitle">Kimbo Codes</h2>
            <p1 className="cardText">I am a coder and I love to Travel/Eat!!</p1>

        </div>

    );
}
export default Card