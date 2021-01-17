import React, {Component} from "react";
import IpData from "../components/IpData";

export default class FetchIpDataApi extends Component {

    state = {
        loadingIpData: true,
        ipData: null
    };

    async componentDidMount() {
        let url = "https://ipapi.co/json/";
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ ipData: data, loadingIpData: false });
    }

    render() {
        return <IpData data={this.state} />
    }
}