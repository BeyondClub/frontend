import { deployNFTContract } from "libs/NFTPort";

export default function handler(req, res) {
    const {
        name,
        symbol,
        owner_address,
        metadata_updatable } = res.query


    const tx_hash = deployNFTContract({
        chain: 'polygon',
        name,
        symbol,
        owner_address,
        metadata_updatable
    })

    return res.status(200).json({ status: "success" })
}
