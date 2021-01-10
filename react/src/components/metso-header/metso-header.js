import React from 'react'

import './metso-header.css'

const MetsoHeader = () => {
  return (
    <div>
      <div className="panel">
        <div className="left">
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col">

              <div className="btn-pannel">
                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button class="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button class="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary btn-block">Boiler</button>
                  </div>
                  <div className="col">
                    <button class="btn btn-primary btn-block">Turbine</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">FW Pump</button>
                  </div>
                </div>

              </div>
            </div>

            <div className="col">
              <div className="overview-videogramm">

              </div>
            </div>

            <div className="col-7 alarms">
              <div className="row">
                <div className="col-2">
                  <button className="btn btn-primary btn-block">FW Pump</button>
                </div>
              </div>

              <div className="row first-alarm">
              </div>

              <div className="row">
              </div>
            </div>

        </div>

        </div>
      </div>
    </div>
  )
}

export default MetsoHeader
