import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo0Component } from './lib31-demo0.component';

describe('Lib31Demo0Component', () => {
  let component: Lib31Demo0Component;
  let fixture: ComponentFixture<Lib31Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
