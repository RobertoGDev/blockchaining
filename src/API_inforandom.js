export default async function getInfoApi() {
    const infoRandom = await fetch('https://api.spacexdata.com/v5/launches')
    return infoRandom.json();
}