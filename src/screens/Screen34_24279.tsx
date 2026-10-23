import React from "react";
const img25 = "/assets/c3d51.svg";
const img26 = "/assets/8d9c6.svg";
const img14 = "/assets/671f7.svg";
const img15 = "/assets/867a9.svg";
const img9 = "/assets/eaba8.svg";
const img10 = "/assets/6403c.svg";
const img5 = "/assets/a5408.svg";
const img4 = "/assets/dbf27.svg";
const img163 = "/assets/405c9.svg";
const img6 = "/assets/faea7.svg";
const img19 = "/assets/7cc29.svg";
const imgGood = "/assets/01de4.svg";
const imgDown = "/assets/df836.svg";
const imgFalse = "/assets/2a11e.svg";
const img37 = "/assets/d1a93.svg";
const imgLeft = "/assets/27331.svg";
const imgRightSide = "/assets/addd3.svg";
const imgTime = "/assets/a0d3d.svg";
const imgImage9 = "/assets/eccee.png";
const img1 = "/assets/5efc4.png";
const imgImage8 = "/assets/7c10e.svg";
const imgUp = "/assets/33321.svg";
const img = "/assets/44149.svg";
const imgEdit1 = "/assets/ad5ba.svg";
const img18 = "/assets/529f2.svg";
function Component({ className }: {
    className?: string;
}) {
    return (<div className={className || "f44ab10c010"} data-node-id="34:24061" data-name="底部提示语/国际版">
      <p className="f57b31f6d00" data-node-id="34:24062" style={{ width: 351, height: 16, flex: "0 0 auto" }}>
        Your rate will be anonymously displayed
      </p>
    </div>);
}
type Component1Props = {
    className?: string;
    propValue?: "1非常差" | "2不满意" | "3一般" | "4满意";
    propValue1?: boolean;
};
function Component1({ className, propValue = "1非常差", propValue1 = false }: Component1Props) {
    const is2AndFalse = propValue === "2不满意" && !propValue1;
    const is3AndFalse = propValue === "3一般" && !propValue1;
    const is4AndFalse = propValue === "4满意" && !propValue1;
    return (<div className={className || "f96e3ead43f"} data-node-id={is4AndFalse ? "34:23798" : is3AndFalse ? "34:23773" : is2AndFalse ? "34:23748" : "34:23714"}>
      {propValue === "1非常差" && !propValue1 && (<div className="ffe81d5b031" data-node-id="34:23715" data-name="terrible0">
          <div className="ffe81d5b031" data-node-id="34:23716" data-name="angry hui">
            <div className="fa32cfb86e3" data-node-id="34:23717" data-name="矩形"/>
            <div className="fabc7adb89b" data-node-id="34:23718" data-name="矩形备份"/>
            <div className="fb7a40b2236" data-node-id="34:23719" data-name="矩形备份 2"/>
            <div className="f472a069d16" data-node-id="34:23720" data-name="Group">
              <div className="f9bf64da887" data-node-id="34:23721" data-name="编组 25">
                <img alt="" className="f8faf267d30" src={img25}/>
              </div>
              <div className="ff723fa8624" data-node-id="34:23726" data-name="编组 15">
                <div className="f917139488c" data-node-id="34:23727" data-name="编组 26">
                  <img alt="" className="f8faf267d30" src={img26}/>
                </div>
              </div>
              <div className="fe5b5b7bb3e" data-node-id="34:23734" data-name="编组 13">
                <div className="f70b74bf133" data-node-id="34:23735" data-name="编组 14">
                  <img alt="" className="f8faf267d30" src={img14}/>
                </div>
              </div>
              <div className="f8ff799e0c1" data-node-id="34:23740" data-name="编组 13备份">
                <div className="f5cd7c3ad72" data-node-id="34:23741" data-name="编组 14">
                  <img alt="" className="f8faf267d30" src={img15}/>
                </div>
              </div>
            </div>
          </div>
          <div className="fe871ef3bb9" data-node-id="34:23746" data-name="路径 9">
            <div className="fa8b238145c">
              <img alt="" className="facc3667e96" src={img9}/>
            </div>
          </div>
          <div className="fbb87d046bb" data-node-id="34:23747" style={{ containerType: "size" }}>
            <div className="f8c1ad615a1">
              <div className="f642c36f86b" data-name="路径 9备份">
                <div className="fc99edc7399">
                  <img alt="" className="facc3667e96" src={img10}/>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      {is2AndFalse && (<div className="fb517551f89" data-node-id="34:23749" data-name="bad0">
          <div className="fb517551f89" data-node-id="34:23750" data-name="编组 16备份">
            <div className="fb517551f89" data-node-id="34:23751" data-name="Group">
              <div className="f69a6f1f24c" data-node-id="34:23752" data-name="编组 5">
                <img alt="" className="f8faf267d30" src={img5}/>
              </div>
            </div>
            <div className="f64e8a10e70" data-node-id="34:23770" data-name="路径 4">
              <div className="f82ea20aafe">
                <img alt="" className="facc3667e96" src={img4}/>
              </div>
            </div>
          </div>
          <div className="f0294e5dd37" data-node-id="34:23771" style={{ containerType: "size" }}>
            <div className="fb75bb785c9">
              <div className="f642c36f86b" data-name="路径 16备份 3">
                <div className="f2ff84524bc">
                  <img alt="" className="facc3667e96" src={img163}/>
                </div>
              </div>
            </div>
          </div>
          <div className="faa0209573c" data-node-id="34:23772" style={{ containerType: "size" }}>
            <div className="fb75bb785c9">
              <div className="f642c36f86b" data-name="路径 16备份 5">
                <div className="f2ff84524bc">
                  <img alt="" className="facc3667e96" src={img163}/>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      {is3AndFalse && (<div className="fb517551f89" data-node-id="34:23774" data-name="编组 21">
          <div className="fb517551f89" data-node-id="34:23775" data-name="编组 18备份 3">
            <div className="fb517551f89" data-node-id="34:23776" data-name="编组 16备份">
              <div className="fb517551f89" data-node-id="34:23777" data-name="Group">
                <div className="f69a6f1f24c" data-node-id="34:23778" data-name="编组 5">
                  <img alt="" className="f8faf267d30" src={img6}/>
                </div>
              </div>
            </div>
          </div>
          <div className="ffffd520364" data-node-id="34:23797" data-name="路径 19">
            <div className="f830dae6d60">
              <img alt="" className="facc3667e96" src={img19}/>
            </div>
          </div>
        </div>)}
      {is4AndFalse && (<div className="f1084ea5cf3" data-node-id="34:23799" data-name="good">
          <img alt="" className="f8faf267d30" src={imgGood}/>
        </div>)}
    </div>);
}
function Component2({ className }: {
    className?: string;
}) {
    return (<div className={className || "feba8790575"} data-node-id="34:24275" data-name="配送评价模块标题/国际版">
      <div className="fb6a72c81c7" data-node-id="34:24276" data-name="模块标题/国际版">
        <p className="ff5002ac31e" data-node-id="I34:24276;2001:10484" style={{ width: 351, height: 22, flex: "0 0 auto" }}>
          Rate Delivery Service
        </p>
      </div>
    </div>);
}
function Component3({ className }: {
    className?: string;
}) {
    return (<div className={className || "f0b8c0ec488"} data-node-id="34:24065" data-name="评价一下/更多/国际版">
      <p className="f73dffdd726" data-node-id="34:24066">
        Show More 2 Items
      </p>
      <div className="fc51752dc8c" data-node-id="34:24067" data-name="Down 2">
        <div className="f08125ff2e6" data-node-id="I34:24067;1041:24115" data-name="Down">
          <div className="f96e51f64ce">
            <img alt="" className="facc3667e96" src={imgDown}/>
          </div>
        </div>
      </div>
    </div>);
}
type Component4Props = {
    className?: string;
    propValue?: "总体打分";
    propValue1?: boolean;
};
function Component4({ className, propValue = "总体打分", propValue1 = false }: Component4Props) {
    return (<div className={className || "f0b8f776e7a"} data-node-id="34:23451">
      <img alt="" className="f8faf267d30" src={imgFalse}/>
    </div>);
}
type Component5Props = {
    className?: string;
    propValue?: "未上传";
};
function Component5({ className, propValue = "未上传" }: Component5Props) {
    return (<div className={className || "f296c6d3333"} data-node-id="34:23626">
      <div className="fc3f20705f8" data-node-id="34:23627" data-name="上传图片视频组件/国际版">
        <div className="f88fb7b776b" data-node-id="I34:23627;1621:12024">
          <div className="f2d3663d59a" data-node-id="I34:23627;1621:12025" data-name="上传">
            <div className="f4f8a1a33fa" data-node-id="I34:23627;1621:12025;31:36236" data-name="编组 37">
              <div className="f448b53a70c">
                <img alt="" className="facc3667e96" src={img37}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
function Component6({ className }: {
    className?: string;
}) {
    return (<div className={className || "feba8790575"} data-node-id="34:24269" data-name="商品评价模块标题/国际版">
      <div className="fb6a72c81c7" data-node-id="34:24270" data-name="商品评价模块标题/国际版">
        <p className="ff5002ac31e" data-node-id="I34:24270;2001:10484" style={{ width: 351, height: 22, flex: "0 0 auto" }}>
          Rate The Items (0/5)
        </p>
      </div>
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
function Component7({ className }: {
    className?: string;
}) {
    return (<div className={className || "fde9dde3e44"} data-node-id="34:23200" data-name="评价一下/导航&标题栏/国际版">
      <div className="f84b4ca00a1" data-node-id="34:23201" data-name="Status Bar / iPhone X (or newer)">
        <div className="f7379dde60f" data-node-id="I34:23201;230:71378" data-name="Right Side">
          <img alt="" className="f8faf267d30" src={imgRightSide}/>
        </div>
        <div className="f1f0f99ceae" data-node-id="I34:23201;230:71385" data-name="Left Side">
          <div className="ffd009f8265" data-node-id="I34:23201;230:71386" data-name="_Time">
            <img alt="" className="f8faf267d30" src={imgTime}/>
          </div>
        </div>
      </div>
      <div className="f28d534b5f2" data-node-id="34:23202" data-name="TitleBar">
        <div className="fc58c0ae0dc" data-node-id="34:23203" data-name="左">
          <Left2 className="f15cc5ceed7"/>
        </div>
        <div className="f99d86c9418" data-node-id="34:23206">
          <div className="fe60614f61e" data-name="TitleBar/_标题">
            <div className="f516244ab62" data-node-id="I34:23206;8776:26596">
              <p className="f294c8f0b4f">Rate</p>
            </div>
          </div>
        </div>
        <div className="f99d86c9418" data-node-id="34:23207">
          <div className="ffbd4c0953a" data-name="右"/>
        </div>
      </div>
    </div>);
}
export default function Component8() {
    return (<div className="fc789b63539" data-node-id="34:24279" data-name="商品已打分，展开细分维度">
      <div className="fd934a3f2ef" data-node-id="34:24280" data-name="页面ALL">
        <div className="f654b5bf375" data-node-id="34:24281" data-name="头部">
          <Component7 className="f77181c8d63"/>
        </div>
        <div className="f1a3466f369" data-node-id="34:24283" data-name="页面内容区">
          <Component6 className="f5c941ab3a3"/>
          <div className="ffff3c41c37" data-node-id="34:24285" data-name="商品评价/国际版">
            <div className="f900a7dc8c9" data-node-id="I34:24285;2001:10506" data-name="商品打分">
              <div className="f7f80e7ffb9" data-node-id="I34:24285;2001:10507" data-name="售后退款商品图/国际版">
                <div className="f534e1958da" data-node-id="I34:24285;2001:10507;1621:12155" data-name="绿/西兰花">
                  <div className="f9885faf603" data-node-id="I34:24285;2001:10507;1621:12155;3:40" style={{ maskSize: "720px 31.290000915527344px", maskPosition: "-339px -1.5749998092651367px", maskImage: `url("${imgImage8}")` }} data-name="image 8">
                    <img alt="" className="f6296272086" src={imgImage9}/>
                  </div>
                </div>
              </div>
              <div className="fa11169f07a" data-node-id="I34:24285;2001:10508" data-name="商品名&星级">
                <div className="f682202916a" data-node-id="I34:24285;2001:10509">
                  <p className="f27df124d01" data-node-id="I34:24285;2001:10510" style={{ width: 240, height: 38, flex: "0 0 auto" }}>
                    Fresh broccoli from Spain Fresh broccoli from Spain
                  </p>
                  <div className="fe579bfb067" data-node-id="I34:24285;2001:10511">
                    <div className="f22c2229f97">
                      <div className="f0b8f776e7a" data-name="Up circle">
                        <div className="fd463b633c0" data-node-id="I34:24285;2001:10511;453:16982">
                          <div className="fc4925c4387">
                            <div className="f4c2f010921" data-name="Up">
                              <div className="ff36c569ef6">
                                <img alt="" className="facc3667e96" src={imgUp}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f9044e8a997" data-node-id="I34:24285;2001:10512" data-name="星级">
                  <div className="feaa60f1c42" data-node-id="I34:24285;2001:10513" data-name="星">
                    <img alt="" className="f8faf267d30" src={img}/>
                  </div>
                  <div className="feaa60f1c42" data-node-id="I34:24285;2001:10514" data-name="星">
                    <img alt="" className="f8faf267d30" src={img}/>
                  </div>
                  <div className="feaa60f1c42" data-node-id="I34:24285;2001:10515" data-name="星">
                    <img alt="" className="f8faf267d30" src={img}/>
                  </div>
                  <div className="feaa60f1c42" data-node-id="I34:24285;2001:10516" data-name="星">
                    <img alt="" className="f8faf267d30" src={img}/>
                  </div>
                  <div className="feaa60f1c42" data-node-id="I34:24285;2001:10517" data-name="星">
                    <img alt="" className="f8faf267d30" src={img}/>
                  </div>
                  <div className="f98cee48e2f" data-node-id="I34:24285;2001:10518">
                    <p className="fbf919b50f6" dir="auto">
                      Excellent
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f07e96fe3f9" data-node-id="I34:24285;2001:10519" data-name="细分维度打分">
              <div className="f36d847bb99" data-node-id="I34:24285;2001:10520" data-name="细分维度">
                <p className="ffe7aa4c6b4" data-node-id="I34:24285;2001:10521">
                  Taste
                </p>
                <div className="ffefbb3bcc8" data-node-id="I34:24285;2001:10522" data-name="打分">
                  <div className="feeb104c947" data-node-id="I34:24285;2001:10523" data-name="标签">
                    <div className="f756866a1da" data-node-id="I34:24285;2001:10523;419:6692">
                      <p className="fbf919b50f6" dir="auto">
                        Wrong
                      </p>
                    </div>
                  </div>
                  <div className="feeb104c947" data-node-id="I34:24285;2001:10524" data-name="标签">
                    <div className="f756866a1da" data-node-id="I34:24285;2001:10524;419:6692">
                      <p className="fbf919b50f6" dir="auto">
                        Average
                      </p>
                    </div>
                  </div>
                  <div className="feeb104c947" data-node-id="I34:24285;2001:10525" data-name="标签">
                    <div className="f756866a1da" data-node-id="I34:24285;2001:10525;419:6692">
                      <p className="fbf919b50f6" dir="auto">
                        Excellent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="f36d847bb99" data-node-id="I34:24285;2001:10526" data-name="细分维度">
                <p className="ffe7aa4c6b4" data-node-id="I34:24285;2001:10527">
                  Fresh
                </p>
                <div className="fd684f61667" data-node-id="I34:24285;2001:10528" data-name="打分">
                  <div className="feeb104c947" data-node-id="I34:24285;2001:10529" data-name="标签">
                    <div className="f756866a1da" data-node-id="I34:24285;2001:10529;419:6692">
                      <p className="fbf919b50f6" dir="auto">
                        Wrong
                      </p>
                    </div>
                  </div>
                  <div className="feeb104c947" data-node-id="I34:24285;2001:10530" data-name="标签">
                    <div className="f756866a1da" data-node-id="I34:24285;2001:10530;419:6692">
                      <p className="fbf919b50f6" dir="auto">
                        Average
                      </p>
                    </div>
                  </div>
                  <div className="feeb104c947" data-node-id="I34:24285;2001:10531" data-name="标签">
                    <div className="f756866a1da" data-node-id="I34:24285;2001:10531;419:6692">
                      <p className="fbf919b50f6" dir="auto">
                        Excellent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fd162c129a4" data-node-id="I34:24285;2001:10532" data-name="输入域">
              <p className="fcdcadf1e54" data-node-id="I34:24285;2001:10532;1621:12095">
                Tell us more about the items
              </p>
              <p className="f4bffffef19" data-node-id="I34:24285;2001:10532;1621:12096">
                0/400
              </p>
            </div>
            <Component5 className="fcce79f5844"/>
          </div>
          <div className="fe578afc5ea" data-node-id="34:24288" data-name="商品评价/国际版">
            <div className="fd1da74a5ea" data-node-id="I34:24288;2001:10492" data-name="商品打分">
              <div className="f7f80e7ffb9" data-node-id="I34:24288;2001:10493" data-name="售后退款商品图/国际版">
                <div className="f534e1958da" data-node-id="I34:24288;2001:10493;1621:12155" data-name="绿/西兰花">
                  <div className="f9885faf603" data-node-id="I34:24288;2001:10493;1621:12155;3:40" style={{ maskSize: "720px 31.290000915527344px", maskPosition: "-339px -1.5749998092651367px", maskImage: `url("${imgImage8}")` }} data-name="image 8">
                    <img alt="" className="f6296272086" src={imgImage9}/>
                  </div>
                </div>
              </div>
              <div className="fa11169f07a" data-node-id="I34:24288;2001:10494" data-name="商品名&星级">
                <div className="f682202916a" data-node-id="I34:24288;2001:10495">
                  <p className="f27df124d01" data-node-id="I34:24288;2001:10496" style={{ width: 240, height: 38, flex: "0 0 auto" }}>
                    Fresh broccoli from Spain Fresh broccoli from Spain
                  </p>
                  <div className="feaa60f1c42" data-node-id="I34:24288;2001:10497" data-name="Edit 1">
                    <img alt="" className="f8faf267d30" src={imgEdit1}/>
                  </div>
                </div>
                <div className="f9044e8a997" data-node-id="I34:24288;2001:10498" data-name="星级">
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                </div>
              </div>
            </div>
          </div>
          <div className="fe578afc5ea" data-node-id="34:24289" data-name="商品评价/国际版">
            <div className="fd1da74a5ea" data-node-id="I34:24289;2001:10492" data-name="商品打分">
              <div className="f7f80e7ffb9" data-node-id="I34:24289;2001:10493" data-name="售后退款商品图/国际版">
                <div className="f534e1958da" data-node-id="I34:24289;2001:10493;1621:12155" data-name="绿/西兰花">
                  <div className="f9885faf603" data-node-id="I34:24289;2001:10493;1621:12155;3:40" style={{ maskSize: "720px 31.290000915527344px", maskPosition: "-339px -1.5749998092651367px", maskImage: `url("${imgImage8}")` }} data-name="image 8">
                    <img alt="" className="f6296272086" src={imgImage9}/>
                  </div>
                </div>
              </div>
              <div className="fa11169f07a" data-node-id="I34:24289;2001:10494" data-name="商品名&星级">
                <div className="f682202916a" data-node-id="I34:24289;2001:10495">
                  <p className="f27df124d01" data-node-id="I34:24289;2001:10496" style={{ width: 240, height: 19, flex: "0 0 auto" }}>
                    Fresh broccoli from Spain
                  </p>
                  <div className="feaa60f1c42" data-node-id="I34:24289;2001:10497" data-name="Edit 1">
                    <img alt="" className="f8faf267d30" src={imgEdit1}/>
                  </div>
                </div>
                <div className="f9044e8a997" data-node-id="I34:24289;2001:10498" data-name="星级">
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                  <Component4 className="feaa60f1c42"/>
                </div>
              </div>
            </div>
          </div>
          <Component3 className="f8163a50228"/>
          <Component2 className="f425aabd4c3"/>
          <div className="fd96c27f64a" data-node-id="34:24292" data-name="骑手评价/国际版">
            <div className="f748de03e93" data-node-id="I34:24292;2001:10561" data-name="骑手信息">
              <div className="f936660d4db" data-node-id="I34:24292;2001:10562" data-name="骑手头像">
                <img alt="" className="f6296272086" src={img1}/>
              </div>
              <div className="f2cb50aaf70" data-node-id="I34:24292;2001:10563" data-name="骑手姓名+送达时间">
                <p className="f7c54a3e7b6" data-node-id="I34:24292;2001:10564">
                  Rider Name
                </p>
                <p className="fb3e98516d5" data-node-id="I34:24292;2001:10565">
                  Delivered at 09 Oct 10:30
                </p>
              </div>
            </div>
            <div className="f03e2e456dc" data-node-id="I34:24292;2001:10566" data-name="骑手打分">
              <div className="f9a39a55c2b" data-node-id="I34:24292;2001:10567" data-name="1">
                <Component1 className="f2f03d07b69"/>
                <p className="fa6dd60ce73" data-node-id="I34:24292;2001:10569">
                  Bad
                </p>
              </div>
              <div className="f9a39a55c2b" data-node-id="I34:24292;2001:10570" data-name="2">
                <Component1 className="f2f03d07b69" propValue="2不满意"/>
                <p className="fa6dd60ce73" data-node-id="I34:24292;2001:10572">
                  Fair
                </p>
              </div>
              <div className="f9a39a55c2b" data-node-id="I34:24292;2001:10573" data-name="3">
                <Component1 className="f2f03d07b69" propValue="3一般"/>
                <p className="fa6dd60ce73" data-node-id="I34:24292;2001:10575">
                  Average
                </p>
              </div>
              <div className="f9a39a55c2b" data-node-id="I34:24292;2001:10576" data-name="4">
                <Component1 className="f2f03d07b69" propValue="4满意"/>
                <p className="fa6dd60ce73" data-node-id="I34:24292;2001:10578">
                  Good
                </p>
              </div>
              <div className="f9a39a55c2b" data-node-id="I34:24292;2001:10579" data-name="5">
                <div className="f2f03d07b69" data-node-id="I34:24292;2001:10580" data-name="配送评价打分">
                  <div className="f5a6d53ed56" data-node-id="I34:24292;2001:10580;2001:10436" data-name="编组 4">
                    <div className="f70e44d5c89" data-node-id="I34:24292;2001:10580;2001:10437" data-name="编组 18">
                      <img alt="" className="f8faf267d30" src={img18}/>
                    </div>
                  </div>
                </div>
                <p className="f157da62ee5" data-node-id="I34:24292;2001:10581">
                  Excellent
                </p>
              </div>
            </div>
            <div className="fd8eedf9cbf" data-node-id="I34:24292;2001:10582" data-name="评价">
              <p className="fcdcadf1e54" data-node-id="I34:24292;2001:10582;1621:12095">
                Tell us more about delivery services
              </p>
              <p className="f4bffffef19" data-node-id="I34:24292;2001:10582;1621:12096">
                0/400
              </p>
            </div>
          </div>
          <Component className="fe609f144ad"/>
        </div>
        <div className="f654b5bf375" data-node-id="34:24294" data-name="评价底部btn/国际版">
          <div className="fc312816c22" data-node-id="I34:24294;2001:10595" data-name="底部操作">
            <div className="f1dd091846d" data-node-id="I34:24294;2001:10605" data-name="按钮">
              <div className="f6b9ed66029" data-node-id="I34:24294;2001:10605;410:1579" data-name="Button/_Button XLarge">
                <div className="fe8210ba625" data-node-id="I34:24294;2001:10605;410:1581" data-name="Text">
                  <div className="f958fdc6594" data-node-id="I34:24294;2001:10605;410:1582">
                    <p className="fc3dc13096a" dir="auto">
                      Submit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f35ac9c9bad" data-node-id="I34:24294;2001:10606" data-name="Home Indicator - On Light">
            <div className="f2470d7fb46" data-node-id="I34:24294;2001:10606;0:3675"/>
          </div>
        </div>
      </div>
    </div>);
}
