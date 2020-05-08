import React from 'react';
import ReactDOM from 'react-dom';
import CountryPicker from './CountryPicker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Cases extends React.Component{

  constructor(props){
    super(props);
    this.state={
      displaydata:[],
      countryList:[],
      countryUrl:""
    }
  }

  componentDidMount(){
    fetch('http://137.207.82.228:90/api/values/')
        .then(res => res.json())
        .then((apidata) => {
          //console.log(apidata)
          this.setState({ displaydata: apidata})
        })
        .catch(console.log)

        fetch('http://localhost:64587/api/countrydetail')
        .then(res => res.json())
        .then((apidata) => {
          //console.log(apidata)
          this.setState({ countryList: apidata})
        })
        .catch(console.log)
  }
  updateCaseCount(){
    //var countryName = document.getElementById("countryName")
    //var name = this.refs.name.value;
    var names = this.state.countryUrl;
    var name = "";
    if(names != "")
    {
    name = names.split('/')[1];
    };
    fetch('http://137.207.82.228:90/api/values/'+ name)
        .then(res => res.json())
        .then((apidata) => {
          //console.log(name)
          //console.log(apidata)
          this.setState({ displaydata: apidata})
        })
        .catch(console.log)
  };
  getCountryUrl = (url)=>
  {
      this.setState({countryUrl:url});
  }
  render() {
    return (
      <div className="container">
        <h2 className="h2">Welcome to CoronaVirus Cases Tracking Portal</h2>
        <br/>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Total Cases</th>
              <th>Deaths</th>
              <th>Recovered</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <td>{this.state.displaydata.totalCases}</td>
              <td>{this.state.displaydata.deaths}</td>
              <td>{this.state.displaydata.recovered}</td>
              </tr>
                
          </tbody>
        </table>
        <div>
          <div>
        <label className="badge badge-pill badge-primary">Select the name of the country</label>
        </div>
        <br/>
        <div>
        <CountryPicker data={this.state.countryList} selectedCountry={this.getCountryUrl}></CountryPicker>
        </div>
    <br/>
    </div>
        <button onClick={() => this.updateCaseCount()} className="btn btn-outline-primary">Get cases count</button>
      </div>
      );
    }

}
const element=<Cases></Cases>

ReactDOM.render(element,document.getElementById("root"));
