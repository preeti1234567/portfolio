function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/1145850/
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function setIframeHeight() {
    var ifrm = document.getElementById("contentFrame");
    console.log(ifrm.contentDocument);
    console.log(ifrm.contentWindow);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    console.log(getDocHeight( doc ));
    ifrm.style.height = getDocHeight( doc ) + 200 + "px";
    console.log(ifrm.style.height);
    ifrm.style.visibility = 'visible';
}

$(".navigation").on('click',showPage);
//$("#contentFrame").on('load',setIframeHeight);
$('.collapse').on('click',toggle);
function toggle()
{
    alert("Hi");
}
function showPage(){
    var url = $(this).attr('value');
    $('#contentFrame').attr('src', url);
}
