import {
  profileData,
  experienceData,
  projectsData,
  skillsData,
  certificationsData,
  educationData
} from "@/data/portfolio";

export function useProfile() {
  return {
    data: profileData,
    isLoading: false,
    error: null
  };
}

export function useExperience() {
  return {
    data: experienceData,
    isLoading: false,
    error: null
  };
}

export function useProjects() {
  return {
    data: projectsData,
    isLoading: false,
    error: null
  };
}

export function useSkills() {
  return {
    data: skillsData,
    isLoading: false,
    error: null
  };
}

export function useCertifications() {
  return {
    data: certificationsData,
    isLoading: false,
    error: null
  };
}

export function useEducation() {
  return {
    data: educationData,
    isLoading: false,
    error: null
  };
}
