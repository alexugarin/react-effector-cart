import Box from "@mui/material/Box";

import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantityInput from "./QuantityInput";

export default function ProductCard({title, description, price, quantity, thumbnail}) {
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="imgProductWrap">
            <img className="imgProduct" src={thumbnail} alt={title}/>
          </div>
          <div className="description">
            <div className="productName">
              {title}
            </div>
            <div className="productCharacter">
              <span>{description}</span>
            </div>
          </div>
        </div>

        <div class="priceProductWrap">
          <div class="counterWrap">
            <div class="price-currency">
              <span class="price">{price}</span>
              <span class="currency"> рублей</span>
            </div>

            <QuantityInput defaultValue={quantity} />

            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Удалить
            </Button>
          </div>
        </div>
      </Box>
    );
  };
  


