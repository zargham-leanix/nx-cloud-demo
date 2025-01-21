import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo0Component } from './lib97-demo0.component';

describe('Lib97Demo0Component', () => {
  let component: Lib97Demo0Component;
  let fixture: ComponentFixture<Lib97Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
