import React from "react"
import { css } from '@emotion/core'

const Spotlight = ({ spotlight }) => {
  console.log(spotlight);
  let filtered = Object.assign({}, ...spotlight);
  const count = spotlight.length;
  const {
    title,
    image
  } = filtered;
  
  return (
    <div className={css`
    background-image: url('${image}');
    background-size: contain;
    border-radius: 10px;
    min-height: 200px;
    position: relative;
  `}>
      <div className={css`
        position: absolute;
        top: 0;
        left: 12px;
      `}>
        {`${count} articles`}
      </div>
      <div className={css`
        position: absolute;
        text-align: right;
        bottom: 0;
        left: 0;
        right: 0;
      `}>
        {title}
      </div>
    </div>
  );
}

export default Spotlight
