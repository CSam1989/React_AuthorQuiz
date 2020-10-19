import * as Yup from 'yup';
export const CreateAuthorSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    imageUrl: Yup.string().url('Give Url').required('Required'),
    books: Yup.array()
        .of(
            Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required')
        )
        .required('Required'),
});