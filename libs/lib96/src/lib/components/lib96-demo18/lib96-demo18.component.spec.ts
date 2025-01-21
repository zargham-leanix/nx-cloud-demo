import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo18Component } from './lib96-demo18.component';

describe('Lib96Demo18Component', () => {
  let component: Lib96Demo18Component;
  let fixture: ComponentFixture<Lib96Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
