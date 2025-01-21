import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo5Component } from './lib53-demo5.component';

describe('Lib53Demo5Component', () => {
  let component: Lib53Demo5Component;
  let fixture: ComponentFixture<Lib53Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
