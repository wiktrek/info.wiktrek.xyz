interface Trending {
  text: string;
  tweets: number;
}
interface Left {
  options: string;
}
export function TrendingComponent(trending: Trending) {
  return (
    <div>
      <p>{trending.text}</p>
      <p>{trending.tweets} Tweets</p>
    </div>
  );
}
export function LeftComponent(props: Left) {
  const optionsarr: string[] = props.options.split(",");
  return (
    <>
      {optionsarr.map((option) => {
        return <a key={option}>{option}</a>;
      })}
    </>
  );
}
