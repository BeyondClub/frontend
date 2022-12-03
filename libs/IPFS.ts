const fetchIPFS = async (hash) => {
    const result = await fetch(`https://w3s.link/ipfs/${hash}`)


    return result;
}

export default fetchIPFS
