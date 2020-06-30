import { useState, useEffect } from "react";
import Navbar from './navbar';

export default function Typewriter() {

    const TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        const that = this;
        let delta = 250 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    useEffect(() => {
        const elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-type');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        const css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    });

    return (
        <div className="container">
            <Navbar pageTitle="Homepage"></Navbar>
            <div className="project-showcase">
                <div className="showcase-card">
                </div>
            </div>
            <div className="header-title">
                <h1 className="title">Software Developer</h1>
                <h1>
                    <a href="#" className="typewrite" data-period="2000" data-type='[ "Hello my name is Carlos Flores", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
                        <span className="wrap"></span>
                    </a>
                </h1>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-wrap:wrap;
                    min-height: 100vh;
                    background-image: url(/img/mountain.jpg);
                    background-repeat: no-repeat;
                    background-size:  cover;
                    background-position: bottom ;
                }
                .project-showcase {
                    text-align: center;
                    width: 100%;
                }
                .showcase-card {
                    height: 15rem;
                    width: 25rem;
                    margin: 1rem auto;
                    background-color: white;
                    border-radius: 0.2rem;
                }
                .header-title {
                    width: 100%;
                    text-align: center;
                }
                .typewrite {
                    color: white;
                    font-size: 1.2rem;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                h1 {
                    margin: 0px;
                    color: white;
                }
            `}</style>
        </div>
    );
}