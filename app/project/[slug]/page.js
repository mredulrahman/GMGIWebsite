import { notFound } from "next/navigation";
import data from "@/app/data/projects.json";

const { projectsData } = data;

const fieldMap = {
  grant: [
    { key: "potentialFunder", label: "Potential Funder" },
    { key: "potentialFundingCategory", label: "Potential Funding Category" },
    { key: "currentStatus", label: "Current Status" },
    { key: "proposalSubmissionDate", label: "Proposal Submission Date" },
    { key: "secondReviewSubmissionDate", label: "Second Review Submission Date" },
  ],
  client: [
    { key: "client", label: "Client" },
    { key: "proposalSubmissionDate", label: "Proposal Submission Date" },
  ],
  awarded: [
    { key: "awardedPackageName", label: "Awarded Package Name" },
    { key: "awardedPackageNo", label: "Awarded Package No" },
    { key: "client", label: "Client" },
    { key: "score", label: "Score" },
    { key: "awardedDate", label: "Awarded Date" },
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
    <div className="flex flex-wrap gap-x-0.5 mb-2">
      <span className="font-bold text-black md:text-lg text-md leading-none">
        {label}:
      </span>
      <span className="text-black md:text-lg text-md leading-none">{value}</span>
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
          <h1 className="text-2xl md:text-3xl font-semibold text-left text-gray-900 leading-snug mb-8">
            {project.title}
          </h1>

          <div className="mb-8 space-y-0.5">
            {fields.map(({ key, label }) =>
              project[key] ? (
                <MetaRow key={key} label={label} value={project[key]} />
              ) : null
            )}
          </div>

          <div>
            <p className="font-bold text-gray-900 text-lg md:text-xl mb-2">
              Description:
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-none text-left">
              {project.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}