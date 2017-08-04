import React, { Component, PropTypes } from 'react';
import DatePicker from "react-bootstrap-date-picker";

class DrugOrderComponent extends Component {

  render() {
      return (
        <div>
            <h3>Search By Drug Order</h3>
            <h4 className="text-center">Patients taking specific drugs</h4>
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="selectCategory" className="col-sm-2 control-label">Select</label>
                            <div className="col-sm-4">
                                <select className="form-control" id="categoryType" name="categoryType">
                                    <option>Any</option>
                                    <option>All</option>
                                    <option>None</option>
                                </select>
                            </div>
                </div>
                <div className="form-group">
                    <label htmlFor="drug" className="col-sm-2 control-label">Drug(s)</label>
                    <div className="col-sm-4">
                        <select className="form-control" multiple="multiple" id="drug" name="drug">
                            <option>drug 1</option>
                            <option>drug 2</option>
                            <option>drug 3</option>
                            <option>drug 4</option>
                            <option>drug 5</option>
                            <option>drug 6</option>
                            <option>drug 7</option>
                            <option>drug 8</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Drug Regimen</label>
                    <div className="col-sm-6">
                        <label className="radio-inline">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Current Drug Regimen
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> All Drug Regimen(s)
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">When?</label>
                    <div className="">
                        <span className="inline-label" id="for-the-last-label">For the last:</span>
                    </div>
                    <div className="col-sm-2">
                        <input className="form-control" type="text" name="month" />
                    </div>
                    <span className="inline-label">months and/or :</span>
                    <div className="col-sm-2">
                        <input className="form-control" name="days" type="text" />
                    </div>
                    <span className="inline-label">days    (optional)</span>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Date Range</label>
                    <div className="col-sm-1">
                        <span className="inline-label">From:</span>
                    </div>
                    <div className="col-sm-3">
                        <DatePicker
                            dateFormat="DD-MM-YYYY"
                            className="form-control"
                            name="from-date"
                        />
                    </div>
                    <span className="inline-label">To:</span>
                    <div className="col-sm-3">
                        <DatePicker
                            dateFormat="DD-MM-YYYY"
                            className="form-control"
                            name="to-date"
                        />
                    </div>
                    <span className="inline-label">(optional)</span>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-6">
                        <button type="submit" className="btn btn-success">Search</button>
                        <button type="reset" className="btn btn-default cancelBtn">Reset</button>
                    </div>
                </div>
            </form>
            <br/>
            <h4 className="text-center">Patients who stopped or changed a drug</h4>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">When?</label>
                    <div className="col-sm-2">
                        <span className="inline-label">Within the last:</span>
                    </div>
                    <div className="col-sm-2">
                        <input className="form-control" type="text" name="month" />
                    </div>
                    <span className="inline-label">month(s) and/or :</span>
                    <div className="col-sm-2">
                        <input className="form-control" name="days" type="text" />
                    </div>
                    <span className="inline-label">days(optional)</span>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Date Range</label>
                    <div className="col-sm-1">
                        <span className="inline-label">From:</span>
                    </div>
                    <div className="col-sm-3">
                        <DatePicker
                            dateFormat="DD-MM-YYYY"
                            className="form-control"
                            name="from-date"
                        />
                    </div>
                    <span className="inline-label">To:</span>
                    <div className="col-sm-3">
                        <DatePicker
                            dateFormat="DD-MM-YYYY"
                            className="form-control"
                            name="to-date"
                        />
                    </div>
                    <span className="inline-label">(optional)</span>
                </div>
                <br/><br/>
                <div className="form-group">
                    <div className="col-md-4">
                        <p className="text-center">Reason(s) for stop/change</p>
                        <textarea className="form-control" rows="4" placeholder="type here">
                        </textarea>
                    </div>

                    <div className="col-md-4">
                        <p className="text-center">Only these drugs</p>
                        <textarea className="form-control" rows="4" placeholder="type here">
                        </textarea>
                    </div>

                    <div className="col-md-4">
                        <p className="text-center">Only these generics</p>
                        <textarea className="form-control" rows="4" placeholder="type here">
                        </textarea>
                    </div>
                </div>
                <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-6">
                        <button type="submit" className="btn btn-success">Search</button>
                        <button type="reset" className="btn btn-default cancelBtn">Reset</button>
                    </div>
                </div>

            </form>
        </div>
      );
    }
}

export default DrugOrderComponent;
