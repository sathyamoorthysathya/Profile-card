/*
import React from "react";

export const Header = () => {
    return React.createElement("div", null,
    React.createElement("h1",{class:"banner"}, "Tutor joes"),
    React.createElement("p",{class:'slogan'}, "learn More Be Smart")


);
}
*/

export const Header = () => {
    let customCSS= "error";
    const isLoggedIn = true;
    const greating = isLoggedIn ? <p>Welcome back!</p> : <p>Please login.</p>;
    
  return (
    <>
      <div>
        <h1 class="banner">Tutor joes</h1>
        <p class="slogan">learn More Be Smart</p>

        <p class={customCSS}>25+45={25 + 45}</p>

        {greating}


      </div>
    </>
  )
}

export default Header
