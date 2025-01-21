import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo18Component } from './lib3-demo18.component';

describe('Lib3Demo18Component', () => {
  let component: Lib3Demo18Component;
  let fixture: ComponentFixture<Lib3Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
