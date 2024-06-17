
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useClientRouter = () => {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? router : null;
};

export default useClientRouter;
