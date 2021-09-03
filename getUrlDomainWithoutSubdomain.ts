const getDomainWithoutSubdomain = (url: string) => {
    try {
        const urlObj = new URL(url);
        const urlParts = urlObj.hostname.split('.');
        return getDomainWithoutSubdomainByUrlParts(urlParts);
    } catch (e) {
       // console.log(`${url} is not valid url`);
        const urlParts = url.split('.');
        try {
           return getDomainWithoutSubdomainByUrlParts(urlParts);
        } catch (e) {
            //console.log(`${url} is not valid domain/sub-domain`);
            return '';
        }
    }
}

const getDomainWithoutSubdomainByUrlParts = (urlParts: string[]) => urlParts
            .slice(0)
            .slice(-(urlParts.length === 4 ? 3 : 2))
            .join('.');
            
////////////////////////////// Testing //////////////////////////////

const urls = [
    'https://www.google.com',
    'https://www.google.co.uk',
    'https://mail.google.com',
    'https://www.bbc.co.uk/news',
    'https://github.com',
    'avsys.com',
    'www.iceman.com',
];

urls.forEach(url => {
    console.log(`${url}=> ${getDomainWithoutSubdomain(url)}`);
});
