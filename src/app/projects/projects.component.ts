import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: any[] = [
    {
      id: 1,
      image: '../../assets/images/gym.jpg',
      title: 'Fithub-Gym',
      titleAr: 'فيت هاب جيم',
      description:
        'Gym club website that presents you with some advice for a better body and good life for you. like, Dedicated Service, qualified Trainer, and award Program',
      descriptionAr:
        'موقع لنادي رياضي يقدم لك نصائح لحياة صحية وجسم أفضل، يشمل خدمات مخصصة، مدربين مؤهلين، وبرامج تحفيزية.',
      link: 'https://fithub-gym.vercel.app/',
      github: 'https://github.com/taha-mahmoud37/Fithub-Gym',
    },
    {
      id: 2,
      image: '../../assets/images/learnnig.jpg',
      title: 'Online Learning Platform',
      titleAr: 'منصة تعليمية إلكترونية',
      description:
        'LintSchool collection of world-class online learning opportunities. The Educamp Online Learning portal provides a gateway for the public to access LintSchool’s extensive learning content.',
      descriptionAr:
        'منصة تعليمية إلكترونية تحتوي على مجموعة من الدورات العالمية التي تتيح للطلاب الوصول إلى محتوى تعليمي شامل.',
      link: 'https://online-learning-rho.vercel.app/',
      github: 'https://github.com/taha-mahmoud37/Online-Learning',
    },
    {
      id: 3,
      image: '../../assets/images/Furniture.jpg',
      title: 'Furniture Store',
      titleAr: 'متجر أثاث',
      description:
        'A product catalog website for a furniture store built with Angular, showcasing items with responsive design and modern UI.',
      descriptionAr:
        'موقع كتالوج أثاث يُظهر منتجات بتصميم عصري واستجابة ممتازة على جميع الأجهزة، تم تطويره باستخدام Angular.',
      link: 'https://furniture-psi.vercel.app/',
      github: 'https://github.com/taha-mahmoud37/Furniture',
    },
    {
      id: 4,
      image: '../../assets/images/pharma.jpg',
      title: 'Pharmacy App',
      titleAr: 'تطبيق صيدلية',
      description:
        'Website design for a pharmacy you can see the medicines available, the doctors who are working too and the timing of work available',
      descriptionAr:
        'تصميم موقع صيدلية يعرض الأدوية المتوفرة، الأطباء العاملين، ومواعيد العمل المتاحة.',
      link: 'https://medical-lap.vercel.app/',
      github: 'https://github.com/taha-mahmoud37/Medical-Lap',
    },
    {
      id: 5,
      image: '../../assets/images/movies.jpg',
      title: 'Movie App',
      titleAr: 'تطبيق أفلام',
      description:
        'Showcasing movies and series that were the trend last week and showcasing picture popular people in the cinema',
      descriptionAr:
        'يعرض الأفلام والمسلسلات الأكثر رواجًا خلال الأسبوع، ويستعرض صور أبرز الشخصيات السينمائية.',
      link: 'https://movies-lemon.vercel.app/',
      github: 'https://github.com/taha-mahmoud37/Movies',
    },
    {
      id: 6,
      image: '../../assets/images/tomato.jpg',
      title: 'Tomato Restaurant',
      titleAr: 'مطعم توماتو',
      description:
        "A restaurant website that allows you to order food online, view the menu, and see the restaurant's location on a map.",
      descriptionAr:
        'موقع مطعم يتيح لك طلب الطعام عبر الإنترنت، مشاهدة قائمة الطعام، ومعرفة موقع المطعم على الخريطة.',
      link: 'https://tomato-restaurant.vercel.app/',
      github: 'https://github.com/taha-mahmoud37/Tomato-Restaurant',
    },
  ];
}
