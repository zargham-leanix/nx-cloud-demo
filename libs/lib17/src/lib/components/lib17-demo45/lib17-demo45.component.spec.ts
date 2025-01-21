import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo45Component } from './lib17-demo45.component';

describe('Lib17Demo45Component', () => {
  let component: Lib17Demo45Component;
  let fixture: ComponentFixture<Lib17Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
