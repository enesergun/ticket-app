import FlightIcon from "./FlightIcon";
import TrainIcon from "./TrainIcon";
import BusIcon from "./BusIcon";
import ShipIcon from "./ShipIcon";

const Icons = ({ name, ...props }) => {
  switch (name) {
    case "FlightIcon":
      return <FlightIcon {...props} />;
    case "TrainIcon":
      return <TrainIcon {...props} />;
    case "BusIcon":
      return <BusIcon {...props} />;
    case "ShipIcon":
      return <ShipIcon {...props} />;
    default:
      return null;
  }
};

export default Icons;


