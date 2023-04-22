import FlightIcon from "./FlightIcon";
import TrainIcon from "./TrainIcon";
import BusIcon from "./BusIcon";
import ShipIcon from "./ShipIcon";
import LocationIcon from "./LocationIcon";
import CalendarIcon from "./CalendarIcon";
import UserIcon from "./UserIcon";
import CloseIcon from "./CloseIcon";


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
    case "LocationIcon":
      return <LocationIcon {...props} />;
    case "CalendarIcon":
      return <CalendarIcon {...props} />;
    case "UserIcon":
      return <UserIcon {...props} />;
    case "CloseIcon":
      return <CloseIcon {...props} />;
    default:
      return null;
  }
};

export default Icons;
