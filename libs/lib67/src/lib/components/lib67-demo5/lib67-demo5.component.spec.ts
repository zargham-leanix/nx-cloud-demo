import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo5Component } from './lib67-demo5.component';

describe('Lib67Demo5Component', () => {
  let component: Lib67Demo5Component;
  let fixture: ComponentFixture<Lib67Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
