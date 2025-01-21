import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo38Component } from './lib17-demo38.component';

describe('Lib17Demo38Component', () => {
  let component: Lib17Demo38Component;
  let fixture: ComponentFixture<Lib17Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
