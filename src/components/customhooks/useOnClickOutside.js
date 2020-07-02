import { useState, useEffect, useRef } from 'react';

const useOnClickOutside = (ref,focusele) => {
    useEffect (
       
        () => {
            const listener = event => {
               
                if(ref.current && ref.current==event.target) {
                     ref.current.style.display='none';
                }else{
                    ref.current.style.display='flex';
                    focusele.current.focus();
                }
               
              
            };
            document.addEventListener('mousedown', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
              };
        },[ref]
    );
}

export default useOnClickOutside;

