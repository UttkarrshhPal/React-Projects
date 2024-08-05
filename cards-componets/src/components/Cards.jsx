import profilepic from '../assets/profilepic.jpeg';
function Cards(){
    return (
      <>
         <div className = "card">
           <img className="card-image" src={profilepic} alt="profile picture" />
           <h2 className = "card-title">Dank-Rishu</h2>
           <p className = "card-text">Learning React</p>
         </div>
      </>
    );
}

export default Cards;