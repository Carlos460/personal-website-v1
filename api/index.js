import matter from "gray-matter";
import marked from "marked";
import yaml from "js-yaml";

// Fetching all projects
export async function getAllProjects() {
  const context = require.context("../_projects", false, /\.md$/);
  const projects = [];
  for (const key of context.keys()) {
    const project = key.slice(2);
    const content = await import(`../_projects/${project}`);
    const meta = matter(content.default);
    projects.push({
      slug: project.replace(".md", ""),
      title: meta.data.title,
      code_link: meta.data.code_link,
    });
  }
  return projects;
}

// Fetching one project

export async function getProjectBySlug(slug) {
  const fileContent = await import(`../_projects/${slug}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title,
    content: content,
  };
}

export async function getConfig() {
  const config = await import(`../config.yml`);
  return yaml.safeLoad(config.default);
}
