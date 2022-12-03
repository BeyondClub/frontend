import { mintNFT } from "libs/NFTPort";

export default function handler(req, res) {

    const {
        wallet,
        name,
        symbol } = req.query


    const tx_hash = mintNFT({
        chain: 'polygon',
        name: name,
        symbol: symbol,
        owner_address: wallet,
        metadata_updatable: false
    })

    //@ts-ignore
    return res.status(200).json({ tx_hash: tx_hash.transaction_hash })
}
