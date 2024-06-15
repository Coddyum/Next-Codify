import { useEffect } from 'react';

const Cursor = () => {
    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>('.card');
        cards.forEach((card: HTMLElement) => {
            card.onmousemove = (e: MouseEvent) => {
                const x: number = e.pageX - card.offsetLeft;
                const y: number = e.pageY - card.offsetTop;

                card.style.setProperty('--x', x + 'px');
                card.style.setProperty('--y', y + 'px');
            };
        });
    }, []); 
};

export default Cursor;
