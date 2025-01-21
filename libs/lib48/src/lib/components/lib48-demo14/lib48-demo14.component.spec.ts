import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo14Component } from './lib48-demo14.component';

describe('Lib48Demo14Component', () => {
  let component: Lib48Demo14Component;
  let fixture: ComponentFixture<Lib48Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
