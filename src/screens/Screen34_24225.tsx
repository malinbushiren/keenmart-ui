import React from "react";
const img = "/assets/5efc4.png";
const img18 = "/assets/0c3b4.svg";
const imgGroup237 = "/assets/3711e.svg";
const imgFalse = "/assets/2a11e.svg";
const imgImage9 = "/assets/eccee.png";
const imgImage8 = "/assets/7c10e.svg";
const imgEdit1 = "/assets/da235.svg";
const imgLeft = "/assets/27331.svg";
const imgRightSide = "/assets/addd3.svg";
const imgTime = "/assets/a0d3d.svg";
const img22 = "/assets/ac2f8.svg";
const imgDown = "/assets/df836.svg";
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
    propValue?: "true";
};
function Component1({ className, propValue = "true" }: Component1Props) {
    return (<div className={className || "fc0fc4d346f"} data-node-id="34:24016">
      <div className="f6a233c377e" data-node-id="34:24017" data-name="骑手信息">
        <div className="f936660d4db" data-node-id="34:24018" data-name="骑手头像">
          <img alt="" className="f6296272086" src={img}/>
        </div>
        <div className="f2cb50aaf70" data-node-id="34:24019" data-name="骑手姓名+送达时间">
          <p className="f7c54a3e7b6" data-node-id="34:24020">
            Rider Name
          </p>
          <p className="fb3e98516d5" data-node-id="34:24021">
            Delivered at 09 Oct 10:30
          </p>
        </div>
        <div className="f475f658c09" data-node-id="34:24022" data-name="5">
          <div className="f75f2c6b5ad" data-node-id="34:24023" data-name="配送评价打分">
            <div className="f5a6d53ed56" data-node-id="I34:24023;2001:10436" data-name="编组 4">
              <div className="f70e44d5c89" data-node-id="I34:24023;2001:10437" data-name="编组 18">
                <img alt="" className="f8faf267d30" src={img18}/>
              </div>
            </div>
          </div>
          <p className="fc85e4c5e09" data-node-id="34:24024">
            Excellent
          </p>
        </div>
      </div>
      <p className="f4c63b06bb4" data-node-id="34:24026">{`Great! Delivered very quickly. Great! Delivered very quickly. Great! Delivered very quickly. `}</p>
    </div>);
}
type Component2Props = {
    className?: string;
    propValue?: "总体打分";
    propValue1?: boolean;
};
function Component2({ className, propValue = "总体打分", propValue1 = false }: Component2Props) {
    const isAndFalse = propValue === "总体打分" && !propValue1;
    return (<div className={className || `f0b8f776e7a ${isAndFalse ? "" : "fc10ff8c059"}`} data-node-id={isAndFalse ? "34:23451" : "34:23441"}>
      {propValue === "总体打分" && propValue1 && (<div className="fbe1ea32de3" data-node-id="34:23442">
          <img alt="" className="f8faf267d30" src={imgGroup237}/>
        </div>)}
      {isAndFalse && <img alt="" className="f8faf267d30" src={imgFalse}/>}
    </div>);
}
type Component3Props = {
    className?: string;
    propValue?: boolean;
    propValue1?: boolean;
    show?: boolean;
    show1?: boolean;
    show2?: boolean;
};
function Component3({ className, propValue = false, propValue1 = false, show = true, show1 = true, show2 = true }: Component3Props) {
    const isTrueAndTrue = propValue && propValue1;
    return (<div className={className || `ff6ae3bd309 ${isTrueAndTrue ? "fcacef2450c" : "fc69fa8fc87"}`} data-node-id={isTrueAndTrue ? "34:23688" : "34:23645"}>
      <div className={`f8c7d8efaa6 ${isTrueAndTrue ? "f6da6a3c3f7" : "ff192d3bab3"}`} data-node-id={isTrueAndTrue ? "34:23689" : "34:23646"} data-name="商品打分">
        <div className="f7f80e7ffb9" data-node-id={isTrueAndTrue ? "34:23690" : "34:23647"} data-name="售后退款商品图/国际版">
          <div className="f534e1958da" data-node-id={isTrueAndTrue ? "I34:23690;1621:12155" : "I34:23647;1621:12155"} data-name="绿/西兰花">
            <div className="f9885faf603" data-node-id={isTrueAndTrue ? "I34:23690;1621:12155;3:40" : "I34:23647;1621:12155;3:40"} style={{ maskImage: `url("${imgImage8}")` }} data-name="image 8">
              <img alt="" className="f6296272086" src={imgImage9}/>
            </div>
          </div>
        </div>
        {!propValue && !propValue1 && (<div className="fa11169f07a" data-node-id="34:23648" data-name="商品名&星级">
            <div className="f682202916a" data-node-id="34:23649">
              <p className="f27df124d01" data-node-id="34:23650" style={{ width: 240, height: 38, flex: "0 0 auto" }}>
                Fresh broccoli from Spain Fresh broccoli from Spain
              </p>
              <div className="feaa60f1c42" data-node-id="34:23651" data-name="Edit 1">
                <img alt="" className="f8faf267d30" src={imgEdit1}/>
              </div>
            </div>
            <div className="f9044e8a997" data-node-id="34:23652" data-name="星级">
              <Component2 className="feaa60f1c42"/>
              <Component2 className="feaa60f1c42"/>
              <Component2 className="feaa60f1c42"/>
              <Component2 className="feaa60f1c42"/>
              <Component2 className="feaa60f1c42"/>
            </div>
          </div>)}
        {isTrueAndTrue && (<div className="f2ca6e11bd2" data-node-id="34:23691">
            <div className="f682202916a" data-node-id="34:23692" data-name="商品名称">
              <p className="f27df124d01" data-node-id="34:23693" style={{ width: 279, height: 38, flex: "0 0 auto" }}>
                Fresh broccoli from Spain Fresh broccoli from Spain
              </p>
            </div>
            <div className="f6a233c377e" data-node-id="34:23695" data-name="总体打分">
              <div className="f3536005f7f" data-node-id="34:23696" data-name="星级">
                <Component2 className="fa04abe04fe" propValue1/>
                <Component2 className="fa04abe04fe" propValue1/>
                <Component2 className="fa04abe04fe" propValue1/>
                <Component2 className="fa04abe04fe" propValue1/>
                <Component2 className="fa04abe04fe" propValue1/>
              </div>
              <div className="f097af80063" data-node-id="34:23702">
                <p className="fbf919b50f6" dir="auto">
                  Excellent
                </p>
              </div>
            </div>
          </div>)}
      </div>
      {isTrueAndTrue && show1 && (<div className="f8341d8dc80" data-node-id="34:23703" data-name="评价内容">
          {show && (<div className="f0763616e8f" data-node-id="34:23704" data-name="细分维度打分">
              <div className="fb469b1d319" data-node-id="34:23705">
                <p className="fbf919b50f6" dir="auto">{`Fresh: Excellent, Taste: Excellent `}</p>
              </div>
            </div>)}
          <p className="f88cd412f66" data-node-id="34:23706">{`It's delicious and fresh. I'll buy it again next time. Very good, I like it.`}</p>
        </div>)}
      {isTrueAndTrue && show2 && (<div className="ff7749b86b9" data-node-id="34:23707" data-name="图片">
          <div className="f8c3241b9fb" data-node-id="34:23708" data-name="image"/>
          <div className="f8c3241b9fb" data-node-id="34:23709" data-name="image"/>
          <div className="f8c3241b9fb" data-node-id="34:23710" data-name="image"/>
          <div className="f8c3241b9fb" data-node-id="34:23711" data-name="image"/>
          <div className="f8c3241b9fb" data-node-id="34:23712" data-name="image"/>
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
export default function Component4() {
    return (<div className="fc789b63539" data-node-id="34:24225" data-name="继续评价">
      <div className="fd934a3f2ef" data-node-id="34:24226" data-name="页面ALL">
        <div className="f654b5bf375" data-node-id="34:24227" data-name="头部">
          <div className="f77181c8d63" data-node-id="34:24228" data-name="评价一下/导航&标题栏/国际版">
            <div className="f84b4ca00a1" data-node-id="I34:24228;2001:10178" data-name="Status Bar / iPhone X (or newer)">
              <div className="f7379dde60f" data-node-id="I34:24228;2001:10178;230:71378" data-name="Right Side">
                <img alt="" className="f8faf267d30" src={imgRightSide}/>
              </div>
              <div className="f1f0f99ceae" data-node-id="I34:24228;2001:10178;230:71385" data-name="Left Side">
                <div className="ffd009f8265" data-node-id="I34:24228;2001:10178;230:71386" data-name="_Time">
                  <img alt="" className="f8faf267d30" src={imgTime}/>
                </div>
              </div>
            </div>
            <div className="f28d534b5f2" data-node-id="I34:24228;2001:10179" data-name="TitleBar">
              <div className="fc58c0ae0dc" data-node-id="I34:24228;2001:10180" data-name="左">
                <Left2 className="f15cc5ceed7"/>
              </div>
              <div className="f99d86c9418" data-node-id="I34:24228;2001:10183">
                <div className="fe60614f61e" data-name="TitleBar/_标题">
                  <div className="f516244ab62" data-node-id="I34:24228;2001:10183;8776:26596">
                    <p className="f294c8f0b4f">Continue Rate</p>
                  </div>
                </div>
              </div>
              <div className="f99d86c9418" data-node-id="I34:24228;2001:10184">
                <div className="ffbd4c0953a" data-name="右"/>
              </div>
            </div>
          </div>
        </div>
        <div className="f75988354e0" data-node-id="34:24229" data-name="页面内容区">
          <div className="f5c941ab3a3" data-node-id="34:24230" data-name="商品评价模块标题/国际版">
            <div className="fb6a72c81c7" data-node-id="I34:24230;34:24270" data-name="商品评价模块标题/国际版">
              <p className="ff5002ac31e" data-node-id="I34:24230;34:24270;2001:10484" style={{ width: 351, height: 22, flex: "0 0 auto" }}>
                Rate The Items (0/1)
              </p>
            </div>
          </div>
          <Component3 className="fe578afc5ea"/>
          <div className="fcb6eb8291e" data-node-id="34:24232" data-name="已评价/国际版">
            <div className="feb9c80cd09" data-node-id="34:24233" data-name="路径 22备份">
              <div className="f9cfc0460b3">
                <img alt="" className="facc3667e96" src={img22}/>
              </div>
            </div>
            <p className="f89d88275dc" data-node-id="34:24234">
              Rated
            </p>
            <div className="feb9c80cd09" data-node-id="34:24235" data-name="路径 22备份">
              <div className="f9cfc0460b3">
                <img alt="" className="facc3667e96" src={img22}/>
              </div>
            </div>
          </div>
          <div className="f52f9fabf39" data-node-id="34:24236">
            <Component3 className="fd67477623f" propValue propValue1/>
            <div className="fd67477623f" data-node-id="34:24238" data-name="商品评价/国际版">
              <div className="f900a7dc8c9" data-node-id="I34:24238;2001:10535" data-name="商品打分">
                <div className="f7f80e7ffb9" data-node-id="I34:24238;2001:10536" data-name="售后退款商品图/国际版">
                  <div className="f534e1958da" data-node-id="I34:24238;2001:10536;1621:12155" data-name="绿/西兰花">
                    <div className="f9885faf603" data-node-id="I34:24238;2001:10536;1621:12155;3:40" style={{ maskSize: "720px 31.290000915527344px", maskPosition: "-339px -1.5749998092651367px", maskImage: `url("${imgImage8}")` }} data-name="image 8">
                      <img alt="" className="f6296272086" src={imgImage9}/>
                    </div>
                  </div>
                </div>
                <div className="f2ca6e11bd2" data-node-id="I34:24238;2001:10537">
                  <div className="f682202916a" data-node-id="I34:24238;2001:10538" data-name="商品名称">
                    <p className="f27df124d01" data-node-id="I34:24238;2001:10539" style={{ width: 276, height: 38, flex: "0 0 auto" }}>
                      Fresh broccoli from Spain Fresh broccoli from Spain
                    </p>
                  </div>
                  <div className="f6a233c377e" data-node-id="I34:24238;2001:10541" data-name="总体打分">
                    <div className="f3536005f7f" data-node-id="I34:24238;2001:10542" data-name="星级">
                      <Component2 className="fa04abe04fe" propValue1/>
                      <Component2 className="fa04abe04fe" propValue1/>
                      <Component2 className="fa04abe04fe" propValue1/>
                      <Component2 className="fa04abe04fe" propValue1/>
                      <Component2 className="fa04abe04fe" propValue1/>
                    </div>
                    <div className="f097af80063" data-node-id="I34:24238;2001:10548">
                      <p className="fbf919b50f6" dir="auto">
                        Excellent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Component3 className="f981e09c2da" propValue propValue1 show={false} show1={false} show2={false}/>
            <div className="faf02765b94" data-node-id="34:24240" data-name="展开更多">
              <p className="f8130f69631" data-node-id="34:24241">
                View More 2 Items
              </p>
              <div className="fc51752dc8c" data-node-id="34:24242" data-name="Down 2">
                <div className="f08125ff2e6" data-node-id="I34:24242;453:17248" data-name="Down">
                  <div className="f96e51f64ce">
                    <img alt="" className="facc3667e96" src={imgDown}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Component1 className="f1304a00a43"/>
          <Component className="fe609f144ad"/>
        </div>
        <div className="f654b5bf375" data-node-id="34:24245" data-name="评价底部btn/国际版">
          <div className="fc312816c22" data-node-id="I34:24245;2001:10595" data-name="底部操作">
            <div className="f1dd091846d" data-node-id="I34:24245;2001:10605" data-name="按钮">
              <div className="f6b9ed66029" data-node-id="I34:24245;2001:10605;410:1579" data-name="Button/_Button XLarge">
                <div className="fe8210ba625" data-node-id="I34:24245;2001:10605;410:1581" data-name="Text">
                  <div className="f958fdc6594" data-node-id="I34:24245;2001:10605;410:1582">
                    <p className="fc3dc13096a" dir="auto">
                      Submit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f35ac9c9bad" data-node-id="I34:24245;2001:10606" data-name="Home Indicator - On Light">
            <div className="f2470d7fb46" data-node-id="I34:24245;2001:10606;0:3675"/>
          </div>
        </div>
      </div>
    </div>);
}
