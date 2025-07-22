import React from "react";

const Footer=()=> {
  return (
    <footer className="p-5">
        <div className="flex space-x-7 justify-center items-center lg:px-96">
            <a href="https://github.com/gwynethtan" >
                <img src="/passionArts.png" alt="PassionArts Icon" className="h-10 w-36" />
            </a>
            <a href="mailto:gwynethtann@gmail.com">
                <img src="/sg60.png" alt="SG60 Icon" className="h-16 w-16" />
            </a>
            <a href="mailto:gwynethtann@gmail.com">
                <img src="/peopleAssociation.png" alt="People Association Icon" className="h-16 w-16" />
            </a>
        </div>
    </footer>
  );
}

export default Footer