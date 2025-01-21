import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo18Component } from './lib43-demo18.component';

describe('Lib43Demo18Component', () => {
  let component: Lib43Demo18Component;
  let fixture: ComponentFixture<Lib43Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
