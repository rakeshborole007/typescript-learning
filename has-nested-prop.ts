function has(obj: any, key: string) {
    return key.split(".").every(function (x) {
        if (typeof obj != "object" || obj === null || !(x in obj))
            return false;
        obj = obj[x];
        return true;
    });
}
let user: any = {};

user.loc = {
    lat: "",
    long: 9
};

if (has(user, 'loc.lat')){
    console.log(`has loc.lat property`);
}
