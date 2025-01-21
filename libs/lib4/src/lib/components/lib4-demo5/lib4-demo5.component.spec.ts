import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo5Component } from './lib4-demo5.component';

describe('Lib4Demo5Component', () => {
  let component: Lib4Demo5Component;
  let fixture: ComponentFixture<Lib4Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
