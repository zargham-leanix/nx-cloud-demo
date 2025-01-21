import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo5Component } from './lib24-demo5.component';

describe('Lib24Demo5Component', () => {
  let component: Lib24Demo5Component;
  let fixture: ComponentFixture<Lib24Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
