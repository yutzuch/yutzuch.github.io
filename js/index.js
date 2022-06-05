function open_ytresume() {
    var pwd = prompt("Enter password");
    if (pwd != null && pwd != "" && pwd === '11999955'){
        window.open('https://yutzuch.github.io/ytresume/', '_blank').focus();
    } else {
        alert('Wrong!!');
    }
}