import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo36Component } from './lib17-demo36.component';

describe('Lib17Demo36Component', () => {
  let component: Lib17Demo36Component;
  let fixture: ComponentFixture<Lib17Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
