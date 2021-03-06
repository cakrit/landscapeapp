import React from 'react';
import _ from 'lodash';

const LandscapeInfo = ({zoom, width, height, top, left, childrenInfo}) => {
  const children = childrenInfo.map(function(info) {
    const positionProps = {
        position: 'absolute',
        top: _.isUndefined(info.top) ? null : info.top * zoom,
        left: _.isUndefined(info.left) ? null : info.left * zoom,
        right: _.isUndefined(info.right) ? null : info.right * zoom,
        bottom: _.isUndefined(info.bottom) ? null : info.bottom * zoom ,
        width: _.isUndefined(info.width) ? null : info.width * zoom,
        height: _.isUndefined(info.height) ? null : info.height * zoom
    };
    if (info.type === 'text') {
      return <div style={{
        ...positionProps,
        fontSize: info.font_size * zoom,
        fontStyle: 'italic',
        textAlign: 'justify'
      }}> {info.text} </div>
    }
    if (info.type === 'title') {
      return <div style= {{
        ...positionProps,
        fontSize: info.font_size * zoom,
        color: '#666'
      }}>{info.title}</div>
    }
    if (info.type === 'image') {
      return <img src={`images/${info.image}`} style={{
        ...positionProps
      }} />
    }
  });

  return <div style={{
    position: 'absolute',
    width: width * zoom,
    height: (height - 20) * zoom,
    top: top * zoom,
    left: left * zoom,
    border: `${1 * zoom}px solid black`,
    background: 'white',
    borderRadius: 15 * zoom,
    marginTop: 20 * zoom,
    boxShadow: `0 ${4 * zoom}px ${8 * zoom}px 0 rgba(0, 0, 0, 0.2), 0 ${6 * zoom}px ${20 * zoom}px 0 rgba(0, 0, 0, 0.19)`
  }}>{children}</div>
}
export default LandscapeInfo;
