import React from "react";

function Registration() {
  return (
    <div className="registration" id="reg">
      <div className="reg-heading orbitron-font-set">
        Registration Fee Details
      </div>
      <div className="reg-fee-details">
        <table className="reg-table">
          <tbody>
            <tr>
              <th>
                <b>Attendee types</b>
              </th>
              <th>
                <b>Early Bird Registration</b>
                <br />
                UP TO 31 Oct 2024
              </th>
              <th>
                <b>Regular Registration</b> <br /> UP TO 31 DEC 2024
              </th>
              <th>
                <b>Spot Registration</b> <br /> UP TO 31 Jan 2025
              </th>
            </tr>
            <tr>
              <td>VAI members</td>
              <td>INR 12000</td>
              <td>INR 13000</td>
              <td>INR 14000</td>
            </tr>
            <tr>
              <td>Non VAI members</td>
              <td>INR 13200</td>
              <td>INR 14200</td>
              <td>INR 15200</td>
            </tr>
            <tr>
              <td>Accompanying Person</td>
              <td>INR 10000</td>
              <td>INR 10000</td>
              <td>INR 10000</td>
            </tr>
            <tr>
              <td>Subsidised Registration for Students</td>
              <td>INR 3600</td>
              <td>INR 4600</td>
              <td>INR 5600</td>
            </tr>
            <tr>
              <td>Subsidised Registration for Nurses / Paramedics</td>
              <td>INR 3600</td>
              <td>INR 4600</td>
              <td>INR 5600</td>
            </tr>
          </tbody>
        </table>
        <div className="gst">* GST Not Applicable </div>
        <div className="for-reg  orbitron-font-set">Foreign Registration</div>
        <table className="reg-table">
          <tbody>
            <tr>
              <th>
                <b>Attendee types</b>
              </th>
              <th>
                <b>Early Bird Registration</b>
                <br />
                UP TO 31 Oct 2024
              </th>
              <th>
                <b>Regular Registration</b> <br /> UP TO 31 DEC 2024
              </th>
              <th>
                <b>Spot Registration</b> <br /> UP TO 31 Jan 2025
              </th>
            </tr>
            <tr>
              <td>International Deligates</td>
              <td>USD 150</td>
              <td>USD 160</td>
              <td>USD 170</td>
            </tr>
          </tbody>
        </table>
        <div className="gst">* GST Not Applicable </div>
      </div>
    </div>
  );
}

export default Registration;
