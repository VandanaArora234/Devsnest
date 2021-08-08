import { useCallback, useState } from "react";


const useAray = (init) => {

    const [bullet, setBullet] = useState(init);

    return {

        bullet,

        setBullet,

        add: useCallback((i) => { setBullet(v => [...v, i]) }),

        clr: useCallback((i) => {
            setBullet(v => {

                const ar = v.filter(item => item !== v[i]);

                return ar;
            })
        }),

        allclr: useCallback(() => setBullet([]))
    }



}

export default useAray;