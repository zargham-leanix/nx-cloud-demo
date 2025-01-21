import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo0Component } from './lib34-demo0.component';

describe('Lib34Demo0Component', () => {
  let component: Lib34Demo0Component;
  let fixture: ComponentFixture<Lib34Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
