import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo0Component } from './lib6-demo0.component';

describe('Lib6Demo0Component', () => {
  let component: Lib6Demo0Component;
  let fixture: ComponentFixture<Lib6Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
