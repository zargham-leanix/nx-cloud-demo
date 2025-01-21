import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo27Component } from './lib17-demo27.component';

describe('Lib17Demo27Component', () => {
  let component: Lib17Demo27Component;
  let fixture: ComponentFixture<Lib17Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
