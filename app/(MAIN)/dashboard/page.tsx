import TopBar from "@/components/dashboard/TopBar";
import InfoBar from "@/components/dashboard/InfoBar";
import SeverityCards from "@/components/dashboard/SeverityCards";
import ScanTable from "@/components/dashboard/ScanTable";

export const metadata = {
  title: "Dashboard — aps",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <TopBar />
      <div className="flex-1 space-y-5 overflow-y-auto p-5 lg:p-6">
        <InfoBar />
        <SeverityCards />
        <ScanTable />
      </div>
    </div>
  );
}
