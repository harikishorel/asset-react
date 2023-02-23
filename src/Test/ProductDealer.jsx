import React from "react";
import Table from "react-bootstrap/Table";
import "./ProductDealer.css";
import Search from "../../Asset/Search.js";
import Box from "../../Asset/Box";
import Topbar from "../Repeated/Header";
import Footer from "../../Asset/Footer";
// import Bottom from "../components/Repeated/Footer";

function ProductDealer() {
  return (
    <div>
      <>
        <Topbar />
      </>

      <div className=" product">
        <br />
        <br />

        <h2 className="PL"> LIST OF PRODUCTS</h2>
        <br />

        <Search />
        <Box />
        <br />
        <br />

        <div className="producttable">
          <div class="limiter">
            <div class="container-table100">
              <div class="wrap-table100">
                <div class="table100">
                  <table>
                    <thead>
                      <tr class="table100-head">
                        <th class="column1">Date</th>
                        <th class="column2">Product ID</th>
                        <th class="column3">Product Name</th>
                        <th class="column4">Models</th>
                        <th class="column5">Warranty Period (Years)</th>
                        <th class="column6">Retailer Name</th>
                        <th class="column7">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="column1">2017-09-29 01:22</td>
                        <td class="column2">200398</td>
                        <td class="column3">iPhone X 64Gb Grey</td>
                        <td class="column4">$999.00</td>
                        <td class="column5">1</td>
                        <td class="column6">$999.00</td>
                        <td class="column7">
                          <button>Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="column1">2017-09-28 05:57</td>
                        <td class="column2">200397</td>
                        <td class="column3">Samsung S8 Black</td>
                        <td class="column4">$756.00</td>
                        <td class="column5">1</td>
                        <td class="column6">$756.00</td>
                        <td class="column7">
                          <button>Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="column1">2017-09-26 05:57</td>
                        <td class="column2">200396</td>
                        <td class="column3">Game Console Controller</td>
                        <td class="column4">$22.00</td>
                        <td class="column5">2</td>
                        <td class="column6">$44.00</td>
                        <td class="column7">
                          <button>Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td class="column1">2017-09-25 23:06</td>
                        <td class="column2">200392</td>
                        <td class="column3">USB 3.0 Cable</td>
                        <td class="column4">$10.00</td>
                        <td class="column5">3</td>
                        <td class="column6">$30.00</td>
                        <td class="column7">
                          <button>Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        {/* <Bottom /> */}
        <Footer />
      </>
    </div>
  );
}
console.log(Table);

export default ProductDealer;
