import {  Button } from "../../components";
import {  useSelector } from "react-redux";


const Root = () => {

    const redirect = () => {
        window.location.href = `/home/`;
    };
    return(
      <>
        <Button onClick={redirect}>Return</Button>
      </>
    );

}
export default Root;