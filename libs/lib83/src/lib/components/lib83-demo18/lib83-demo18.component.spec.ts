import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo18Component } from './lib83-demo18.component';

describe('Lib83Demo18Component', () => {
  let component: Lib83Demo18Component;
  let fixture: ComponentFixture<Lib83Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
