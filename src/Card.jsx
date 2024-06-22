const userData = [
    {
        name: "sathyamoorthi",
        city: "Kanchipuram",
        description: "Front End Development",
        skills: ["UI / UX", "Front End Developer", "HTML", "CSS", "Javascript", "React", "Node" ],
        online: false,
        profile: "image/1.png",
    },
    {
        name: "senthil",
        city: "Chennai",
        description: "Full Stack Web Developer",
        skills: ["Java", "Python", "HTML", "CSS", "Javascript", "React", "Angular" ],
        online: false,
        profile: "image/2.png",
    },
    {
        name: "Gold Muthu",
        city: "Chennai",
        description: "Senior Software Developer",
        skills: ["C", "C++", "Java", "Python", "C#.Net", "MySQL", "MongoDB" ],
        online: true,
        profile: "image/3.jpg",
    }
]


function User(props){
    return (
        <div className="card-container">
            <span className={props.online ?"pro online" : "pro offline"}>
                {props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} className="img" alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
export const Card = () => {
  return (
    <>
    {userData.map((user, index) =>(
        <User key={index}
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}

        />
    ))}
</>
   
  );
};

{/*<div>
        <User name="James" city="New York" description="Front-end developer" 
        skills={["UI / UX", "Front End Developer", "HTML", "CSS", "Javascript", "React", "Node" ]} 
        online={true} profile="image/2.png" />
  </div>*/}