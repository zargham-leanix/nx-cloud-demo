import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo16Component } from './lib31-demo16.component';

describe('Lib31Demo16Component', () => {
  let component: Lib31Demo16Component;
  let fixture: ComponentFixture<Lib31Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
