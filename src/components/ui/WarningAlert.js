import Alert from "react-bootstrap/Alert";

const WarningAlert = (props) => {
  return <Alert variant={props.variant}>{props.message}</Alert>;
};

export default WarningAlert;
