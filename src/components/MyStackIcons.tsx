import React from "react";

export default function MyStackIcons({
  component,
}: {
  component: React.ElementType;
}) {
  const Component = component;
  return (
    <>
     <Component className='size-10 fill-[url(#stack-icon-gradient)]'/>
     <svg className="size-0 absolute">
      <linearGradient id='stack-icon-gradient'>
        <stop offset='0%' stopColor="rgb(110 231 183)"/>
        <stop offset='100%' stopColor="rgb(56 189 248)"/>
        </linearGradient> 
     </svg>
    </>
   
  )
}
