import Link from "next/link";

export default function SearchPage({ searchParams }) {
  const query = searchParams?.query || "";

  const products = [
    { name: "Bracelet", path: "collections/bracelet" },
    { name: "Bangles", path: "collections/bangles" },
    { name: "Ring", path: "collections/ring" },
    { name: "Earring", path: "collections/earring" },
    { name: "Pendants", path: "collections/pendants" },
    { name: "Anklet", path: "collections/anklet" },
    { name: "Sets", path: "collections/sets" },
    { name: "Mangalsutra", path: "collections/mangalsutra" }
  ];

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for "{query}"</h2>

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        filtered.map((item, i) => (
          <Link key={i} href={`/home/store/${item.path}`}>
            <div style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              cursor: "pointer"
            }}>
              {item.name}
            </div>
          </Link>
        ))
      )}
    </div>
  );
}