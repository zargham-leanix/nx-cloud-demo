import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo18Component } from './lib7-demo18.component';

describe('Lib7Demo18Component', () => {
  let component: Lib7Demo18Component;
  let fixture: ComponentFixture<Lib7Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
