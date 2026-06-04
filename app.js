/* ==========================================================================
   INTERACTIVE NEON PURPLE CONTROLLER SCRIPT (UPDATED)
   ========================================================================== */

let appState = {
  user: null,
  currentRole: null,
  activeCategory: null, 
  selectedShop: null,
  cart: [], 
};

// Application Global DOM Elements Hook
const viewLandingStart = document.getElementById("view-landing-start");
const viewNeonAuth = document.getElementById("view-neon-auth");
const viewRoleSelection = document.getElementById("view-role-selection");
const viewBuyerDashboard = document.getElementById("view-buyer-dashboard");
const viewBuyerShops = document.getElementById("view-buyer-shops");
const viewBuyerMenu = document.getElementById("view-buyer-menu");
const viewCheckoutPanel = document.getElementById("view-checkout-panel");

const canvasContainer = document.getElementById("canvas-container");
const dotsCanvas = document.getElementById("dotsCanvas");

const authTitleInjection = document.getElementById("auth-title-injection");
const otpAlertBanner = document.getElementById("otp-alert-banner");
const btnDispatchOtp = document.getElementById("btn-dispatch-otp");
const inputAuthOtp = document.getElementById("neon-auth-otp");
const inputAuthEmail = document.getElementById("neon-auth-email");
const inputAuthPassword = document.getElementById("neon-auth-password");
const btnSubmitNeonAuth = document.getElementById("btn-submit-neon-auth");

const btnGlobalLogout = document.getElementById("btn-global-logout");
const btnGlobalOrders = document.getElementById("btn-global-orders");

const shopCardsContainer = document.getElementById("shop-cards-container");
const shopListTitleInjection = document.getElementById("shop-list-title-injection");
const menuHeaderInjection = document.getElementById("menu-header-injection");
const menuItemsContainer = document.getElementById("menu-items-container");

const floatingCartTrigger = document.getElementById("floating-cart-trigger");
const floatingCartCountBadge = document.getElementById("floating-cart-count-badge");

const checkoutBasketItemsList = document.getElementById("checkout-basket-items-list");
const checkoutSummarySubtotal = document.getElementById("checkout-summary-subtotal");
const checkoutSummaryTotal = document.getElementById("checkout-summary-total");
const btnMapGeolocate = document.getElementById("btn-map-geolocate");
const mapStatusText = document.getElementById("map-status-text");
const checkoutManualAddress = document.getElementById("checkout-manual-address");
const btnSubmitFinalOrder = document.getElementById("btn-submit-final-order");
const btnClearAddress = document.getElementById("btn-clear-address");

function showOnly(targetViewId) {
  // Hide all panels
  viewLandingStart.style.display = "none";
  viewNeonAuth.style.display = "none";
  viewRoleSelection.style.display = "none";
  viewBuyerDashboard.style.display = "none";
  viewBuyerShops.style.display = "none";
  viewBuyerMenu.style.display = "none";
  viewCheckoutPanel.style.display = "none";
  document.getElementById("view-fastfoodVendor").style.display = "none";
  document.getElementById("view-groceryVendor").style.display = "none";
  document.getElementById("view-deliveryPerson").style.display = "none";

  // Hide or Display full page dots canvas overlay
  if (targetViewId === "landing" || targetViewId === "auth" || targetViewId === "role-selection") {
    canvasContainer.style.display = "block";
  } else {
    canvasContainer.style.display = "none";
  }

  // Display targeting view element node
  if (targetViewId === "landing") viewLandingStart.style.display = "block";
  else if (targetViewId === "auth") viewNeonAuth.style.display = "flex";
  else if (targetViewId === "role-selection") viewRoleSelection.style.display = "block";
  else if (targetViewId === "buyer-dashboard") viewBuyerDashboard.style.display = "block";
  else if (targetViewId === "buyer-shops") viewBuyerShops.style.display = "block";
  else if (targetViewId === "buyer-menu") viewBuyerMenu.style.display = "block";
  else if (targetViewId === "buyer-checkout") viewCheckoutPanel.style.display = "block";
  else if (targetViewId === "fastfoodVendor") document.getElementById("view-fastfoodVendor").style.display = "block";
  else if (targetViewId === "groceryVendor") document.getElementById("view-groceryVendor").style.display = "block";
  else if (targetViewId === "deliveryPerson") document.getElementById("view-deliveryPerson").style.display = "block";

  // Handle Action Trigger display configuration
  if (appState.user && appState.currentRole === "buyer" && appState.cart.length > 0 && targetViewId !== "buyer-checkout") {
    floatingCartTrigger.style.display = "flex";
  } else {
    floatingCartTrigger.style.display = "none";
  }

  if (appState.user) {
    btnGlobalLogout.classList.remove("hidden");
  } else {
    btnGlobalLogout.classList.add("hidden");
    btnGlobalOrders.classList.add("hidden");
  }
}

// Directly routes to the dashboard based on role selection since authentication is already complete
function handleRoleCardSelection(roleString) {
  appState.currentRole = roleString;
  if (roleString === "buyer") {
    showOnly("buyer-dashboard");
  } else {
    showOnly(roleString);
  }
}

function returnToStartPage() {
  appState.currentRole = null;
  showOnly("landing");
}

btnDispatchOtp.addEventListener("click", () => {
  if (!inputAuthEmail.value.includes("@")) {
    alert("Please supply a valid campus email descriptor target.");
    return;
  }
  otpAlertBanner.style.display = "block";
  inputAuthOtp.disabled = false;
  inputAuthOtp.value = "489215"; 
});

btnSubmitNeonAuth.addEventListener("click", () => {
  const emailValue = inputAuthEmail.value.trim();
  const passValue = inputAuthPassword.value.trim();
  const otpValue = inputAuthOtp.value.trim();

  if (!emailValue || !passValue) {
    alert("Please establish credential sets completely before deployment.");
    return;
  }
  if (!inputAuthOtp.disabled && otpValue !== "489215") {
    alert("Invalid OTP security token supplied.");
    return;
  }

  // Cache user context
  appState.user = { email: emailValue };
  
  // Reroute to 4 columns role selection post-login
  showOnly("role-selection");
});

btnGlobalLogout.addEventListener("click", () => {
  appState.user = null;
  appState.currentRole = null;
  appState.cart = [];
  window.location.reload();
});

function routeBuyerCategory(categoryMode) {
  appState.activeCategory = categoryMode;
  shopCardsContainer.innerHTML = "";
  
  let sourceArray = [];
  if (categoryMode === "food") {
    shopListTitleInjection.innerText = "Gourmet Kitchen Access Points";
    sourceArray = window.ANNAM_SEED.foodShops;
  } else {
    shopListTitleInjection.innerText = "Grocery & Academic Supply Hubs";
    sourceArray = window.ANNAM_SEED.groceryShops;
  }

  sourceArray.forEach(shop => {
    const card = document.createElement("div");
    card.className = "shop-neon-card";
    card.onclick = () => viewShopMenuCatalog(shop);
    
    card.innerHTML = `
      <div class="shop-img-wrapper">
        <img src="${shop.photo}" alt="${shop.name}">
        <span class="shop-badge-rating" style="position: absolute; top: 12px; right: 12px; background: rgba(9, 5, 20, 0.85); border: 1px solid var(--accent); padding: 4px 10px; border-radius: 20px; font-size: 13px; color: var(--warn); font-weight: 600;">★ ${shop.rating.toFixed(1)}</span>
      </div>
      <div class="shop-info-block" style="padding: 20px;">
        <h3 style="margin:0 0 8px; font-size:19px; font-family:'Playfair Display', serif;">${shop.name}</h3>
        <p class="muted" style="margin:0; font-size:13px;">${shop.tags.join(" • ")}</p>
      </div>
    `;
    shopCardsContainer.appendChild(card);
  });

  showOnly("buyer-shops");
}

function returnToShopListing() { routeBuyerCategory(appState.activeCategory); }

function viewShopMenuCatalog(shop) {
  appState.selectedShop = shop;
  menuHeaderInjection.innerHTML = "";
  menuItemsContainer.innerHTML = "";

  const headerCard = document.createElement("div");
  headerCard.style.cssText = "background: var(--card2); border: 1px solid var(--accent); border-radius: var(--radius); padding: 30px; margin-bottom: 40px; display: flex; align-items: center; gap: 30px;";
  headerCard.innerHTML = `
    <img src="${shop.photo}" style="width: 120px; height: 120px; object-fit: cover; border-radius: var(--radius2); border: 2px solid var(--accent);" alt="${shop.name}">
    <div>
      <h1 style="font-family:'Playfair Display', serif; margin:0 0 8px; font-size:32px;">${shop.name}</h1>
      <div class="row gap-12 align-center">
        <span class="badge success">★ ${shop.rating.toFixed(1)} Verified</span>
        <span class="muted">${shop.items.length} Elements in Stock</span>
      </div>
    </div>
  `;
  menuHeaderInjection.appendChild(headerCard);

  shop.items.forEach(item => {
    const itemCard = document.createElement("div");
    itemCard.className = "menu-neon-item";
    
    const existingCartRecord = appState.cart.find(c => c.item.id === item.id);
    const counterValue = existingCartRecord ? existingCartRecord.count : 0;

    itemCard.innerHTML = `
      <img src="${item.photo}" class="menu-item-img" alt="${item.name}">
      <div class="menu-item-body">
        <h4 style="margin:0; font-size:16px; font-weight:600; line-height:1.4;">${item.name}</h4>
        <div style="font-size: 18px; color: var(--accent2); font-weight: 700; margin: 10px 0;">₹${item.price}</div>
        <div style="margin-top:auto; padding-top:12px;">
          ${counterValue === 0 ? 
            `<button class="btn btn-primary" style="width:100%; padding:8px 12px; font-size:13px;" onclick="modifyCartPayload('${item.id}', 1)">Add to Basket</button>` :
            `<div class="row align-center between" style="background:rgba(168,85,247,0.1); border:1px solid var(--accent); padding:4px; border-radius:var(--radius2);">
               <button class="btn" style="padding:4px 10px; background:transparent; border:none;" onclick="modifyCartPayload('${item.id}', -1)">-</button>
               <strong style="color:var(--accent2)">${counterValue}</strong>
               <button class="btn" style="padding:4px 10px; background:transparent; border:none;" onclick="modifyCartPayload('${item.id}', 1)">+</button>
             </div>`
          }
        </div>
      </div>
    `;
    menuItemsContainer.appendChild(itemCard);
  });

  showOnly("buyer-menu");
}

function returnToActiveMenu() {
  if (appState.selectedShop) { viewShopMenuCatalog(appState.selectedShop); } 
  else { showOnly("buyer-dashboard"); }
}

function modifyCartPayload(itemId, operationalDelta) {
  let targetItem = null;
  if (appState.activeCategory === "food") {
    appState.selectedShop.items.forEach(i => { if(i.id === itemId) targetItem = i; });
  } else {
    window.ANNAM_SEED.groceryShops.forEach(shop => {
      shop.items.forEach(i => { if(i.id === itemId) targetItem = i; });
    });
  }

  if (!targetItem) return;

  const existingIndex = appState.cart.findIndex(c => c.item.id === itemId);
  if (existingIndex > -1) {
    appState.cart[existingIndex].count += operationalDelta;
    if (appState.cart[existingIndex].count <= 0) {
      appState.cart.splice(existingIndex, 1);
    }
  } else if (operationalDelta > 0) {
    appState.cart.push({ item: targetItem, count: 1 });
  }

  let absoluteUnitVolume = 0;
  appState.cart.forEach(c => absoluteUnitVolume += c.count);
  floatingCartCountBadge.innerText = absoluteUnitVolume;

  if (viewBuyerMenu.style.display === "block" && appState.selectedShop) {
    viewShopMenuCatalog(appState.selectedShop);
  } else {
    if (absoluteUnitVolume > 0 && viewCheckoutPanel.style.display !== "block") {
      floatingCartTrigger.style.display = "flex";
    } else {
      floatingCartTrigger.style.display = "none";
    }
  }
}

function routeToCheckoutPanel() {
  checkoutBasketItemsList.innerHTML = "";
  let aggregateSubtotalValue = 0;

  appState.cart.forEach(cartRecord => {
    let computedItemCost = cartRecord.item.price * cartRecord.count;
    aggregateSubtotalValue += computedItemCost;

    const rowElement = document.createElement("div");
    rowElement.className = "row between align-center";
    rowElement.style.paddingBottom = "12px";
    rowElement.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    rowElement.innerHTML = `
      <div>
        <strong style="display:block; color:#fff; font-size:14px;">${cartRecord.item.name}</strong>
        <span class="muted" style="font-size:12px;">₹${cartRecord.item.price} × ${cartRecord.count}</span>
      </div>
      <div style="font-weight:600; color:var(--accent2)">₹${computedItemCost}</div>
    `;
    checkoutBasketItemsList.appendChild(rowElement);
  });

  checkoutSummarySubtotal.innerText = "₹" + aggregateSubtotalValue;
  checkoutSummaryTotal.innerText = "₹" + (aggregateSubtotalValue + 15);

  showOnly("buyer-checkout");
}

btnMapGeolocate.addEventListener("click", () => {
  mapStatusText.className = "badge success";
  mapStatusText.innerText = "✓ Satellite Stream Synced";
  checkoutManualAddress.value = "Hostel Grid Coordinates Node: Latitude 29.02, Longitude 79.48 [Auto Detected Campus Reference Zone]";
});

btnClearAddress.addEventListener("click", () => {
  checkoutManualAddress.value = "";
  mapStatusText.className = "badge warning";
  mapStatusText.innerText = "Awaiting Satellite Ping...";
});

btnSubmitFinalOrder.addEventListener("click", () => {
  if (!checkoutManualAddress.value.trim()) {
    alert("Please establish delivery location coordinates before distribution.");
    return;
  }
  const runner = (window.ANNAM_SEED && window.ANNAM_SEED.deliveryPeople && window.ANNAM_SEED.deliveryPeople[0]) ? window.ANNAM_SEED.deliveryPeople[0] : { name: 'Campus Runner' };
  const orderId = '#ORD-' + Math.floor(1000 + Math.random() * 9000);

  // Open confirmation + tracking popup
  openOrderPlacedWindow(orderId, runner);

  appState.cart = [];
  floatingCartCountBadge.innerText = "0";
  showOnly("buyer-dashboard");
});

// Opens a small popup window that shows order confirmation and provides a "Locate delivery person" map.
function openOrderPlacedWindow(orderId, runner) {
  const w = 420, h = 560;
  const left = (screen.width/2)-(w/2);
  const top = (screen.height/2)-(h/2);
  const popup = window.open('', '_blank', `toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=${w},height=${h},top=${top},left=${left}`);
  if (!popup) { alert('Popup blocked. Please allow popups to see order confirmation and tracking.'); return; }

  const html = `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Order Confirmed</title>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <style>
        body{font-family:Arial,Helvetica,sans-serif;background:#0b0620;color:#fff;padding:18px}
        .card{background:rgba(255,255,255,0.04);border:1px solid rgba(168,85,247,0.12);padding:14px;border-radius:10px}
        h1{font-size:20px;margin:0 0 8px}
        #map{height:320px;border-radius:8px;margin-top:12px}
        .btn{display:inline-block;padding:10px 14px;border-radius:8px;background:#a855f7;color:#fff;border:none;cursor:pointer;margin-top:12px}
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Order Placed</h1>
        <div>Order ID: <strong>${orderId}</strong></div>
        <div style="margin-top:8px;">Thank you — your food will arrive shortly. Assigned runner: <strong>${runner.name}</strong></div>
        <button id="locateBtn" class="btn">Locate Delivery Person</button>
        <div id="mapContainer" style="display:none">
          <div id="map"></div>
          <div style="margin-top:8px; font-size:13px; color:#cfc9ff">This view uses your browser location; allow geolocation if prompted.</div>
        </div>
      </div>
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <script>
        const locateBtn = document.getElementById('locateBtn');
        const mapContainer = document.getElementById('mapContainer');

        function simulateMover(marker, destLatLng, step=0.0005) {
          const id = setInterval(() => {
            const cur = marker.getLatLng();
            const lat = cur.lat + Math.sign(destLatLng.lat - cur.lat) * Math.min(step, Math.abs(destLatLng.lat - cur.lat));
            const lng = cur.lng + Math.sign(destLatLng.lng - cur.lng) * Math.min(step, Math.abs(destLatLng.lng - cur.lng));
            marker.setLatLng([lat, lng]);
            if (Math.abs(lat - destLatLng.lat) < 0.0005 && Math.abs(lng - destLatLng.lng) < 0.0005) clearInterval(id);
          }, 800);
        }

        locateBtn.addEventListener('click', () => {
          mapContainer.style.display = 'block';
          locateBtn.disabled = true;
          if (!navigator.geolocation) {
            alert('Geolocation not supported by your browser.');
            return;
          }
          navigator.geolocation.getCurrentPosition((pos) => {
            const userLat = pos.coords.latitude;
            const userLng = pos.coords.longitude;

            const map = L.map('map').setView([userLat, userLng], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

            const userMarker = L.marker([userLat, userLng]).addTo(map).bindPopup('You (delivery destination)').openPopup();

            // Start delivery marker a short distance away and simulate approach
            const deliveryStart = { lat: userLat + 0.006, lng: userLng + 0.006 };
            const deliveryMarker = L.marker([deliveryStart.lat, deliveryStart.lng], {icon: L.icon({iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', iconSize:[25,41]})}).addTo(map).bindPopup('Runner: ${runner.name}');

            simulateMover(deliveryMarker, {lat: userLat, lng: userLng});

          }, (err) => {
            alert('Unable to fetch your location: ' + (err.message || 'permission denied'));
          }, { enableHighAccuracy: true, timeout: 10000 });
        });
      <\/script>
    </body>
    </html>
  `;

  popup.document.open();
  popup.document.write(html);
  popup.document.close();
}

/* ==========================================================================
   INTERACTIVE FLOATING NEON PARTICLES CONNECTIONS BACKGROUND MATRIX
   ========================================================================== */
let particleNodeArray = [];
const targetConnectionDistance = 110;
let mouseVectorCoordinates = { x: null, y: null };

function setupInteractiveMatrixCanvas() {
  resizeDotsCanvasElement();
  window.addEventListener("resize", resizeDotsCanvasElement);
  window.addEventListener("mousemove", (e) => {
    mouseVectorCoordinates.x = e.clientX;
    mouseVectorCoordinates.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouseVectorCoordinates.x = null;
    mouseVectorCoordinates.y = null;
  });

  particleNodeArray = [];
  const targetDensityCalculatedCount = Math.floor((dotsCanvas.width * dotsCanvas.height) / 14000);
  const constrainedCount = Math.min(Math.max(targetDensityCalculatedCount, 40), 100);

  for (let idx = 0; idx < constrainedCount; idx++) {
    particleNodeArray.push({
      x: Math.random() * dotsCanvas.width,
      y: Math.random() * dotsCanvas.height,
      vectorX: (Math.random() - 0.5) * 0.45, 
      vectorY: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1.5
    });
  }
  requestAnimationFrame(renderMatrixFrameLoop);
}

function resizeDotsCanvasElement() {
  dotsCanvas.width = window.innerWidth;
  dotsCanvas.height = window.innerHeight;
}

function renderMatrixFrameLoop() {
  const context = dotsCanvas.getContext("2d");
  context.clearRect(0, 0, dotsCanvas.width, dotsCanvas.height);

  for (let i = 0; i < particleNodeArray.length; i++) {
    let n1 = particleNodeArray[i];
    
    n1.x += n1.vectorX;
    n1.y += n1.vectorY;

    if (n1.x < 0 || n1.x > dotsCanvas.width) n1.vectorX *= -1;
    if (n1.y < 0 || n1.y > dotsCanvas.height) n1.vectorY *= -1;

    context.beginPath();
    context.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(192, 132, 252, 0.65)";
    context.fill();

    for (let j = i + 1; j < particleNodeArray.length; j++) {
      let n2 = particleNodeArray[j];
      let distanceDeltaX = n1.x - n2.x;
      let distanceDeltaY = n1.y - n2.y;
      let pythagoreanDistance = Math.sqrt(distanceDeltaX * distanceDeltaX + distanceDeltaY * distanceDeltaY);

      if (pythagoreanDistance < targetConnectionDistance) {
        let alphaCalculatedFade = (1 - (pythagoreanDistance / targetConnectionDistance)) * 0.28;
        context.beginPath();
        context.moveTo(n1.x, n1.y);
        context.lineTo(n2.x, n2.y);
        context.strokeStyle = `rgba(168, 85, 247, ${alphaCalculatedFade})`;
        context.lineWidth = 1.0;
        context.stroke();
      }
    }

    if (mouseVectorCoordinates.x !== null && mouseVectorCoordinates.y !== null) {
      let mDeltaX = n1.x - mouseVectorCoordinates.x;
      let mDeltaY = n1.y - mouseVectorCoordinates.y;
      let mDistance = Math.sqrt(mDeltaX * mDeltaX + mDeltaY * mDeltaY);

      if (mDistance < targetConnectionDistance + 30) {
        let mAlphaFade = (1 - (mDistance / (targetConnectionDistance + 30))) * 0.45;
        context.beginPath();
        context.moveTo(n1.x, n1.y);
        context.lineTo(mouseVectorCoordinates.x, mouseVectorCoordinates.y);
        context.strokeStyle = `rgba(192, 132, 252, ${mAlphaFade})`;
        context.lineWidth = 1.2;
        context.stroke();
      }
    }
  }
  requestAnimationFrame(renderMatrixFrameLoop);
}

window.addEventListener("DOMContentLoaded", () => {
  setupInteractiveMatrixCanvas();
  showOnly("landing");
});