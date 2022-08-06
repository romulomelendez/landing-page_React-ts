import { Card } from './styles'

type CardProps = {

   
    url: string

}

export const Cards: React.FC = (props: CardProps) => {

    return (

        <Card>{ props.url }</Card>

    )

}