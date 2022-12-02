
export const isEmpty = (n: any) => {
    if (n == null) return true;

    return !(!!n
        ? typeof n === 'object'
            ? Array.isArray(n)
                ? !!n.length
                : !!Object.keys(n).length
            : true
        : false);
};


export function shortenAddress(address, chars = 4) {
    if (!address) {
        return null;
    }
    const parsed = (address)
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(address.length - chars)}`
}

export const formatNumber = (number) => {
    if (number == '0.0') return 0;
    return number;
};
