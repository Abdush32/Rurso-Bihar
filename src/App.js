import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {




  return (
<div>
  <div className="ugf-nav">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="navigation">
            <div className="logo">
              <a href="https://uigaint.com/demo/html/anfra_2/index.html"><img src="/assets/images/logo-dark.png" className="img-fluid" alt /><span>KYC</span></a>
            </div>
            <div className="nav-btns">
              <a href="https://uigaint.com/demo/html/anfra_2/index.html" className="back"><span className="text">Back to Main</span> Demo</a>
              <a href="https://themeforest.net/item/anfra-questionnaire-form-wizard/29917051" className="get">Get Anfra</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="ugf-bg ufg-main-container">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="ugf-form">
            <form action="#">
              <div className="input-block">
                <h4>Personal Information</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="inputFname">First Name</label>
                      <input type="text" className="form-control" id="inputFname" placeholder="e.g. Robert" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="inputLname">Last Name</label>
                      <input type="text" className="form-control" id="inputLname" placeholder="e.g. Smith" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group country-select">
                      <label htmlFor="inputCountry">Country of Nationality</label>
                      <div className="select-input choose-country">
                        <span />
                        <select id="inputCountry" className="form-control">
                          <option value>Country</option>
                          <option value>USA</option>
                          <option value>Russia</option>
                          <option value>China</option>
                          <option value>England</option>
                          <option value>France</option>
                          <option value>Germany</option>
                          <option value>Spain</option>
                          <option value>Netherland</option>
                          <option value>Singapur</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="inputDate">Date of Birth</label>
                      <div className="birth-date">
                        <div className="select-input birth-date-input">
                          <span />
                          <select id="inputDate" className="form-control">
                            <option value>Date</option>
                            <option value>01</option>
                            <option value>02</option>
                            <option value>03</option>
                            <option value>04</option>
                            <option value>05</option>
                            <option value>06</option>
                            <option value>07</option>
                            <option value>08</option>
                            <option value>09</option>
                            <option value>10</option>
                            <option value>11</option>
                            <option value>12</option>
                            <option value>13</option>
                            <option value>14</option>
                            <option value>15</option>
                            <option value>16</option>
                            <option value>17</option>
                            <option value>18</option>
                            <option value>19</option>
                            <option value>20</option>
                            <option value>21</option>
                            <option value>22</option>
                            <option value>23</option>
                            <option value>24</option>
                            <option value>25</option>
                            <option value>26</option>
                            <option value>27</option>
                            <option value>28</option>
                            <option value>29</option>
                            <option value>30</option>
                          </select>
                        </div>
                        <div className="select-input birth-date-input">
                          <span />
                          <select id="inputDate" className="form-control">
                            <option value>Month</option>
                            <option value>01</option>
                            <option value>02</option>
                            <option value>03</option>
                            <option value>04</option>
                            <option value>05</option>
                            <option value>06</option>
                            <option value>07</option>
                            <option value>08</option>
                            <option value>09</option>
                            <option value>10</option>
                            <option value>11</option>
                            <option value>12</option>
                          </select>
                        </div>
                        <div className="select-input birth-date-input">
                          <span />
                          <select id="inputDate" className="form-control">
                            <option value>Year</option>
                            <option value>1990</option>
                            <option value>1991</option>
                            <option value>1992</option>
                            <option value>1993</option>
                            <option value>1994</option>
                            <option value>1995</option>
                            <option value>1996</option>
                            <option value>1997</option>
                            <option value>1998</option>
                            <option value>1999</option>
                            <option value>2001</option>
                            <option value>2002</option>
                            <option value>2003</option>
                            <option value>2004</option>
                            <option value>2005</option>
                            <option value>2006</option>
                            <option value>2007</option>
                            <option value>2008</option>
                            <option value>2009</option>
                            <option value>2010</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group country-select">
                      <label htmlFor="inputCountry">Country of Residence</label>
                      <div className="select-input choose-country">
                        <span />
                        <select id="inputCountry" className="form-control">
                          <option value>Country</option>
                          <option value>USA</option>
                          <option value>Russia</option>
                          <option value>China</option>
                          <option value>England</option>
                          <option value>France</option>
                          <option value>Germany</option>
                          <option value>Spain</option>
                          <option value>Netherland</option>
                          <option value>Singapur</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="state">State/Province</label>
                      <input type="text" className="form-control" id="state" placeholder="e.g. Smith" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="address1">Address Line 1</label>
                      <input type="text" className="form-control" id="address1" placeholder="e.g. 2707 Par Drive" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="address2">Address Line 2</label>
                      <input type="text" className="form-control" id="address2" placeholder="e.g. Los Angeles, CA 90013" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input type="text" className="form-control" id="city" placeholder="e.g. New York" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="zip">Post Code</label>
                      <input type="text" className="form-control" id="zip" placeholder="e.g. 0000" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor>Gender</label>
                  <div className="check-gender">
                    <div className="custom-radio">
                      <input type="radio" name="gender" className="custom-control-input" id="Gmale" required />
                      <label className="custom-control-label" htmlFor="Gmale">Male</label>
                    </div>
                    <div className="custom-radio">
                      <input type="radio" name="gender" className="custom-control-input" id="Gfemale" required />
                      <label className="custom-control-label" htmlFor="Gfemale">Female</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-block">
                <h4>Personal Documents</h4>
                <p>Upload any of the following personal document.</p>
                <div className="documents-upload-wrap">
                  <div className="label">Select Document type</div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="passport-tab" data-toggle="tab" href="#passport" role="tab" aria-controls="passport" aria-selected="true"><img src="/assets/images/passport.png" alt />passport</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="nid-tab" data-toggle="tab" href="#nid" role="tab" aria-controls="nid" aria-selected="false"><img src="/assets/images/nid.png" alt />National id</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="driver-tab" data-toggle="tab" href="#driver" role="tab" aria-controls="driver" aria-selected="false"><img src="/assets/images/driving.png" alt />Driver’s License</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="passport" role="tabpanel" aria-labelledby="home-tab">
                      <div className="documents-upload">
                        <div className="upload-item">
                          <input type="file" id="input1" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input1" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input1" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">Passport Cover</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                        <div className="upload-item">
                          <input type="file" id="input2" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input2" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input2" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">Passport Data Page</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                        <div className="upload-item">
                          <input type="file" id="input3" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input3" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input3" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">Selfie With Passport</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                      </div>
                      <div className="conditions">
                        <ul>
                          <li className="complete">File accepted: JPEG/JPG/PNG (Max size: 250 KB)</li>
                          <li>Document should be good condition</li>
                          <li>Document must be  valid period</li>
                          <li>Face must be clear visible</li>
                          <li>Note has today’s date</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nid" role="tabpanel" aria-labelledby="nid-tab">
                      <div className="documents-upload">
                        <div className="upload-item">
                          <input type="file" id="input4" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input4" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input4" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">National ID Front</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                        <div className="upload-item">
                          <input type="file" id="input5" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input5" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input5" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">National ID Back</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                        <div className="upload-item">
                          <input type="file" id="input6" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input6" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input6" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">Selfie With National ID</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                      </div>
                      <div className="conditions">
                        <ul>
                          <li className="complete">File accepted: JPEG/JPG/PNG (Max size: 250 KB)</li>
                          <li>Document should be good condition</li>
                          <li>Document must be  valid period</li>
                          <li>Face must be clear visible</li>
                          <li>Note has today’s date</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="driver" role="tabpanel" aria-labelledby="driver-tab">
                      <div className="documents-upload">
                        <div className="upload-item">
                          <input type="file" id="input7" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input7" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input7" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">License Front</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                        <div className="upload-item">
                          <input type="file" id="input8" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input8" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input8" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">License Back</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                        <div className="upload-item">
                          <input type="file" id="input9" className="input-file" accept="image/*" hidden />
                          <label className="btn-upload" htmlFor="input9" role="button">
                            <img src="/assets/images/cloud.png" />
                            <div id="p-input9" className="preview-box" />
                          </label>
                          <div className="upload-direction"><span className="text">Selfie With License</span><a href="#"><img src="/assets/images/download.png" alt /></a></div>
                        </div>
                      </div>
                      <div className="conditions">
                        <ul>
                          <li className="complete">File accepted: JPEG/JPG/PNG (Max size: 250 KB)</li>
                          <li>Document should be good condition</li>
                          <li>Document must be  valid period</li>
                          <li>Face must be clear visible</li>
                          <li>Note has today’s date</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>  
                <div className="form-group">
                  <div className="custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                    <label className="custom-control-label" htmlFor="customControlValidation1">I accept the <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy policy</a></label>
                  </div>
                </div>
              </div>
              <button className="btn">Submit Documents</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
