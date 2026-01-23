import React from "react";


export function Compoment1() {
return (
    <>
    <div>this is compoment</div>
    </>
);
        
}
export function Compoment2() {
    return (
        <>
        <div>Hello</div>
        <Compoment1 />
        </>
    );
}
export function Compoment3() {
    return (
        <>
        <div>this is compoment3</div>
        <Compoment2 />
        </>
    );
}