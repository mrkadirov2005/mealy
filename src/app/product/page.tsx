import { getSingeMeal } from "@/settings/selectors";
import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button"
import { List, ListItemButton, ListItemText,Card,ListItem} from "@mui/material";

interface PROPS {
	setToMain: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductPage({ setToMain }: PROPS) {
	const Meal = useSelector(getSingeMeal);
	return (
		<div className={"w-screen"}>
        <Card className="w-screen">
			<Button variant="contained" onClick={() => setToMain(false)}>back to products</Button>
			{Meal?<div>
            <div>  <h3>{Meal.id}</h3>  <h1>{Meal.name}</h1></div>
            <img src={Meal.image} alt={`Image of ${Meal.name}`} />
            <List className="data">
                <ListItemButton component="a" href="#simple-list"><ListItemText primary={"Type: "+Meal.type} /></ListItemButton>
                <ListItemButton component="a" href="#simple-list"><ListItemText primary={"Country: "+Meal.country} /></ListItemButton>
                <ListItemButton component="a" href="#simple-list"><ListItemText primary={"Producer: "+Meal.producer} /></ListItemButton>

            </List>
            <h3>Ingredients</h3>
            <ul>{Meal.ingredients.map(item=><li>{item}</li>)}</ul>
            <div>
                <h3>bought:{Meal.count}</h3>
                <h3>price:{Meal.price}</h3>
            </div>
            </div>:""}
        </Card>
		</div>
	);
}
