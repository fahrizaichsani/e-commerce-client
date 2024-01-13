export default function Pagination({ setPage, page }) {
  return (
    <div className="join flex justify-center font-mono text-[11px]">
      <button
        className="join-item btn btn-outline"
        onClick={() => {
          if (page > 0) {
            setPage(page - 1);
          }
        }}
      >
        Previous page
      </button>
      <button className="join-item btn btn-outline" onClick={() => { setPage(page + 1)}}
      >
        Next
      </button>{" "}
      {/* ngirim ke homepage */}
    </div>
  );
}
