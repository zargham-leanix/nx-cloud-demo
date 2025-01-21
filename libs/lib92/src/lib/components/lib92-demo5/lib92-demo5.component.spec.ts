import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo5Component } from './lib92-demo5.component';

describe('Lib92Demo5Component', () => {
  let component: Lib92Demo5Component;
  let fixture: ComponentFixture<Lib92Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
