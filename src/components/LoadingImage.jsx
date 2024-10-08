import React from 'react'
import { useState } from 'react';

const LoadingImage = ({ src, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false); // Image has finished loading
    };
    return (
        <>
            {isLoading && <div style={{ width: "100%", minHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "100%" }} className="image-placeholder"><span>Loading...</span></div>}
            <img src={src}
                alt=""
                className={`product-image ${isLoading ? "hidden" : ""}`} // Hide image until it's loaded
                onLoad={handleImageLoad}
                {...props}
            />
        </>
    )
}

export default LoadingImage