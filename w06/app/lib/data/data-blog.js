

import { eachDayOfInterval } from 'date-fns';
import {supabase} from './supa'

/////////////
// GET

export  async function getBlogs() {
  const { data, error } = await supabase
    .from('blog_23')
    .select('*');

  if (error) {
    console.error(error);
  }

  return data;
}