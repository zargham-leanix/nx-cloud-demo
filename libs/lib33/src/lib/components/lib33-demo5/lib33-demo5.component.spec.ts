import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo5Component } from './lib33-demo5.component';

describe('Lib33Demo5Component', () => {
  let component: Lib33Demo5Component;
  let fixture: ComponentFixture<Lib33Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
