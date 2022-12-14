import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return <div className={styles.container}>{data.name}
  <div>Hello</div>
  <div>How are You</div>
  <div>I am fine</div>
  </div>;
}

export async function getServerSideProps(ctx) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ctx.params.index}`
  );
  const data = await resp.json();

  return {
    props: {
      data,
    },
  };
}
