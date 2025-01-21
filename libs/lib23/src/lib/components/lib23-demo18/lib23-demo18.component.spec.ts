import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo18Component } from './lib23-demo18.component';

describe('Lib23Demo18Component', () => {
  let component: Lib23Demo18Component;
  let fixture: ComponentFixture<Lib23Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
