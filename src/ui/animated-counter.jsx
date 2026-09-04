import React, { useEffect, useState } from "react";

export const AnimatedCounter = ({target}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const duration = 2000;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;

            const progress = Math.min(elapsedTime / duration, 1);

            // const easeOutProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = Math.floor(progress * target);

            setCount(currentVal);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [target]);

    return <>{count}</>;
}