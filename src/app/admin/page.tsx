"use client";

export default function AdminDashboard() {
  const mockRequests = [
    {
      id: 1,
      name: "홍길동(부)",
      age: 72,
      status: "pending_qc",
      date: "2026-06-21",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <header className="mb-8 border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-emerald-400">
          👩‍⚕️ 온케어 HITL QC Gate 관리자
        </h1>
        <p className="text-sm text-slate-400">
          의료법 준수를 위해 간호사가 최종 검수 후 출력하는 관문입니다.
        </p>
      </header>

      <div className="bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700">
        <h2 className="text-lg font-semibold mb-4 text-slate-200">
          검수 대기 중인 리포트 큐
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 text-sm">
                <th className="pb-3">대상자</th>
                <th className="pb-3">상태</th>
                <th className="pb-3">요청일</th>
                <th className="pb-3">액션</th>
              </tr>
            </thead>
            <tbody>
              {mockRequests.map((req) => (
                <tr key={req.id} className="border-b border-slate-800 text-sm">
                  <td className="py-4 font-medium">
                    {req.name} ({req.age}세)
                  </td>
                  <td className="py-4">
                    <span className="bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-full text-xs font-semibold">
                      QC 대기중
                    </span>
                  </td>
                  <td className="py-4 text-slate-400">{req.date}</td>
                  <td className="py-4">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">
                      상세 검수 및 승인
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
