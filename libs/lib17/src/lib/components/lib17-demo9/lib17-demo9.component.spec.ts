import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo9Component } from './lib17-demo9.component';

describe('Lib17Demo9Component', () => {
  let component: Lib17Demo9Component;
  let fixture: ComponentFixture<Lib17Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
