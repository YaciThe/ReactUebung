
// funktionen groß schreiben 
// <> parent element, davon kann und muss es nur eins geben, danach sind beliebig viele divs möglich
export function Title({title}) {
    return (
        <>      
            <h1>{title}</h1>
        </>
    )
}
/* comment 2 */
//andere schreibweise macht aber das gleiche, lieber das oben nehmen
export const Title2 = ({title}) => {
    return (<div></div>);
}

function Title3() {

}