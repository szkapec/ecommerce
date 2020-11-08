import styled from 'styled-components';


export const StyledContener = styled.div`
background-color: white;
min-height: 100vh;
max-width: 1240px;
margin: 0 auto;
.title {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 5px;
    text-align: center;
    padding-top: 20px;
    padding-right: 0;
}

.img {
    width: 80%;
    display:block;
    margin: auto;
    margin: 20px auto;
    max-width: 300px;
}
.img2{
    width: 0px;
    height: 0px;
}
.button-container {
    display: flex;
    justify-content: center;
    font-size: 16px;
    flex-wrap: wrap;
    
    button {
        margin: 10px 3px;
    }
}
.cash {
    margin-left: 10%;
}
.description, .shipment, .shipment-cash, .specyfication, .model {
    margin: 20px 10%;

}

@media(min-width: 600px) {
    .description, .shipment, .shipment-cash, .specyfication, .model {
    line-height: 28px;
}
.img {
    width: 70%;
    margin: 20px auto;
}
.cash {
    font-size: 20px;
}
.title {
    font-size: 30px;
}
.button-container {
    font-size: 16px;
}
}

@media(min-width:800px) {
    display: grid;
    grid-template-columns: 300px 1fr;

    grid-column-gap: 0px;
    grid-row-gap: 0px;
    .title {
     width: 100%;

    }
    .img {
    grid-area: 1 / 1 / 4 / 2;
    width: 400px;
    height: 300px;
    margin: 100px 50px 30px 30px;
}
.img2{
    grid-area: 1 / 1 / 4 / 2;
    width: 400px;
    height: 300px;
    margin: 450px 50px 30px 30px;
}
    .cash {
        margin: 30px 0 0 0;
        height: 40px;
    }
    .description, .shipment, .shipment-cash, .specyfication, .model {
        margin: 10px 0;
}
.shipment-cash {
    margin-bottom: 25px;
}
    .button-container {
        display: flex;
    }
}
@media(min-width:1000px) {
  
    display: grid;
    grid-template-columns: 500px 1fr;
    padding-right: 100px;
    font-size: 18px;

.shipment .shipment-shop{
    font-size: 18px;
}
.specyfication {
    line-height: 30px;
}
.description, .shipment, .shipment-cash, .specyfication, .title, .model {
        margin: 20px 0;
}
}
@media(min-width: 1100px) {
    .button-container {
        font-size: 20px;
    }
}
@media(min-width:1500px) {
  font-size: 20px;

.specyfication {
  font-size: 20px;
}
.shipment .shipment-shop{
    font-size: 20px;
}


.model{ 
    font-size: 22px;
}
}
`