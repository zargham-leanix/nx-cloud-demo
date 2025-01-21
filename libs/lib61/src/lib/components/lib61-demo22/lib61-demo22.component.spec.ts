import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo22Component } from './lib61-demo22.component';

describe('Lib61Demo22Component', () => {
  let component: Lib61Demo22Component;
  let fixture: ComponentFixture<Lib61Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
