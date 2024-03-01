import User from "./User";
const About = () => {
  return (
    <div className=" bg-dark">
      <h1 className="font-bold text-2xl mx-6 my-auto text-center p-6">People</h1>
      <div className="flex bg-white flex-wrap">
      <User
        name="Gohi"
        place="Anakapalle"
        contact="gohithapriyanadikota@gmail.com"
      />
      <User
        name="Gohi"
        place="Anakapalle"
        contact="gohithapriyanadikota@gmail.com"
      />
      <User
        name="Gohi"
        place="Anakapalle"
        contact="gohithapriyanadikota@gmail.com"
      />
      </div>
    </div>
  );
};
export default About;
