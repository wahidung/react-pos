import React from "react";
import ContentLoader from "react-content-loader";
function ProductSkeleton() {
  return (
    <ContentLoader viewBox="0 0 900 507" height={507} width={900}>
      <rect x="30" y="0" rx="0" ry="0" width="280" height="120" />
      <rect x="30" y="129" rx="0" ry="0" width="280" height="15" />
      <rect x="30" y="151" rx="0" ry="0" width="140" height="15" />

      <rect x="330" y="0" rx="0" ry="0" width="280" height="120" />
      <rect x="330" y="129" rx="0" ry="0" width="280" height="15" />
      <rect x="330" y="151" rx="0" ry="0" width="140" height="15" />

      <rect x="630" y="0" rx="0" ry="0" width="280" height="120" />
      <rect x="630" y="129" rx="0" ry="0" width="280" height="15" />
      <rect x="630" y="151" rx="0" ry="0" width="140" height="15" />

      <rect x="30" y="200" rx="0" ry="0" width="280" height="120" />
      <rect x="30" y="329" rx="0" ry="0" width="280" height="15" />
      <rect x="30" y="351" rx="0" ry="0" width="140" height="15" />

      <rect x="330" y="200" rx="0" ry="0" width="280" height="120" />
      <rect x="330" y="329" rx="0" ry="0" width="280" height="15" />
      <rect x="330" y="351" rx="0" ry="0" width="140" height="15" />

      <rect x="630" y="200" rx="0" ry="0" width="280" height="120" />
      <rect x="630" y="329" rx="0" ry="0" width="280" height="15" />
      <rect x="630" y="351" rx="0" ry="0" width="140" height="15" />
    </ContentLoader>
  );
}

export default ProductSkeleton;
