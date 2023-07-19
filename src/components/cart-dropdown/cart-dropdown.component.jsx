import Button from "../button/button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItem,
} from "./cart-dropdown.styles";
import CartItems from "../cart-items/cart-items.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItem>
        {cartCount > 0 ? (
          cartItems.map((item) => {
            return <CartItems key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItem>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
