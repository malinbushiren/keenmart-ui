import React from "react";
const img = "/assets/green-b5a38.svg";
const img1 = "/assets/40614.svg";
const imgSettings = "/assets/e026b.svg";
const imgLanguage = "/assets/47b6d.svg";
const imgLocation = "/assets/8a158.svg";
const imgSize24 = "/assets/a701f.svg";
const imgSubtract = "/assets/66a5e.svg";
const imgGroup221 = "/assets/c8513.svg";
const img2 = "/assets/73f67.svg";
const imgHide = "/assets/45ac8.svg";
const imgHide1 = "/assets/d0485.svg";
const imgGroup9099 = "/assets/672fe.svg";
const imgHide2 = "/assets/87ef4.svg";
const img3 = "/assets/83bc8.png";
const imgLeft = "/assets/4d730.svg";
const imgCombinedShape = "/assets/1398d.svg";
const imgWifi = "/assets/802c4.svg";
const imgCellularConnection = "/assets/fa5f4.svg";
type ComponentProps = {
    className?: string;
    propValue?: "选中" | "未选中";
};
function Component({ className, propValue = "选中" }: ComponentProps) {
    const is = propValue === "未选中";
    return (<div className={className || "f0b8f776e7a"} data-node-id={is ? "10:10535" : "10:10529"}>
      <img alt="" className="f8faf267d30" src={is ? img1 : img}/>
    </div>);
}
type SettingsProps = {
    className?: string;
    size?: "24";
};
function Settings({ className, size = "24" }: SettingsProps) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="10:10634">
      <div className="fb666819c5d" data-node-id="10:10635" data-name="Settings">
        <div className="ff6144f8abc">
          <img alt="" className="facc3667e96" src={imgSettings}/>
        </div>
      </div>
    </div>);
}
function Language({ className }: {
    className?: string;
}) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="10:10629" data-name="Language">
      <img alt="" className="f8faf267d30" src={imgLanguage}/>
    </div>);
}
type LocationProps = {
    className?: string;
    size?: "24";
};
function Location({ className, size = "24" }: LocationProps) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="10:10613">
      <div className="f6fe7e7c304" data-node-id="10:10614" data-name="Location">
        <div className="f8507c87e77">
          <img alt="" className="facc3667e96" src={imgLocation}/>
        </div>
      </div>
    </div>);
}
type DeliveryProps = {
    className?: string;
    size?: "24";
};
function Delivery({ className, size = "24" }: DeliveryProps) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="10:10592">
      <img alt="" className="f8faf267d30" src={imgSize24}/>
    </div>);
}
type Coupon1Props = {
    className?: string;
    size?: "24";
};
function Coupon1({ className, size = "24" }: Coupon1Props) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="10:10547">
      <div className="f682cba08d2" data-node-id="10:10548" data-name="Coupon 1">
        <div className="fe8f8200c6a" data-node-id="10:10549" data-name="Subtract">
          <div className="fa8ea652543">
            <img alt="" className="facc3667e96" src={imgSubtract}/>
          </div>
        </div>
        <div className="feaa8438b36" data-node-id="10:10553">
          <div className="fcd15cee084" data-node-id="10:10554">
            <div className="f0e1aa6d970">
              <div className="f67839e7ddf">
                <div className="fe5f816b542">
                  <img alt="" className="facc3667e96" src={imgGroup221}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
function Component1({ className }: {
    className?: string;
}) {
    return (<div className={className || "f711463970b"} data-node-id="10:10539" data-name="头部背景">
      <img alt="" className="f8faf267d30" src={img2}/>
    </div>);
}
type Component2Props = {
    className?: string;
    propValue?: "English";
    propValue1?: "我的";
};
function Component2({ className, propValue = "English", propValue1 = "我的" }: Component2Props) {
    return (<div className={className || "f844f39a3b7"} data-node-id="11:2394">
      <div className="fa6be5472c2" data-node-id="11:2395" data-name="Home Indicator">
        <div className="ff46bd5a4b3" data-node-id="I11:2395;248:73401" data-name="Home Indicator"/>
      </div>
      <div className="f40ef44f425" data-node-id="11:2396" data-name="tab">
        <div className="f9a39a55c2b" data-node-id="11:2397" data-name="首页">
          <div className="f75f2c6b5ad" data-node-id="11:2398" data-name="Hide/首页">
            <img alt="" className="f8faf267d30" src={imgHide}/>
          </div>
          <p className="f1a7f46ab03" data-node-id="11:2399">
            Home
          </p>
        </div>
        <div className="f9a39a55c2b" data-node-id="11:2400" data-name="分类">
          <div className="f75f2c6b5ad" data-node-id="11:2401" data-name="Hide/分类">
            <img alt="" className="f8faf267d30" src={imgHide1}/>
          </div>
          <p className="f1a7f46ab03" data-node-id="11:2402">
            Category
          </p>
        </div>
        <div className="f9a39a55c2b" data-node-id="11:2403" data-name="购物车">
          <div className="f561667463d" data-node-id="11:2404" data-name="Hide/购物车">
            <div className="fcf480e483f" data-node-id="I11:2404;399:3080">
              <div className="f474f518632">
                <img alt="" className="facc3667e96" src={imgGroup9099}/>
              </div>
            </div>
          </div>
          <p className="f1a7f46ab03" data-node-id="11:2405">
            Cart
          </p>
        </div>
        <div className="f9a39a55c2b" data-node-id="11:2406" data-name="我的">
          <div className="f75f2c6b5ad" data-node-id="11:2407" data-name="Hide/我的">
            <img alt="" className="f8faf267d30" src={imgHide2}/>
          </div>
          <p className="fa980fc917d" data-node-id="11:2408">
            Account
          </p>
        </div>
      </div>
    </div>);
}
export default function Component3() {
    return (<div className="f244c48985c" data-node-id="10:10765" data-name="已登录">
      <Component2 className="f28f898c177"/>
      <Component1 className="fdc0709e655"/>
      <div className="f13ff8bc0ae" data-node-id="10:10768" data-name="内容">
        <div className="f5205d17d02" data-node-id="10:10769" data-name="用户信息区域">
          <div className="fccf0917e01" data-node-id="10:10770" data-name="头像">
            <img alt="" className="f1642832ef3" src={img3}/>
          </div>
          <div className="f8fb8666ffb" data-node-id="10:10771">
            <p className="fdab3e991ea">SWQ123409</p>
          </div>
        </div>
        <div className="f24081ceef5" data-node-id="10:10772" data-name="功能入口区域">
          <div className="f15ff6989d8" data-node-id="10:10773" data-name="part 1">
            <div className="f4897a5e42a" data-node-id="10:10774" data-name="列表">
              <div className="f6bf18d6b1a" data-node-id="10:10775" data-name="左">
                <Coupon1 className="feaa60f1c42"/>
                <div className="f49e91f20e9" data-node-id="10:10777">
                  <p className="f4120bb12fd">Coupon</p>
                </div>
              </div>
              <div className="f4cfce39ce9" data-node-id="10:10778" data-name="第一行">
                <div className="f4a67e10283" data-node-id="10:10779">
                  <p className="f4120bb12fd">3</p>
                </div>
                <div className="f15cc5ceed7" data-node-id="10:10780">
                  <div className="fc4925c4387">
                    <div className="ff14442793f" data-name="Left 2">
                      <div className="f6e0688e381" data-node-id="I10:10780;1041:24121" data-name="Left">
                        <div className="f24da4fcaab">
                          <img alt="" className="facc3667e96" src={imgLeft}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f4897a5e42a" data-node-id="10:10781" data-name="列表">
              <div className="f6bf18d6b1a" data-node-id="10:10782" data-name="左">
                <Delivery className="feaa60f1c42"/>
                <div className="f49e91f20e9" data-node-id="10:10784">
                  <p className="f4120bb12fd">Orders</p>
                </div>
              </div>
              <div className="f4cfce39ce9" data-node-id="10:10785" data-name="第一行">
                <div className="f87a6e94588" data-node-id="10:10786" data-name="徽标">
                  <p className="f960f530c02" data-node-id="I10:10786;3885:18440">
                    1
                  </p>
                </div>
                <div className="f15cc5ceed7" data-node-id="10:10787">
                  <div className="fc4925c4387">
                    <div className="ff14442793f" data-name="Left 2">
                      <div className="f6e0688e381" data-node-id="I10:10787;1041:24121" data-name="Left">
                        <div className="f24da4fcaab">
                          <img alt="" className="facc3667e96" src={imgLeft}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fc5b7486325" data-node-id="10:10788" data-name="part 2">
            <div className="f4897a5e42a" data-node-id="10:10789" data-name="列表">
              <div className="f6bf18d6b1a" data-node-id="10:10790" data-name="左">
                <Location className="feaa60f1c42"/>
                <div className="f49e91f20e9" data-node-id="10:10792">
                  <p className="f4120bb12fd">Addresses</p>
                </div>
              </div>
              <div className="fe36f3c3d24" data-node-id="10:10793" data-name="第一行">
                <div className="f15cc5ceed7" data-node-id="10:10794">
                  <div className="fc4925c4387">
                    <div className="ff14442793f" data-name="Left 2">
                      <div className="f6e0688e381" data-node-id="I10:10794;1041:24121" data-name="Left">
                        <div className="f24da4fcaab">
                          <img alt="" className="facc3667e96" src={imgLeft}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f4897a5e42a" data-node-id="10:10795" data-name="列表">
              <div className="f6bf18d6b1a" data-node-id="10:10796" data-name="左">
                <Language className="feaa60f1c42"/>
                <div className="f49e91f20e9" data-node-id="10:10798">
                  <p className="f4120bb12fd">Language</p>
                </div>
              </div>
              <div className="f4cfce39ce9" data-node-id="10:10799" data-name="第一行">
                <div className="f4a67e10283" data-node-id="10:10800">
                  <p className="f4120bb12fd">English</p>
                </div>
                <div className="f15cc5ceed7" data-node-id="10:10801">
                  <div className="fc4925c4387">
                    <div className="ff14442793f" data-name="Left 2">
                      <div className="f6e0688e381" data-node-id="I10:10801;1041:24121" data-name="Left">
                        <div className="f24da4fcaab">
                          <img alt="" className="facc3667e96" src={imgLeft}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f4897a5e42a" data-node-id="10:10802" data-name="列表">
              <div className="f6bf18d6b1a" data-node-id="10:10803" data-name="左">
                <Settings className="feaa60f1c42"/>
                <div className="f49e91f20e9" data-node-id="10:10805">
                  <p className="f4120bb12fd">Setting</p>
                </div>
              </div>
              <div className="fe36f3c3d24" data-node-id="10:10806" data-name="第一行">
                <div className="f15cc5ceed7" data-node-id="10:10807">
                  <div className="fc4925c4387">
                    <div className="ff14442793f" data-name="Left 2">
                      <div className="f6e0688e381" data-node-id="I10:10807;1041:24121" data-name="Left">
                        <div className="f24da4fcaab">
                          <img alt="" className="facc3667e96" src={imgLeft}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f3fc17a99e0" data-node-id="10:10808" data-name="Status Bar">
        <div className="ff7195da1a1" data-node-id="I10:10808;133:61068" data-name="Combined Shape">
          <img alt="" className="f8faf267d30" src={imgCombinedShape}/>
        </div>
        <div className="f84eac9e3a5" data-node-id="I10:10808;133:61074" data-name="Wifi">
          <img alt="" className="f8faf267d30" src={imgWifi}/>
        </div>
        <div className="ff2f66e3559" data-node-id="I10:10808;133:61078" data-name="Cellular_Connection">
          <img alt="" className="f8faf267d30" src={imgCellularConnection}/>
        </div>
        <p className="f7a7238fb6b" data-node-id="I10:10808;133:61083">
          <span className="fec34fe2a24">9:4</span>
          <span className="f7debca9f3a">1</span>
        </p>
      </div>
      <div className="f3c3fd3012a" data-node-id="10:10809" data-name="mask"/>
      <div className="f337c622669" data-node-id="10:10810" data-name="语言切换面板">
        <div className="f0421f61fe2" data-node-id="10:10811" data-name="标题">
          <p className="fa5a2423dbc" data-node-id="10:10812">
            Language
          </p>
        </div>
        <div className="f6ebeb18ad2" data-node-id="10:10813" data-name="列表组">
          <div className="f8098ee761e" data-node-id="10:10814" data-name="列表">
            <div className="f49e91f20e9" data-node-id="10:10815">
              <p className="f4120bb12fd">English</p>
            </div>
            <Component className="feaa60f1c42"/>
          </div>
          <div className="f8098ee761e" data-node-id="10:10817" data-name="列表">
            <p className="f010cb36e15" dir="auto" data-node-id="10:10818" style={{ width: 279, height: 19, flex: "0 0 auto" }}>
              العربية
            </p>
            <Component className="feaa60f1c42" propValue="未选中"/>
          </div>
        </div>
        <div className="f68d60eabc4" data-node-id="10:10820" data-name="操作区域">
          <div className="f2e99f1403a" data-node-id="10:10821" data-name="按钮">
            <div className="f6b9ed66029" data-node-id="I10:10821;410:1408" data-name="Button/_Button XLarge">
              <div className="fe8210ba625" data-node-id="I10:10821;410:1410" data-name="Text">
                <div className="f958fdc6594" data-node-id="I10:10821;410:1411">
                  <p className="fc3dc13096a" dir="auto">
                    Continue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="f5fb7053706" data-node-id="10:10822" data-name="Home Indicator">
          <div className="ff46bd5a4b3" data-node-id="I10:10822;248:73401" data-name="Home Indicator"/>
        </div>
      </div>
    </div>);
}
