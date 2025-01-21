import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo5Component } from './lib78-demo5.component';

describe('Lib78Demo5Component', () => {
  let component: Lib78Demo5Component;
  let fixture: ComponentFixture<Lib78Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
