import ErrorMessage from '../components/ErrorMessage';

export default function NotFound() {
    return (
        <>
            <ErrorMessage
                pageTitle="Page Not Found"
                contentTitle="404 😅"
                content="Error 404 - Page Not Found!"
            />
        </>
    );
}
