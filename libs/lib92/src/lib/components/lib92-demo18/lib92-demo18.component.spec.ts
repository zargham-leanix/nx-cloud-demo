import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo18Component } from './lib92-demo18.component';

describe('Lib92Demo18Component', () => {
  let component: Lib92Demo18Component;
  let fixture: ComponentFixture<Lib92Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
