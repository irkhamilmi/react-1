import { useContext } from "react";
import { Globalcontext } from "../context";

function Artikel(props) {
  const user = useContext(Globalcontext);

    return (
      <>
        <h3>{props.title}</h3>
        <small>Date: {props.date}, Tags: {props.tags.join(", ")}{" "}
        {props.isNew ? "--baru !!" : "--lama"}
        </small>
        <div>
          <small>Ditulis oleh {user.username}</small>
        </div>
      </>
    );
  }
export default Artikel;