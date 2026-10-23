import React from "react";
const img = "/assets/26e3b.svg";
const imgLeft = "/assets/27331.svg";
const imgDarkModeFalseTypeDefault = "/assets/2bec3.svg";
const imgRightSide = "/assets/30a03.svg";
const imgSearch = "/assets/52593.svg";
const imgTrashCan = "/assets/eec26.svg";
const img14 = "/assets/f0977.svg";
type Cart2Props = {
    className?: string;
    propValue?: boolean;
    size?: "24";
};
function Cart2({ className, propValue = false, size = "24" }: Cart2Props) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="1:18">
      <div className="f801ce7b5da" data-node-id="1:19" data-name="编组">
        <div className="f4cbd2e6b91">
          <img alt="" className="facc3667e96" src={img}/>
        </div>
      </div>
      {propValue && (<div className="f7bd4271ec2" data-node-id="1:27" data-name="徽标">
          <div className="f0b078dd3f4" data-node-id="I1:27;3810:16867">
            <p className="fd78a8bf6ba">1</p>
          </div>
        </div>)}
    </div>);
}
type Left2Props = {
    className?: string;
    size?: "24";
};
function Left2({ className, size = "24" }: Left2Props) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="1:14">
      <div className="f541c1883c0" data-node-id="1:15" data-name="Left">
        <div className="f0a05deba1a">
          <img alt="" className="facc3667e96" src={imgLeft}/>
        </div>
      </div>
    </div>);
}
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
export default function Component() {
    return (<div className="f19cd7997ed" data-node-id="10:2960" data-name="搜索浮层页">
      <div className="f39ca0321a1" data-node-id="10:2961">
        <div className="ffbce94c4f2" data-node-id="10:2962" data-name="Status Bar / iPhone X (or newer)">
          <div className="f7379dde60f" data-node-id="I10:2962;248:73132" data-name="Right Side">
            <img alt="" className="f8faf267d30" src={imgRightSide}/>
          </div>
          <div className="f1f0f99ceae" data-node-id="I10:2962;248:73139" data-name="Left Side">
            <Time className="ffd009f8265"/>
          </div>
        </div>
        <div className="f3a131f985a" data-node-id="10:2963" data-name="SearchBar">
          <Left2 className="feaa60f1c42"/>
          <div className="f0a44ade293" data-node-id="10:2965" data-name="编组">
            <div className="fc51752dc8c" data-node-id="10:2966" data-name="search">
              <img alt="" className="f8faf267d30" src={imgSearch}/>
            </div>
            <div className="fdaec9bd098" data-node-id="10:2970"/>
          </div>
          <div className="f63ded69ade" data-node-id="10:2971">
            <div className="feaa60f1c42" data-node-id="10:2972">
              <Cart2 className="f2893541175"/>
              <div className="f3c1917b266" data-node-id="10:2974" data-name="徽标">
                <div className="fa1b6584b72" data-node-id="I10:2974;1207:11216">
                  <p className="fb17863f73d">6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f39ca0321a1" data-node-id="10:2976">
        <div className="f6d0ee3de68" data-node-id="10:2977">
          <p className="fa85d572f9e" data-node-id="10:2978" style={{ width: 332, height: 19, flex: "0 0 auto" }}>
            Recently searched
          </p>
          <div className="fc51752dc8c" data-node-id="10:2979" data-name="Trash can">
            <div className="f6b263f2535" data-node-id="I10:2979;1041:24003" data-name="Trash can">
              <div className="f48ec81d4c3">
                <img alt="" className="facc3667e96" src={imgTrashCan}/>
              </div>
            </div>
          </div>
        </div>
        <div className="f276303aed2" data-node-id="10:2980" data-name="tags">
          <div className="f8c7d8efaa6" data-node-id="10:2981">
            <div className="fe7da094c2a" data-node-id="10:2982" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:2982;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:2982;10:58485;10:58396">
                  <p className="fbf919b50f6">halloween broccoli</p>
                </div>
              </div>
            </div>
            <div className="fe7da094c2a" data-node-id="10:2983" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:2983;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:2983;10:58485;10:58396">
                  <p className="fbf919b50f6">halloween broccoli</p>
                </div>
              </div>
            </div>
          </div>
          <div className="f8c7d8efaa6" data-node-id="10:2984">
            <div className="fe7da094c2a" data-node-id="10:2985" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:2985;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:2985;10:58485;10:58396">
                  <p className="fbf919b50f6">halloween broccoli</p>
                </div>
              </div>
            </div>
            <div className="fe7da094c2a" data-node-id="10:2986" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:2986;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:2986;10:58485;10:58396">
                  <p className="fbf919b50f6">special offer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="f927dd6b8a9" data-node-id="10:2987">
            <div className="fe7da094c2a" data-node-id="10:2988" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:2988;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:2988;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
            <div className="fe7da094c2a" data-node-id="10:2989" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:2989;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:2989;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
            <div className="fe7da094c2a" data-node-id="10:2990" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:2990;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:2990;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
            <div className="f7fc9bb2776" data-node-id="10:2991" data-name="编组 15备份" style={{ width: 26, height: 26 }}>
              <div className="f35213b333d" data-node-id="10:2992" data-name="编组 14">
                <img alt="" className="f8faf267d30" src={img14}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f39ca0321a1" data-node-id="10:2995">
        <div className="f55456aa2e9" data-node-id="10:2996">
          <p className="fa85d572f9e" data-node-id="10:2997" style={{ width: 354, height: 19, flex: "0 0 auto" }}>
            Popular right now
          </p>
        </div>
        <div className="f276303aed2" data-node-id="10:2998" data-name="tags">
          <div className="f8c7d8efaa6" data-node-id="10:2999">
            <div className="fe7da094c2a" data-node-id="10:3000" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3000;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3000;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
            <div className="fe7da094c2a" data-node-id="10:3001" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3001;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3001;10:58485;10:58396">
                  <p className="fbf919b50f6">halloween broccoli</p>
                </div>
              </div>
            </div>
            <div className="fe7da094c2a" data-node-id="10:3002" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3002;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3002;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
          </div>
          <div className="f8c7d8efaa6" data-node-id="10:3003">
            <div className="fe7da094c2a" data-node-id="10:3004" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3004;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3004;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
            <div className="fe7da094c2a" data-node-id="10:3005" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3005;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3005;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fbc1030c327" data-node-id="10:3006" data-name="Home Indicator">
        <div className="ff46bd5a4b3" data-node-id="I10:3006;248:73401" data-name="Home Indicator"/>
      </div>
    </div>);
}
