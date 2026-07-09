import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

const iconMap = {
  Housing: <Icon.House size={28} />, 
  Food: <Icon.Food size={28} />,
  Transportation: <Icon.Transport size={28} />,
  Entertainment: <Icon.Gamepad size={28} />,
  Shopping: <Icon.Shopping size={28} />,
  Others: <Icon.Other size={28} />,
};

function CardExpense({ data }) {
  const title = data.category || data.title || data.name || "Expense";
  const amount = data.amount || data.total || data.value || data.expense || 0;
  const percentage = data.percentage ?? data.change ?? null;
  const details =
    data.details || data.items || data.breakdown || data.transactions || [];

  const renderDetailItem = (detail, idx) => {
    const label = detail.label || detail.name || detail.title || detail.category || detail.item || detail.description || "-";
    const value = detail.amount || detail.total || detail.value || detail.price || "";

    return (
      <div key={idx} className="flex justify-between gap-3 text-sm text-gray-03">
        <span>{label}</span>
        <span className="font-bold text-gray-900">{typeof value === "number" ? `$${value}` : value}</span>
      </div>
    );
  };

  return (
    <Card
      title={title}
      desc={
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-2xl font-bold">${amount}</div>
              {percentage !== null && (
                <div className="text-sm text-gray-03">{percentage}% compared to last month</div>
              )}
            </div>
            <div className="rounded-3xl bg-gray-06 p-3 text-primary">
              {iconMap[title] || <Icon.Expense size={28} />}
            </div>
          </div>

          <div className="rounded-3xl bg-gray-06 p-4 space-y-3">
            {(Array.isArray(details) && details.length > 0
              ? details.slice(0, 3)
              : Object.keys(details || {}).length > 0
              ? Object.entries(details).slice(0, 3).map(([key, value]) => ({ label: key, amount: value }))
              : [])
              .map(renderDetailItem)}

            {(!Array.isArray(details) || details.length === 0) && (
              <div className="text-sm text-gray-03">No detail breakdown available.</div>
            )}
          </div>
        </div>
      }
    />
  );
}

export default CardExpense;
