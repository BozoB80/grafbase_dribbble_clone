'use client'

import { SessionInterface } from "@/common.types"

type Props = {
  type: string
  session: SessionInterface
}

const ProjectForm = ({ type, session }: Props) => {

  const image = null

  const handleFormSubmit = () => {

  }

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form image-label">
          {!image && 'Choose a poster for your project'}
        </label>

      </div>
    </form>
  );
}

export default ProjectForm;