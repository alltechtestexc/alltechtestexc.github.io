'use client'

import { createContext } from "vm"
import { ImagePreview } from "../../../utils/ImagePreview"
import { STRINGS } from "../../../utils/STRINGS"
import { useContext } from "react"

const about = {
    "he": <> <p>עבודתי מתחילה בדיו ובציפורן. אני מקווקוות עד שנוצרת רשת צפופה של קוים על הבד.
</p><br></br><p>
התהליך לוקח לעיתים שבועות, עד שאני מרגישה שהשלד נבנה. אחר כך, אני עוברת לצבעי שמן. לעיתים השמן מדולל ושקוף, כך שאפשר לראות דרכו את הקווקווים, ולעיתים הוא מכסה אותם לגמרי. גם בעבודות שבהן לא רואים את שכבת הדיו, היא קיימת שם מתחת לעור הצבע.
</p><br></br><p>
צבעי השמן הם העור והגידים שנקרמים על גבי סבך הקווקווים. ואז, אני "חופרת" בתוך הצבע, מעבה אותו ומנסה לדייק בצבעוניות שלו. ככל שהצבע מגיע לחומריות עשירה יותר, כך אני מרגישה שהנשמה נכנסת לגוף הציור.
</p><br></br><p>
מעניינים אותי מצבי מציאות מינוריים, שוליים ולעיתים גם אבסורדיים, ואני מנסה להאיר אותם ולצקת לתוכם משמעות, לעורר תקווה והתרוממות רוח. עבודותיי משקפות את המצב הפרטי והכלל אנושי בעולם של זרות, ניכור ובדידות ומנסות ליצור קירבה, אהבה ונרטיב בעולם חסר פשר, וסדר בעולם של כאוס. כשזה מצליח העולם הופך לבית.</p></>,
    "en": <><p> My work begins with ink and pen. I cross-hatch until a dense web of lines forms on the canvas.
</p><br></br><p>
The process sometimes takes weeks, until I feel that the skeleton has been built. After that, I move on to oil paints. At times the oil is thinned and transparent, allowing the cross-hatching to show through, and at times it completely covers it. Even in works where the ink layer cannot be seen, it still lives beneath the skin of the paint.
</p><br></br><p>
The oil colors are the flesh and sinews woven over the tangle of lines. Then, I “dig” into the paint, thicken it, and try to refine its coloration. The richer the material quality of the paint becomes, the more I feel that the soul enters the body of the painting.
</p><br></br><p>
I am drawn to minor, marginal, and sometimes absurd states of reality, and I try to illuminate them and infuse them with meaning, to spark hope and uplift the spirit. My works reflect both the private and the universal human condition in a world of estrangement, alienation, and loneliness, while striving to create closeness, love, and a narrative in a world without meaning, and order in a world of chaos. When it succeeds, the world becomes a home.</p></>
}

export default function Page() {
    const context = useContext(ImagePreview)

    return <div className=" h-full mx-auto items-center flex md:flex-row flex-col md:pt-0 pt-10">
        <div className="flex-1 md:mr-12">
        <h1 className="text-zinc-900 text-2xl mb-4 font-bold" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)"}}>{STRINGS.titles.about[context.language]}</h1>
        <h1 className="text-zinc-900 text-2xl mb-4" dir="auto" style={{ fontFamily: "var(--font-heading) var(--font-hebrew)", fontSize: 22}}>
            {
                about[context.language]
            }
        </h1>
        </div>
        <div className="flex-none flex flex-col max-w-100">
            <img className="max-h-full" src="/pfp.jpg"/>
        </div>
    </div>
    

}