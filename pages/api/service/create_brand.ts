import prisma from "libs/prisma"

export default async function handler(req, res) {
    const {
        brand_name,
        profile,
        cover,
        address
    } = req.body

    const recrod = await prisma.brands.create({
        data: {
            name: brand_name,
            profile,
            cover,
            address
        }
    })


    return res.status(200).json({ status: "success" })
}
