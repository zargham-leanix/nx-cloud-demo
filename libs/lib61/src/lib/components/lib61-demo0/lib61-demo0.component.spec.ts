import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo0Component } from './lib61-demo0.component';

describe('Lib61Demo0Component', () => {
  let component: Lib61Demo0Component;
  let fixture: ComponentFixture<Lib61Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
