
/*document.getElementById('unitInputType').style.visibility = 'hidden';
document.getElementById('unitOutputType').style.visibility = 'hidden';*/

document.getElementById('Moutp').style.visibility = 'hidden';
document.getElementById('Youtp').style.visibility = 'hidden';
document.getElementById('Foutp').style.visibility = 'hidden';
document.getElementById('Ioutp').style.visibility = 'hidden';
document.getElementById('Kmoutp').style.visibility = 'hidden';
document.getElementById('moutp').style.visibility = 'hidden';
document.getElementById('Cmoutp').style.visibility = 'hidden';
document.getElementById('Mmoutp').style.visibility = 'hidden';


document.getElementById('lengthInput').addEventListener('input', function(e){
    document.getElementById('Moutp').style.visibility = 'visible';
    document.getElementById('Youtp').style.visibility = 'visible';
    document.getElementById('Foutp').style.visibility = 'visible';
    document.getElementById('Ioutp').style.visibility = 'visible';
    document.getElementById('Kmoutp').style.visibility = 'visible';
    document.getElementById('moutp').style.visibility = 'visible';
    document.getElementById('Cmoutp').style.visibility = 'visible';
    document.getElementById('Mmoutp').style.visibility = 'visible';
    
    let length = e.target.value;

    document.getElementById('Moutput').innerHTML = (length * 0.621371).toFixed(2);
    document.getElementById('Youtput').innerHTML = (length * 1093.61).toFixed(2);
    document.getElementById('Foutput').innerHTML = (length * 3280.84).toFixed(2);
    document.getElementById('Ioutput').innerHTML = (length * 39370.079).toFixed(2);
    document.getElementById('Kmoutput').innerHTML = (length * 1).toFixed(2);
    document.getElementById('moutput').innerHTML = (length * 1000).toFixed(2);
    document.getElementById('Cmoutput').innerHTML = (length * 100000).toFixed(0);
    document.getElementById('Mmoutput').innerHTML = (length * 1000000).toFixed(0);
});

