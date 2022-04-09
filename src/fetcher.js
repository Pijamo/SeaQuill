import config from './config.json'

const testRoute = async () => {
    var res = await fetch(`http://${config.server_host}/test`, {
        method: 'GET',
    })
    return res.json()
}

export default testRoute