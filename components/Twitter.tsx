interface Trending {
  text: string;
  tweets: number;
}
interface Left {
  options: string;
}
export function TrendingComponent(trending: Trending) {
  return (
    <div className=" items-center justify-center text-center">
      <p>{trending.text}</p>
      <p>{trending.tweets} Tweets</p>
    </div>
  );
}
export function LeftComponent(props: Left) {
  const optionsarr: string[] = props.options.split(",");
  return (
    <div className=" text-left">
      {optionsarr.map((option) => {
        return <a key={option}>{option}</a>;
      })}
    </div>
  );
}
