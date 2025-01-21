import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo5Component } from './lib91-demo5.component';

describe('Lib91Demo5Component', () => {
  let component: Lib91Demo5Component;
  let fixture: ComponentFixture<Lib91Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
