import { useEffect } from 'react';

function useBodyOverflow(isShow) {
    useEffect(() => {
        if (isShow) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }

        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, [isShow]);
}

export default useBodyOverflow;