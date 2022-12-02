export const PRIVATE_API_KEY = process.env.NFTPORT_API

const deployNFTContract = ({
    chain,
    name,
    symbol,
    owner_address,
    metadata_updatable
}) => {
    fetch('https://api.nftport.xyz/v0/contracts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: PRIVATE_API_KEY,
        },
        body: JSON.stringify({
            chain,
            name,
            symbol,
            owner_address,
            metadata_updatable,
        }),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

const deployNFTMetadata = ({
    chain,
    name,
    symbol,
    owner_address,
    metadata_updatable
}) => {
    fetch('https://api.nftport.xyz/v0/contracts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: PRIVATE_API_KEY,
        },
        body: JSON.stringify({
            chain,
            name,
            symbol,
            owner_address,
            metadata_updatable,
        }),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

const mintNFT = ({
    chain,
    name,
    symbol,
    owner_address,
    metadata_updatable
}) => {
    fetch('https://api.nftport.xyz/v0/contracts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: PRIVATE_API_KEY,
        },
        body: JSON.stringify({
            chain,
            name,
            symbol,
            owner_address,
            metadata_updatable,
        }),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}


export {
    mintNFT,
    deployNFTMetadata,
    deployNFTContract
};
