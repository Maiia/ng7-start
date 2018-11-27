import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  json = [
    {
      type: "radio",
      key: "name",
      templateOptions: {
        label: "Name",
        theme: "custom",
        labelProp: "firstName",
        valueProp: "id",
        options: [
          {firstName: "Sarah", id: 1},
          {firstName: "Jessica", id: 2},
          {firstName: "Parker", id: 3}
        ]
      }
    },
    {
      type: "radio",
      key: "Brave-heart",
      templateOptions: {
        label: "Brave-heart",
        theme: "custom",
        labelProp: "braveHeart",
        valueProp: "id",
        options: [
          {braveHeart: 'gravity1', type: 'image', label: "../../assets/xrabroe_serdce.jpg", id: 1},
          {braveHeart: 'gravity2', type: 'image', label: "../../assets/brave1.jpeg", id: 2},
          {braveHeart: 'gravity3', type: 'image', label: "../../assets/brave2.jpg", id: 3},
          {braveHeart: 'gravity4', type: 'image', label: "../../assets/brave3.jpg", id: 4},
          {braveHeart: 'gravity5', type: 'image', label: "../../assets/brave4.jpg", id: 5}
        ]
      }
    },
    {
      key: 'Gravity falls',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Gravity falls',
        options: [
          {
            type: 'image',
            key: 'gravity',
            label: "../../assets/wendy1.jpg",
            value: 'Sports'
          },
          {
            type: 'image',
            key: 'falls',
            label: "../../assets/wendy2.jpg",
            value: 'Movies'
          },
          {
            type: 'image',
            key: 'tweens',
            label: "../../assets/wendy3.jpg",
            value: 'Others'
          },
          {
            type: 'image',
            key: 'wendy',
            label: "../../assets/wendy4.png",
            value: 'Others'
          }
        ]
      }
    },
    {
      type: "radio",
      key: "doris",
      templateOptions: {
        label: "Doris",
        theme: "custom",
        labelProp: "Doris",
        valueProp: "id",
        options: [
          {type: 'image', label: "../../assets/doris1.jpg", id: 1},
          {type: 'image', label: "../../assets/doris2.jpg", id: 2},
          {type: 'image', label: "../../assets/doris3.jpg", id: 3}
        ]
      }
    },
    {
      type: "radio",
      key: "Just text",
      templateOptions: {
        label: "Just text",
        theme: "custom",
        labelProp: "Just text",
        valueProp: "id",
        options: [
          {label: "textik 1", id: 1},
          {label: "textik 2", id: 2},
          {label: "textik 3", id: 3}
        ]
      }
    }
  ];

  constructor() {}

  ngOnInit() {}

}
