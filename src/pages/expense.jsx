import { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { expenseService } from "../services/dataService";
import CardExpense from "../components/Fragments/CardExpense";
import CircularProgress from "@mui/material/CircularProgress";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const result = await expenseService();
        const list = Array.isArray(result)
          ? result
          : result?.data || result?.expenses || [];
        setExpenses(list);
      } catch (err) {
        setError(err?.msg || err?.message || "Gagal memuat data expenses");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase text-gray-03 tracking-[0.2em]">
              Expenses
            </p>
            <h1 className="text-3xl font-bold">Expenses Comparison</h1>
          </div>
          <div className="text-sm text-gray-03">
            Last Updated: {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>

        {loading ? (
          <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white p-10">
            <div className="flex flex-col items-center gap-3">
              <CircularProgress color="inherit" size={56} />
              <span className="text-gray-03 text-sm">Loading Data</span>
            </div>
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
            {error}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {expenses.length > 0 ? (
              expenses.map((item, index) => (
                <CardExpense key={item.id || item.category || index} data={item} />
              ))
            ) : (
              <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center text-gray-03">
                Tidak ada data expenses untuk ditampilkan.
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Expense;
