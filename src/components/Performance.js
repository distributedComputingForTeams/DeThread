import React, { Component } from 'react';
import NavLink from './NavLink';
import Success from './Success';
import WorkerInput from './WorkerInput';
import HashInput from './HashInput';
import LengthInput from './LengthInput';
import CharsetDropDown from './CharsetDropDown';
import Spinner from './Spinner';

class Performance extends Component {
  render() {
    let solved;
    console.log('performance', this.props)
    if (this.props.clearText) {
      solved = <Success clearText={this.props.clearText} duration={this.props.duration}/>
    } else if (this.props.calculating) {
      console.log("WORKERS in performance!!", this.props.globalWorkers);
      solved = <div><Spinner /><p>Number of contributing web workers: {this.props.globalWorkers}</p><p>Number of permutations: {this.props.globalNumCombos}</p></div>
    }

    let is = this.props.globalConnections === 1 ? 'is' : 'are';
    let client = this.props.globalConnections === 1 ? 'client' : 'total clients';
    
    return(<div>
              <div className="perfContainer">
                <div className="card well well-lg">
                  <h2> MD5 Hash Decryption </h2><br />

                  <form>
                    <h3>Host Settings</h3>
                    <div className="form-group">
                      <label for="lengthInput">Length of Word</label>
                      <LengthInput className="form-control" updateSettings={this.props.updateSettings.bind(null, 'length')} />
                    </div>

                    <div className="form-group">
                      <label for="hashInput">Hash</label><br/>
                      <a target="_blank" href="http://www.miraclesalad.com/webtools/md5.php">[Hash Generator]</a>
                      <HashInput className="form-control" updateSettings={this.props.updateSettings.bind(null, 'hash')} />
                    </div>

                    <div className="form-group">
                      <label for="charsetDropDown">Charset</label><br/>
                      <CharsetDropDown className="form-control" />
                    </div>

                    <h3 className="local-settings">Local Settings</h3>
                    <div className="form-group">
                      <label for="workerInput">Workers</label>
                      <WorkerInput className="form-control" optimalWorkers={this.props.optimalWorkers} updateSettings={this.props.updateSettings.bind(null, 'workers')} />
                      <p className="worker-recommendation">Optimal number of workers for your device: {this.props.optimalWorkers} </p>
                      <p className="worker-recommendation">(Choose 1 worker if you are running other processes)</p>
                    </div>                    
                  </form>

                  <button className="startHash btn btn-danger" 
                    onClick={this.props.startMD5Decrypt}>
                    Start
                  </button><br /><br />

                  <div>
                    There {is} currently {this.props.globalConnections} {client} in the room.
                    {solved}
                  </div>
              </div>
              
            </div>
          </div>
       )
  }
}

export default Performance;
