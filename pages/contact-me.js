import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>
        I'm currently looking for work in the social impact sector, and am also
        interested in freelance requests.
      </p>
      <p>
        If you have any other requests or questions, don't hesitate to contact
        me:
      </p>
      <form className={utilStyles.flexcolumn}>
        <label for='name'>Name</label>
        <input id='name'></input>
        <label for='email'>Email</label>
        <input id='email'></input>
        <label for='subject'>Subject</label>
        <input id='subject'></input>
        <label for='message'>Message</label>
        <textarea id='message'></textarea>
        <button>Send</button>
      </form>
    </Layout>
  );
}
