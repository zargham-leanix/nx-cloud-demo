import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo18Component } from './lib17-demo18.component';

describe('Lib17Demo18Component', () => {
  let component: Lib17Demo18Component;
  let fixture: ComponentFixture<Lib17Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
