import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  listOfStrings: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse in est ante. Et malesuada fames ac turpis egestas maecenas pharetra. Elementum eu facilisis sed odio. Maecenas volutpat blandit aliquam etiam. Morbi tristique senectus et netus. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Mattis enim ut tellus elementum sagittis. Purus sit amet volutpat consequat mauris nunc congue. Sed arcu non odio euismod lacinia at quis. Scelerisque purus semper eget duis at.",
    "Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Elementum sagittis vitae et leo duis ut. Euismod lacinia at quis risus sed. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Urna nunc id cursus metus aliquam eleifend mi in nulla. Convallis posuere morbi leo urna molestie at. Faucibus ornare suspendisse sed nisi lacus sed viverra. At tellus at urna condimentum mattis pellentesque. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Fringilla est ullamcorper eget nulla facilisi. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Aliquam vestibulum morbi blandit cursus risus at. Nisl condimentum id venenatis a condimentum. Nisl purus in mollis nunc sed id semper risus in. Aliquam sem fringilla ut morbi tincidunt. Neque sodales ut etiam sit amet nisl purus. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.",
    "Enim praesent elementum facilisis leo vel fringilla est. Faucibus a pellentesque sit amet porttitor eget. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Ut consequat semper viverra nam libero justo laoreet sit amet. Nisl pretium fusce id velit ut tortor pretium viverra. Sed velit dignissim sodales ut eu sem integer vitae. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Habitant morbi tristique senectus et netus et malesuada fames ac. Congue mauris rhoncus aenean vel elit scelerisque mauris. Massa ultricies mi quis hendrerit dolor.",
    "Ullamcorper eget nulla facilisi etiam dignissim diam. Maecenas pharetra convallis posuere morbi leo urna. Sagittis id consectetur purus ut. Est pellentesque elit ullamcorper dignissim. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eu ultrices vitae auctor eu augue ut lectus arcu. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Nulla malesuada pellentesque elit eget gravida cum sociis. Leo vel fringilla est ullamcorper eget nulla facilisi. Cursus in hac habitasse platea.",
    "Nulla aliquet enim tortor at. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Morbi enim nunc faucibus a pellentesque sit. Sollicitudin nibh sit amet commodo nulla. Etiam non quam lacus suspendisse faucibus interdum posuere. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Molestie nunc non blandit massa. Vitae congue eu consequat ac felis donec. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Consequat id porta nibh venenatis cras sed felis. Nunc sed augue lacus viverra vitae congue eu consequat. Condimentum vitae sapien pellentesque habitant morbi. Ornare quam viverra orci sagittis. Euismod lacinia at quis risus sed. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu.",
  ];

  resultIndex: number = -1;
  selected: string = "selected border";
  constructor() { }

  ngOnInit(): void {
  }

  onClickItem(selectedIndex: number): void {
    if (selectedIndex == this.resultIndex) {
      this.resultIndex = -1;
    }
    else {
      this.resultIndex = selectedIndex;
    }
  }
}
