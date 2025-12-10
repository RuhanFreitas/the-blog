'use client';

import ErrorMessage from '@/src/components/ErrorMessage';

export default function Error() {
    return (
        <>
            <ErrorMessage
                pageTitle="Internal Server Error"
                contentTitle="501 🔧"
                content="Some error occured. Try again later."
            />
        </>
    );
}
