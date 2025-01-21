import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo18Component } from './lib19-demo18.component';

describe('Lib19Demo18Component', () => {
  let component: Lib19Demo18Component;
  let fixture: ComponentFixture<Lib19Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
