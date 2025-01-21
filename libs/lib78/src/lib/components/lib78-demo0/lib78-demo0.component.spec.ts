import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo0Component } from './lib78-demo0.component';

describe('Lib78Demo0Component', () => {
  let component: Lib78Demo0Component;
  let fixture: ComponentFixture<Lib78Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
