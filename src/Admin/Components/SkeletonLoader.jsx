import React from "react";
import Skeleton from "react-loading-skeleton";
import "../../CSS/SkeletonLoader.css"

function SkeletonLoader() {
  return (
    <div className="skeleton-table-row">
       <div className="table-col1"></div>
       <div className="table-col2"></div>
       <div className="table-col3"></div>
    </div>
  );
}

export default SkeletonLoader;
