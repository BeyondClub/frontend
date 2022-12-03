import prisma from "libs/prisma"

export default async function handler(req, res) {
    const {
        name
    } = req.query

    const result = await prisma.brands.findFirst({
        where: {
            name: name
        }
    })


    return res.status(200).json({ record: result })
}
