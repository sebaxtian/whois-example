const domain = require("domain-info");
const whois = require("whois-promise");

// Whois Example
(async domainName => {
  try {
    // Get Domain Info
    const domainInfo = await domain.groper(domainName);
    // console.log('domainInfo: ', domainInfo);

    // Get IP Addresses for domainInfo
    const ipAdressesV4 = domainInfo.A;
    const ipAdressesV6 = domainInfo.AAAA;
    // console.log('ipAdressesV4: ', ipAdressesV4);
    // console.log('ipAdressesV6: ', ipAdressesV6);

    // Get IP Adresses Whois Info
    const getWhoisInfoIP = async ipAdress => {
      let ipInfo = [];
      for (let i = 0; i < ipAdress.length; i++) {
        const whoisInfo = await whois.json(ipAdress[i].address);
        // console.log('whoisInfo: ', whoisInfo);
        ipInfo.push({
          address: ipAdress[i].address,
          whois: JSON.parse(JSON.stringify(whoisInfo))
        });
      }
      return ipInfo;
    };

    // Get IP V4 Whois Info
    const ipV4 = await getWhoisInfoIP(ipAdressesV4);
    // Get IP V6 Whois Info
    const ipV6 = await getWhoisInfoIP(ipAdressesV6);

    // Whois Example Object Response
    // const whoisExample = {
    //   domainName: '',
    //   ipV4: [
    //     {
    //       address: 'ipV4',
    //       whois: {
    //         // <whoisInfo>
    //       }
    //     },
    //     // ...
    //   ],
    //   ipV6: [
    //     {
    //       address: 'ipV6',
    //       whois: {
    //         // <whoisInfo>
    //       }
    //     },
    //     // ...
    //   ]
    // };

    // Whois Example Object Response
    const whoisExample = {
      domainName: domainName,
      ipV4: ipV4,
      ipV6: ipV6
    };

    // Whois Example Info
    console.log(whoisExample);

    // Get Info
    console.log("Domain: ", whoisExample.domainName);
    console.log("IP V4: ", whoisExample.ipV4[0].address);
    console.log("Whois Info: ", whoisExample.ipV4[0].whois);
    console.log("IP V6: ", whoisExample.ipV6[0].address);
    console.log("Whois Info: ", whoisExample.ipV6[0].whois);
  } catch (err) {
    console.log("Whois Example Error: ", err);
  }
})("google.co");
