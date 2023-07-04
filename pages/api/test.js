export default function handler(res, req){
    console.log(123)
    return req.status(200).json('완료')
}