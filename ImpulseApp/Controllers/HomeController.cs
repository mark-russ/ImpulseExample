using Microsoft.AspNetCore.Mvc;

namespace ImpulseApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
