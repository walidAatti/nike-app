import { useState } from "react"

const Sorting = ({sneakers, setSneakers, originalSneakers, setIsPriceSorted}) => {

    const [value, setValue] = useState("default");

    const handleChange = (e) => {
        const selected = e.target.value;
        setValue(selected);

        // Sneakers Copy
        let sortedSneakers = [...sneakers];

        switch (selected) {
            case "low_high":
                sortedSneakers.sort((a,b) => a.avg_price - b.avg_price);
                console.log(sortedSneakers.map(s => s.avg_price))
                break;
        
            case "high_low":
                sortedSneakers.sort((a,b) => b.avg_price - a.avg_price);
                break;

            case "order_high_low":
                sortedSneakers.sort((a,b) => b.weekly_orders - a.weekly_orders);
                // setIsPriceSorted(true)
                break;

            case "order_low_high":
                sortedSneakers.sort((a,b) => a.weekly_orders - b.weekly_orders);
                // setIsPriceSorted(true)
                break;

            case "default":
                sortedSneakers = [...originalSneakers];
                break;
        
            default:
                break;
        }

        if (selected == "order_high_low" || selected == "order_low_high") {
            setIsPriceSorted(true)
        } else {
            setIsPriceSorted(false)
        }

        setSneakers(sortedSneakers)
    }

    return (
        <div 
            className=" bg-gray-200 text-gray-700 p-2 max-sm:p-1 text-sm rounded-full max-md:rounded-lg hover:bg-gray-300 transition"
            
        >
            <select 
                name="sort" 
                id="sort" 
                onChange={handleChange}
                value={value}
                className="outline-0 cursor-pointer"
                
                >
                <option value="default">Sort: default</option>
                <option value="low_high">Price: Low to High</option>
                <option value="high_low">Price: High to Low</option>
                <option value="order_high_low">Weekly Orders: High to Low</option>
                <option value="order_low_high">Weekly Orders: Low to High</option>
            </select>
        </div>
    )
}

export default Sorting