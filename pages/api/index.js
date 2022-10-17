// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export async function getActions() {
    var res = await fetch('https://cdn.mallconomy.com/testcase/actions.json')
    const data = await res.json()

    return data;
}