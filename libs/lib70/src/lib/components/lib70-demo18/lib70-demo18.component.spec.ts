import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo18Component } from './lib70-demo18.component';

describe('Lib70Demo18Component', () => {
  let component: Lib70Demo18Component;
  let fixture: ComponentFixture<Lib70Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
