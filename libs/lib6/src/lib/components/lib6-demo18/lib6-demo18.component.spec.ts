import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo18Component } from './lib6-demo18.component';

describe('Lib6Demo18Component', () => {
  let component: Lib6Demo18Component;
  let fixture: ComponentFixture<Lib6Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
