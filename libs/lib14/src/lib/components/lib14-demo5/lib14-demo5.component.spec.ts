import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo5Component } from './lib14-demo5.component';

describe('Lib14Demo5Component', () => {
  let component: Lib14Demo5Component;
  let fixture: ComponentFixture<Lib14Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
