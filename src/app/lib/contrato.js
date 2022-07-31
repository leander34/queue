import contratoConfig from '../../config/mail'
import nodemail from 'nodemailer'

// não funciona
// apenas demonstração de outro tipo de envio de email
// cria um novo nodemail com outrar configurações
export default nodemail.createTransport(contratoConfig)