import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo5Component } from './lib8-demo5.component';

describe('Lib8Demo5Component', () => {
  let component: Lib8Demo5Component;
  let fixture: ComponentFixture<Lib8Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
