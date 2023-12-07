import Hello from "./components/Hello";
import Bye from "./components/Bye";
import { applyStyles } from "../../hoc/applyStyles";

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const ContactUsPage = () => {
  return(
    <div> Contact Us Page
      <title><h1>ContactUs</h1></title>
      {/* <p>{props.getAge()}</p> */}
      <h2>HOC Demo</h2>
      <StyledHello/>
      <StyledBye />
    </div>
  )
}
 
export default ContactUsPage;