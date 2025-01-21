import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo5Component } from './lib56-demo5.component';

describe('Lib56Demo5Component', () => {
  let component: Lib56Demo5Component;
  let fixture: ComponentFixture<Lib56Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
