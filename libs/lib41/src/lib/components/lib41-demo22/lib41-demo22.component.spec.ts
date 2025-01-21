import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo22Component } from './lib41-demo22.component';

describe('Lib41Demo22Component', () => {
  let component: Lib41Demo22Component;
  let fixture: ComponentFixture<Lib41Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
