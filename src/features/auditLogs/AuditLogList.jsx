import { useSelector } from "react-redux";

const AuditLogList = () => {
  const logs = useSelector((state) => state.auditLogs.list);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>

      <ul className="space-y-2 text-sm">
        {logs.map((log, i) => (
          <li key={i} className="p-3 bg-gray-100 rounded">
            {log.action} — {log.user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLogList;
