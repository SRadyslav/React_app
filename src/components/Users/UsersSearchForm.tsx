import React from "react";
import { Field, Form, Formik } from "formik";
import { FilterType } from "../../redux/users-reducer";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/users-selectors";


type FriendFormType = "true" | "false" | "null";

type FormType = {
    term: string
    friend: FriendFormType
} 
export const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}
type PropsType = {
    onFilterChanged: (filter: FilterType)=> void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    
    const filter = useSelector(getFilter)

    const onSubmit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false);
    }


    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType }}
                validate={usersSearchFormValidate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" placeholder="Find by name" />
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>Find</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
})
