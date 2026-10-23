import React from "react";
const img = "/assets/0837d.svg";
const img1 = "/assets/26e3b.svg";
const imgLeft = "/assets/27331.svg";
const imgDarkModeFalseTypeDefault = "/assets/2bec3.svg";
const imgDownloader2 = "/assets/5a9f6.png";
const imgImage39 = "/assets/b960e.png";
const imgImage11 = "/assets/c7eef.png";
const imgRightSide = "/assets/30a03.svg";
const imgSearch = "/assets/52593.svg";
const imgIcon = "/assets/71e6a.svg";
const imgSorter = "/assets/c50c2.svg";
const imgDownloader1 = "/assets/5a75e.svg";
type ComponentProps = {
    className?: string;
    propValue?: "global";
    propValue1?: "加购";
    propValue2?: "双列商卡（小）";
};
function Component({ className, propValue = "global", propValue1 = "加购", propValue2 = "双列商卡（小）" }: ComponentProps) {
    return (<div className={className || "f53241b7460"} data-node-id="1:843">
      <div className="f9de947d72d" data-node-id="1:844" data-name="加购">
        <div className="f8a0ff48924" data-node-id="1:845" data-name="形状结合">
          <img alt="" className="f8faf267d30" src={img}/>
        </div>
      </div>
    </div>);
}
type Cart2Props = {
    className?: string;
    propValue?: boolean;
    size?: "24";
};
function Cart2({ className, propValue = false, size = "24" }: Cart2Props) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="1:18">
      <div className="f801ce7b5da" data-node-id="1:19" data-name="编组">
        <div className="f4cbd2e6b91">
          <img alt="" className="facc3667e96" src={img1}/>
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
export default function Component1() {
    return (<div className="fabcb1a40ba" data-node-id="10:3045" data-name="搜索结果">
      <div className="fe51a4bafe8" data-node-id="10:3046">
        <div className="f39ca0321a1" data-node-id="10:3047">
          <div className="ffbce94c4f2" data-node-id="10:3048" data-name="Status Bar / iPhone X (or newer)">
            <div className="f7379dde60f" data-node-id="I10:3048;248:73132" data-name="Right Side">
              <img alt="" className="f8faf267d30" src={imgRightSide}/>
            </div>
            <div className="f1f0f99ceae" data-node-id="I10:3048;248:73139" data-name="Left Side">
              <Time className="ffd009f8265"/>
            </div>
          </div>
          <div className="f3a131f985a" data-node-id="10:3049" data-name="SearchBar">
            <Left2 className="feaa60f1c42"/>
            <div className="f0a44ade293" data-node-id="10:3051" data-name="编组">
              <div className="fc51752dc8c" data-node-id="10:3052" data-name="search">
                <img alt="" className="f8faf267d30" src={imgSearch}/>
              </div>
              <div className="fdaec9bd098" data-node-id="10:3056">
                <div className="fd00167db74" data-node-id="10:3057">
                  <p className="f4120bb12fd">halloween broccoli</p>
                </div>
                <div className="f8dffb40edf" data-node-id="10:3058">
                  <div className="f15cc5ceed7" data-node-id="10:3059">
                    <div className="fc4925c4387">
                      <div className="f4ffe3f94a1" data-name="→ Icon">
                        <img alt="" className="f8faf267d30" src={imgIcon}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f63ded69ade" data-node-id="10:3061">
              <div className="feaa60f1c42" data-node-id="10:3062">
                <Cart2 className="f2893541175"/>
                <div className="f3c1917b266" data-node-id="10:3064" data-name="徽标">
                  <div className="fa1b6584b72" data-node-id="I10:3064;1207:11216">
                    <p className="fb17863f73d">6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f8fbc926836" data-node-id="10:3066" data-name="Tabs">
            <div className="f6493df43b4" data-node-id="10:3067" data-name="Atom/Tabs/Base">
              <div className="f11adf671f8" data-node-id="10:3068" data-name="Atom/Tabs/Form">
                <div className="f026596262d" data-node-id="10:3069" data-name="Atom/Tabs/Inner">
                  <p className="fa3be63e529" data-node-id="10:3070">
                    Relevance
                  </p>
                </div>
              </div>
              <div className="fd6bb32a705" data-node-id="10:3071" data-name="Atom/Tabs/Form">
                <div className="fbbf6edb7a1" data-node-id="10:3072" data-name="Atom/Tabs/Inner">
                  <p className="f0c1c9d1aa7" data-node-id="10:3073">
                    Top sales
                  </p>
                </div>
              </div>
              <div className="fd6bb32a705" data-node-id="10:3074" data-name="Atom/Tabs/Form">
                <div className="f26a0376605" data-node-id="10:3075" data-name="Atom/Tabs/Inner">
                  <p className="f0c1c9d1aa7" data-node-id="10:3076">
                    Price
                  </p>
                  <div className="f7e7fdba9df" data-node-id="10:3077" data-name="Sorter">
                    <img alt="" className="f8faf267d30" src={imgSorter}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f11744d85cd" data-node-id="10:3080">
        <div className="fcc5e7ad6e4" data-node-id="10:3081" data-name="商卡">
          <div className="f7fc9bb2776" data-node-id="I10:3081;233:2412" style={{ width: 165, height: 165 }}>
            <div className="f78e0b83503" data-node-id="I10:3081;195:1353" data-name="请在右侧面板选择对应商品替换">
              <div className="f25660566da" data-node-id="I10:3081;195:1353;3:117" style={{ maskSize: "165px 165px", maskPosition: "71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
                <img alt="" className="f6296272086" src={imgDownloader2}/>
              </div>
            </div>
            <div className="f9358c12fcb" data-node-id="I10:3081;422:3190" data-name="加购按钮">
              <div className="fdcffcc18ac" data-node-id="I10:3081;422:3190;215:1049" data-name="加购">
                <div className="f8a0ff48924" data-node-id="I10:3081;422:3190;215:1050" data-name="形状结合">
                  <img alt="" className="f8faf267d30" src={img}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f41fa29e7aa" data-node-id="I10:3081;35:1200" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="I10:3081;35:1329" data-name="价格组">
              <div className="f3e12d05f70" data-node-id="I10:3081;35:1329;35:1234" data-name="现价">
                <div className="f6b969bf24a" data-node-id="I10:3081;35:1329;35:1235">
                  <p className="fe32ac1aeb2" dir="auto">
                    SAR
                  </p>
                </div>
                <div className="fa3e8787b17" data-node-id="I10:3081;35:1329;250:487" data-name="价格">
                  <div className="f711e947f8b" data-node-id="I10:3081;35:1329;250:488">
                    <p className="fefcc9af6d1">38</p>
                  </div>
                  <div className="f46374de1ee" data-node-id="I10:3081;35:1329;250:489">
                    <p className="fbf919b50f6">.76</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f7720d25f95" data-node-id="I10:3081;35:1212" data-name="标题+规格">
              <p className="fed0247318b" data-node-id="I10:3081;215:951" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              <p className="f0c4694868e" data-node-id="I10:3081;35:1215" style={{ width: 153, height: 18, flex: "0 0 auto" }}>
                500-700g
              </p>
            </div>
          </div>
        </div>
        <div className="f6ef7b11e68" data-node-id="10:3082" data-name="商卡">
          <div className="f7fc9bb2776" data-node-id="I10:3082;233:2412" style={{ width: 165, height: 165 }}>
            <div className="f78e0b83503" data-node-id="I10:3082;195:1353" data-name="请在右侧面板选择对应商品替换">
              <div className="f25660566da" data-node-id="I10:3082;195:1353;3:117" style={{ maskSize: "165px 165px", maskPosition: "71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
                <img alt="" className="f6296272086" src={imgDownloader2}/>
              </div>
            </div>
            <div className="f9358c12fcb" data-node-id="I10:3082;422:3190" data-name="加购按钮">
              <div className="fdcffcc18ac" data-node-id="I10:3082;422:3190;215:1049" data-name="加购">
                <div className="f8a0ff48924" data-node-id="I10:3082;422:3190;215:1050" data-name="形状结合">
                  <img alt="" className="f8faf267d30" src={img}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f41fa29e7aa" data-node-id="I10:3082;35:1200" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="I10:3082;35:1329" data-name="价格组">
              <div className="f3e12d05f70" data-node-id="I10:3082;35:1329;35:1234" data-name="现价">
                <div className="f6b969bf24a" data-node-id="I10:3082;35:1329;35:1235">
                  <p className="fe32ac1aeb2" dir="auto">
                    SAR
                  </p>
                </div>
                <div className="fa3e8787b17" data-node-id="I10:3082;35:1329;250:487" data-name="价格">
                  <div className="f711e947f8b" data-node-id="I10:3082;35:1329;250:488">
                    <p className="fefcc9af6d1">38</p>
                  </div>
                  <div className="f46374de1ee" data-node-id="I10:3082;35:1329;250:489">
                    <p className="fbf919b50f6">.76</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f7720d25f95" data-node-id="I10:3082;35:1212" data-name="标题+规格">
              <p className="fed0247318b" data-node-id="I10:3082;215:951" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              <p className="f0c4694868e" data-node-id="I10:3082;35:1215" style={{ width: 153, height: 18, flex: "0 0 auto" }}>
                500-700g
              </p>
            </div>
          </div>
        </div>
        <div className="f5d4e20a97b" data-node-id="10:3083" data-name="商卡">
          <div className="f7fc9bb2776" data-node-id="I10:3083;233:2412" style={{ width: 165, height: 165 }}>
            <div className="f78e0b83503" data-node-id="I10:3083;195:1353" data-name="请在右侧面板选择对应商品替换">
              <div className="f25660566da" data-node-id="I10:3083;195:1353;3:117" style={{ maskSize: "165px 165px", maskPosition: "71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
                <img alt="" className="f6296272086" src={imgDownloader2}/>
              </div>
            </div>
            <div className="f9358c12fcb" data-node-id="I10:3083;422:3190" data-name="加购按钮">
              <div className="fdcffcc18ac" data-node-id="I10:3083;422:3190;215:1049" data-name="加购">
                <div className="f8a0ff48924" data-node-id="I10:3083;422:3190;215:1050" data-name="形状结合">
                  <img alt="" className="f8faf267d30" src={img}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f41fa29e7aa" data-node-id="I10:3083;35:1200" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="I10:3083;35:1329" data-name="价格组">
              <div className="f3e12d05f70" data-node-id="I10:3083;35:1329;35:1234" data-name="现价">
                <div className="f6b969bf24a" data-node-id="I10:3083;35:1329;35:1235">
                  <p className="fe32ac1aeb2" dir="auto">
                    SAR
                  </p>
                </div>
                <div className="fa3e8787b17" data-node-id="I10:3083;35:1329;250:487" data-name="价格">
                  <div className="f711e947f8b" data-node-id="I10:3083;35:1329;250:488">
                    <p className="fefcc9af6d1">38</p>
                  </div>
                  <div className="f46374de1ee" data-node-id="I10:3083;35:1329;250:489">
                    <p className="fbf919b50f6">.76</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f7720d25f95" data-node-id="I10:3083;35:1212" data-name="标题+规格">
              <p className="fed0247318b" data-node-id="I10:3083;215:951" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              <p className="f0c4694868e" data-node-id="I10:3083;35:1215" style={{ width: 153, height: 18, flex: "0 0 auto" }}>
                500-700g
              </p>
            </div>
          </div>
        </div>
        <div className="f5d4e20a97b" data-node-id="10:3084" data-name="商卡">
          <div className="f7fc9bb2776" data-node-id="I10:3084;233:2412" style={{ width: 165, height: 165 }}>
            <div className="f78e0b83503" data-node-id="I10:3084;195:1353" data-name="请在右侧面板选择对应商品替换">
              <div className="f25660566da" data-node-id="I10:3084;195:1353;3:117" style={{ maskSize: "165px 165px", maskPosition: "71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
                <img alt="" className="f6296272086" src={imgDownloader2}/>
              </div>
            </div>
            <div className="f9358c12fcb" data-node-id="I10:3084;422:3190" data-name="加购按钮">
              <div className="fdcffcc18ac" data-node-id="I10:3084;422:3190;215:1049" data-name="加购">
                <div className="f8a0ff48924" data-node-id="I10:3084;422:3190;215:1050" data-name="形状结合">
                  <img alt="" className="f8faf267d30" src={img}/>
                </div>
              </div>
            </div>
          </div>
          <div className="fafdc9f10c8" data-node-id="I10:3084;35:1200" data-name="Content">
            <div className="f2d195721c4" data-node-id="I10:3084;35:1329" data-name="价格组">
              <div className="f778483dde2" data-node-id="I10:3084;35:1329;35:1220" data-name="现价">
                <div className="f6b969bf24a" data-node-id="I10:3084;35:1329;35:1221">
                  <p className="fe32ac1aeb2">SAR</p>
                </div>
                <div className="f2f5e29ca1c" data-node-id="I10:3084;35:1329;35:1222" data-name="价格">
                  <div className="f711e947f8b" data-node-id="I10:3084;35:1329;35:1223">
                    <p className="fefcc9af6d1">38</p>
                  </div>
                  <div className="f46374de1ee" data-node-id="I10:3084;35:1329;35:1224">
                    <p className="fbf919b50f6">.76</p>
                  </div>
                </div>
              </div>
              <div className="f8e0c9fe7cc" data-node-id="I10:3084;35:1329;35:1225">
                <p className="f579c544ce5">40.76</p>
              </div>
            </div>
            <div className="f877ee4eb67" data-node-id="I10:3084;35:1212" data-name="标题+规格">
              <p className="fed0247318b" data-node-id="I10:3084;215:951" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              <p className="f0c4694868e" data-node-id="I10:3084;35:1215" style={{ width: 153, height: 18, flex: "0 0 auto" }}>
                500-700g
              </p>
            </div>
          </div>
        </div>
        <div className="f20553414b5" data-node-id="10:3085" data-name="商卡">
          <div className="f7fc9bb2776" data-node-id="I10:3085;233:2412" style={{ width: 165, height: 165 }}>
            <div className="f78e0b83503" data-node-id="I10:3085;195:1353" data-name="请在右侧面板选择对应商品替换">
              <div className="f25660566da" data-node-id="I10:3085;195:1353;3:117" style={{ maskSize: "165px 165px", maskPosition: "71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
                <img alt="" className="f6296272086" src={imgDownloader2}/>
              </div>
            </div>
            <div className="f9358c12fcb" data-node-id="I10:3085;422:3190" data-name="加购按钮">
              <div className="fdcffcc18ac" data-node-id="I10:3085;422:3190;215:1049" data-name="加购">
                <div className="f8a0ff48924" data-node-id="I10:3085;422:3190;215:1050" data-name="形状结合">
                  <img alt="" className="f8faf267d30" src={img}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f41fa29e7aa" data-node-id="I10:3085;35:1200" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="I10:3085;35:1329" data-name="价格组">
              <div className="f3e12d05f70" data-node-id="I10:3085;35:1329;35:1234" data-name="现价">
                <div className="f6b969bf24a" data-node-id="I10:3085;35:1329;35:1235">
                  <p className="fe32ac1aeb2" dir="auto">
                    SAR
                  </p>
                </div>
                <div className="fa3e8787b17" data-node-id="I10:3085;35:1329;250:487" data-name="价格">
                  <div className="f711e947f8b" data-node-id="I10:3085;35:1329;250:488">
                    <p className="fefcc9af6d1">38</p>
                  </div>
                  <div className="f46374de1ee" data-node-id="I10:3085;35:1329;250:489">
                    <p className="fbf919b50f6">.76</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f7720d25f95" data-node-id="I10:3085;35:1212" data-name="标题+规格">
              <p className="fed0247318b" data-node-id="I10:3085;215:951" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              <p className="f0c4694868e" data-node-id="I10:3085;35:1215" style={{ width: 153, height: 18, flex: "0 0 auto" }}>
                500-700g
              </p>
            </div>
          </div>
        </div>
        <div className="f823a06df9a" data-node-id="10:3086" data-name="商卡">
          <div className="f7fc9bb2776" data-node-id="I10:3086;233:2412" style={{ width: 165, height: 165 }}>
            <div className="f78e0b83503" data-node-id="I10:3086;195:1353" data-name="请在右侧面板选择对应商品替换">
              <div className="f25660566da" data-node-id="I10:3086;195:1353;3:117" style={{ maskSize: "165px 165px", maskPosition: "71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
                <img alt="" className="f6296272086" src={imgDownloader2}/>
              </div>
            </div>
            <div className="f9358c12fcb" data-node-id="I10:3086;422:3190" data-name="加购按钮">
              <div className="fdcffcc18ac" data-node-id="I10:3086;422:3190;215:1049" data-name="加购">
                <div className="f8a0ff48924" data-node-id="I10:3086;422:3190;215:1050" data-name="形状结合">
                  <img alt="" className="f8faf267d30" src={img}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f41fa29e7aa" data-node-id="I10:3086;35:1200" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="I10:3086;35:1329" data-name="价格组">
              <div className="f3e12d05f70" data-node-id="I10:3086;35:1329;35:1234" data-name="现价">
                <div className="f6b969bf24a" data-node-id="I10:3086;35:1329;35:1235">
                  <p className="fe32ac1aeb2" dir="auto">
                    SAR
                  </p>
                </div>
                <div className="fa3e8787b17" data-node-id="I10:3086;35:1329;250:487" data-name="价格">
                  <div className="f711e947f8b" data-node-id="I10:3086;35:1329;250:488">
                    <p className="fefcc9af6d1">38</p>
                  </div>
                  <div className="f46374de1ee" data-node-id="I10:3086;35:1329;250:489">
                    <p className="fbf919b50f6">.76</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f7720d25f95" data-node-id="I10:3086;35:1212" data-name="标题+规格">
              <p className="fed0247318b" data-node-id="I10:3086;215:951" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              <p className="f0c4694868e" data-node-id="I10:3086;35:1215" style={{ width: 153, height: 18, flex: "0 0 auto" }}>
                500-700g
              </p>
            </div>
          </div>
        </div>
        <div className="f681ffd3101" data-node-id="10:3087" data-name="双列商卡">
          <div className="f7fc9bb2776" data-node-id="10:3088" style={{ width: 171, height: 171 }}>
            <div className="f3f9224f325" data-node-id="10:3089" data-name="商品图-双">
              <div className="fb0277816ee" data-node-id="10:3090" data-name="请在右侧面板选择对应商品替换">
                <div className="f0c49ea8215" data-node-id="10:3091" data-name="image 39">
                  <img alt="" className="f6296272086" src={imgImage39}/>
                </div>
              </div>
              <div className="fbbd0f40098" data-node-id="10:3092" data-name="标签">
                <div className="f01766f956b" data-node-id="10:3093" data-name="上标签">
                  <div className="fa6b55afedb" data-node-id="10:3094">
                    <div className="fca5d38da6d" data-node-id="10:3097" data-name="右标签"/>
                  </div>
                </div>
              </div>
            </div>
            <Component className="f9d6b963b91"/>
          </div>
          <div className="ff77d52222d" data-node-id="10:3109" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="10:3110" data-name="价格组">
              <div className="f0c591a223c" data-node-id="10:3111" data-name="现价">
                <div className="fa466909b9c" data-node-id="10:3112">
                  <p className="f4120bb12fd">SAR</p>
                </div>
                <div className="f89b11145c3" data-node-id="10:3113">
                  <p className="fb17863f73d">38.76</p>
                </div>
              </div>
            </div>
            <div className="f153c0a1809" data-node-id="10:3114">
              <div className="f5c941ab3a3" data-node-id="10:3115" data-name="标题前标签-双">
                <p className="f9163494159" data-node-id="I10:3115;8852:17905" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              </div>
            </div>
            <div className="f5c941ab3a3" data-node-id="10:3116">
              <p className="f0ae3eddd1b" data-node-id="10:3117" style={{ width: 153, height: 16, flex: "0 0 auto" }}>
                1 Piece (500-700g)
              </p>
            </div>
          </div>
        </div>
        <div className="faf0fa6fbbd" data-node-id="10:3118" data-name="商卡">
          <div className="f7fc9bb2776" data-node-id="I10:3118;233:2412" style={{ width: 165, height: 165 }}>
            <div className="f78e0b83503" data-node-id="I10:3118;195:1353" data-name="请在右侧面板选择对应商品替换">
              <div className="f25660566da" data-node-id="I10:3118;195:1353;3:117" style={{ maskSize: "165px 165px", maskPosition: "71.7750015258789px 0px", maskImage: `url("${imgDownloader1}")` }} data-name="[Downloader 1">
                <img alt="" className="f6296272086" src={imgDownloader2}/>
              </div>
            </div>
            <div className="f9358c12fcb" data-node-id="I10:3118;422:3190" data-name="加购按钮">
              <div className="fdcffcc18ac" data-node-id="I10:3118;422:3190;215:1049" data-name="加购">
                <div className="f8a0ff48924" data-node-id="I10:3118;422:3190;215:1050" data-name="形状结合">
                  <img alt="" className="f8faf267d30" src={img}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f41fa29e7aa" data-node-id="I10:3118;35:1200" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="I10:3118;35:1329" data-name="价格组">
              <div className="f3e12d05f70" data-node-id="I10:3118;35:1329;35:1234" data-name="现价">
                <div className="f6b969bf24a" data-node-id="I10:3118;35:1329;35:1235">
                  <p className="fe32ac1aeb2" dir="auto">
                    SAR
                  </p>
                </div>
                <div className="fa3e8787b17" data-node-id="I10:3118;35:1329;250:487" data-name="价格">
                  <div className="f711e947f8b" data-node-id="I10:3118;35:1329;250:488">
                    <p className="fefcc9af6d1">38</p>
                  </div>
                  <div className="f46374de1ee" data-node-id="I10:3118;35:1329;250:489">
                    <p className="fbf919b50f6">.76</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f7720d25f95" data-node-id="I10:3118;35:1212" data-name="标题+规格">
              <p className="fed0247318b" data-node-id="I10:3118;215:951" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              <p className="f0c4694868e" data-node-id="I10:3118;35:1215" style={{ width: 153, height: 18, flex: "0 0 auto" }}>
                500-700g
              </p>
            </div>
          </div>
        </div>
        <div className="f31e2f0913e" data-node-id="10:3119" data-name="双列商卡">
          <div className="f7fc9bb2776" data-node-id="10:3120" style={{ width: 171, height: 171 }}>
            <div className="f3f9224f325" data-node-id="10:3121" data-name="商品图-双">
              <div className="fb0277816ee" data-node-id="10:3122" data-name="请在右侧面板选择对应商品替换">
                <div className="f27d982f9e6" data-node-id="10:3123" data-name="image 11">
                  <img alt="" className="f6296272086" src={imgImage11}/>
                </div>
              </div>
              <div className="fbbd0f40098" data-node-id="10:3124" data-name="标签">
                <div className="f01766f956b" data-node-id="10:3125" data-name="上标签">
                  <div className="fa6b55afedb" data-node-id="10:3126">
                    <div className="fca5d38da6d" data-node-id="10:3129" data-name="右标签"/>
                  </div>
                </div>
              </div>
            </div>
            <Component className="f9d6b963b91"/>
          </div>
          <div className="ff77d52222d" data-node-id="10:3141" data-name="Content">
            <div className="f6dc5f46fc4" data-node-id="10:3142" data-name="价格组">
              <div className="f0c591a223c" data-node-id="10:3143" data-name="现价">
                <div className="fa466909b9c" data-node-id="10:3144">
                  <p className="f4120bb12fd">SAR</p>
                </div>
                <div className="f89b11145c3" data-node-id="10:3145">
                  <p className="fb17863f73d">38.76</p>
                </div>
              </div>
            </div>
            <div className="f153c0a1809" data-node-id="10:3146">
              <div className="f5c941ab3a3" data-node-id="10:3147" data-name="标题前标签-双">
                <p className="f9163494159" data-node-id="I10:3147;8852:17905" style={{ width: 153, height: 38, flex: "0 0 auto" }}>{`Ningxia Mini Fresh Broccoli-Spain `}</p>
              </div>
            </div>
            <div className="f5c941ab3a3" data-node-id="10:3148">
              <p className="f0ae3eddd1b" data-node-id="10:3149" style={{ width: 153, height: 16, flex: "0 0 auto" }}>
                1 Piece (500-700g)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fbc1030c327" data-node-id="10:3150" data-name="Home Indicator">
        <div className="ff46bd5a4b3" data-node-id="I10:3150;248:73401" data-name="Home Indicator"/>
      </div>
    </div>);
}
