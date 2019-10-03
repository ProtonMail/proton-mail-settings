import * as React from 'react';

interface Props {
    children: React.ReactNode;
}

const Title = ({ children }: Props) => {
    return <h1 className="sticky-title sticky-title--onTop">{children}</h1>;
};

export default Title;
