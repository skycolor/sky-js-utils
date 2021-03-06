// 邮箱校验
const validateMail = mail => {
    const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    return reg.test(mail)
}

// 手机号校验
const validatePhone = phone => {
    const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    return reg.test(phone)
}

// url规范校验
const validateUrl = url => {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
}

// 字母校验
const validateChar = chars => {
    const reg = /^[A-Za-z]+$/
    return reg.test(chars)
}

// 图片文件格式校验
const validateImgFile = fileName => {
    const reg = /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig
    return reg.test(fileName)
}

// 视频文件格式校验
const validateMediaFile = fileName => {
    const reg = /(mp4|mp3|flv|wav)$/ig
    return reg.test(fileName)
}

export default {
    validateMail , 
    validatePhone ,
    validateUrl ,
    validateChar ,
    validateImgFile ,
    validateMediaFile
} 