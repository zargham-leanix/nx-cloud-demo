import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo18Component } from './lib2-demo18.component';

describe('Lib2Demo18Component', () => {
  let component: Lib2Demo18Component;
  let fixture: ComponentFixture<Lib2Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
