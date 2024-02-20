import React from "react";

import SideBar from "../../Components/SideBar";

function Matches(props) {
    return (
        <>
            <div className="flex m-2">
                <SideBar className="flex-[0_0_20%]" />
                <div className="flex-1 text-4xl text-center">testing Not found 404</div>
            </div>
        </>
    );
}

export default Matches;
