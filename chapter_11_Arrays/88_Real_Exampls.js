let browser = ['Chrome', 'FireFOx', 'Safari', 'Opera', 'Edge'];
console.log(browser);

//Pop will remove last
// browser.pop();
// console.log(browser);

//shift will remove first
// browser.shift();
// console.log(browser);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === 'Opera') {
        console.log("Opera is removed from Selenium");
    }
}
