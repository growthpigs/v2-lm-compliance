import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/polymet/layouts/main-layout";
import LandingPage from "@/polymet/pages/landing-page";
import ScanResults from "@/polymet/pages/scan-results";
import ScanLoadingPage from "@/polymet/pages/scan-loading-page";
import InstructionsPromo from "@/polymet/pages/instructions-promo";
import SeoPromoPage from "@/polymet/pages/seo-promo-page";
import BookingPage from "@/polymet/pages/booking-page";

export default function MainPrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />

        <Route
          path="/scan-results"
          element={
            <MainLayout>
              <ScanResults />
            </MainLayout>
          }
        />

        <Route
          path="/scan-loading"
          element={
            <MainLayout>
              <ScanLoadingPage />
            </MainLayout>
          }
        />

        <Route
          path="/instructions-promo"
          element={
            <MainLayout>
              <InstructionsPromo />
            </MainLayout>
          }
        />

        <Route
          path="/seo-service"
          element={
            <MainLayout>
              <SeoPromoPage />
            </MainLayout>
          }
        />

        <Route
          path="/booking"
          element={
            <MainLayout>
              <BookingPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
