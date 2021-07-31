import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './GreetingPage.css'

const GreetingPage = () => {
    const history = useHistory();

    useEffect(() => {
        const rightSide = document.querySelector('.greeting-page-right')
        const welcome = document.querySelector('.greeting-welcome')
        const toMy = document.querySelector('.greeting-to-my')
        const portfolio = document.querySelector('.greeting-portfolio')
        const site = document.querySelector('.greeting-site')
        setTimeout(() => {
            welcome?.classList.add('show')
        }, 500)
        setTimeout(() => {
            toMy?.classList.add('show')
        }, 1000)
        setTimeout(() => {
            portfolio?.classList.add('show')
            site?.classList.add('show')
        }, 1500)
        setTimeout(() => {
            welcome?.classList.add('fade')
            toMy?.classList.add('fade')
            portfolio?.classList.add('fade')
            site?.classList.add('fade')
        }, 2500)
        setTimeout(() => {
            rightSide?.classList.add('shrink-up')
        }, 3250)
        setTimeout(() => {
            rightSide?.classList.add('stretch-left')
        }, 3750)
        const timeout = setTimeout(() => {
            history.push('/home');
        }, 4250)
        return () => clearTimeout(timeout);
    }, [history])


    return (
        <div className='greeting-page__container'>
            <div className='greeting-page-left'>
                <div className='greeting-welcome'>Welcome</div>
                <div className='greeting-portfolio'>Portfolio</div>
            </div>
            <div className='greeting-page-right'>
                <div className='greeting-to-my'>to my</div>
                <div className='greeting-site'>Site</div>
            </div>
        </div>
    )
}

export default GreetingPage;