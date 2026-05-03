
export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Payment Successful!</h1>
        <p className="text-gray-700 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
        <a href="/" className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Continue Shopping</a>
      </div>
    </div>
  );
}