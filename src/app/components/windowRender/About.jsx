import { aboutData } from "@/app/data/aboutData";

export default function About() {   
    return (
        <div>
            {aboutData.map((about, index) => (
                <div key={index} className="p-4 gap-4 flex flex-col justify-around items-start" >
                <h3>{about.greet}</h3>
                <h1>{about.pos}</h1>
                <h4>{about.location}</h4>
                <p>{about.corporate}</p>
                <p>{about.simple}</p>
                <p>{about.email}</p>
                <p>{about.link}</p>
              </div>
      ))}
        </div>
    );
}