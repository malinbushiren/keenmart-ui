import React from "react";
const imgDarkModeFalseTypeDefault = "/assets/2bec3.svg";
const imgImg6836 = "/assets/05479.png";
const imgImg69025 = "/assets/8ffcb.png";
const imgRightSide = "/assets/f3b7f.svg";
const imgLeft = "/assets/8a39a.svg";
const imgVector141 = "/assets/57012.svg";
const imgVector142 = "/assets/7ac4b.svg";
const imgGroup4 = "/assets/0e775.svg";
type TimeProps = {
    className?: string;
    darkMode?: "False";
    type?: "Default";
};
function Time({ className, darkMode = "False", type = "Default" }: TimeProps) {
    return (<div className={className || "f4ba389fbb9"} data-node-id="1:70">
      <img alt="" className="f8faf267d30" src={imgDarkModeFalseTypeDefault}/>
    </div>);
}
export default function LogInPage() {
    return (<div className="f70d9036861" data-node-id="1:470" data-name="Log in Page">
      <div className="fe51a4bafe8" data-node-id="1:471">
        <div className="f39ca0321a1" data-node-id="1:472">
          <div className="ffbce94c4f2" data-node-id="1:473" data-name="Status Bar / iPhone X (or newer)">
            <div className="f7379dde60f" data-node-id="I1:473;248:73132" data-name="Right Side">
              <img alt="" className="f8faf267d30" src={imgRightSide}/>
            </div>
            <div className="f1f0f99ceae" data-node-id="I1:473;248:73139" data-name="Left Side">
              <Time className="ffd009f8265"/>
            </div>
          </div>
          <div className="fbe19e44e61" data-node-id="1:474" data-name="SearchBar">
            <div className="feaa60f1c42" data-node-id="1:475" data-name="Left 2">
              <div className="f541c1883c0" data-node-id="I1:475;829:60770" data-name="Left">
                <div className="f0a05deba1a">
                  <img alt="" className="facc3667e96" src={imgLeft}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f7d15292503" data-node-id="1:487" data-name="IMG_6836">
        <div className="ffb97e384f1">
          <img alt="" className="f037d6fe011" src={imgImg6836}/>
        </div>
      </div>
      <div className="fe5a08836b0" data-node-id="1:488">
        <div className="f82d5e5e0ac" data-node-id="1:489">
          <p className="fc3dc13096a">Phone number</p>
        </div>
      </div>
      <div className="f092f66f751" data-node-id="1:490">
        <div className="f32213dbc59" data-node-id="1:491">
          <p className="fc3dc13096a">+966</p>
        </div>
        <div className="fe579bfb067" data-node-id="1:492">
          <div className="f22c2229f97">
            <div className="f0b8f776e7a" data-name="Left 2">
              <div className="f541c1883c0" data-node-id="I1:492;829:60770" data-name="Left">
                <div className="f0a05deba1a">
                  <img alt="" className="facc3667e96" src={imgLeft}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fb3d67adc2d" data-node-id="1:493">
        <p className="f69cdf25ad1">
          <span className="fbf919b50f6">{`By continuing, you agree to our `}</span>
          <span className="f87f8ccd205">Terms of Use</span>
          <span className="fbf919b50f6">{` and `}</span>
          <span className="f87f8ccd205">Privacy</span>
        </p>
      </div>
      <div className="f9d82630aa9" data-node-id="1:494" data-name="Button/_Button XLarge">
        <div className="fe8210ba625" data-node-id="1:496" data-name="Text">
          <div className="fd0a74ca768" data-node-id="1:497">
            <p className="fc3dc13096a">Continue</p>
          </div>
        </div>
      </div>
      <div className="fd8d23e07e4" data-node-id="1:499" data-name="Button/_Button XLarge">
        <div className="feaa60f1c42" data-node-id="1:501" data-name="IMG_6902 5">
          <div className="ffb97e384f1">
            <img alt="" className="ffd7e59d2f7" src={imgImg69025}/>
          </div>
        </div>
        <div className="fe8210ba625" data-node-id="1:502" data-name="Text">
          <div className="fc910980973" data-node-id="1:503">
            <p className="fc3dc13096a">Continue with Email</p>
          </div>
        </div>
      </div>
      <div className="fd210cfe969" data-node-id="1:505">
        <p className="f05c1f8eabf">{`Sign up or log in `}</p>
      </div>
      <div className="fe67bdb6b9f" data-node-id="1:506">
        <div className="fec4a059f90" data-node-id="1:507" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="fefcc9af6d1">or</p>
        </div>
        <div className="f74455d08d7" data-node-id="1:508">
          <div className="fcdfa015137">
            <img alt="" className="facc3667e96" src={imgVector141}/>
          </div>
        </div>
        <div className="fb67cd3ce73" data-node-id="1:509">
          <div className="fcdfa015137">
            <img alt="" className="facc3667e96" src={imgVector142}/>
          </div>
        </div>
      </div>
      <div className="fc31dfb154d" data-node-id="1:510">
        <div className="f1291c34402" data-node-id="1:511">
          <img alt="" className="f8faf267d30" src={imgGroup4}/>
        </div>
      </div>
    </div>);
}
