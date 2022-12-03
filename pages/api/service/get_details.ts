import prisma from "libs/prisma"

export default async function handler(req, res) {
    const {
        address
    } = req.query

    const result = await prisma.brands.findFirst({
        where: {
            address: address
        }
    })


    return res.status(200).json({ record: result })
}
