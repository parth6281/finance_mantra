import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MemberBrief(props) {
    return (
        <Card onClick={() => { props.onClick({ name: props.name, content: props.content }) }} sx={{ maxWidth: '400px' }}>
            <CardActionArea>
                <CardMedia
                    sx={{ objectFit: 'contain' }}
                    component="img"
                    height="300"
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}