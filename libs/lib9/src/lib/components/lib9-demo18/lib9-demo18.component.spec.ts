import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo18Component } from './lib9-demo18.component';

describe('Lib9Demo18Component', () => {
  let component: Lib9Demo18Component;
  let fixture: ComponentFixture<Lib9Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
