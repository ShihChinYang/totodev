import React from "react";
import { Container, Row } from "react-bootstrap";
import SelectBox from "./components/SelectBox";
const EditSection = () => {
  return (
    <Container className="spb">
      <Row>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="card mb-0">
            <div className="card-header">
              <h3 className="card-title">Edit Profile</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Home Address"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label className="form-label">Postal Code</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <SelectBox
                      data={["Germany", "Real Estate","Canada", "Usa", "Afghanistan", "Albania","China","Denmark","Finland","India","Kiribati","Kuwait","Mexico","Pakistan"]}
                      defaultValue="--Select--"
                    />
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://www.facebook.com/"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Google</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://www.google.com/"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://twitter.com/"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Pinterest</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://in.pinterest.com/"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">About Me</label>
                    <textarea
                      rows={5}
                      className="form-control h-auto"
                      placeholder="Enter About your description"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-0">
                    <label className="form-label">Upload Image</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        name="example-file-input-custom"
                      />
                      <label className="custom-file-label">Choose file</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn ripple  btn-secondary">
                Updated Profile
              </button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default EditSection;
