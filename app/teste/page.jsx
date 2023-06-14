import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <button className="btn btn-outline text-white md:text-black">Default</button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
    </div>
  );
};

export default Page;
