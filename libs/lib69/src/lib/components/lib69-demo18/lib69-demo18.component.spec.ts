import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo18Component } from './lib69-demo18.component';

describe('Lib69Demo18Component', () => {
  let component: Lib69Demo18Component;
  let fixture: ComponentFixture<Lib69Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
