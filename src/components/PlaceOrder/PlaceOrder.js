import React from "react";
import { useState } from "react";

function PlaceOrder() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "3",
    state: "Goa",
    address1: "",
    address2: "",
    email: "",
    phone: 0,
    city: "",
    postalCode: 0,
  });

  const formDataHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      address1: "",
      address2: "",
      email: "",
      phone: 0,
      city: "",
      postalCode: 0,
    });
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <section>
          <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0 text-font text-uppercase">
                    Delivery address
                  </h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form11Example1"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="form11Example1"
                            className="form-control"
                            value={formData.firstName}
                            onChange={formDataHandler}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form11Example2"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            id="form11Example2"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={formDataHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form11Example31"
                          >
                            Country
                          </label>
                          <select
                            className="select form-control"
                            name="country"
                            id="form11Example31"
                            value={formData.country}
                            onChange={formDataHandler}
                          >
                            <option value="" defaultValue="">
                              --select--
                            </option>
                            <option value="1">United States</option>
                            <option value="2">Spain</option>
                            <option value="3">India</option>
                            <option value="4">Italy</option>
                            <option value="5">Greece</option>
                            <option value="6">Germany</option>
                            <option value="7">Croatia</option>
                            <option value="8">Sweden</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form11Example32"
                          >
                            State
                          </label>
                          <select
                            name="state"
                            className="select form-control"
                            id="form11Example32"
                            value={formData.state}
                            onChange={formDataHandler}
                          >
                            <option value="" defaultValue="">
                              --select--
                            </option>

                            <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                            <option value="Andaman and Nicobar Islands">
                              Andaman and Nicobar Islands
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">
                              Dadar and Nagar Haveli
                            </option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jammu and Kashmir">
                              Jammu and Kashmir
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form11Example3">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        name="address1"
                        id="form11Example3"
                        className="form-control"
                        value={formData.address1}
                        onChange={formDataHandler}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form11Example4">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        name="address2"
                        id="form11Example4"
                        className="form-control"
                        value={formData.address2}
                        onChange={formDataHandler}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form11Example5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="form11Example5"
                        className="form-control"
                        value={formData.email}
                        onChange={formDataHandler}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form11Example6">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="form11Example6"
                        className="form-control"
                        value={formData.phone}
                        onChange={formDataHandler}
                      />
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form11Example41"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="form11Example41"
                            className="form-control"
                            value={formData.city}
                            onChange={formDataHandler}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form11Example42"
                          >
                            Postal Code
                          </label>
                          <input
                            type="text"
                            name="postalCode"
                            id="form11Example42"
                            className="form-control"
                            value={formData.postalCode}
                            onChange={formDataHandler}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form11Example7">
                        Additional information
                      </label>
                      <textarea
                        className="form-control"
                        id="form11Example7"
                        rows="4"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary col-md-4"
                  onClick={submitHandle}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PlaceOrder;
