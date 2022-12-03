import prisma from "libs/prisma"

export default async function handler(req, res) {
    const {
        cover_image,
        collectible_image,
        collectible_name,
        collectible_symbol,
        campaign_type,
        collectible_price,
        amount_of_collectibles,
        experience,
        target,
        duration,
    } = req.query

    const recrod = await prisma.campaigns.create({
        data: {
            cover_image,
            collectible_image,
            collectible_name,
            collectible_symbol,
            campaign_type,
            collectible_price,
            amount_of_collectibles,
            experience,
            target,
            duration,
        }
    })


    return res.status(200).json({ status: "success" })
}
