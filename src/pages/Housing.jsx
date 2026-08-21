import { useNavigate, useParams } from "react-router-dom";
import logementData from "../data/logements.json";
import Carousel from "../components/Carousel";
// import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logementData.find((item) => item.id === id);

  if (!logement) {
    navigate("/404");
    return null;
  }

  return (
    <section className="housingInformation">
      <Carousel images={logement.pictures} />
      <div className="housingInformation_content">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
       <div className="housingInformation_content_tags">
              {logement.tags.map((tag, i) => (
                <p className="housingInformation_content_tags_tag" key={i}>
                  {tag}
                </p>
              ))}
        </div>
        {/*rating */}
         <div className="housingInformation_content_host">
              <div>
                <p>{logement.host.name.split(" ")[0]}</p>
                <p>{logement.host.name.split(" ")[1]}</p>
              </div>
              <img src={logement.host.picture} alt="photo de profil"/>
          </div>
        <Collapse name="Housing" title={logement.title} content={logement.description} content2={logement.equipments} />
      </div>
    </section>
  );
}

export default Housing