export default function parseToTwoDimensionalArray<T>(data: Array<T>, length: number) {
    const res: Array<Array<T>> = []
    let tmp: Array<T> = []
    for(let i = 0; i < data.length; i++) {
      if(i !== 0 && i % length === 0) {
        res.push(tmp)
        tmp = []
      }
      tmp.push(data[i])
    }
    if(tmp.length > 0) res.push(tmp)

    return res;
}
