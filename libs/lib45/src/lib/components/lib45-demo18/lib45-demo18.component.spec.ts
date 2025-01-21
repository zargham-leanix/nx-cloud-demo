import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo18Component } from './lib45-demo18.component';

describe('Lib45Demo18Component', () => {
  let component: Lib45Demo18Component;
  let fixture: ComponentFixture<Lib45Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
