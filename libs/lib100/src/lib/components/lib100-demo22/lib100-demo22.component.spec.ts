import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo22Component } from './lib100-demo22.component';

describe('Lib100Demo22Component', () => {
  let component: Lib100Demo22Component;
  let fixture: ComponentFixture<Lib100Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
