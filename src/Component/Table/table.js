import React from "react";
import "./table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Table = () => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="expand"> Description </th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tbody>
            <tr>
              <td>Home</td>
              <td>This is the main page</td>
              <td>
                <span className="label label-live">
                  Live
                  <td>
                    <span className="" actions>
                      <BsFillTrashFill className="delete-btn" />
                      <BsFillPencilFill />
                    </span>
                  </td>
                </span>
              </td>
            </tr>
            <tr>
              <td>Page2</td>
              <td>This is the second page</td>
              <td>
                <span className="label lable-draft">
                  Draft
                  <td>
                    <span className="" actions>
                      <BsFillTrashFill className="delete-btn" />
                      <BsFillPencilFill />
                    </span>
                  </td>
                </span>
              </td>
            </tr>

            <tr>
              <td>Page3</td>
              <td>This is the third page</td>
              <td>
                <span className="label lable-error">
                  error
                  <td>
                    <span className="" actions>
                      <BsFillTrashFill className="delete-btn" />
                      <BsFillPencilFill />
                    </span>
                  </td>
                </span>
              </td>
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
};
export default Table;
