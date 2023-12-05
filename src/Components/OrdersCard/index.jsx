export const OrdersCard = ({ dateTime, products, totalPrice }) => {
  return (
    <div className='flex flex-col items-center rounded-md  border px-1'>

      <p className='text-lg font-semiboldt'>{dateTime}</p>

      <ul>
        {Object.values(products).map((item) => (
          <li key={item?.id + dateTime} className="border-b py-2">
            <div className="flex items-center gap-4">
              <img
                src={item?.image}
                alt={item?.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold text-md">{item?.title}</p>
                <p >Quantity: {item?.quantity}</p>
                <p >Price: {item?.totalQuantityPrice}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: {totalPrice}</p>
    </div>
  );
};
