import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo22Component } from './lib58-demo22.component';

describe('Lib58Demo22Component', () => {
  let component: Lib58Demo22Component;
  let fixture: ComponentFixture<Lib58Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
