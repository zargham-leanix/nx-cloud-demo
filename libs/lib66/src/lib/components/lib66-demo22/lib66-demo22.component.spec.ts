import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo22Component } from './lib66-demo22.component';

describe('Lib66Demo22Component', () => {
  let component: Lib66Demo22Component;
  let fixture: ComponentFixture<Lib66Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
