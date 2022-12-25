import React from "react";
import Chef from "../img/chef1.png";
const Aboutus = () => {
  return (
    <>
      <div className='about'>
        <h1 className='h1'>About Us</h1>
      </div>
      <div className='about_sec'>
        <div className='sec_1'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolores consequatur doloremque voluptatem, quisquam vero beatae
            exercitationem iure temporibus repudiandae debitis! Architecto dicta
            molestias eveniet magnam et quidem excepturi, voluptates, quod
            distinctio, officia corrupti iusto suscipit consectetur.
            Consectetur, dicta quidem, consequatur voluptatibus itaque beatae
            dolores quam fugiat saepe asperiores temporibus pariatur autem?
            Incidunt accusamus sed voluptates dolore hic minima dolorem
            deserunt, possimus eaque cum fugit molestiae aut mollitia animi
            sequi nam? Expedita natus ipsum delectus quos laudantium esse,
            praesentium dolore facere labore porro veritatis! Doloribus iure,
            totam, sapiente voluptate, qui beatae praesentium eaque odio rerum
            natus expedita. Doloremque, consequatur dolorum!
          </p>
        </div>
        <div className='sec_2'>
          <img src={Chef} alt='chef' />
        </div>
      </div>
      <div className='footer'>
        <p>&copy; Copyright 2022 || Food City </p>
      </div>
    </>
  );
};

export default Aboutus;
