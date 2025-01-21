import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo18Component } from './lib51-demo18.component';

describe('Lib51Demo18Component', () => {
  let component: Lib51Demo18Component;
  let fixture: ComponentFixture<Lib51Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
