'use client'

import React from 'react';
import Link from 'next/link';
import {Card, CardTitle, CardText, Button} from "reactstrap";

const Page = () => (
    <div>
        <Card
            body
            className="my-2"
            style={{
                width: '18rem'
            }}
        >
            <CardTitle tag="h5">
                Special Title Treatment
            </CardTitle>
            <CardText>
                With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button color="primary">
                Go somewhere
            </Button>
        </Card>
    </div>
);

export default Page;