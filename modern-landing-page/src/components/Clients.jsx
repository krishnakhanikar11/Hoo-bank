import React from "react";
import { clients } from "../constants/index";
import styles from "../style";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.paddingY}`}>
      <div
        className={`grid md:grid-cols-4 grid-cols-2  `}
      >
        {clients.map((client) => (
          <div key={client.id} className="flex justify-center items-center"><img id={client.id} src={client.logo} className="w-[195px] p-3"/></div>
          
        ))}
      </div>
    </section>
  );
};

export default Clients;
