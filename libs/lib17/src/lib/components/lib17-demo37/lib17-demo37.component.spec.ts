import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo37Component } from './lib17-demo37.component';

describe('Lib17Demo37Component', () => {
  let component: Lib17Demo37Component;
  let fixture: ComponentFixture<Lib17Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
