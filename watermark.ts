/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */

const waterMark = function (this: any, cconfig: any) {
  /* console.log('this');
    console.log(this);*/
  let watermark = function Watermark() {

  };

  let init = function (config: any) {
    let data = {
      selector: config.selector || 'body',
      name: config.name || '内部资料请勿外泄',
      width: config.width || 150,
      height: config.height || 150,
      font_size: config.font_size || 48,
      top: config.top || 20,
      left: config.left || 20,
      bottom: config.bottom || 20,
      right: config.right || 20,
      opacity: config.opacity || 0.06,
      id: config.id || 'water-mark',
    };

    let watermark_div = document.getElementById(data.id);
    if (watermark_div) {
      watermark_div.remove();
    }
    watermark_div = document.createElement('div');
    watermark_div.id = data.id;

    let canv = document.createElement('canvas');
    canv.id = 'canvas';
    canv.style.display = 'none';
    canv.width = data.width;
    canv.height = data.height;
    watermark_div.appendChild(canv);
    document.querySelector(data.selector)!.appendChild(watermark_div);

    let ctx = canv.getContext('2d');
    ctx!.font = `${data.font_size}px Arial`;
    let text = ctx!.measureText(data.name);
    ctx!.translate(data.width / 2, data.height / 2);
    ctx!.rotate((Math.PI / 180) * -30);
    ctx!.translate(-data.width / 2, -data.height / 2);
    if (config.stroke) {
      ctx!.strokeText(data.name, (data.width - text.width) / 2, data.height / 2);
    } else {
      ctx!.fillText(data.name, (data.width - text.width) / 2, (data.height / 2));
    }
    let dataUrl = canv.toDataURL();

    watermark_div.setAttribute(
      'style',
      'position:absolute;' +
            `bottom:${data.bottom || 0}px;` +
            `right:${data.right || 0}px;` +
            `top:${data.top || 0}px;` +
            `left:${data.left || 0}px;` +
            'z-index:10000;' +
            'pointer-events:none;' +
            'background-repeat:repeat;' +
            'background-image:url(\'' +
            dataUrl +
            '\');' +
            `opacity:${data.opacity || 0.06};`,
    );
  };

  init(cconfig);
};

export default waterMark;
