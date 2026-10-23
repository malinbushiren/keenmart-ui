import React from 'react';
import './reference-artwork.css';
type ActiveProps = {
  className?: string;
  propValue?: "1非常差" | "2不满意" | "3一般" | "4满意" | "5很满意";
  propValue1?: "true";
};

function Active({ className, propValue = "1非常差", propValue1 = "true" }: ActiveProps) {
const img25 = `/assets/19aa3.svg`;
const img26 = `/assets/a8883.svg`;
const img14 = `/assets/8a76b.svg`;
const img15 = `/assets/7dfc3.svg`;
const img9 = `/assets/1eb23.svg`;
const img10 = `/assets/68073.svg`;
const img5 = `/assets/3d182.svg`;
const img4 = `/assets/114a9.svg`;
const img163 = `/assets/00148.svg`;
const img6 = `/assets/6567c.svg`;
const img19 = `/assets/a3fb8.svg`;
const imgGood = `/assets/a431a.svg`;
const img18 = `/assets/cb848.svg`;

  const is2AndTrue = propValue === "2不满意" && propValue1 === "true";
  const is3AndTrue = propValue === "3一般" && propValue1 === "true";
  const is4AndTrue = propValue === "4满意" && propValue1 === "true";
  const is5AndTrue = propValue === "5很满意" && propValue1 === "true";
  return (
    <div className={className || "art-96e3ead43f"} id={is5AndTrue ? "node-34_23959" : is4AndTrue ? "node-34_23938" : is3AndTrue ? "node-34_23912" : is2AndTrue ? "node-34_23886" : "node-34_23850"}>
      {propValue === "1非常差" && propValue1 === "true" && (
        <div className="art-b5e5c2270d" data-node-id="34:23851" data-name="编组 18">
          <div className="art-b5e5c2270d" data-node-id="34:23852" data-name="terrible">
            <div className="art-b5e5c2270d" data-node-id="34:23853" data-name="编组 16">
              <div className="art-9b711af0ab" data-node-id="34:23854" data-name="矩形" />
              <div className="art-27a112f841" data-node-id="34:23855" data-name="矩形备份" />
              <div className="art-e26e9db660" data-node-id="34:23856" style={{ backgroundImage: "linear-gradient(181.37479144081436deg, rgba(255, 177, 156, 0) 14.783%, rgb(255, 24, 0) 143.49%)" }} data-name="矩形备份 2" />
              <div className="art-ee2398b98a" data-node-id="34:23857" data-name="Group">
                <div className="art-f7fe6444f9" data-node-id="34:23858" data-name="编组 25">
                  <img alt="" className="art-8faf267d30" src={img25} />
                </div>
                <div className="art-5310e78be8" data-node-id="34:23864" data-name="编组 15">
                  <div className="art-a7337d2c67" data-node-id="34:23865" data-name="编组 26">
                    <img alt="" className="art-8faf267d30" src={img26} />
                  </div>
                </div>
                <div className="art-bc847afb0a" data-node-id="34:23872" data-name="编组 13">
                  <div className="art-3a86a38e36" data-node-id="34:23873" data-name="编组 14">
                    <img alt="" className="art-8faf267d30" src={img14} />
                  </div>
                </div>
                <div className="art-e294c1360b" data-node-id="34:23878" data-name="编组 13备份">
                  <div className="art-59cb7fc2e8" data-node-id="34:23879" data-name="编组 14">
                    <img alt="" className="art-8faf267d30" src={img15} />
                  </div>
                </div>
              </div>
            </div>
            <div className="art-aea1e9885d" data-node-id="34:23884" data-name="路径 9">
              <div className="art-a8b238145c">
                <img alt="" className="art-acc3667e96" src={img9} />
              </div>
            </div>
            <div className="art-b6da72c0a8" data-node-id="34:23885" style={{ containerType: "size" }}>
              <div className="art-8c1ad615a1">
                <div className="art-642c36f86b" data-name="路径 9备份">
                  <div className="art-c99edc7399">
                    <img alt="" className="art-acc3667e96" src={img10} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {is2AndTrue && (
        <div className="art-8f240dcd8f" data-node-id="34:23887" data-name="编组 24">
          <div className="art-8f240dcd8f" data-node-id="34:23888" data-name="编组 18备份 2">
            <div className="art-8f240dcd8f" data-node-id="34:23889" data-name="编组 16备份">
              <div className="art-8f240dcd8f" data-node-id="34:23890" data-name="Group">
                <div className="art-840f01449a" data-node-id="34:23891" data-name="编组 5">
                  <img alt="" className="art-8faf267d30" src={img5} />
                </div>
              </div>
              <div className="art-74f7422601" data-node-id="34:23909" data-name="路径 4">
                <div className="art-82ea20aafe">
                  <img alt="" className="art-acc3667e96" src={img4} />
                </div>
              </div>
            </div>
            <div className="art-8d322fb8b2" data-node-id="34:23910">
              <div className="art-628fd8c989">
                <div className="art-ddc9e34796" data-name="路径 16备份 3">
                  <div className="art-2ff84524bc">
                    <img alt="" className="art-acc3667e96" src={img163} />
                  </div>
                </div>
              </div>
            </div>
            <div className="art-f66ddffe1f" data-node-id="34:23911">
              <div className="art-628fd8c989">
                <div className="art-ddc9e34796" data-name="路径 16备份 5">
                  <div className="art-2ff84524bc">
                    <img alt="" className="art-acc3667e96" src={img163} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {is3AndTrue && (
        <div className="art-e2eeebf446" data-node-id="34:23913" data-name="soso0">
          <div className="art-e2eeebf446" data-node-id="34:23914" data-name="编组 21">
            <div className="art-e2eeebf446" data-node-id="34:23915" data-name="编组 18备份 3">
              <div className="art-e2eeebf446" data-node-id="34:23916" data-name="编组 16备份">
                <div className="art-e2eeebf446" data-node-id="34:23917" data-name="Group">
                  <div className="art-2d85b41f7e" data-node-id="34:23918" data-name="编组 5">
                    <img alt="" className="art-8faf267d30" src={img6} />
                  </div>
                </div>
              </div>
            </div>
            <div className="art-6e78ffc88f" data-node-id="34:23937" data-name="路径 19">
              <div className="art-830dae6d60">
                <img alt="" className="art-acc3667e96" src={img19} />
              </div>
            </div>
          </div>
        </div>
      )}
      {is4AndTrue && (
        <div className="art-e2eeebf446" data-node-id="34:23939" data-name="编组 20">
          <div className="art-2d85b41f7e" data-node-id="34:23940" data-name="good">
            <img alt="" className="art-8faf267d30" src={imgGood} />
          </div>
        </div>
      )}
      {is5AndTrue && (
        <div className="art-5a6d53ed56" data-node-id="34:23960" data-name="编组 4">
          <div className="art-70e44d5c89" data-node-id="34:23961" data-name="编组 18">
            <img alt="" className="art-8faf267d30" src={img18} />
          </div>
        </div>
      )}
    </div>
  );
}

type InactiveProps = {
  className?: string;
  propValue?: "1非常差" | "2不满意" | "3一般" | "4满意" | "5很满意";
  propValue1?: "false";
};

function Inactive({ className, propValue = "1非常差", propValue1 = "false" }: InactiveProps) {
const img25 = `/assets/c3d51.svg`;
const img26 = `/assets/8d9c6.svg`;
const img14 = `/assets/671f7.svg`;
const img15 = `/assets/867a9.svg`;
const img9 = `/assets/eaba8.svg`;
const img10 = `/assets/6403c.svg`;
const img5 = `/assets/a5408.svg`;
const img4 = `/assets/dbf27.svg`;
const img163 = `/assets/405c9.svg`;
const img6 = `/assets/faea7.svg`;
const img19 = `/assets/7cc29.svg`;
const imgGood = `/assets/01de4.svg`;
const imgGreat2 = `/assets/a1b58.svg`;

  const is2AndFalse = propValue === "2不满意" && propValue1 === "false";
  const is3AndFalse = propValue === "3一般" && propValue1 === "false";
  const is4AndFalse = propValue === "4满意" && propValue1 === "false";
  const is5AndFalse = propValue === "5很满意" && propValue1 === "false";
  return (
    <div className={className || "art-96e3ead43f"} id={is5AndFalse ? "node-34_23819" : is4AndFalse ? "node-34_23798" : is3AndFalse ? "node-34_23773" : is2AndFalse ? "node-34_23748" : "node-34_23714"}>
      {propValue === "1非常差" && propValue1 === "false" && (
        <div className="art-fe81d5b031" data-node-id="34:23715" data-name="terrible0">
          <div className="art-fe81d5b031" data-node-id="34:23716" data-name="angry hui">
            <div className="art-a32cfb86e3" data-node-id="34:23717" data-name="矩形" />
            <div className="art-abc7adb89b" data-node-id="34:23718" data-name="矩形备份" />
            <div className="art-b7a40b2236" data-node-id="34:23719" data-name="矩形备份 2" />
            <div className="art-472a069d16" data-node-id="34:23720" data-name="Group">
              <div className="art-9bf64da887" data-node-id="34:23721" data-name="编组 25">
                <img alt="" className="art-8faf267d30" src={img25} />
              </div>
              <div className="art-f723fa8624" data-node-id="34:23726" data-name="编组 15">
                <div className="art-917139488c" data-node-id="34:23727" data-name="编组 26">
                  <img alt="" className="art-8faf267d30" src={img26} />
                </div>
              </div>
              <div className="art-e5b5b7bb3e" data-node-id="34:23734" data-name="编组 13">
                <div className="art-70b74bf133" data-node-id="34:23735" data-name="编组 14">
                  <img alt="" className="art-8faf267d30" src={img14} />
                </div>
              </div>
              <div className="art-8ff799e0c1" data-node-id="34:23740" data-name="编组 13备份">
                <div className="art-5cd7c3ad72" data-node-id="34:23741" data-name="编组 14">
                  <img alt="" className="art-8faf267d30" src={img15} />
                </div>
              </div>
            </div>
          </div>
          <div className="art-e871ef3bb9" data-node-id="34:23746" data-name="路径 9">
            <div className="art-a8b238145c">
              <img alt="" className="art-acc3667e96" src={img9} />
            </div>
          </div>
          <div className="art-bb87d046bb" data-node-id="34:23747" style={{ containerType: "size" }}>
            <div className="art-8c1ad615a1">
              <div className="art-642c36f86b" data-name="路径 9备份">
                <div className="art-c99edc7399">
                  <img alt="" className="art-acc3667e96" src={img10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {is2AndFalse && (
        <div className="art-b517551f89" data-node-id="34:23749" data-name="bad0">
          <div className="art-b517551f89" data-node-id="34:23750" data-name="编组 16备份">
            <div className="art-b517551f89" data-node-id="34:23751" data-name="Group">
              <div className="art-69a6f1f24c" data-node-id="34:23752" data-name="编组 5">
                <img alt="" className="art-8faf267d30" src={img5} />
              </div>
            </div>
            <div className="art-64e8a10e70" data-node-id="34:23770" data-name="路径 4">
              <div className="art-82ea20aafe">
                <img alt="" className="art-acc3667e96" src={img4} />
              </div>
            </div>
          </div>
          <div className="art-0294e5dd37" data-node-id="34:23771" style={{ containerType: "size" }}>
            <div className="art-b75bb785c9">
              <div className="art-642c36f86b" data-name="路径 16备份 3">
                <div className="art-2ff84524bc">
                  <img alt="" className="art-acc3667e96" src={img163} />
                </div>
              </div>
            </div>
          </div>
          <div className="art-aa0209573c" data-node-id="34:23772" style={{ containerType: "size" }}>
            <div className="art-b75bb785c9">
              <div className="art-642c36f86b" data-name="路径 16备份 5">
                <div className="art-2ff84524bc">
                  <img alt="" className="art-acc3667e96" src={img163} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {is3AndFalse && (
        <div className="art-b517551f89" data-node-id="34:23774" data-name="编组 21">
          <div className="art-b517551f89" data-node-id="34:23775" data-name="编组 18备份 3">
            <div className="art-b517551f89" data-node-id="34:23776" data-name="编组 16备份">
              <div className="art-b517551f89" data-node-id="34:23777" data-name="Group">
                <div className="art-69a6f1f24c" data-node-id="34:23778" data-name="编组 5">
                  <img alt="" className="art-8faf267d30" src={img6} />
                </div>
              </div>
            </div>
          </div>
          <div className="art-fffd520364" data-node-id="34:23797" data-name="路径 19">
            <div className="art-830dae6d60">
              <img alt="" className="art-acc3667e96" src={img19} />
            </div>
          </div>
        </div>
      )}
      {is4AndFalse && (
        <div className="art-1084ea5cf3" data-node-id="34:23799" data-name="good">
          <img alt="" className="art-8faf267d30" src={imgGood} />
        </div>
      )}
      {is5AndFalse && (
        <div className="art-a13013b02f" data-node-id="34:23820" data-name="编组 18">
          <div className="art-5fa9e99bb6" data-node-id="34:23821" data-name="great2">
            <img alt="" className="art-8faf267d30" src={imgGreat2} />
          </div>
        </div>
      )}
    </div>
  );
}


export function SentimentArtwork({active,index}:{active:boolean;index:number}){const C=active?Active:Inactive;const values=['1非常差','2不满意','3一般','4满意','5很满意'] as const;return <C propValue={values[index]}/>;}
