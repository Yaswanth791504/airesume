export default function Experience({ color }: { color: string }) {
  return (
    <div className="mt-1 ">
      <h4
        style={{ borderColor: color }}
        className={`text-[16px]  font-bold  border-b-2 `}
      >
        Experience
      </h4>
      <ul className="text-black py-4 flex flex-col gap-5">
        <li className="flex border-l-2 px-3">
          <div className=""></div>
          <div>
            <h4 className="text-[11ppx]">2014-2015</h4>
            <p className="text-[10px]  text-slate-700">
              Enligence Technologies labs llp | Bhimavaram
            </p>
            <h3 className="font-semibold text-[12px]">Full Stack Developer</h3>
            <p className="text-[9px] text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis repudiandae nesciunt quas amet fugiat quae velit,
              corporis est alias nam ducimus quo? Sint ducimus, corrupti tempora
              reiciendis suscipit esse sed.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
