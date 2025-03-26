import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'iojv2m8eu9rn',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image, orderID } = item.fields;
        const id = item.sys.id;
        const img =
          image?.fields?.file?.url + '?fm=jpg&fl=progressive&w=704&h=480';
        return { title, url, id, img, orderID };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
