import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center mt-20">
      {technologies.map((technology) => (
        <>
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        </>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
