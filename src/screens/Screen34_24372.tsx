import React from "react";
const img = "/assets/12127.svg";
const imgOval = "/assets/82d6a.svg";
const imgLeft = "/assets/27331.svg";
const imgRightSide = "/assets/addd3.svg";
const imgTime = "/assets/a0d3d.svg";
const imgDown = "/assets/3f742.svg";
const imgCamera = "/assets/e576a.svg";
function Component({ className }: {
    className?: string;
}) {
    return (<div className={className || "f98df7acdce"} data-node-id="34:24413" data-name="未选">
      <div className="fb469d571fb" data-node-id="34:24414"/>
      <div className="fbc16cc5033" data-node-id="34:24415" data-name="选择按钮">
        <img alt="" className="f8faf267d30" src={img}/>
      </div>
    </div>);
}
function Component1({ className }: {
    className?: string;
}) {
    return (<div className={className || "f98df7acdce"} data-node-id="34:24416" data-name="不可选">
      <Component className="f7cd11538f4"/>
      <div className="f0525b90cb2" data-node-id="34:24418"/>
      <div className="f29bade9677" data-node-id="34:24419"/>
    </div>);
}
function Component2({ className }: {
    className?: string;
}) {
    return (<div className={className || "f98df7acdce"} data-node-id="34:24404" data-name="已选">
      <div className="fd7f2ec9d5e" data-node-id="34:24405"/>
      <div className="fbc16cc5033" data-node-id="34:24406" data-name="选择按钮">
        <div className="fa0cc0c55d5" data-node-id="34:24408" data-name="Oval">
          <img alt="" className="f8faf267d30" src={imgOval}/>
        </div>
        <div className="feb6f0825a6" data-node-id="34:24412">
          <p className="fc3dc13096a">1</p>
        </div>
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
export default function Component3() {
    return (<div className="f70d9036861" data-node-id="34:24372" data-name="选照片或视频">
      <div className="faef2ac8b70" data-node-id="34:24373">
        <div className="f153c0a1809" data-node-id="34:24374" data-name="导航&标题栏">
          <div className="f77181c8d63" data-node-id="34:24375" data-name="Top Navigation">
            <div className="f84b4ca00a1" data-node-id="34:24376" data-name="Status Bar / iPhone X (or newer)">
              <div className="f7379dde60f" data-node-id="I34:24376;230:71378" data-name="Right Side">
                <img alt="" className="f8faf267d30" src={imgRightSide}/>
              </div>
              <div className="f1f0f99ceae" data-node-id="I34:24376;230:71385" data-name="Left Side">
                <div className="ffd009f8265" data-node-id="I34:24376;230:71386" data-name="_Time">
                  <img alt="" className="f8faf267d30" src={imgTime}/>
                </div>
              </div>
            </div>
            <div className="f28d534b5f2" data-node-id="34:24377" data-name="TitleBar">
              <div className="f81b51360ae" data-node-id="34:24378" data-name="左">
                <Left2 className="f15cc5ceed7"/>
              </div>
              <div className="f99d86c9418" data-node-id="34:24381">
                <div className="f8ec4fe3619" data-name="TitleBar/_标题">
                  <div className="f516244ab62" data-node-id="34:24382">
                    <p className="f294c8f0b4f">Recent projects</p>
                  </div>
                  <div className="fc51752dc8c" data-node-id="34:24383" data-name="Down 2">
                    <div className="f08125ff2e6" data-node-id="I34:24383;453:17248" data-name="Down">
                      <div className="fbba4f7aba1">
                        <img alt="" className="facc3667e96" src={imgDown}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="f99d86c9418" data-node-id="34:24384">
                <div className="ffbd4c0953a" data-name="右">
                  <div className="fb877a53409" data-node-id="34:24385" data-name="文案">
                    <div className="f913afdaa83" data-node-id="34:24386">
                      <p className="fc3dc13096a">Done (1)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="f119d41b21f" data-node-id="34:24389">
          <div className="f5db846a9e4" data-node-id="34:24390" data-name="已选">
            <div className="f6ab36be477" data-node-id="34:24391"/>
            <div className="f618ee7e029" data-node-id="34:24392" data-name="Camera">
              <div className="f190ce3bd4e" data-node-id="34:24393" data-name="Camera">
                <img alt="" className="f8faf267d30" src={imgCamera}/>
              </div>
            </div>
          </div>
          <Component2 className="f5db846a9e4"/>
          <Component className="f5db846a9e4"/>
          <Component1 className="f5db846a9e4"/>
          <div className="f5db846a9e4" data-node-id="34:24420" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24420;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24420;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24420;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24420;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24420;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24421" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24421;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24421;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24421;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24421;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24421;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24422" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24422;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24422;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24422;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24422;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24422;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24423" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24423;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24423;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24423;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24423;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24423;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24424" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24424;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24424;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24424;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24424;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24424;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24425" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24425;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24425;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24425;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24425;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24425;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24426" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24426;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24426;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24426;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24426;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24426;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24427" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24427;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24427;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24427;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24427;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24427;34:24419"/>
          </div>
          <div className="f5db846a9e4" data-node-id="34:24428" data-name="不可选">
            <div className="f7cd11538f4" data-node-id="I34:24428;34:24417" data-name="未选">
              <div className="fb469d571fb" data-node-id="I34:24428;34:24417;34:24414"/>
              <div className="fbc16cc5033" data-node-id="I34:24428;34:24417;34:24415" data-name="选择按钮">
                <img alt="" className="f8faf267d30" src={img}/>
              </div>
            </div>
            <div className="f0525b90cb2" data-node-id="I34:24428;34:24418"/>
            <div className="f29bade9677" data-node-id="I34:24428;34:24419"/>
          </div>
        </div>
      </div>
      <div className="faf2634e651" data-node-id="34:24429" data-name="申请退款底部btn/国际版">
        <div className="f5fb7053706" data-node-id="I34:24429;1621:12140" data-name="Home Indicator - On Light">
          <div className="f2470d7fb46" data-node-id="I34:24429;1621:12140;0:3675"/>
        </div>
      </div>
    </div>);
}
