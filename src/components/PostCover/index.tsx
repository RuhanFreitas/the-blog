import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type PostCoverProps = {
    imageProps: React.ComponentProps<typeof Image>;
    linkProps: React.ComponentProps<typeof Link>;
};

export function PostCover({ imageProps, linkProps }: PostCoverProps) {
    return (
        <Link
            {...linkProps}
            className={`w-full h-full overflow-hidden rounded-xl ${linkProps.className}`}
            href="#"
        >
            <Image
                {...imageProps}
                className={`group-hover:scale-105 transition w-full h-full object-cover object-center ${imageProps.className}`}
            />
        </Link>
    );
}
