import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo18Component } from './lib13-demo18.component';

describe('Lib13Demo18Component', () => {
  let component: Lib13Demo18Component;
  let fixture: ComponentFixture<Lib13Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
