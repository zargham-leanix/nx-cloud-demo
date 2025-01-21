import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo16Component } from './lib88-demo16.component';

describe('Lib88Demo16Component', () => {
  let component: Lib88Demo16Component;
  let fixture: ComponentFixture<Lib88Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
