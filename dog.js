/* 
* @Author: Marte
* @Date:   2018-05-18 16:54:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-18 17:03:39
*/
const { body } = document;
const fullWidth = body.clientWidth;
const fullHeight = body.clientHeight;

const mouse$ = Rx.Observable
  .fromEvent(body, 'mousemove')
  .map(({ offsetX, offsetY }) => ({
    x: offsetX / fullWidth,
    y: offsetY / fullHeight
  }));

mouse$.subscribe(({ x, y }) => {
  body.style.setProperty('--mouse-x', x);
  body.style.setProperty('--mouse-y', y);
});