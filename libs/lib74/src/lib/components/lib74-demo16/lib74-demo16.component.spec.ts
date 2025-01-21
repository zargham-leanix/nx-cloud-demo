import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo16Component } from './lib74-demo16.component';

describe('Lib74Demo16Component', () => {
  let component: Lib74Demo16Component;
  let fixture: ComponentFixture<Lib74Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
