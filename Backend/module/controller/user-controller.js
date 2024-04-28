export const login = (req, res)=>{
   res.send('login successful')
 
}
export const register = (req , res)=>{
    const data = req.body;
    data['message '] = 'register successfully'
    console.log('req', req.body)
   res.send(data)

}