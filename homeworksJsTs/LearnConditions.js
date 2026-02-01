

function launchBrowser(browserName){
    if (browserName == 'Chrome') {
        console.log(`Launching the Chrome browser`)
    } else if (browserName == 'FireFox') {
        console.log(`Launching the FireFox browser`)
    } else if (browserName == 'Safari') {
        console.log(`Launching the Safari browser`)
    }
}

function runTests(testType){
    switch(testType){
        case 'smoke':
            console.log("This is a smoke test case");
        break;
        case 'sanity':
            console.log("This is a sanity test case");
        break;
        case 'regression':
            console.log("This is a regression test case");
        break;
        default:
            console.log("This is a default smoke test case");
        break;
    }
}

launchBrowser("Chrome")
runTests("regression")