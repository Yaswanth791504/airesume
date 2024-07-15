export default function Experience({ color }: { color: string }) {
  return (
    <div className="mt-1 md:mt-2 lg:mt-2">
      <h4
        style={{ borderColor: color }}
        className={`text-[16px] md:text-[17px] lg:text-[18px] font-bold  border-b-2 `}
      >
        Experience
      </h4>
      <ul className="text-black py-4 flex flex-col gap-5">
        <li className="flex border-l-2 px-3">
          <div className=""></div>
          <div>
            <h4>2014-2015</h4>
            <p className="text-[10px] md:text-[11px] lg:text-[14px]  text-slate-700">
              Enligence Technologies labs llp | Bhimavaram
            </p>
            <h3 className="font-semibold">Full Stack Developer</h3>
            <p className="text-[9px] md:text-[10px] lg:text-[12px] text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis repudiandae nesciunt quas amet fugiat quae velit,
              corporis est alias nam ducimus quo? Sint ducimus, corrupti tempora
              reiciendis suscipit esse sed.
            </p>
          </div>
        </li>
        <li className="flex border-l-2 px-3">
          <div className=""></div>
          <div>
            <h4>2014-2015</h4>
            <p className="text-[10px] md:text-[11px] lg:text-[14px]  text-slate-700">
              Enligence Technologies labs llp | Bhimavaram
            </p>
            <h3 className="font-semibold">Full Stack Developer</h3>
            <p className="text-[9px] md:text-[10px] lg:text-[12px] text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis repudiandae nesciunt quas amet fugiat quae velit,
              corporis est alias nam ducimus quo? Sint ducimus, corrupti tempora
              reiciendis suscipit esse sed.
            </p>
          </div>
        </li>
        <li className="flex border-l-2 px-3">
          <div className=""></div>
          <div>
            <h4>2014-2015</h4>
            <p className="text-[10px] md:text-[11px] lg:text-[14px]  text-slate-700">
              Enligence Technologies labs llp | Bhimavaram
            </p>
            <h3 className="font-semibold">Full Stack Developer</h3>
            <p className="text-[9px] md:text-[10px] lg:text-[12px] text-black">
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
