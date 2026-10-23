import React from "react";
const img = "/assets/26e3b.svg";
const imgLeft = "/assets/27331.svg";
const imgDarkModeFalseTypeDefault = "/assets/2bec3.svg";
const imgRightSide = "/assets/5eb55.svg";
const imgSearch = "/assets/52593.svg";
const imgIcon = "/assets/71e6a.svg";
const imgSorter = "/assets/7f58d.svg";
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
    return (<div className="fabcb1a40ba" data-node-id="10:3007" data-name="搜索结果">
      <div className="f9bebc61b39" data-node-id="10:3008">
        <div className="f787e32f758" data-node-id="10:3009" data-name="标题">
          <p className="f5b6c548cf9" data-node-id="10:3010">
            You might also like
          </p>
        </div>
        <div className="fed635c2d9d" data-node-id="10:3011" data-name="tags">
          <div className="f8c7d8efaa6" data-node-id="10:3012">
            <div className="f9a129b88d4" data-node-id="10:3013" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3013;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3013;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
            <div className="f9a129b88d4" data-node-id="10:3014" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3014;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3014;10:58485;10:58396">
                  <p className="fbf919b50f6">halloween broccoli</p>
                </div>
              </div>
            </div>
            <div className="f9a129b88d4" data-node-id="10:3015" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3015;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3015;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
          </div>
          <div className="f8c7d8efaa6" data-node-id="10:3016">
            <div className="f9a129b88d4" data-node-id="10:3017" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3017;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3017;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
            <div className="f9a129b88d4" data-node-id="10:3018" data-name="Atom/Tag/Form">
              <div className="f40d8b247fc" data-node-id="I10:3018;10:58485" data-name="Atom/Tag/Inner">
                <div className="feb45ce06d0" data-node-id="I10:3018;10:58485;10:58396">
                  <p className="fbf919b50f6">tomato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fe51a4bafe8" data-node-id="10:3019">
        <div className="f39ca0321a1" data-node-id="10:3020">
          <div className="ffbce94c4f2" data-node-id="10:3021" data-name="Status Bar / iPhone X (or newer)">
            <div className="f7379dde60f" data-node-id="I10:3021;248:73132" data-name="Right Side">
              <img alt="" className="f8faf267d30" src={imgRightSide}/>
            </div>
            <div className="f1f0f99ceae" data-node-id="I10:3021;248:73139" data-name="Left Side">
              <Time className="ffd009f8265"/>
            </div>
          </div>
          <div className="f3a131f985a" data-node-id="10:3022" data-name="SearchBar">
            <Left2 className="feaa60f1c42"/>
            <div className="f0a44ade293" data-node-id="10:3024" data-name="编组">
              <div className="fc51752dc8c" data-node-id="10:3025" data-name="search">
                <img alt="" className="f8faf267d30" src={imgSearch}/>
              </div>
              <div className="fdaec9bd098" data-node-id="10:3029">
                <div className="fd00167db74" data-node-id="10:3030">
                  <p className="f4120bb12fd">halloween broccoli</p>
                </div>
                <div className="f8dffb40edf" data-node-id="10:3031">
                  <div className="f15cc5ceed7" data-node-id="10:3032">
                    <div className="fc4925c4387">
                      <div className="f4ffe3f94a1" data-name="→ Icon">
                        <img alt="" className="f8faf267d30" src={imgIcon}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f63ded69ade" data-node-id="10:3034">
              <div className="feaa60f1c42" data-node-id="10:3035">
                <Cart2 className="f2893541175"/>
                <div className="f3c1917b266" data-node-id="10:3037" data-name="徽标">
                  <div className="fa1b6584b72" data-node-id="I10:3037;1207:11216">
                    <p className="fb17863f73d">6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f8fbc926836" data-node-id="10:3039" data-name="Tabs">
            <div className="f6493df43b4" data-node-id="I10:3039;4620:140896" data-name="Atom/Tabs/Base">
              <div className="f11adf671f8" data-node-id="I10:3039;4620:140910" data-name="Atom/Tabs/Form">
                <div className="f026596262d" data-node-id="I10:3039;4620:140926" data-name="Atom/Tabs/Inner">
                  <p className="fa3be63e529" data-node-id="I10:3039;4620:140927">
                    Relevance
                  </p>
                </div>
              </div>
              <div className="fd6bb32a705" data-node-id="I10:3039;4620:140914" data-name="Atom/Tabs/Form">
                <div className="fbbf6edb7a1" data-node-id="I10:3039;4620:140924" data-name="Atom/Tabs/Inner">
                  <p className="f0c1c9d1aa7" data-node-id="I10:3039;4620:140925">
                    Top sales
                  </p>
                </div>
              </div>
              <div className="fd6bb32a705" data-node-id="I10:3039;4620:140918" data-name="Atom/Tabs/Form">
                <div className="f26a0376605" data-node-id="I10:3039;4620:140922" data-name="Atom/Tabs/Inner">
                  <p className="f0c1c9d1aa7" data-node-id="I10:3039;4620:140923">
                    Price
                  </p>
                  <div className="f7e7fdba9df" data-node-id="I10:3039;6678:154646" data-name="Sorter">
                    <img alt="" className="f8faf267d30" src={imgSorter}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fbc1030c327" data-node-id="10:3040" data-name="Home Indicator">
        <div className="ff46bd5a4b3" data-node-id="I10:3040;248:73401" data-name="Home Indicator"/>
      </div>
      <div className="f78a0640534" data-node-id="10:3041">
        <div className="f61c56a43ce" data-node-id="10:3042">
          <div className="f02ed341b53" data-node-id="10:3043">
            <p className="f294c8f0b4f">No results found</p>
          </div>
          <div className="f8c6ee7b573" data-node-id="10:3044">
            <p className="f4120bb12fd">Try another search term</p>
          </div>
        </div>
      </div>
    </div>);
}
