import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo22Component } from './lib99-demo22.component';

describe('Lib99Demo22Component', () => {
  let component: Lib99Demo22Component;
  let fixture: ComponentFixture<Lib99Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
