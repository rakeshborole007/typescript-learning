interface IProfile {
    cityState?: string;
    country?: string;
}

class Profile implements IProfile {
    cityState?: string;
    country?: string;
    constructor(data: IProfile) { Object.assign(this, data) }
}

interface IProfilePublicInfo {
    country?: string;
}

class ProfilePublicInfo implements IProfilePublicInfo {
    country?: string;
    constructor(data: IProfilePublicInfo) { 
        this.country=data.country;
    }
}

let profile: Profile = new Profile({
    cityState: "Faizpur", country: "India"
})

console.log(`ProfilePublicInfo: ${JSON.stringify(new ProfilePublicInfo(profile))}`);
console.log(`Profile: ${JSON.stringify(profile as ProfilePublicInfo)}`);
