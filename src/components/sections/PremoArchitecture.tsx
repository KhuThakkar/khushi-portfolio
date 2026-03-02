"use client";

import {
  Users,
  LayoutDashboard,
  Layers,
  Plug,
  Database,
  Bell,
  ChevronDown,
} from "lucide-react";

const layerStyle =
  "rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-4 sm:p-5";

const arrowStyle =
  "flex items-center justify-center text-white/30 py-1 lg:py-2";

function Arrow() {
  return (
    <div className={arrowStyle} aria-hidden>
      <ChevronDown className="h-5 w-5 lg:hidden" />
      <span className="hidden lg:block w-px h-4 bg-white/25 rounded-full" />
    </div>
  );
}

const layers = [
  {
    id: "users",
    label: "Layer 1: Users",
    icon: Users,
    items: ["Store Operators", "Store Managers", "Owners / Executives"],
  },
  {
    id: "frontend",
    label: "Layer 2: Frontend ERP Dashboard (Next.js/React)",
    icon: LayoutDashboard,
    items: [
      "Role-based dashboards",
      "Shift-level filtering",
      "Drill-down views",
      "Discrepancy alerts",
    ],
  },
  {
    id: "logic",
    label: "Layer 3: Application Logic",
    icon: Layers,
    items: [
      "API Abstraction Layer (normalizes schemas)",
      "Workflow Engine (shift/store/time aggregation)",
      "Reconciliation Engine (POS vs deposits, tips, labor %, inventory variance)",
    ],
  },
  {
    id: "integrations",
    label: "Layer 4: External Integrations",
    icon: Plug,
    items: [
      "POS API",
      "Payment Processor API",
      "Inventory Compliance (METRC)",
      "Accounting Software",
      "Payroll System",
      "Delivery Platform",
    ],
  },
  {
    id: "data",
    label: "Layer 5: Data Layer (Normalized Models)",
    icon: Database,
    items: [
      "Unified transactions",
      "Shift summaries",
      "Store metrics",
      "Discrepancy logs",
    ],
  },
  {
    id: "outputs",
    label: "Layer 6: Outputs",
    icon: Bell,
    items: [
      "Analytics dashboard",
      "Operational alerts",
      "Trend reports",
      "Executive summaries",
    ],
  },
];

function LayerCard({
  label,
  icon: Icon,
  items,
  className = "",
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  className?: string;
}) {
  return (
    <div className={`${layerStyle} ${className}`}>
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
        <Icon className="h-3.5 w-3.5" aria-hidden />
        {label}
      </p>
      <ul className="mt-3 space-y-1.5 text-sm text-white/90">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-white/40">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PremoArchitecture() {
  const mainFlowLayers = [
    layers[0],
    layers[1],
    layers[2],
    layers[4],
    layers[5],
  ];
  const integrationsLayer = layers[3];

  return (
    <section
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6 lg:p-7"
      aria-labelledby="premo-architecture-heading"
    >
      <h2
        id="premo-architecture-heading"
        className="text-lg font-semibold tracking-tight text-white mb-6"
      >
        System Architecture
      </h2>

      {/* Mobile: single column, all 6 layers in order */}
      <div className="flex flex-col lg:hidden">
        {layers.map((layer, i) => (
          <div key={layer.id}>
            <LayerCard
              label={layer.label}
              icon={layer.icon}
              items={layer.items}
            />
            {i < layers.length - 1 && <Arrow />}
          </div>
        ))}
      </div>

      {/* Desktop: left = flow 1,2,3,5,6; right = Layer 4 (External Integrations) */}
      <div className="hidden lg:grid lg:grid-cols-[1fr,minmax(260px,300px)] lg:gap-8 lg:items-start">
        <div className="flex flex-col">
          {mainFlowLayers.map((layer, i) => (
            <div key={layer.id} className="flex flex-col">
              <LayerCard
                label={layer.label}
                icon={layer.icon}
                items={layer.items}
              />
              {i < mainFlowLayers.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
        <div className="lg:sticky lg:top-24">
          <LayerCard
            label={integrationsLayer.label}
            icon={integrationsLayer.icon}
            items={integrationsLayer.items}
          />
        </div>
      </div>
    </section>
  );
}
