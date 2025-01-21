import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo1Component } from './lib6-demo1.component';

describe('Lib6Demo1Component', () => {
  let component: Lib6Demo1Component;
  let fixture: ComponentFixture<Lib6Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
