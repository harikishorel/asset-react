import React, { useState, useEffect } from "react";
import Topbar from "../components/Repeated/Topbar";
import axios from "../axios";
import "./DealersPage.css";
import { useNavigate } from "react-router-dom";
import Footerr from "../components/Repeated/Footerr";
import { Modal, ModalBody } from "react-bootstrap";
import EditDealer from "./EditDealer";

function DealersPage() {
  const navigate = useNavigate();
  const [showEditDealer, setShowEditDealer] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState({});
  const [dealers, setDealers] = useState("");

  const handleEdit = (dealer) => {
    setSelectedDealer({
      ...dealer,
      status: dealer.status ? "Active" : "Inactive",
    });
    setShowEditDealer(true);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/dealers");
      setDealers(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Topbar />

      <br />
      <div>
        <button
          className="Edit-btn"
          style={{ display: "flex", margin: "auto" }}
          onClick={() => navigate("/AddDealer")}
        >
          Add Dealer
        </button>
      </div>
      <br />
      <div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>Dealer Name</th>
                <th>Dealer Email</th>
                <th>Branch Name</th>
                <th>Status</th>
                <th>Edit Dealer</th>
              </tr>
            </thead>
            <tbody>
              {dealers &&
                dealers.data.map((dealer) => (
                  <tr key={dealer._id}>
                    <td>{dealer.demail}</td>
                    <td>{dealer.name}</td>
                    <td>{dealer.branch}</td>
                    <td>{dealer.status ? "Active" : "Inactive"}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(dealer)}
                        className="Edit-btn"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />

      <br />

      <br />
      {/* <div className="bottom">
        <Footerr />
      </div> */}

      <Modal show={showEditDealer} onHide={() => setShowEditDealer(false)}>
        <ModalBody>
          <EditDealer
            dealer={selectedDealer}
            onClose={() => setShowEditDealer(false)}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default DealersPage;
