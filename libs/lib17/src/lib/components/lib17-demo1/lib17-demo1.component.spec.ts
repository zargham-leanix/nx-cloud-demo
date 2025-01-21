import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo1Component } from './lib17-demo1.component';

describe('Lib17Demo1Component', () => {
  let component: Lib17Demo1Component;
  let fixture: ComponentFixture<Lib17Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
