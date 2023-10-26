"use client"
import { useEffect } from 'react';

function useBodyOverflow(isShow) {
    useEffect(() => {
        if (isShow) {
            const originalOverflow = document.body.style.overflowY;
            document.body.style.overflowY = 'hidden';
            return () => {
                document.body.style.overflowY = originalOverflow;
            };
        }

        return () => {
            document.body.style.overflowY = 'scroll';
        };
    }, [isShow]);
}

export default useBodyOverflow;