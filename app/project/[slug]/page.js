import { notFound } from "next/navigation";
import data from "@/app/data/projects.json";

const { projectsData } = data;

const fieldMap = {
  grant: [
    { key: "potentialFunder",            label: "Potential Funder" },
    { key: "potentialFundingCategory",   label: "Potential Funding Category" },
    { key: "currentStatus",              label: "Current Status" },
    { key: "proposalSubmissionDate",     label: "Proposal Submission Date" },
    { key: "secondReviewSubmissionDate", label: "Second Review Submission Date" },
  ],
  client: [
    { key: "client",                 label: "Client" },
    { key: "proposalSubmissionDate", label: "Proposal Submission Date" },
  ],
  awarded: [
    { key: "awardedPackageName",     label: "Awarded Package Name" },
    { key: "awardedPackageNo",       label: "Awarded Package No" },
    { key: "client",                 label: "Client" },
    { key: "score",                  label: "Score" },
    { key: "awardedDate",            label: "Awarded Date" },
    { key: "letterOfIntentSignedOn", label: "Letter of Intent Signed on" },
  ],
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  return {
    title: project?.title ?? "Project",
    description: project?.description ?? "",
  };
}

function MetaRow({ label, value }) {
  return (
    <div className="flex flex-wrap gap-x-2 mb-3">
      <span className="font-bold text-gray-900 text-xl leading-relaxed">
        {label}:
      </span>
      <span className="text-gray-700 text-xl leading-relaxed">{value}</span>
    </div>
  );
}


export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();
  const fields = fieldMap[project.id] ?? [];

  return (
    <>
      <main
        style={{
          backgroundImage: "url('/dashboard/abstract-geometric-white-background-free-vector.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 pb-40">
          <h1 className="text-3xl font-semibold text-center text-gray-900 leading-snug mb-10">
            {project.title}
          </h1>

          <div className="mb-8 space-y-1">
            {fields.map(({ key, label }) =>
              project[key] ? (
                <MetaRow key={key} label={label} value={project[key]} />
              ) : null
            )}
          </div>

          <div>
            <p className="font-bold text-gray-900 text-xl mb-2">
              Description:
            </p>
            <p className="text-gray-700 text-xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}