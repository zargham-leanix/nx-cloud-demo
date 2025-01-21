import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo18Component } from './lib79-demo18.component';

describe('Lib79Demo18Component', () => {
  let component: Lib79Demo18Component;
  let fixture: ComponentFixture<Lib79Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
