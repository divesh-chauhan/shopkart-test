const OrderCom = () => {
    return(
        <>
            <h1>🎉Order placed successfully✅</h1>
 
            <p>Thanks for shopping with ShopKart!</p>
            <p>Your order ID : {crypto.randomUUID()}</p>

            <p>we've sent a confirmation to your email</p>
            <p>your order will be delivered in <span>3-4</span>days.</p>
        </>
    )
}



export default OrderCom