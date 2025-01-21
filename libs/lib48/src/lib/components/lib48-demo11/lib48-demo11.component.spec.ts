import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo11Component } from './lib48-demo11.component';

describe('Lib48Demo11Component', () => {
  let component: Lib48Demo11Component;
  let fixture: ComponentFixture<Lib48Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
