/* ============================================================
   OOM&SD Alumni Session. PCCOE Pune. 18 Aug 2026
   Tejas Morkar · Cohesity
   FULL DECK. Cold open · The 5 Moves · Food Delivery · API design · Banking deltas · The real world · Close
   ============================================================ */
const DECK = [
    /* ---------- 1. COLD OPEN ---------- */
    {
        type: "title",
        kicker: "PCCOE · Computer Engineering · OOM&SD",
        h: "Design a system that lets 10 million people order food.",
        sub: "Go on. Ten seconds.",
        meta: "Tejas Morkar · AI Software Engineer (MTS II), Cohesity · CE 2018 to 2022",
    },

    {
        type: "statement",
        kicker: "Your brain just did one of two things",
        h: "It went blank. Or it started listing **technologies**.",
        sub: "React. Node. MongoDB. *Maybe Kafka, I have heard Kafka is good.*",
    },

    {
        type: "statement",
        h: "In an interview the second one is !worse!.",
        sub: "A blank means you are thinking. A list of technologies says you believe system design is a **shopping list**.",
    },

    {
        type: "poll",
        h: "Before designing anything, what do you ask first?",
        opts: [
            { t: "Which database should we use", v: "0" },
            { t: "How many users, and how fast do they arrive", v: "1" },
            { t: "Which cloud provider", v: "0" },
            { t: 'What "order food" actually *means*, step by step', v: "1" },
        ],
        verdict:
            "**B and D.** If you said D, hold on to that instinct. A and C are answers to a question nobody asked. You cannot pick a database before you know what you are storing and how hard it gets hit.",
    },

    /* ---------- 2. WHO / THE PROMISE ---------- */
    {
        type: "split",
        kicker: "Sixty seconds about me, and then never again",
        h: "I sat in that seat",
        lt: "2018 to 2022",
        lk: "",
        l: `<p style="color:var(--muted);font-size:clamp(14px,1.3vw,21px);line-height:1.5">
    This department. This college. Probably this exact 6 PM slot, wondering when it would end.<br><br>
    <b>My confession:</b> I was bad at DSA. I <em>hated</em> competitive programming.<br><br>
    Still do. I am not going to pretend otherwise.</p>`,
        rt: "What actually worked",
        rk: "acc",
        r: `<p style="color:var(--muted);font-size:clamp(14px,1.3vw,21px);line-height:1.5">
    I built a lot of projects and I <b>designed</b> them properly. APIs, data models, architecture.<br><br>
    None of that was in our syllabus to this depth. <em>It is in yours.</em><br><br>
    That is the advantage I did not have.</p>`,
        foot: "It got me into Veritas, which is Cohesity now. And four years in, it is still the part I lean on most.",
    },

    {
        type: "statement",
        kicker: "The part nobody tells you",
        h: "The skill is not typing fast. It is getting three people to see the same picture.",
        sub: "Your tech director, your manager, and the teammate who has to maintain it. If all three see it, your idea ships. If they do not, it does not, *no matter how good the code is*.",
    },

    {
        type: "bullets",
        kicker: "Next two hours",
        h: "What you leave with",
        items: [
            "**A method** for that food question. Not an answer, a method",
            "**The design artefacts** you are actually asked to produce, built live rather than lectured",
            "**Where banking diverges** from everything else, and why",
            "**How design happens at work**, including a good idea of mine that never shipped",
        ],
        foot: "And a one-page cheatsheet at the end, so you can ~stop writing~ and just watch.",
    },

    /* ---------- 3. THE METHOD ---------- */
    {
        type: "moves",
        note: "Five moves. Every system. Every interview. Every assignment you have left.",
    },

    {
        type: "moves",
        note: "Most people do move 5 first. They say ~microservices~ before they can name three nouns.",
        out: "That is how you end up with nine services and one user.",
    },

    /* ---------- 4. FD · NOUNS ---------- */
    {
        type: "moves",
        on: 1,
        note: "What exists in this system, and what actually *happens* in it? No technology words allowed yet.",
    },

    {
        type: "cards",
        kicker: "Move 1. Nouns",
        h: "So what is actually in this system?",
        cols: 4,
        items: [
            {
                t: "Customer",
                d: "has addresses, has a payment method, is *impatient*",
            },
            {
                t: "Restaurant",
                d: "has a menu, opens and closes, rejects orders",
            },
            {
                t: "Order",
                d: "the thing everyone forgets is a **historical fact**",
            },
            {
                t: "Delivery Partner",
                d: "moves, constantly, and drains their own battery",
            },
            { t: "MenuItem", d: "has a price that *changes tomorrow*" },
            { t: "Payment", d: "talks to a company you do not control" },
            { t: "Address", d: "never as simple as you think it is" },
            { t: "Review", d: "nobody notices when it is down" },
        ],
        foot: "Verbs: browse · view menu · **place order** · pay · accept or reject · assign rider · track · deliver · rate",
    },

    {
        type: "statement",
        kicker: "Now the unfashionable slide",
        h: "One server. One database. All of it. 10 orders a day.",
        sub: "Does it work? *Yes.* It completely works.",
    },

    {
        type: "bullets",
        h: "A monolith is not a bug",
        items: [
            "**Start with one.** Most systems should",
            "**Each service is a network call** that can fail",
            "**Each service is a deployment** that can break",
            "**Each service is a 3 AM page** for somebody",
        ],
        foot: "We *will* split this later. But because something **forces** us to. Not because it sounds impressive on a resume.",
    },

    {
        type: "iview",
        h: "The monolith question",
        bad: '"I would use microservices for scalability." Said before any numbers exist. The interviewer now knows you have read a blog post.',
        good: '"At this load a single service is fine. Here is the specific pressure that would make me split it. And here is which service goes first."',
        foot: "Knowing when *not* to use something is the hardest thing to fake.",
    },

    /* ---------- 5. FD · FLOW ---------- */
    {
        type: "moves",
        on: 2,
        out: "Output: the sequence diagram",
        note: "Draw the happy path. And I am about to change what you think a sequence diagram is *for*.",
    },

    {
        type: "mermaid",
        h: "Place Order, the happy path",
        cap: "Beautiful. Everything works. **Nobody has ever seen this happen.**",
        code: `sequenceDiagram
    autonumber
    participant C as Customer App
    participant G as API Gateway
    participant O as Order Service
    participant P as Payment Service
    participant X as Payment Gateway (theirs)
    participant R as Restaurant Service
    participant D as Dispatch Service
    C->>G: POST /v1/orders
    G->>O: create order (PENDING)
    O->>P: charge Rs.450
    P->>X: authorize
    X-->>P: OK
    P-->>O: PAID
    O->>R: notify new order
    R-->>O: ACCEPTED
    O->>D: find a rider
    D-->>O: rider assigned
    O-->>C: 201 Created`,
    },

    {
        type: "statement",
        kicker: "The reframe",
        h: "A sequence diagram is not documentation. It is a **failure-finding tool**.",
        sub: "You were taught to draw it *after* you built the thing, for the report. Backwards. Every arrow is a place the network drops, a service dies, or something takes eight seconds instead of eighty milliseconds.",
    },

    {
        type: "statement",
        h: "Ten arrows. ~Ten ways to fail.~",
        sub: "Let us go find them.",
    },

    /* ---------- 6. FD · BREAK ---------- */
    {
        type: "moves",
        on: 3,
        note: "This is the move everyone skips. It is also the only move where *design* actually happens. Everything before this was drawing.",
    },

    {
        type: "cards",
        kicker: "Move 3. Break",
        h: "Three arrows, three disasters",
        cols: 3,
        items: [
            {
                t: "1 · Payment ok, restaurant no",
                d: "Card charged. Kitchen closed. **Where is the money?**",
                k: "dngr",
            },
            {
                t: "2 · The double tap",
                d: "Nothing happens for two seconds. Every human on earth taps again.",
                k: "dngr",
            },
            {
                t: "3 · The gateway timeout",
                d: "Eight seconds, no reply. Did the payment go through? *You do not know.*",
                k: "dngr",
            },
        ],
    },

    {
        type: "poll",
        h: "Money is gone. Order is dead. What now?",
        opts: [
            { t: "Roll back the database transaction" },
            { t: "Retry the restaurant until it accepts" },
            { t: "Issue a refund. A *new* action that undoes the old one" },
            { t: "Give the customer store credit and hope" },
        ],
        verdict:
            'You cannot roll back. **"Charge card" and "restaurant accepts" are different systems**. One of them is a company in Bangalore you do not control. You need a *compensating action*.',
    },

    {
        type: "mermaid",
        h: "The same flow, honestly",
        cap: "Do a thing. If a later step fails, **undo it with a new action**. Not a rollback. That is a ~saga~. Write it down: it is the most useful word in distributed systems and it is in almost no syllabus.",
        code: `sequenceDiagram
    autonumber
    participant C as Customer App
    participant O as Order Service
    participant P as Payment Service
    participant X as Payment Gateway
    participant R as Restaurant Service
    C->>O: POST /v1/orders
    O->>P: charge Rs.450
    P->>X: authorize
    X-->>P: OK
    P-->>O: PAID
    O->>R: notify new order
    R--xO: REJECTED - kitchen closed
    Note over O,P: No rollback exists.<br/>Different systems.
    O->>P: compensate - refund Rs.450
    P->>X: refund
    X-->>P: OK
    O-->>C: 409 + refund initiated`,
    },

    {
        type: "split",
        kicker: "Break 2. The double tap",
        h: "Two orders. Two charges. One furious customer.",
        lt: "Without an idempotency key",
        lk: "dngr",
        l: `<pre class="code">POST /v1/orders   → ord_1  ₹450
POST /v1/orders   → ord_2  ₹450
<span class="r">   (identical body, 1.8s apart)</span></pre>
 <p style="margin-top:.6em;color:var(--muted)">The server has <b>no way to know</b> these were the same intention.</p>`,
        rt: "With an idempotency key",
        rk: "acc",
        r: `<pre class="code">POST /v1/orders
Idempotency-Key: 7f3a-91c2   → ord_1  ₹450
POST /v1/orders
Idempotency-Key: 7f3a-91c2   → <span class="s">ord_1</span>  <span class="s">₹0</span></pre>
 <p style="margin-top:.6em;color:var(--muted)">One key per <b>intent</b>, not per retry. Replay returns the original result.</p>`,
        foot: "Hold this thought. In banking it stops being annoying and starts being ~illegal~.",
    },

    {
        type: "statement",
        kicker: "Break 3. And this is the nasty one",
        h: "A timeout is not a failure. A timeout is **uncertainty**.",
        sub: 'Your call to the payment gateway timed out at 8 seconds. Did the money move? *You genuinely do not know.* Anyone who says "just retry" is about to charge someone twice.',
    },

    {
        type: "bullets",
        h: 'How grown-ups handle "I do not know"',
        items: [
            "**Reconcile**. A job that compares your records against theirs, on a schedule",
            "**Poll**. Ask the gateway for the status of that specific transaction",
            "**Webhooks**. Let them tell you when they finally decide",
            "**Never** assume. Never blind-retry a payment.",
        ],
        foot: 'Say the words ~"a timeout is not a failure"~ in an interview and watch the interviewer sit up.',
    },

    {
        type: "latency",
        h: "Break 4. Add up the chain",
        hops: [
            { t: "Gateway → Order Service", ms: 120 },
            { t: "Order → Payment Service", ms: 180 },
            { t: "Payment → third-party gateway", ms: 2200 },
            { t: "Order → Restaurant Service", ms: 240 },
            { t: "Order → Dispatch Service", ms: 310 },
        ],
        foot: "Click a hop to make it **asynchronous**. Watch *both* numbers move. The wait drops and so does the number of things that can kill the order.",
    },

    {
        type: "statement",
        h: "Does the customer really need to wait for a rider to be assigned?",
        sub: "No. Nobody gets a rider in 200 milliseconds anyway. So: **accept the order, then do the slow things behind the scenes.**",
    },

    {
        type: "mermaid",
        h: "Accept fast, finish later",
        cap: "Our first real architectural decision. And notice it came out of a *failure*, not a textbook.",
        code: `sequenceDiagram
    autonumber
    participant C as Customer App
    participant O as Order Service
    participant P as Payment Service
    participant Q as Message Queue
    participant R as Restaurant Service
    participant D as Dispatch Service
    participant N as Notification Service
    C->>O: POST /v1/orders (Idempotency-Key)
    O->>P: charge Rs.450
    P-->>O: PAID
    O-->>C: 202 Accepted - order CONFIRMED
    Note over C,O: Customer is free. ~400ms.
    O->>Q: publish OrderPlaced
    Q->>R: notify restaurant
    Q->>D: find rider
    Q->>N: send confirmation`,
    },

    {
        type: "iview",
        h: "What BREAK buys you in an interview",
        bad: "Draw the happy path, then stop and look at the interviewer expectantly. They will now spend ten minutes finding your holes *for* you.",
        good: 'Draw the happy path, then say "let me break this myself". And walk through the payment failure, the double tap, the timeout.',
        foot: "Breaking your own design before someone else does is the single clearest signal that you have shipped something real.",
    },

    /* ============================================================
   PHASE 2. SPLIT · API DESIGN · SCALE
   ============================================================ */

    /* ---------- 7. FD · SPLIT ---------- */
    {
        type: "moves",
        on: 4,
        out: "Output: the component diagram",
        note: "Now, and only now, we are allowed to draw boxes. The question is never *what* the services are. It is **why here and not there**.",
    },

    {
        type: "bullets",
        kicker: "The heuristic",
        h: "Split a service out when at least two are true",
        items: [
            "**Changes** at a different rate. A menu changes hourly, payment logic twice a year",
            "**Fails** independently. Reviews going down must not stop orders",
            "**Scales** differently. 100 menu reads for every 1 order",
            "**Owned** by a different team. Conway's Law is undefeated",
        ],
        foot: "Two out of four. Not one. One is how you talk yourself into anything.",
    },

    {
        type: "statement",
        kicker: "The anti-pattern",
        h: "One service per database table is not microservices.",
        sub: "It is a **distributed monolith** with extra latency and worse debugging. If service A cannot do anything without calling B, they are ~one service wearing a trenchcoat~.",
    },

    {
        type: "bridge",
        tag: "Whiteboard",
        h: "Let us go draw this properly",
        sub: "Slides are the wrong tool for this bit. Give me the whiteboard.",
    },

    {
        type: "mermaid",
        h: "Where the boundaries actually go",
        cap: "Seven boxes. Each one earned its place by **failing, changing, or scaling differently** from its neighbours. Each owns its own data.",
        code: `graph TB
    CL[Mobile / Web] --> GW[API Gateway<br/>auth, rate limit, routing]
    GW --> USR[User Service]
    GW --> CAT[Catalog Service]
    GW --> ORD[Order Service]
    ORD --> PAY[Payment Service]
    PAY --> PSP[Payment Gateway<br/>external, not yours]
    ORD --> MQ[[Message Queue]]
    MQ --> DIS[Dispatch Service]
    MQ --> NOT[Notification Service]
    USR --- UDB[(User DB)]
    CAT --- CDB[(Catalog DB)]
    ORD --- ODB[(Order DB)]
    PAY --- PDB[(Payment DB)]
    DIS --- GEO[(Redis Geo)]`,
    },

    {
        type: "statement",
        kicker: "The rule everyone breaks in week one",
        h: "Order Service does not `SELECT` from the Restaurant Service's tables.",
        sub: "Own your data or you own nothing. If you need menu data, **ask over the API**. Or copy what you need at order time.",
    },

    {
        type: "split",
        kicker: "And here is why the copy matters",
        h: "An order is a historical fact",
        lt: "Referencing the menu",
        lk: "dngr",
        l: `<pre class="code">order.items = [ menuItemId: <span class="w">"item_4471"</span> ]

<span class="c">// restaurant raises the price tomorrow</span>
<span class="r">// the customer's old receipt changes too</span></pre>
 <p style="margin-top:.6em;color:var(--muted)">Your history now <b>mutates</b>. Accounting will find you.</p>`,
        rt: "Snapshotting the menu",
        rk: "acc",
        r: `<pre class="code">order.items = [
  menuItemId:    <span class="s">"item_4471"</span>,
  nameSnapshot:  <span class="s">"Paneer Tikka"</span>,
  priceSnapshot: <span class="s">28000</span>  <span class="c">// paise</span>
]</pre>
 <p style="margin-top:.6em;color:var(--muted)">Not denormalisation laziness. <b>Correctness.</b></p>`,
        foot: "Notice the price is an ~integer in paise~. Never a float. In binary floating point, `0.1 + 0.2` does not equal `0.3`, and in a payments system that is a defect report.",
    },

    {
        type: "iview",
        h: "Drawing boxes in an interview",
        bad: 'Draw six services immediately. When asked "why is dispatch separate from order?", the answer is "because, um, separation of concerns."',
        good: 'Draw one box. Then split it out loud: "dispatch scales with riders, order scales with customers, and dispatch going down should not stop people ordering."',
        foot: "The boxes are worth nothing. The **justification** is the entire answer.",
    },

    /* ---------- 8. THE CONTRACT · API DESIGN ---------- */
    {
        type: "section",
        tag: "Part 2",
        h: "The contract",
        sub: "Your architecture becomes visible to other people exactly here. And nowhere else.",
    },

    {
        type: "poll",
        h: "Which of these would you actually ship?",
        opts: [
            { t: "`POST /api/placeOrder`", v: "0" },
            { t: "`POST /api/v1/orders`", v: "1" },
            { t: "`GET  /api/v1/createOrder?restaurant=88&items=3,7`", v: "0" },
            { t: "`POST /api/v1/customers/{customerId}/orders`", v: "0" },
        ],
        verdict: "**B.** And three different kinds of wrong above it.",
    },

    {
        type: "cards",
        h: "Why the other three lose",
        cols: 3,
        items: [
            {
                t: "C is a bug, not a style",
                d: "`GET` must be **safe**. Browsers prefetch. Proxies cache. Someone's antivirus scans the link and *orders dinner*. Your whole order is also now in access logs and browser history.",
                k: "dngr",
            },
            {
                t: "A puts the verb in the path",
                d: "The verb already lives in HTTP. Write `placeOrder` once and you will write `cancelOrder`, `getOrderById`, `updateOrderStatus`. Congratulations, you have reinvented RPC with extra steps.",
                k: "",
            },
            {
                t: "D looks RESTful and is a security smell",
                d: "The customer id is already in the token. Putting it in the path invites changing `123` to `124`. That is an **IDOR**. One of the most common real-world API bugs.",
                k: "dngr",
            },
        ],
        foot: "**Nouns in the path. Verbs in the method.** Never accept an identity from the path that you already have from the token.",
    },

    {
        type: "table",
        kicker: "90 seconds. It is all on the cheatsheet",
        h: "The verbs",
        head: ["Verb", "Does", "Safe", "Idempotent"],
        rows: [
            ["`GET`", "read", "yes", "yes"],
            ["`POST`", "create / do", "no", "no"],
            ["`PUT`", "replace the whole thing", "no", "yes"],
            ["`PATCH`", "modify part of it", "no", "not usually"],
            ["`DELETE`", "remove", "no", "yes"],
            ["`QUERY`", "**read, with a body**", "yes", "yes"],
        ],
        foot: "`QUERY` is genuinely new. It fixes something we have all done: a search filter too big for a URL, so you shrug and `POST /search`, and now your read is neither safe nor cacheable. Mention it in an interview and they will assume you ~read specs for fun~.",
    },

    {
        type: "table",
        kicker: "Status codes are an API you already have",
        h: "Use them",
        head: ["Code", "Means", "When"],
        rows: [
            ["`200`", "OK", "you did the thing, here it is"],
            ["`201`", "Created", "plus a `Location` header. Not 200."],
            [
                "`202`",
                "Accepted",
                "**we took it, we are not done**. Our async decision, in the contract",
            ],
            ["`400`", "Bad Request", "your JSON is malformed"],
            [
                "`401` / `403`",
                "Unauthenticated / Forbidden",
                "who you are vs what you may do",
            ],
            ["`409`", "Conflict", "JSON is fine, but the restaurant is closed"],
            ["`422`", "Unprocessable", "JSON is fine, business rules say no"],
            ["`429`", "Too Many Requests", "slow down"],
            [
                "`500` / `503`",
                "Server error / Unavailable",
                "your fault / try again later",
            ],
        ],
        foot: 'Returning `200 {"success": false}` for everything is the API equivalent of ~a shrug~.',
    },

    {
        type: "swagger",
        h: "One endpoint, designed properly",
        spec: `openapi: 3.0.3
info:
  title: Online Food Delivery API
  version: "1.0.0"
  description: Depth beats breadth. One endpoint done exhaustively teaches more than ten sketched.
servers:
  - url: https://api.fooddelivery.example.com/v1
paths:
  /orders:
    post:
      summary: Place an order
      description: |
        Returns 202 because restaurant acceptance and rider assignment happen
        asynchronously. The customer should not wait for either.
      parameters:
        - name: Idempotency-Key
          in: header
          required: true
          schema: { type: string, format: uuid }
          description: |
            Generated once per user INTENT, not per retry. Replaying the same
            key returns the original result and creates no second order.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [restaurantId, items, deliveryAddressId, paymentMethodId]
              properties:
                restaurantId: { type: string, example: "rest_88f2" }
                items:
                  type: array
                  minItems: 1
                  items:
                    type: object
                    required: [menuItemId, quantity]
                    properties:
                      menuItemId: { type: string, example: "item_4471" }
                      quantity:   { type: integer, minimum: 1, maximum: 50 }
                      notes:      { type: string, maxLength: 200 }
                deliveryAddressId: { type: string }
                paymentMethodId:   { type: string }
                couponCode:        { type: string, nullable: true }
      responses:
        "202":
          description: Accepted. Restaurant and rider confirm asynchronously.
        "400": { description: Malformed body }
        "401": { description: Missing or invalid token }
        "409": { description: Restaurant closed or outside delivery radius }
        "422": { description: Valid JSON, business rules reject it }
        "429": { description: Rate limited }
  /orders/{orderId}:
    get:
      summary: Get one order
      responses:
        "200": { description: OK }
        "404": { description: Not found }
  /restaurants:
    get:
      summary: Browse restaurants - cursor paginated, heavily cached
      parameters:
        - { name: cursor, in: query, schema: { type: string } }
        - { name: limit,  in: query, schema: { type: integer, default: 20, maximum: 100 } }
      responses:
        "200": { description: OK }`,
    },

    {
        type: "code",
        h: "And the code behind that contract",
        code: `<span class="k">@router</span>.post(<span class="s">"/v1/orders"</span>, status_code=<span class="w">202</span>)
<span class="k">def</span> place_order(
    body: CreateOrderRequest,
    idempotency_key: UUID = Header(..., alias=<span class="s">"Idempotency-Key"</span>),
    user: User = Depends(current_user),      <span class="c"># identity from the token, never the path</span>
):
    <span class="k">if</span> prior := idempotency.get(idempotency_key):
        <span class="k">return</span> prior                         <span class="c"># replay. no second order, no second charge</span>
    restaurant = catalog.get(body.restaurant_id)
    <span class="k">if not</span> restaurant.is_open():
        <span class="k">raise</span> Conflict(<span class="s">"RESTAURANT_CLOSED"</span>)  <span class="c"># 409, not 400</span>
    items = [OrderItem(
        menu_item_id   = i.menu_item_id,
        name_snapshot  = catalog.name_of(i.menu_item_id),
        price_snapshot = catalog.price_of(i.menu_item_id),   <span class="w"># the server decides the price</span>
        quantity       = i.quantity,
    ) <span class="k">for</span> i <span class="k">in</span> body.items]
    <span class="k">with</span> db.transaction():                   <span class="c"># order and key commit together, or neither does</span>
        order = orders.create(user.id, restaurant.id, items)
        idempotency.put(idempotency_key, order)
    events.publish(OrderPlaced(order.id))    <span class="c"># restaurant, rider, notification. all async</span>
    <span class="k">return</span> order`,
        foot: "Twenty lines. Every rule from the last ten minutes is in here, and you can point at each one.",
    },

    {
        type: "bullets",
        kicker: "Three things to notice in that spec",
        h: "What is *not* there",
        items: [
            "**No price from the client.** Never trust one that arrives from the client. That is not a design opinion, that is ~how you get robbed~",
            "**Money as integer paise.** Floats lose money quietly, which is the worst way to lose money",
            "**202, not 200.** The status code *is* the architecture decision we made 40 minutes ago",
        ],
        foot: "A spec is not paperwork. It is where your design stops being an opinion.",
    },

    /* ---------- 9. LIVE DEMO ---------- */
    {
        type: "apiconsole",
        h: "Now watch me try to get charged twice",
        title: "POST https://api.fooddelivery.example.com/v1/orders",
        steps: [
            {
                label: "Send the order",
                out: `<div class="cmd">$ curl -X POST /v1/orders \\
    -H "Idempotency-Key: 7f3a-91c2-4d0e" \\
    -d '{"restaurantId":"rest_88f2","items":[{"menuItemId":"item_4471","quantity":2}]}'</div>
<div><span class="ok">HTTP/1.1 202 Accepted</span>
Location: /v1/orders/<span class="ok">ord_9c2e1a</span>
{
  "id": "<span class="ok">ord_9c2e1a</span>",
  "status": "CONFIRMED",
  "totalAmount": 56000,
  "currency": "INR"
}</div><br>`,
            },
            {
                label: "Impatient tap. Same key",
                out: `<div class="cmd">$ curl -X POST /v1/orders \\
    -H "Idempotency-Key: <span class="warn2">7f3a-91c2-4d0e</span>   <span class="dimc"># the same key</span>
    -d '{ ...identical body... }'</div>
<div><span class="ok">HTTP/1.1 202 Accepted</span>
{
  "id": "<span class="ok">ord_9c2e1a</span>",       <span class="dimc"><- the same order</span>
  "status": "CONFIRMED",
  "totalAmount": 56000
}
<span class="warn2">// replayed. no second order. no second charge.</span></div><br>`,
            },
            {
                label: "Now without the key",
                danger: true,
                out: `<div class="cmd">$ curl -X POST /v1/orders \\
    -d '{ ...identical body... }'   <span class="dimc"># no Idempotency-Key</span></div>
<div><span class="er">HTTP/1.1 202 Accepted</span>
{
  "id": "<span class="er">ord_4b71f3</span>",       <span class="er"><- a brand new order</span>
  "totalAmount": 56000
}
<span class="er">// two orders. two charges. one refund ticket. one angry customer.</span></div><br>`,
            },
        ],
        foot: "One header. That is the entire difference between a system people trust and a system people ~screenshot and post on Twitter~.",
    },

    {
        type: "bullets",
        kicker: "The rest of the rules",
        h: "Four things that will bite you",
        items: [
            "**Version in the path**. `/v1/`. At 2 AM you will be reading a log line and you will need to know which contract it was",
            "**Cursor pagination, not `?page=2`**. Offset breaks the moment somebody inserts a row. You get a duplicate or you miss one",
            "**One error envelope everywhere**. `{ error: { code, message, details, traceId } }`. That `traceId` is what you paste into the bug report",
            "**The gateway does auth, rate limits and routing**. The moment order rules live in your gateway, your gateway *is* your monolith",
        ],
        foot: "None of these are hard. All of them are skipped, and all of them show up in code review.",
    },

    {
        type: "iview",
        h: "API design is the most examinable thing here",
        bad: '"I would create REST APIs for all the entities." Then a list of CRUD endpoints that could have been generated by a tool. Because it could have been.',
        good: '"`POST /v1/orders`, with an idempotency key. Because the client will retry and I do not want double charges. `202` not `201`, because acceptance is async."',
        foot: 'Every clause after "because" is a point. The endpoints themselves are worth almost nothing.',
    },

    /* ---------- 10. FD · SCALE ---------- */
    {
        type: "moves",
        on: 5,
        note: "Move five. **Last.** Everything you have heard about scale is useless until the four moves before it are done.",
    },

    {
        type: "load",
        h: "Before you panic, do the arithmetic",
        foot: "Drag it. At 1 million orders a day you are at roughly ~12 a second~, peaking around 60. **One Postgres box does that without breathing hard.**",
    },

    {
        type: "statement",
        h: 'Half of all "scaling problems" are problems people invented.',
        sub: "The other half are real, and they arrive in a **specific order**.",
    },

    {
        type: "bullets",
        kicker: "Do these in order. Actually in order.",
        h: "The scaling ladder",
        items: [
            "**Measure.** You do not know where it is slow. You think you do. You do not.",
            "**Fix the query.** An index beats a cluster, and it is free.",
            "**Cache** the hot reads.",
            "**Scale up**. Boring, instant, works, and the ceiling is higher than your traffic.",
            "**Scale out**. Stateless app servers behind a load balancer. *Stateless* is the load-bearing word.",
            "**Read replicas**. Fixes reads, not writes, and hands you replication lag.",
            "**Shard.** Last resort. Painful. Choose the key carefully. Here, by city.",
        ],
        foot: "I have never met anyone who enjoyed step 7. That is worth knowing before you start there.",
    },

    {
        type: "statement",
        kicker: "Step 5, the trap",
        h: '"Stateless" means the session is not in your server\'s memory.',
        sub: "Put a user session in a local variable and your second server has no idea who anybody is. Now you need sticky sessions, and you have ~undone your own scaling~ while adding a machine.",
    },

    {
        type: "statement",
        kicker: "Step 6, the trap",
        h: "The user posts a review, refreshes, and it is gone.",
        sub: '**Replication lag.** The write went to the primary; the refresh read a replica that has not caught up. Nothing is broken. This is why *"read your own writes"* is a thing you have to design for, not assume.',
    },

    {
        type: "cache",
        h: "What a cache actually buys you",
        foot: "Drag it. **90% is the cheapest 10× you will ever get**. And notice the server count falls off a cliff long before you reach 99.",
    },

    {
        type: "cards",
        h: "Cache the right things",
        cols: 2,
        items: [
            {
                t: "Menus and restaurant lists. Yes",
                d: "Read-heavy by 100 to 1. Slightly stale is completely fine. Redis, TTL in minutes.",
                k: "acc",
            },
            {
                t: "Images. Yes, and not by you",
                d: "CDN. An image served off your app server is money you are setting on fire.",
                k: "acc",
            },
            {
                t: "Order status. No",
                d: "Users refresh it obsessively while hungry. A stale status is a support ticket.",
                k: "dngr",
            },
            {
                t: "Anything you could be sued over. No",
                d: "If being wrong for 60 seconds is a legal problem, it is not cacheable.",
                k: "dngr",
            },
        ],
        foot: "And the failure nobody warns you about: **cache stampede.** A hot key expires, 5,000 requests hit the database in the same millisecond. Jittered TTLs, or a lock.",
    },

    {
        type: "poll",
        h: "100,000 riders. GPS every 3 seconds. Where does it go?",
        opts: [
            { t: "The main orders database" },
            { t: "Redis / an in-memory geospatial store" },
            { t: "Nowhere. Stream it straight through" },
            { t: "A log file, and we will figure it out later" },
        ],
        verdict:
            "**B and C, together.** That is ~33,000 writes a second~ of data that is worthless in ten seconds. **Not all data deserves your database**. Putting this next to your financial records is a category error.",
    },

    {
        type: "statement",
        kicker: "And now the second half of that question",
        h: "How does the moving dot reach the customer's screen?",
        sub: "If the app polls `GET /driver-location` every three seconds, you have just built a **33,000-request-per-second DDoS against yourself**, and you paid for the servers.",
    },

    {
        type: "statement",
        h: "The customer does not want to *ask*. They want to be **told**.",
        sub: "That is a WebSocket. A connection that stays open and pushes. And *that* is event-driven architecture: not a buzzword, a thing we arrived at because request-response was structurally the wrong shape.",
    },

    {
        type: "split",
        kicker: "Two shapes, chosen per problem",
        h: "Ask, or be told",
        lt: "Request / response",
        lk: "",
        l: `<p style="color:var(--muted);font-size:clamp(14px,1.35vw,23px);line-height:1.5">
    <b>"What is my order status?"</b><br><br>
    Client asks. Server answers. Done.<br><br>
    Simple, cacheable, debuggable, and correct for <em>almost everything</em>.</p>`,
        rt: "Event-driven / push",
        rk: "acc",
        r: `<p style="color:var(--muted);font-size:clamp(14px,1.35vw,23px);line-height:1.5">
    <b>"Where is my rider, right now?"</b><br><br>
    Client subscribes. Server pushes when something changes.<br><br>
    Also: order confirmations, notifications, anything with <em>many listeners</em>.</p>`,
        foot: "Same system. Both patterns. The skill is knowing which problem you are holding. And I have shipped the WebSocket side of this in production, it is fiddlier than it looks.",
    },

    {
        type: "mermaid",
        h: "The whole thing, at 10 million users",
        cap: "Every box on here was earned by a specific failure or a specific number. **None of it was chosen because it sounded impressive.**",
        code: `graph TB
    U[10M users]
    CDN[CDN<br/>images, static]
    LB[Load Balancer]
    A1[App 1]
    A2[App 2]
    A3[App N]
    CACHE[(Redis<br/>menus, sessions)]
    PRIM[(Primary DB<br/>writes)]
    REP1[(Read Replica)]
    REP2[(Read Replica)]
    WS{{WebSocket tier<br/>live tracking}}
    GEO[(Redis Geo)]
    MQ[[Queue]]
    U --> CDN
    U --> LB
    U -.stays open.-> WS
    LB --> A1
    LB --> A2
    LB --> A3
    A1 --> CACHE
    A2 --> CACHE
    A3 --> CACHE
    CACHE -.miss.-> PRIM
    A1 --> PRIM
    A2 --> REP1
    A3 --> REP2
    PRIM -.lag.-> REP1
    PRIM -.lag.-> REP2
    A1 --> MQ
    WS --> GEO`,
    },

    {
        type: "iview",
        h: '"How would you scale this?"',
        bad: '"Add a load balancer, use Kafka, shard the database, put Redis in front." Four tools, zero numbers, no order. The interviewer has heard this exact sentence today already.',
        good: '"At 60 writes a second I would not scale it at all. Here is the number that would change my mind, and here is the first thing I would do when it arrives."',
        foot: "~Restraint reads as seniority.~ Reaching for the biggest tool reads as the opposite.",
    },

    /* ============================================================
   PHASE 3. BANKING DELTAS · THE REAL WORLD · CLOSE
   ============================================================ */

    /* ---------- 11. BANKING ---------- */
    {
        type: "section",
        tag: "Part 3",
        h: "Money changes everything",
        sub: "Same five moves. I am not doing them again. What I want to show you is where banking **diverges**. Because that is the interesting part.",
    },

    {
        type: "statement",
        kicker: "Tier 1. The one that matters most",
        h: "In food delivery a double tap was annoying. Here it is ~₹5,000 leaving an account twice.~",
        sub: "That is not a bug report. That is a **regulator**.",
    },

    {
        type: "poll",
        h: 'They tap "Send ₹5,000". Network hiccups. They tap again.',
        opts: [
            { t: "Two transfers. The user did tap twice", v: "0" },
            { t: "One transfer, and it is not by accident", v: "1" },
            { t: "One transfer, because the database will catch it", v: "0" },
            { t: "Depends how fast they tapped", v: "0" },
        ],
        verdict:
            "**One.** And nothing about that is automatic. The database has *no idea* those two requests meant the same thing. You have to design it.",
    },

    {
        type: "bullets",
        kicker: "The mechanism",
        h: "Exactly-once, honestly",
        items: [
            "**One key per intent.** The client generates it once, not once per retry",
            "**Key maps to result.** The same key again returns the stored result and does no work",
            "**Same transaction.** Store the key with the money movement, or you have moved the race condition somewhere subtler",
            "**Never blind-retry** a transfer whose response you did not see",
        ],
        foot: "The whole idea fits on one slide. Getting it *slightly* wrong is how real institutions lose real money.",
    },

    {
        type: "split",
        kicker: "Tier 2. And this is the good one",
        h: "Never store a balance. Store a ledger.",
        lt: "What almost everyone writes",
        lk: "dngr",
        l: `<pre class="code"><span class="k">UPDATE</span> accounts
   <span class="k">SET</span> balance = balance - 5000
 <span class="k">WHERE</span> id = <span class="s">'A'</span>;</pre>
 <p style="margin-top:.7em;color:var(--muted)">Now tell me: <b>why</b> is the balance ₹4,300? What happened? <span class="bad">You cannot answer.</span> You overwrote the evidence.</p>`,
        rt: "What banks actually do",
        rk: "acc",
        r: `<pre class="code"><span class="k">INSERT</span> ledger  DEBIT   A  5000
<span class="k">INSERT</span> ledger  CREDIT  B  5000
<span class="c">-- every entry pair sums to zero</span></pre>
 <p style="margin-top:.7em;color:var(--muted)">Append-only. Immutable. Balance is <b>derived</b>, never stored. A bug can never <em>lose</em> money. Worst case it books a wrong entry, and you can see it and correct it with another entry.</p>`,
        foot: "This one idea is what separates a demo from something you would trust with your salary.",
    },

    {
        type: "mermaid",
        h: "A transfer, done properly",
        cap: "Idempotency check, ledger write, and the notification **outside** the money path. The SMS gateway being down must never roll back a transfer.",
        code: `sequenceDiagram
    autonumber
    participant C as Client
    participant T as Transfer Service
    participant I as Idempotency Store
    participant L as Ledger, append only
    participant Q as Event Bus
    C->>T: POST /v1/transfers<br/>Idempotency-Key: 7f3a
    T->>I: seen this key?
    alt key already used
        I-->>T: yes - stored result
        T-->>C: 200 OK (no money moved)
    else new key
        I-->>T: no
        T->>L: DEBIT A 5000
        T->>L: CREDIT B 5000
        T->>I: store key to result
        Note over T,L: one transaction, entries sum to zero
        T->>Q: publish TransferCompleted
        T-->>C: 201 Created
    end
    Q--)C: SMS, email, push (async fanout)`,
    },

    {
        type: "statement",
        kicker: "Tier 2. The word from earlier, with real stakes",
        h: "No two-phase commit across services. **Sagas.**",
        sub: "Debit, credit, notify. Spread across services you cannot lock together. It is the same compensating-action idea from the food order, except now the compensation is an *accounting entry* rather than a refund email.",
    },

    {
        type: "table",
        kicker: "Tier 1. And this is graded",
        h: "Which UI approach, and why",
        head: ["", "Server-rendered HTML", "React SPA", "HTMx"],
        rows: [
            ["JavaScript shipped", "~none", "large bundle", "~14KB"],
            ["Where logic lives", "server", "**client**", "server"],
            ["First paint", "fast", "slow (bundle + hydrate)", "fast"],
            [
                "Security posture",
                "best. Little on an untrusted client",
                "tokens, XSS surface, bigger attack area",
                "good",
            ],
            ["Team cost", "low", "high (build chain, state)", "low"],
            [
                "Best for",
                "statements, forms, regulated flows",
                "dashboards, charts, trading views",
                "most CRUD banking screens",
            ],
        ],
        foot: "Notice there is no ~winner~ column. There is not one.",
    },

    {
        type: "bullets",
        kicker: "The sentence that gets the marks",
        h: "How to justify a UI choice",
        items: [
            "**How deep is the interactivity?** A transfer form is not a trading terminal",
            "**What can your team actually ship and maintain?**",
            "**What is your security and regulatory posture?** Server-rendered means less logic and less data on a machine you do not control",
            "**What devices and networks do your users really have?** Not yours. *theirs*",
        ],
        foot: "For a bank, most screens are forms and tables, and server-rendered wins three of those four. React is right for a live portfolio view and over-engineered for a fund transfer. And saying **which parts get which** is worth more than picking one and defending it everywhere.",
    },

    {
        type: "statement",
        kicker: "The thing you will not hear in college",
        h: "In a real enterprise product it is not one choice.",
        sub: 'I work on **micro-frontends**. Different teams shipping different parts of the same interface independently. So the honest answer to "React or HTML" is usually *both, in different places*. And the hard part is making it feel like one product.',
    },

    {
        type: "cards",
        kicker: "Tier 3. If we have time",
        h: "Three more deltas worth knowing",
        cols: 3,
        items: [
            {
                t: "Security is a design input",
                d: "Not middleware you sprinkle on later. 2FA gates the **transfer**, not just the login. And if your admin can edit the audit log, ~you do not have an audit log~.",
                k: "dngr",
            },
            {
                t: "CAP is a per-feature choice",
                d: 'The ledger picks **consistency**. Refuse the transfer rather than get it wrong. "Show my recent transactions" picks **availability**. Slightly stale is fine.',
                k: "",
            },
            {
                t: "The hot account problem",
                d: "Shard by account id and it works beautifully. Until one merchant takes 10,000 credits a minute and a single shard melts.",
                k: "",
            },
        ],
        foot: "Being able to say *which* feature gets which CAP trade-off is what senior sounds like.",
    },

    /* ---------- 12. HOW IT REALLY WORKS ---------- */
    {
        type: "section",
        tag: "Part 4",
        h: "How this actually works at work",
        sub: "The part you cannot get from a YouTube video.",
    },

    {
        type: "statement",
        kicker: "The thing nobody tells you",
        h: "You do not start by coding.",
        sub: "I know that sounds like something a professor says. It is not. It is **economics**. Changing a paragraph costs nothing. Changing a deployed service costs a sprint.",
    },

    {
        type: "bullets",
        h: "What a design doc actually contains",
        items: [
            "What is the **problem**",
            "What are the **constraints**",
            "What **options** did I consider",
            "What did I **pick**",
            "What am I **giving up**",
            "How does it **roll out**, and what could go wrong",
        ],
        foot: "The two everyone skips: ~options considered~ and ~what I am giving up~. A proposal with no alternatives and no downsides does not read as confident. It reads as **unexamined**. And that is the first thing a reviewer attacks.",
    },

    {
        type: "code",
        h: "An ADR is five fields",
        code: `<span class="c"># Title</span>         Use cursor pagination for all list endpoints
<span class="c"># Status</span>        Accepted
<span class="c"># Context</span>       Offset pagination skips or duplicates rows when
                data is inserted between page requests.
<span class="c"># Decision</span>      Opaque cursor tokens. Limit capped at 100.
<span class="k"># Consequences</span>  <span class="w">No random page access. Clients must follow "next".
                Existing ?page= callers break at v2.</span>`,
        foot: '**Consequences** is the field everyone leaves blank. It is also the only one that matters in two years, when somebody asks "why the hell is it built like this" and you do not work there any more.',
    },

    {
        type: "statement",
        h: "Writing is the job.",
        sub: "Not the fun part. The actual job. The engineer who writes clearly wins the argument, and it is usually **not** the best coder in the room.",
    },

    /* ---------- 13. THE SLM STORY ---------- */
    {
        type: "section",
        tag: "A true story",
        h: "My favourite thing I have worked on",
        sub: "It never shipped. I will get to that.",
    },

    {
        type: "statement",
        kicker: "The setup",
        h: "A RAG pipeline in production. Time to first token: **ten to fifteen seconds.**",
        sub: "This was the GPT-3.5-turbo era, when everything was slow. But ten seconds is unusable, and the whole team was on it.",
    },

    {
        type: "statement",
        kicker: "What everyone assumed",
        h: "Retrieval is slow. Reranking is slow. Generation is slow.",
        sub: "So that is where the effort went. Vector index tuning, reranker swaps, prompt trimming. Completely reasonable. I would have guessed the same.",
    },

    {
        type: "statement",
        kicker: "What I did instead",
        h: "I did not optimise anything. I instrumented every segment and **measured it.**",
        sub: "And sitting there, in a stage nobody was looking at: two to three seconds in routing. Just deciding which agent should handle the query. A full cloud LLM call, over the network, to pick a label from a list.",
    },

    {
        type: "statement",
        kicker: "The insight",
        h: "Routing is not reasoning. Routing is **classification.**",
        sub: "We were paying reasoning prices, and reasoning latency, for a classification problem.",
    },

    {
        type: "mermaid",
        h: "So I built it and benchmarked it",
        cap: "A fine-tuned small model, on CPU. No GPU, no network call. In benchmarks: two to three seconds down to under seventy milliseconds, with inference cost per 100k requests dropping close to nothing.",
        code: `graph LR
    Q1[Query] -->|BEFORE| L1["Cloud LLM call<br/>just to pick a label<br/><b>2 to 3 seconds</b>"]
    L1 --> A1[Agent]
    Q2[Query] -->|AFTER| S["Fine-tuned SLM<br/>CPU, classifier<br/><b>under 70 ms</b>"]
    S -->|high confidence| A2[Agent]
    S -->|low confidence| L2[Cloud LLM<br/>fallback]
    L2 --> A2`,
    },

    {
        type: "bullets",
        kicker: "And I did not pretend it was strictly better",
        h: "What it gave up",
        items: [
            "**It cannot reason.** Hand it a query shape it has never seen and it will confidently give you the wrong label",
            "**It needs retraining** every time you add an agent",
            "**So it was never a replacement.** The proposal was hybrid",
            "**Fast path, then fallback.** 70ms when confident, falls through to the cloud model when it is not",
        ],
        foot: "Fast path handles the common case. Slow path catches the tail.",
    },

    {
        type: "statement",
        kicker: "And now the question",
        h: "Where have you seen that shape tonight?",
        sub: "*(wait for it)*",
    },

    {
        type: "statement",
        h: "Cache **hit.** Cache **miss.**",
        sub: "Exactly the same idea. A fast path for the common case, a correct path for the rest. That is not an AI pattern, it is a systems pattern, and once you see it you start seeing it everywhere.",
    },

    {
        type: "statement",
        kicker: "Here is the part I actually want to tell you",
        h: "It was reviewed. People liked it. And it never shipped.",
        sub: "Priorities were elsewhere that quarter. Then the architecture moved on, faster models arrived, and the problem I had carefully solved quietly stopped existing.",
    },

    {
        type: "iview",
        h: "Which felt bad for about a week",
        bt: "What I thought at the time",
        bad: '"I spent all that effort and nothing went to production, so it was wasted."',
        gt: "What I think now",
        good: "Most good ideas do not ship. That is not failure, that is just how a roadmap works. The measurement was real, the argument was real, and I still reach for that pattern.",
        foot: "Nobody tells you this at college, so I will: a lot of your best work will not ship, and it still counts.",
    },

    {
        type: "bullets",
        kicker: "Three things worth taking",
        h: "What the story is actually about",
        items: [
            "**Measure before you optimise.** The bottleneck is rarely where the room is looking",
            "**The most capable component is often the wrong component.** Capability is not the same as fit",
            "**Design for degradation.** A fast path with an honest fallback beats one path that has to always be right",
        ],
        foot: "All three apply to the food delivery system we built two hours ago. None of them are about AI.",
    },

    {
        type: "statement",
        kicker: "And one more, which is really the point",
        h: "A proposal with numbers survives a room. A proposal without them does not.",
        sub: "I was two years in and nowhere near the most experienced person in that discussion. What I had was a spreadsheet nobody else had bothered to make.",
    },

    /* ---------- 14. AI IN THE LOOP ---------- */
    {
        type: "split",
        kicker: "My actual day job, so let me be straight",
        h: "AI in design work",
        lt: "Genuinely good at",
        lk: "acc",
        l: `<p style="color:var(--muted);font-size:clamp(14px,1.35vw,23px);line-height:1.55">
    Being a rubber duck at midnight.<br><br>
    Turning a paragraph of prose into a <b>diagram</b>.<br><br>
    Drafting the ADR for a decision you already made.<br><br>
    Reviewing a spec for inconsistency. Better than me, because it does not get bored.<br><br>
    <em>"What did I not consider here?"</em></p>`,
        rt: "Bad at, and this matters",
        rk: "dngr",
        r: `<p style="color:var(--muted);font-size:clamp(14px,1.35vw,23px);line-height:1.55">
    It does not know your <b>constraints</b>.<br><br>
    Your load profile. Your team. Your legacy system. The thing your VP said in a meeting.<br><br>
    It will confidently design a beautiful system <em>for a problem you do not have</em>.<br><br>
    You still have to know what good looks like.</p>`,
    },

    {
        type: "mermaidsrc",
        h: "This is how a modern design doc actually gets written",
        cap: "Describe it in English, get this back, **paste it into the pull request**. It renders in GitHub, it lives next to the code, and it dies when the code dies, instead of rotting in a Drive folder from 2023.",
        code: `graph LR
  C[Client] --> G[API Gateway]
  G --> O[Order Service]
  O --> Q[[Queue]]
  Q --> D[Dispatch]
  Q --> N[Notification]
  O --- DB[(Order DB)]`,
    },

    /* ---------- 15. CLOSE ---------- */
    {
        type: "moves",
        note: 'So. **"Design a system that lets 10 million people order food."**',
        out: "That is your answer. Not React-Node-MongoDB.",
    },

    {
        type: "statement",
        kicker: "If you forget everything else tonight",
        h: "The bottleneck is never where everyone is looking.",
        sub: "**Go measure it.** True of pipelines. True of databases. And, for whatever it is worth, true of careers: I spent years anxious about the thing I was worst at, and what actually helped was something nobody was grading.",
    },

    {
        type: "outro",
        kicker: "Thank you. Now please ask me anything",
        h: "You can reach out to me via...",
        sub: "If you are building something and want the design pulled apart, or you are doing the Agentic AI course and want a second opinion, my inbox is open. Custom agentic frameworks and MCP servers are what I do all day, so I am happy to talk about it.",
        links: [
            { t: "tejasmorkar@gmail.com", u: "mailto:tejasmorkar@gmail.com" },
            { t: "LinkedIn", u: "https://linkedin.com/in/tejasmorkar" },
            { t: "GitHub", u: "https://github.com/tejasmorkar" },
            { t: "tejasmorkar.dev", u: "https://tejasmorkar.dev" },
        ],
        foot: "Tejas Morkar · AI Software Engineer (MTS II), Cohesity · PCCOE Computer Engineering, 2018 to 2022.<br>Press P at any time to export every slide, with every step revealed, as a PDF.",
    },
];
