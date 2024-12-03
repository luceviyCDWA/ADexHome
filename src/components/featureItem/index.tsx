import React from "react";

import { FEATURE_ITEM_HASH, FeatureType } from "./data";

import Styles from "./index.module.less";
import classNames from "classnames";

interface FeatureItemCompProps {
  type: FeatureType;
  active: boolean;
  onMouseEnter: (type: FeatureType) => void;
  onMouseLeave: (type: FeatureType) => void;
}

const FeatureItem: React.FC<FeatureItemCompProps> = ({
  type,
  active,
  onMouseEnter,
  onMouseLeave,
}) => {
  const featureInfo = FEATURE_ITEM_HASH[type];

  return (
    <div
      className={classNames(Styles["feature__item"], {
        [Styles["active"]]: active,
      })}
      onMouseEnter={() => onMouseEnter(type)}
      onMouseLeave={() => onMouseLeave(type)}
    >
      <div className={Styles["feature__item-container"]}>
        <div className={Styles["feature__item-icon"]}>
          <img
            className={Styles["icon"]}
            src={`${featureInfo.icon}`}
          />
          <img
            className={Styles["icon-active"]}
            src={`${featureInfo.iconActive}`}
          />
        </div>
        <div className={Styles["feature__item-title"]}>{featureInfo.title}</div>
        <div className={Styles["feature__item-content"]}>
          {featureInfo.content}
        </div>
      </div>
    </div>
  );
};
export default FeatureItem;