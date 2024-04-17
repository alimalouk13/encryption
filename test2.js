// The btoa() method encodes a string in base-64.
// btoa() : يتم استخدامها لتشفير بيانات النصية إلى تشفير بنظام القاعدة64
// ----------------------------------------------------------------------------
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string. 
// هذا عنصر يستخدم احرف اللغة الإنجليزية , الصغيرة والكبيرة , الأرقام و علامة 
// +  و  /  و =
// عندما يقوم بتشفير النص
//------------------------------------------------------------------------------
// Tip: Use the atob() method to decode a base-64 encoded string.
// atob() : يتم استخدام هذا العنصر لفك تشفير نص مشفر بنظام قاعدة64
// let text ="ali malouk";
// let encode_text=btoa(text) 
// alert (encode_text)
// let decode_text= atob(encode_text)
// alert(decode_text)
var textarea=document.getElementById("textarea");
var result=document.getElementById("result");
var select1=document.getElementById("select1");

textarea.addEventListener("input",()=>{
    make_result();
});
select1.addEventListener("change",()=>{
    make_result();
});

function make_result(){
    if(select1.value=="encode")
    {
      result.value= btoa(textarea.value);
    }else  if(select1.value=="decode"){
        result.value=atob(textarea.value);

    }else{
        result.value= textarea.value
    }
}

