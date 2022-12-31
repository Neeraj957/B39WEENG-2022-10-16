const h1Element = document.getElementById("header");

var countDown = 10;
 setTimeout(()=> {
    h1Element.innerText='';
    h1Element.innerText= countDown;
    countDown--;
    setTimeout(()=> {
        h1Element.innerText='';
        h1Element.innerText= countDown;
        countDown--;
        setTimeout(()=> {
            h1Element.innerText='';
            h1Element.innerText= countDown;
            countDown--;
            setTimeout(()=> {
                h1Element.innerText='';
                h1Element.innerText= countDown;
                countDown--;
                setTimeout(()=> {
                    h1Element.innerText='';
                    h1Element.innerText= countDown;
                    countDown--;
                    setTimeout(()=> {
                        h1Element.innerText='';
                        h1Element.innerText= countDown;
                        countDown--;
                        setTimeout(()=> {
                            h1Element.innerText='';
                            h1Element.innerText= countDown;
                            countDown--;
                            setTimeout(()=> {
                                h1Element.innerText='';
                                h1Element.innerText= countDown;
                                countDown--;
                                setTimeout(()=> {
                                    h1Element.innerText='';
                                    h1Element.innerText= countDown;
                                    countDown--;
                                    setTimeout(()=> {
                                        h1Element.innerText='';
                                        h1Element.innerText= countDown;
                                        countDown--;
                                        setTimeout(()=> {
                                            h1Element.innerText='';
                                            h1Element.innerText= 'Happy Independence Day';
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)

}, 1000);