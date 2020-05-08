import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select'; 


class CountryPicker extends React.Component {
    
constructor(props)
{
super(props);

}
handleChange = (e)=> {
this.props.selectedCountry(e.target.value);
}
render(){
    return (<Select onChange={this.handleChange} style={{width:'180px'}}>
        <MenuItem key="global" value="">Global</MenuItem>
        {
            
            this.props.data.map(x => <MenuItem key={x.CountryName} value={x.Url}>{x.CountryName}</MenuItem>)
            
        }
    </Select>)
};

}

export default CountryPicker

