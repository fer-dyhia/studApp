import { Details } from '@material-ui/icons'

export default function validation2(details) {
    let errors = {}

    if (!details.pseudo) {
        errors.pseudo = 'pseudo required'
    }

    if (!details.email) {
        errors.email = 'email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(details.email)) {
        errors.email = 'email adress is anvalid'
    }

    if (!details.password) {
        errors.password = 'password required'
    } else if (details.password.length < 6) {
        errors.password = 'mot de passe besoin de 6 caracteres ou plus'
    }

    return errors
}
