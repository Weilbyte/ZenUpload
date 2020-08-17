export const sites = {
    minecraft: "https://help.minecraft.net/",
    fcc: "https://consumercomplaints.fcc.gov/",
    pornhub: "https://help.pornhub.com/",
    zoom: "https://support.zoom.us/",
    wa: "https://www.studentcomplaints.wa.gov/",
    discord: "https://hammerandchisel.zendesk.com/",
    grindr: "https://help.grindr.com/",
    "2k": "https://support.2k.com/",
    roblox: "https://en.help.roblox.com/",
    gaijin: "https://support.gaijin.net/",
    tn: "https://revenue.support.tn.gov/",
    blockchain: "https://support.blockchain.com/",
    "23andme": "https://customercare.23andme.com/",
    rsi: "https://support.robertsspaceindustries.com/",
    wattpad: "https://support.wattpad.com/",
    duolingo: "https://support.duolingo.com/",
    pubg: "https://support.pubg.com/",
    nytimes: "https://help.nytimes.com/",
    kahoot: "https://support.kahoot.com/",
    virustotal: "https://support.virustotal.com/",
    crunchyroll: "https://help.crunchyroll.com/",
};

export function getSite(site) {
    if (site in sites) {
      return sites[site];
    } else {
        let keys = Object.keys(sites);
        return sites[keys[(keys.length * Math.random()) << 0]];
    }
};