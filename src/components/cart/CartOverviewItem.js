import Link from 'next/link'

export const CartOverviewItem = ({ toggleDropdown, item }) => {
  return (
    <div className="navbar-cart-product mt-3">
      <div className="d-flex align-items-center">
        <a onClick={() => toggleDropdown()}>
          <img
            className="img-fluid navbar-cart-product-image"
            src={item.img}
            alt="..."
            width="125rem"
          />
        </a>

        <div className="w-100">
          <Link className="navbar-cart-product-close" href="#" />
          <div className="ps-3">
            <a
              className="navbar-cart-product-link"
              onClick={() => toggleDropdown()}
            >
              {item.name}
            </a>

            <small className="d-block text-muted">Quantity: {item.items}</small>
            <strong className="d-block text-sm">
              ${item.total.toFixed(2)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}
