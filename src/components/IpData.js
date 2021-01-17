import React, {Component} from "react";

export default class IpData extends Component {

    render() {

       let data = this.props.data;

       return (
           <div className="container-fluid">
               <div className="col-md-8 offset-2 mt-5">
                   <div className="card">
                       <div className="card-body">
                           { data.loadingIpData ? <div class="text-center"><img src="loading.gif" /></div> :
                               <div>
                                   <ul className="list-group">
                                       <li className="list-group-item active" aria-current="true">Information de localisation</li>
                                       <li className="list-group-item d-flex justify-content-between align-items-center">
                                           Votre adresse ip (format {data.ipData.version}) :
                                           <span className="badge bg-secondary">{data.ipData.ip}</span>
                                       </li>
                                       <li className="list-group-item d-flex justify-content-between align-items-center">
                                           Votre ville :
                                           <span className="badge bg-secondary">{data.ipData.city}</span>
                                       </li>
                                       <li className="list-group-item d-flex justify-content-between align-items-center">
                                           Votre région :
                                           <span className="badge bg-secondary">{data.ipData.region}</span>
                                       </li>
                                       <li className="list-group-item d-flex justify-content-between align-items-center">
                                           Votre pays :
                                           <span className="badge bg-secondary">{data.ipData.country_name}</span>
                                       </li>
                                       <li className="list-group-item d-flex justify-content-between align-items-center">
                                           Votre ISP :
                                           <span className="badge bg-secondary">{data.ipData.org}</span>
                                       </li>
                                   </ul>
                               </div>
                           }
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}