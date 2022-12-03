import prisma from "libs/prisma"

export default async function handler(req, res) {
    const {
        id
    } = req.query

    const result = await prisma.campaigns.findFirst({
        where: {
            id: id
        }
    })


    return res.status(200).json({ record: result })
}
