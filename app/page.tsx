import dynamic from "next/dynamic";

const LazyLoadedComponent = dynamic(()=>import('./atomic/template/Template'), {
  loading: ()=> <p>Loading...</p>, 
})

export default function Home() {
  return (
    <>
      <LazyLoadedComponent />
    </>
  );
}
