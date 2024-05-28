import { getSingeMeal } from "@/settings/selectors";
import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { List, ListItemButton, ListItemText, Card } from "@mui/material";
import "./styles.css";

interface PROPS {
	setToMain: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductPage({ setToMain }: PROPS) {
	const Meal = useSelector(getSingeMeal);
	return (
		<div className="product_Container w-screen bg-gray-100">
            <Button variant="contained" onClick={() => setToMain(false)} className="mb-4 w-1/12">
					⬅️
				</Button>
			<Card className="card_container w-4/5 flex flex-col mr-auto ml-auto">
				
				{Meal ? (
					<div>
						<div className="mb-4 mt-2 p-2 flex flex-row justify-between w-4/12 hover:bg-gray-300">
							<h3 className=" font-semibold text-2xl decoration-black">{Meal.id}</h3>
							<h1 className="text-3xl font-bold underline">{Meal.name}</h1>
						</div>
						<div className="image_container  flex justify-around">
							<img src={Meal.image} alt={`Image of ${Meal.name}`} className="mb-4 w-5/12 rounded-lg" />
							<div className="data_container flex -7/12 flex-col">
								<List className="mb-4 flex">
									<ListItemButton component="a" href="#simple-list">
										<ListItemText primary={"Type: " + Meal.type} />
									</ListItemButton>
									<ListItemButton component="a" href="#simple-list">
										<ListItemText primary={"Country: " + Meal.country} />
									</ListItemButton>
									<ListItemButton component="a" href="#simple-list">
										<ListItemText primary={"Producer: " + Meal.producer} />
									</ListItemButton>
								</List>
								<ul className="mb-4">
									<h3 className="mb-2 text-lg font-semibold">Ingredients</h3>
									{Meal.ingredients.map((item:String, index:number) => (
										<li key={index} className="list-disc ml-6 flex hover:bg-gray-500">
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="flex flex-row w-1/2 justify-between p-2">
							<h3 className="text-lg font-semibold">Bought: {Meal.count}</h3>
							<h3 className="text-lg font-semibold">Price: {Meal.price}</h3>
                            <Button variant="contained"> order</Button>
						</div>
					</div>
				) : null}
			</Card>
		</div>
	);
}
