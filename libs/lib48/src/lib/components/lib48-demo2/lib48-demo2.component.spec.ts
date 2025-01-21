import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo2Component } from './lib48-demo2.component';

describe('Lib48Demo2Component', () => {
  let component: Lib48Demo2Component;
  let fixture: ComponentFixture<Lib48Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
