import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo5Component } from './lib59-demo5.component';

describe('Lib59Demo5Component', () => {
  let component: Lib59Demo5Component;
  let fixture: ComponentFixture<Lib59Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
