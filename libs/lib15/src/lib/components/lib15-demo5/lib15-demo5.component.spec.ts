import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo5Component } from './lib15-demo5.component';

describe('Lib15Demo5Component', () => {
  let component: Lib15Demo5Component;
  let fixture: ComponentFixture<Lib15Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
