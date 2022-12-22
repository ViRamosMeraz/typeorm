interface data
{
    BD_AFORECOPPELCOM_DATABASE_NAME: string,
    BD_TYPE_POSTGRES: string,
    BD_AFORECOPPELCOM_HOST: string,
    BD_POSTGRES_PORT: number,
    BD_AFORECOPPELCOM_USERNAME: string,
    BD_AFORECOPPELCOM_PASSWORD: string,
    APP_AFCPLOLVIDECONTRASENIA_ROUTE_PREFIX: string,
    APP_IP: string,
    APP_AFCPLOLVIDECONTRASENIA_PORT: number,
    APP_MICROSERVICES_CERTIFICATE: string,
    APP_MICROSERVICES_KEY: string,
    APP_MICROSERVICES_CA_BUNDLE_TRUST: string,
    APP_MICROSERVICES_CA_BUNDLE: string
}

const structure: data = {...require('/sysx/progs/web/conf/config.json')};

export default structure;