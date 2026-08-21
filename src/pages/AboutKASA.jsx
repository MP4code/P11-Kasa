
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aProposData from "../data/aPropos.json";


function AboutKASA() {


  return (
    <section className="about">
    <Banner name="about"/>
    {aProposData.map((item, index) => (
  <Collapse 
    key={item.id || index} 
    name="About" 
    title={item.title} 
    content={item.content}
  />
))}
    </section>
  );
}

export default AboutKASA;