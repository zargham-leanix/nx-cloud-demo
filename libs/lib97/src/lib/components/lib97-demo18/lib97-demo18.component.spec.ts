import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo18Component } from './lib97-demo18.component';

describe('Lib97Demo18Component', () => {
  let component: Lib97Demo18Component;
  let fixture: ComponentFixture<Lib97Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
