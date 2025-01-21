import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo5Component } from './lib28-demo5.component';

describe('Lib28Demo5Component', () => {
  let component: Lib28Demo5Component;
  let fixture: ComponentFixture<Lib28Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
