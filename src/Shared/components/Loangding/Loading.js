import React from 'react';
const Loading = React.memo(({ className = '' }) => (
    <div className={`skeleton-loader ${className}`}></div>
));
export default Loading;
