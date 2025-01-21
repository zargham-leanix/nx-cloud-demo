import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo33Component } from './lib17-demo33.component';

describe('Lib17Demo33Component', () => {
  let component: Lib17Demo33Component;
  let fixture: ComponentFixture<Lib17Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
