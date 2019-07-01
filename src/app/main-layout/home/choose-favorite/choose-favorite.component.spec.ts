import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFavoriteComponent } from './choose-favorite.component';

describe('ChooseFavoriteComponent', () => {
  let component: ChooseFavoriteComponent;
  let fixture: ComponentFixture<ChooseFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
