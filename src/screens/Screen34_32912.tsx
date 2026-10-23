import React from "react";
const imgLeft = "/assets/27331.svg";
const imgFrame42469 = "/assets/089c2.png";
const img = "/assets/f5417.svg";
const imgProgressIndicatorDefault = "/assets/49a59.svg";
const imgReceipt = "/assets/56e0d.svg";
const imgGroup1312321054 = "/assets/46e47.svg";
const imgGroup1312321049 = "/assets/6ed60.svg";
const imgGroup1312321053 = "/assets/fe6ba.svg";
const imgRightSide = "/assets/2d220.svg";
const imgTime = "/assets/3e9a5.svg";
const imgHeadphones = "/assets/8d76b.svg";
const imgCopy = "/assets/482f6.svg";
type HomeIndicatorProps = {
    className?: string;
    mode?: "Light";
};
function HomeIndicator({ className, mode = "Light" }: HomeIndicatorProps) {
    return (<div className={className || "f256dffeea6"} data-node-id="23:14291">
      <div className="fa031d726e9" data-node-id="23:14292" data-name="Home Indicator"/>
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
export default function Component() {
    return (<div className="fabcb1a40ba" data-node-id="34:32912" data-name="支付成功">
      <div className="f9359316a68" data-node-id="34:32913" data-name="Title + description">
        <div className="fe7dfe57133" data-node-id="34:32914">
          <div className="f37eca788c6" data-node-id="34:32915">
            <div className="fb50c0477dd" data-node-id="34:32916">
              <p className="ff62dcabf0a">Payment successful！</p>
            </div>
            <p className="f84394c339d" data-node-id="34:32917">
              Text Text Text Text
            </p>
          </div>
          <div className="fa5c1c82555" data-node-id="34:32918" data-name="成功">
            <img alt="" className="f8faf267d30" src={img}/>
          </div>
        </div>
        <div className="f6e5a11ba15" data-node-id="34:32934">
          <div className="f3a451156bb" data-node-id="34:32935" style={{ width: 28, height: 28 }}>
            <div className="fb8416e9900" data-node-id="34:32936" data-name="progress-indicator / default">
              <img alt="" className="f8faf267d30" src={imgProgressIndicatorDefault}/>
            </div>
            <div className="fbcada88e4d" data-node-id="34:32937" data-name="Receipt">
              <div className="fda527321a4" data-node-id="I34:32937;453:17557" data-name="Receipt">
                <div className="fed15cfda7e">
                  <img alt="" className="facc3667e96" src={imgReceipt}/>
                </div>
              </div>
            </div>
          </div>
          <div className="f3522a207ba" data-node-id="34:32938">
            <div className="ffd102c1faf">
              <div className="f6a81cc12c1" data-name="50%">
                <div className="f793ecae52d" data-node-id="34:32939" data-name="Elements / Track line"/>
                <div className="f1a37a0e767" data-node-id="34:32940" data-name="Elements / Track line"/>
              </div>
            </div>
          </div>
          <div className="f2f2b16190d" data-node-id="34:32941">
            <img alt="" className="f8faf267d30" src={imgGroup1312321054}/>
          </div>
          <div className="f36e2957713" data-node-id="34:32948">
            <div className="f0cb0d5d9b6" data-node-id="34:32963" data-name="Elements / Track line"/>
          </div>
          <div className="f2f2b16190d" data-node-id="34:32964">
            <img alt="" className="f8faf267d30" src={imgGroup1312321049}/>
          </div>
          <div className="f36e2957713" data-node-id="34:32972">
            <div className="f0cb0d5d9b6" data-node-id="34:32987" data-name="Elements / Track line"/>
          </div>
          <div className="f2d3663d59a" data-node-id="34:32988">
            <img alt="" className="f8faf267d30" src={imgGroup1312321053}/>
          </div>
        </div>
      </div>
      <div className="f51368a6cde" data-node-id="34:33002">
        <div className="fa1401a3621" data-node-id="34:33003" data-name="Status bar (Notch, iPhone X or newer)">
          <div className="f306c4c220b" data-node-id="I34:33003;6893:622;6893:614" data-name="Status bar (Notch, iPhone X or newer)">
            <div className="f7379dde60f" data-node-id="I34:33003;6893:622;6893:614;6893:585" data-name="Right Side">
              <img alt="" className="f8faf267d30" src={imgRightSide}/>
            </div>
            <div className="f1f0f99ceae" data-node-id="I34:33003;6893:622;6893:614;6893:601" data-name="Left Side">
              <div className="ffd009f8265" data-node-id="I34:33003;6893:622;6893:614;6893:602" data-name="Time">
                <img alt="" className="f8faf267d30" src={imgTime}/>
              </div>
            </div>
          </div>
        </div>
        <div className="f7271611d24" data-node-id="34:33004" data-name="Left, Title, Right">
          <div className="fa5d8981ab3" data-node-id="34:33005" data-name="左">
            <Left2 className="f15cc5ceed7"/>
          </div>
          <div className="f8e9c2dfed3" data-node-id="34:33007" data-name="✏️ Title"/>
          <div className="f02b60058bb" data-node-id="34:33008" data-name="back">
            <div className="feaa60f1c42" data-node-id="34:33009" data-name="Headphones">
              <img alt="" className="f8faf267d30" src={imgHeadphones}/>
            </div>
            <p className="f7e7fd1d6f5" data-node-id="34:33010">
              Support
            </p>
          </div>
        </div>
      </div>
      <div className="ff5a8128f25" data-node-id="34:33031">
        <div className="fa6f7f5cbdf" data-node-id="34:33032">
          <div className="fec22b3efc9" data-node-id="34:33033">
            <div className="f3cd69cc6e3" data-node-id="34:33034">
              <p className="fbf919b50f6">Arriving</p>
            </div>
            <div className="f1c2d390a11" data-node-id="34:33035">
              <div className="f37560d2f7d" data-node-id="34:33037">
                <p className="f294c8f0b4f">Today,Expedite deliver 06:33</p>
              </div>
            </div>
          </div>
        </div>
        <div className="f9492d9230c" data-node-id="34:33046" data-name="订单">
          <div className="f153c0a1809" data-node-id="34:33047">
            <div className="f153c0a1809" data-node-id="34:33048">
              <div className="f72683dd842" data-node-id="34:33049" data-name="订单信息">
                <div className="fe8210ba625" data-node-id="34:33050">
                  <div className="fbae636cd8c" data-node-id="34:33051">
                    <p className="fbac9886996" data-node-id="34:33052">
                      Order
                    </p>
                    <div className="fbae636cd8c" data-node-id="34:33053" data-name="订单信息">
                      <div className="fc2bd19fbd3" data-node-id="34:33054">
                        <p className="fd452ad70ec" data-node-id="34:33055">
                          No.
                        </p>
                        <p className="fd452ad70ec" data-node-id="34:33056">
                          2410291209730120070
                        </p>
                      </div>
                      <div className="fc51752dc8c" data-node-id="34:33057" data-name="Copy">
                        <div className="f6adfe59485" data-node-id="I34:33057;1041:23514" data-name="Copy">
                          <div className="f6004d4b7d5">
                            <img alt="" className="facc3667e96" src={imgCopy}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f0934cfa237" data-node-id="34:33058" data-name="按钮">
                  <div className="feeddbfaaa8" data-node-id="I34:33058;410:1661" data-name="Button/_Button Medium">
                    <div className="fe8210ba625" data-node-id="I34:33058;410:1663" data-name="Text">
                      <div className="fa21a968e48" data-node-id="I34:33058;410:1664">
                        <p className="fbf919b50f6" dir="auto">
                          View details
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fa31a36b864" data-node-id="34:33059" data-name="总金额">
              <p className="fd452ad70ec" data-node-id="34:33060">
                9 items
              </p>
              <div className="fbae636cd8c" data-node-id="34:33061">
                <p className="fd452ad70ec" data-node-id="34:33062">
                  Total
                </p>
                <p className="fd452ad70ec" data-node-id="34:33063">
                  SAR
                </p>
                <p className="fd452ad70ec" data-node-id="34:33064">
                  38.76
                </p>
              </div>
            </div>
          </div>
          <div className="f38e6be2cf7" data-node-id="34:33065" data-name="商品缩略">
            <div className="f37a53bf81c" data-node-id="34:33066">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:33067">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:33068">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:33069">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:33070">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
            <div className="f37a53bf81c" data-node-id="34:33071">
              <div aria-hidden className="f34fbdeecb7">
                <div className="fa8defa7547"/>
                <img alt="" className="fe7faa9f8a1" src={imgFrame42469}/>
                <div className="fd01ad0b5c2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="f9492d9230c" data-node-id="34:33072" data-name="尽快送达">
          <div className="f3aba02151a" data-node-id="34:33073" data-name="标题">
            <p className="fbac9886996" data-node-id="34:33075">
              Delivery details
            </p>
          </div>
          <div className="f9ae431b5d9" data-node-id="34:33076">
            <div className="f452d346712" data-node-id="34:33077" data-name="list">
              <div className="fd8e5059ca2" data-node-id="34:33078">
                <p className="f0f5b3553dd" data-node-id="34:33079">
                  Time
                </p>
              </div>
              <div className="fb61eee823d" data-node-id="34:33080">
                <p className="ffa1d24360d" data-node-id="34:33081">
                  Today,expedite deliver 06:33
                </p>
              </div>
            </div>
            <div className="f452d346712" data-node-id="34:33082" data-name="list">
              <div className="fd8e5059ca2" data-node-id="34:33083">
                <p className="f0f5b3553dd" data-node-id="34:33084">
                  Address
                </p>
              </div>
              <div className="fd159307faf" data-node-id="34:33085">
                <p className="fae24368461" data-node-id="34:33086">
                  Home
                </p>
                <div className="f80b1e00572" data-node-id="34:33087">
                  <p className="f67366dcb7c" data-node-id="34:33088">{`King Saud University `}</p>
                  <p className="f92dd2d44ef" data-node-id="34:33089">{`Dingxiaodong  +86 16660654099`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeIndicator className="f6eb5e85531"/>
    </div>);
}
