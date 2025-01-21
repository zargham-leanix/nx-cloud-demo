import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo5Component } from './lib71-demo5.component';

describe('Lib71Demo5Component', () => {
  let component: Lib71Demo5Component;
  let fixture: ComponentFixture<Lib71Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
