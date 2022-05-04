import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  action_cards = [
    {
      title: "Собрать компьютер",
      body: "Соберите конфигурацию компьютера на свой вкус!",
      src: "/assets/action1.png"
    },
    {
      title: "Подать заявку",
      body: "Подайте заявку на сборку компьютера с выбранной конфигурацией!",
      src: "/assets/action2.png"
    },
    {
      title: "Сравнить компоненты",
      body: "Выберите компоненты одной категории и узнайте, какой из них лучше!",
      src: "/assets/action3.png"
    },
  ]

  part_cards = [
    {
      title: "Материнские платы",
      src: "/assets/motherboard.png"
    },
    {
      title: "Центральные процессоры",
      src: "/assets/cpu.png"
    },
    {
      title: "Оперативная память",
      src: "/assets/memories.png"
    },
  ]

  articles = [
    {
      title: "Гайд: Сборка компьютера - какие компоненты необходимы, с чего начать",
      body: "Данная статья разложит по полочкам ваши знания о компонентах и их подборе для компьютера мечты!"
    },
  ]

  constructor() {}

  ngOnInit() {

  }

}
