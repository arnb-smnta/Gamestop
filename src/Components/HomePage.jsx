import React from "react";
import { LINK_TAGS } from "../Utils/Constants";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-6">
        {" "}
        <div className="pt-[24rem] px-4 w-[16rem]">
          <h2 className="font-bold">Description</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem expedita rerum, aspernatur repudiandae earum
            voluptatem. Tempore assumenda accusantium qui velit quisquam
            explicabo minus fugit! Non, atque! Quibusdam nobis blanditiis excep
          </p>
        </div>
        <div className="m-4 flex">
          <h1>Github link</h1>
          <h1 className="pl-2">Linkedin </h1>
        </div>
      </div>
      <div className="col-span-6 pt-[24rem] pl-[86rem]">
        <ul>
          {console.log(LINK_TAGS)}
          {LINK_TAGS.map((tags) => (
            <Link to={tags.link}>
              <li className="bg-black" key={tags.link}>
                {tags.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
