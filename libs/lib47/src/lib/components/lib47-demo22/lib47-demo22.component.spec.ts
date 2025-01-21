import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo22Component } from './lib47-demo22.component';

describe('Lib47Demo22Component', () => {
  let component: Lib47Demo22Component;
  let fixture: ComponentFixture<Lib47Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
