import React from 'react'
import { Link } from "react-router-dom";
const HomeBannerBody = ({ x, updateFunction }) => {
    const DeleteClick = async (id) => {
        try {
          const response = await fetch(
            `https://localhost:44397/api/HomeBanner${id}`,
            {
              method: "DELETE",
            }
          );
          const jsonData = await response.json();
          updateFunction(1);
        } catch (error) {
          console.error("Error deleting data:", error);
        }
      };
      return (
        <tbody>
          <tr>
            {x && (
              <>
                <td><img src={x.imagePath} width="100px" height="100px"/></td>
                <td>
                  <Link
                    to={`edit/${x.id}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => DeleteClick(x.id)}
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        </tbody>
      );
}

export default HomeBannerBody
