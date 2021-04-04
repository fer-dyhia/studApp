export default function validation(values) {
    let errors = {}

    if (!values.firstname.trim()) {
        errors.firstN = 'Nom required'
    }

    if (!values.lastname) {
        errors.lastN = 'Prénom required'
    }
    if (!values.pseudo) {
        errors.pseudo = 'pseudo required'
    }

    if (!values.email) {
        errors.email = 'email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'email adress is anvalid'
    }

    if (!values.password) {
        errors.password = 'password required'
    } else if (values.password.length < 6) {
        errors.password = 'mot de passe besoin de 6 caracteres ou plus'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'password required'
    } else if (values.confirmPassword !== values.password) {
        errors.password = 'mot de passe pas compatible '
    }

    return errors
}
