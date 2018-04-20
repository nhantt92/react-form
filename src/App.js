import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtDesc: '',
      sltGender: 1,
      rdLang: 'en',
      chkbStatus: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked:target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtUsername"
                      onChange={this.onHandleChange}
                      value={this.state.txtUsername}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtPassword"
                      onChange={this.onHandleChange}
                    //value = {this.state.txtPassword}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mô Tả:</label>
                    <textarea
                      name="txtDesc"
                      className="form-control"
                      rows="3"
                      onChange={this.onHandleChange}
                      value={this.state.txtDesc}
                    >
                    </textarea>
                  </div>
                  <label>Giới Tính</label>
                  <select
                    name="sltGender"
                    className="form-control"
                    defaultValue={this.state.sltGender}
                  >
                    <option value={0}>Nữ</option>
                    <option value={1}>Nam</option>
                  </select>
                  <br />
                  <label>Ngôn Ngữ</label>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value='en'
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "en"}
                      />Tiếng Anh
                  </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value='vi'
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "vi"}
                      />
                      Tiếng Việt
                    </label>
                  </div>
                  <br />
                  <div className="checkbox">
                    <label>
                      <input 
                        type="checkbox" 
                        name="chkbStatus"
                        value={true}
                        onChange={this.onHandleChange}
                        checked = {this.state.chkbStatus === true}
                      />
                      Trạng Thái
                  </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Lưu lại</button> &nbsp;
                  <button type="reset" className="btn btn-default">Xoá Trắng</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
