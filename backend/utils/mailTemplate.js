export default function getMailHtml(username, email, message) {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t24,.t29{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t25{padding:40px!important;border-radius:0!important}.t15{text-align:left!important}.t14{vertical-align:top!important;width:auto!important;max-width:100%!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&amp;family=Open+Sans:wght@400;600&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t32" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t31" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t30" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t24" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t27" style="width:600px;">
<table class="t26" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t25" style="border:1px solid #EBEBEB;overflow:hidden;background-color:#FFFFFF;padding:44px 42px 32px 42px;border-radius:3px 3px 3px 3px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t3" style="width:600px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="border-bottom:1px solid #EFF1F4;padding:0 0 18px 0;"><h1 class="t0" style="margin:0;Margin:0;font-family:Montserrat,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">${email}</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t9" style="width:600px;">
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t7"><p class="t6" style="margin:0;Margin:0;font-family:Open Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;letter-spacing:-0.1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${message}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t19" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="514" class="t22" style="width:600px;">
<table class="t21" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t20" style="border-top:1px solid #DFE1E4;padding:24px 0 0 0;"><div class="t18" style="width:100%;text-align:left;"><div class="t17" style="display:inline-block;"><table class="t16" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t15"><td></td><td class="t14" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t13" style="width:auto;"><tr><td class="t12" style="background-color:#FFFFFF;text-align:center;line-height:20px;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t11" style="display:block;margin:0;Margin:0;font-family:Open Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:600;font-style:normal;font-size:14px;text-decoration:none;direction:ltr;color:#222222;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">${username}</span></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t29" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`;
}
