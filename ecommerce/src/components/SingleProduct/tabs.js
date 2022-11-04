import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Tabbs = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Details">
        How sweet and lovely dost thou make the shame Which, like a canker in
        the fragrant rose, Doth spot the beauty of thy budding name! O! in what
        sweets dost thou thy sins enclose. That tongue that tells the story of
        thy days, Making lascivious comments on thy sport, Cannot dispraise, but
        in a kind of praise; Naming thy name, blesses an ill report. O! what a
        mansion have those vices got Which for their habitation chose out thee,
      </Tab>
      <Tab eventKey="profile" title="Attributes">
        They that have power to hurt, and will do none, That do not do the thing
        they most do show, Who, moving others, are themselves as stone, Unmoved,
        cold, and to temptation slow; They rightly do inherit heaven's graces,
        And husband nature's riches from expense; They are the lords and owners
        of their faces, Others, but stewards of their excellence. The summer's
        flower is to the summer sweet, Though to itself, it only live and die,
      </Tab>
      <Tab eventKey="contact" title="Reviews">
        1-Very Good
        <br />
        2-Great
        <br />
        3-well done
      </Tab>
    </Tabs>
  );
};

export default Tabbs;
