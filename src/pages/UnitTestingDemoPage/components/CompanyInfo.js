import { useState } from "react";

const CompanyInfo = (props) => {
  const [countryName, SetContryName] = useState("USA");
  const handleChangeCountryName = (event) => {
    SetContryName(event.target.value);
  };
  return (
    <div>
      <h2>Company Info</h2>
      <h3>Bosch!</h3>
      <p>Founded year : {props.foundedYear}</p>
      <input
        type="text"
        placeholder="Enter country Name"
        value={countryName}
        onChange={handleChangeCountryName}
      />
      <p>please visit Bosch {countryName} website</p>
    </div>
  );
};

export default CompanyInfo;
