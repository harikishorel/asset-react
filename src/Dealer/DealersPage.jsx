import React, { useState } from "react";
// import Topbar from "../components/Repeated/Topbar";
// import { useNavigate } from "react-router-dom";
// import Footerr from "../components/Repeated/Footerr";
import "./DealersPage.css";
import AddDealer from "./AddDealer";

function DealersPage() {
  const [show, onHide] = useState(false);

  const handleOpenModal = () => {
    onHide(true);
  };
  const handleCloseModal = () => {
    onHide(false);
  };
  // const navigate = useNavigate();
  return (
    <div>
      {/* <Topbar /> */}

      <br />
      <div className="boxcont2">
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Dealer Email</th>
                <th>Branch Name</th>
                <th>Dealer Name</th>
                <th>Status</th>
                <th>Edit Dealer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>example@gmail.com</td>
                <td>examplebranch</td>
                <td>examplename</td>
                <td>active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              <tr>
                <td>example@gmail.com</td>
                <td>branchname</td>
                <td>examplename</td>
                <td>active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              <tr>
                <td>example@gmail.com</td>
                <td>examplebranch</td>
                <td>examplename</td>
                <td>active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              <tr>
                <td>example@gmail.com</td>
                <td>examplebranch</td>
                <td>examplename</td>
                <td>active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              <tr>
                <td>example@gmail.com</td>
                <td>examplebranch</td>
                <td>examplename</td>
                <td>active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div>
        <button
          className="btn2"
          style={{ backgroundColor: "BLUE", margin: "0px 0px 0px 100px " }}
          onClick={handleOpenModal}
        >
          Add Dealer
        </button>
        <AddDealer show={show} onHide={handleCloseModal} />
      </div>
      <br />

      <br />
      <div className="bottom">{/* <Footerr /> */}</div>
    </div>
  );
}

export default DealersPage;
