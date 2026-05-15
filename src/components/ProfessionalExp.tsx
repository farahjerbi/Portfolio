import { motion } from "framer-motion";
import { SiSap } from "react-icons/si";
import { FaChartBar, FaFileCode } from "react-icons/fa";
import Reveal from "./Reveal";

const sapProjects = [
  
  {
  title: "Mass Sales Order Creation via IDoc",
  description:
    "Developed a high-volume sales order creation solution using ORDERS05 IDocs with automated CSV upload, customer/material validation, partner determination, pricing dates, payment terms, and post-processing updates for billing date rules and customer reference dates."
},

{
  title: "Mass Business Partner & FI/SD Customer Creation via BAPI",
  description:
    "Built a mass creation tool for SAP Business Partners using standard BAPIs, including automatic creation of FI and SD customer roles, sales area configuration, company code data, tax numbers, partner functions, payment terms, and Excel-driven bulk onboarding processes."
},
  {
    title: "PMP Evolution Analytics Report",
    description:
      "Developed a dynamic ALV analytical dashboard for PMP evolution tracking, KPI calculations, and material performance analysis."
  },

  {
    title: "Investment Orders Monitoring Report",
    description:
      "Created enterprise ALV reports for investment order tracking and financial monitoring."
  },

  {
    title: "Client Credit Interface",
    description:
      "Built SAP interfaces and export solutions for customer credit management."
  },

  {
    title: "Manufacturing Orders with HU Tracking",
    description:
      "Tracks production orders alongside their associated Handling Unit (HU) numbers with full status and lot traceability."
  },

  {
    title: "Daily PMP Evolution (Weekly Pivot) Report",
    description:
      "Advanced dynamic ALV with one column per day in the selected date range, showing daily price evolution and day-over-day variance per material and plant."
  },

  {
    title: "Customer Master Data FTP Export",
    description:
      "Extracts comprehensive customer master data including geolocation, loyalty cards, tax classifications, and last invoice date, exported as a UTF-8 CSV directly to an FTP server."
  },

  {
    title: "Investment Orders Financial Dashboard",
    description:
      "Detailed monitoring of investment work orders linking purchase requisitions, purchase orders, goods receipts, and invoices with full budget vs. actual analysis."
  },

  {
    title: "Sales Representative Commission Report",
    description:
      "Calculates net revenue and commission premiums per sales representative broken down by brand (Judy, Brandis, Private Collections) with authority-checked sales org filtering."
  },

  {
    title: "Stock by Division & Storage Location Export",
    description:
      "Exports material stock levels (unrestricted and safety stock) per plant and storage location to an FTP server as a CSV with Assabil-format codes."
  },

  {
    title: "Promotional Sales Order Pivot Report",
    description:
      "Analyzes promotional sales orders broken down by distribution channel and specific GMS customers, delivered as a CSV via email attachment."
  },

  {
    title: "Sales Representative Revenue & Premiums",
    description:
      "Groups invoiced revenue by sales representative and brand, applying brand-specific commission rates to produce gross and net premium totals."
  },

  {
    title: "Sales Order Backlog with Volume Report",
    description:
      "Comprehensive sales order report with delivery schedule lines, showing ordered vs. delivered quantities, outstanding quantities, reliquat, and volume in liters based on product capacity."
  },

  {
    title: "Invoice Revenue by Product Line",
    description:
      "Groups invoiced quantities and revenue (gross, discount, net) by material and product hierarchy level with export channel currency conversion."
  },

  {
    title: "Mass Equipment Update via CSV",
    description:
      "Uploads a CSV and updates SAP PM equipment master records (cost center, asset, work center, functional location) using BAPI_EQUI_CHANGE with test mode support."
  },

  {
    title: "Material Price List FTP Export",
    description:
      "Builds a full product catalog CSV including pricing with FODEC and TVA tax calculations, PCB, contenance, barcode, brand/manufacturer, product hierarchy, and page-based ranking."
  },

  {
    title: "Withholding Tax Declaration Text Update",
    description:
      "Scans accounting documents with withholding tax operations and writes or updates the text 'RS DECLAREE' in the long text of each relevant document line item."
  },

  {
    title: "Withholding Tax Certificate Generator (XML + CSV)",
    description:
      "Processes vendor payment documents and generates the official Tunisian withholding tax declaration as both a review CSV and a structured XML conforming to the DeclarationsRS schema."
  },

  {
    title: "Handling Unit Dwell Time Report",
    description:
      "Tracks how long each Handling Unit has been stationary in the warehouse by tracing its goods receipt document date, comparing HU quantities against MB52 stock with color-coded discrepancy highlighting."
  },

  {
    title: "Open Workflow Tasks Dashboard",
    description:
      "Displays all pending workflow items for a given user, enriched with purchase requisition, purchase order, maintenance order, and QM task details. Supports drill-down navigation and direct opening in SAP Fiori My Inbox."
  },

  {
    title: "Weekly Sales Forecast (S+1)",
    description:
      "Advanced demand planning report blending historical sales with P/S promo/standard flagging, GMS promotional commitments, Judy 30/40 channel history, and N&D promo quantities to produce a weekly forecast."
  }
];

const ProfessionalExp = () => {
  return (
    <div
      id="experience"
      className="max-w-[1100px] mx-auto px-6 py-16 text-gray-200"
    >
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>

          {/* OVERVIEW CARD */}
          <div className="bg-purple-900/20 border border-purple-900 rounded-2xl p-8 shadow-xl mb-16">
            <div className="flex items-center gap-4 mb-6">
              <SiSap className="text-5xl text-blue-500" />

              <div>
                <h3 className="text-3xl font-bold">
                  SAP ABAP Developer | Judy Group
                </h3>

                <p className="text-purple-300">
                  Enterprise Software Engineering
                </p>
              </div>
            </div>

        <p className="text-gray-300 leading-relaxed mb-6">
            Working on enterprise SAP solutions focused on analytical reporting,
            workflow automation, SAP integrations, and business process optimization.
            Developing advanced ALV dashboards, automation tools, interfaces,
            Adobe Forms, and enterprise reporting systems for operational and
            financial analysis. Involved in SAP user support, issue resolution,
            production monitoring, and cross-functional collaboration to improve
            business processes and system efficiency.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "SAP ABAP",
                "ALV Reports",
                "SAP Fiori",
                "BAPIs",
                "Adobe Forms",
                "SmartForms",
                "XML",
                "FTP",
                "Flowable BPM",
                "Automation",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-800/30 rounded-full text-sm border border-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DETAILED PROJECTS */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-center">
              SAP Reports & Solutions
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {sapProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-900/60 border border-purple-900 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaChartBar className="text-purple-400 text-2xl" />

                    <h4 className="text-xl font-semibold">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-gray-300 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400"
                      >
                        <FaFileCode className="mt-1 text-purple-400 min-w-[14px]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
};

export default ProfessionalExp;
