const search = document.getElementById("search");
const results = document.getElementById("results");
const button = document.getElementById("btn");

let zimbabwe = `access.econet.co.zw
adservice.econet.co.zw
apiresponder-hr1.econet.co.zw
applications.econet.co.zw
auth-hr1.econet.co.zw
autinmobi.econet.co.zw
autodiscover.econet.co.zw
av.econet.co.zw
b2b.econet.co.zw
b2bpayments.econet.co.zw
booking.econet.co.zw
buddiebeatz.econet.co.zw
bude.econet.co.zw
bulksms.econet.co.zw
callstatus.econet.co.zw
ceshhar.econet.co.zw
chatbot.econet.co.zw
customerfeedback.econet.co.zw
developer.econet.co.zw
devops.econet.co.zw
dialin.econet.co.zw
dsa.econet.co.zw
ecocash.econet.co.zw
ecocashapp.econet.co.zw
ecocloud.econet.co.zw
econetm2m.econet.co.zw
econetplatinum.econet.co.zw
ecosure.econet.co.zw
ecosureapp.econet.co.zw
ecosureauto.econet.co.zw
ecosuregroups.econet.co.zw
ecosuregroupsapi.econet.co.zw
ecosuresalesapp.econet.co.zw
epg.econet.co.zw
erecharge.econet.co.zw
ess.econet.co.zw
ewzexpresse.econet.co.zw
facilities.econet.co.zw
feedback.econet.co.zw
fleet360.econet.co.zw
gaiatest.econet.co.zw
healthcode.econet.co.zw
incmanagement.econet.co.zw
innovations.econet.co.zw
interview.econet.co.zw
istechs.econet.co.zw
kavha.econet.co.zw
kioskfiscal.econet.co.zw
kyc.econet.co.zw
loyaltymobi.econet.co.zw
lungisa.econet.co.zw
mail.econet.co.zw
mfi.econet.co.zw
mobileintelligence.econet.co.zw
mobilemessaging.econet.co.zw
mule.apps.econet.co.zw
mycheckapp.econet.co.zw
ine.econet.co.zw
portal-hr1.econet.co.zw
queuemanagement.econet.co.zw
recruitment.econet.co.zw
reporting.cent-cent.econet.co.zw
sage300ess.econet.co.zw
salesassist.econet.co.zw
sandbox.b2bpayments.econet.co.zw
scratchandwin.econet.co.zw
sdp.api.econet.co.zw
sdp.web.econet.co.zw
selfcare.econet.co.zw
servicedesk.econet.co.zw
smsapi.econet.co.zw
smsbot.econet.co.zw
smssandbox.econet.co.zw
speedtest.econet.co.zw
support.econet.co.zw
test-autinmobi.econet.co.zw
testwebrtc.econet.co.zw
thumbs-hr1.econet.co.zw
ussd.econet.co.zw
vansales.econet.co.zw
webbridge.econet.co.zw
webconf.econet.co.zw
wellness.econet.co.zw
wona.econet.co.zw
www.econet.co.zw
www.mykidzhub.econet.co.zw
www.nofundspage.econet.co.zw
www.smartdealer.econet.co.zw
www.subscriber.econet.co.zw
www.winners.econet.co.zw
xmpp.econet.co.zw
yofootballpro.econet.co.zw
yogamezbox.econet.co.zw
yogamezhub.econet.co.zw
yogamezhunt.econet.co.zw
yogamezpro.econet.co.zw
yonumbers.econet.co.zw`;

let not = "not uploaded yet";

button.addEventListener("click", function() {
    let value = search.value.trim().toLowerCase();

    if (value === "zim") {
        results.innerHTML = zimbabwe.replace(/\n/g, "<br>");
    } else {
        results.innerHTML = not;
    }
});
